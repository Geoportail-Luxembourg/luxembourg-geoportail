import { html, LitElement, TemplateResult } from 'lit'
import { Subscription } from 'rxjs'
import { customElement, state } from 'lit/decorators'
import '../../../common/dropdown.component'
import { DropdownOptionModel } from '../../../common/dropdown.model'
import { remoteLayersService } from './remote-layers.service'
import { LayerTreeNodeModel } from '../layer-tree/layer-tree.model'
import {
  remoteLayersToLayerTreeMapper,
  remoteLayerToLayer,
} from './remote-layers-mapper'
import { layerTreeState } from '../layer-tree/layer-tree.service'
import { mapState } from '../../../../state/map/map.state'
import i18next from 'i18next'
import './remote-layers-catalog'
import {
  OlClientWmsLayerSummary,
  RemoteLayerModel,
} from './remote-layers.model'

@customElement('lux-remote-layers')
export class RemoteLayer extends LitElement {
  @state() private wmsLayers: DropdownOptionModel[]
  @state() private layerTree: LayerTreeNodeModel | undefined
  private subscription = new Subscription()
  private currentWmsUrl: string
  private currentWmsEndpoint: Object

  constructor() {
    super()

    remoteLayersService.fetchRemoteWmsEndpoint().then(wmsLayers => {
      this.wmsLayers = wmsLayers.map(({ url, label }) => ({
        label,
        value: url,
      }))
    })

    this.subscription.add(
      mapState.map$.subscribe(mapContext => {
        this.layerTree = this.layerTree
          ? layerTreeState.updateLayers(
              this.layerTree as LayerTreeNodeModel,
              mapContext.layers
            )
          : void 0
      })
    )
  }

  public async onChangeWmsEndpoint(event: Event) {
    this.currentWmsUrl = (event.target as HTMLSelectElement).value

    const wmsEndpoint = (this.currentWmsEndpoint =
      await remoteLayersService.getWmsEndpoint(this.currentWmsUrl))
    const remoteLayers: OlClientWmsLayerSummary[] =
      (wmsEndpoint && (wmsEndpoint as any).getLayers()) || []

    remoteLayers[0] &&
      (this.layerTree = remoteLayersToLayerTreeMapper(
        remoteLayers[0],
        this.currentWmsUrl
      ))
  }

  private toggleParent(event: Event) {
    const node = (event as CustomEvent).detail

    this.layerTree = layerTreeState.toggleNode(
      node.id,
      this.layerTree as LayerTreeNodeModel,
      'expanded'
    )
  }

  private toggleLayer(event: Event) {
    const node = (event as CustomEvent).detail
    const { id, name } = node
    const wmsEndpoint = this.currentWmsEndpoint

    if (node.checked === true) {
      mapState.removeLayer(id)
    } else {
      const remoteLayer: RemoteLayerModel =
        wmsEndpoint && (wmsEndpoint as any).getLayerByName(name)

      remoteLayer &&
        mapState.addLayer(
          remoteLayerToLayer({
            id,
            url: remoteLayersService.getProxyfiedUrl(this.currentWmsUrl),
            remoteLayer,
          })
        )
    }
  }

  render(): TemplateResult {
    return html`
      <lux-dropdown
        .options="${this.wmsLayers}"
        .placeholder="${i18next.t('Predefined wms', { ns: 'client' })}"
        @change="${this.onChangeWmsEndpoint}"
      ></lux-dropdown>
      <lux-remote-layers-catalog
        class="absolute right-0 top-52 z-50"
        .layerTree="${this.layerTree}"
        @parent-toggle="${this.toggleParent}"
        @layer-toggle="${this.toggleLayer}"
      ></lux-remote-layers-catalog>
    `
  }

  override createRenderRoot() {
    return this
  }
}
