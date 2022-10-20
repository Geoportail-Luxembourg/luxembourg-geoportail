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
import {
  OlClientWmsEndpoint,
  OlClientWmsLayerSummary,
} from './remote-layers.model'

@customElement('lux-remote-layers')
export class RemoteLayer extends LitElement {
  @state() private wmsLayers: DropdownOptionModel[]
  @state() private layerTree: LayerTreeNodeModel | undefined
  private subscription = new Subscription()
  private inputWmsUrl: string
  private currentWmsUrl: string
  private currentWmsEndpoint: OlClientWmsEndpoint

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

  public async getWmsEndpoint(url: string) {
    try {
      const wmsEndpoint = remoteLayersService.getWmsEndpoint(url)

      await wmsEndpoint.isReady()

      this.currentWmsEndpoint = wmsEndpoint
      this.currentWmsUrl = url
    } catch (e) {
      alert(i18next.t('Impossible de contacter ce WMS', { ns: 'client' }))
    }
  }

  public async getWmsLayers() {
    try {
      const wmsEndpoint = this.currentWmsEndpoint
      const remoteLayers: OlClientWmsLayerSummary[] = wmsEndpoint.getLayers()

      remoteLayers[0] &&
        (this.layerTree = remoteLayersToLayerTreeMapper(
          remoteLayers[0],
          this.currentWmsUrl
        ))
    } catch (e) {
      alert(i18next.t('Impossible de contacter ce WMS', { ns: 'client' }))
    }
  }

  public async onChangeWmsEndpoint(event: Event) {
    this.currentWmsUrl = this.inputWmsUrl = (
      event.target as HTMLSelectElement
    ).value
    await this.getWmsEndpoint(this.currentWmsUrl)
    this.getWmsLayers()
  }

  public onChangeWmsUrl(event: Event) {
    this.inputWmsUrl = (event.target as HTMLSelectElement).value
  }

  public async onClickGetLayers() {
    await this.getWmsEndpoint(this.inputWmsUrl)
    this.getWmsLayers()
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
      const remoteLayer = wmsEndpoint && wmsEndpoint.getLayerByName(name)

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
      <div
        class="absolute right-0 top-52 z-50 bg-white lux-modal w-[600px] text-[#333]"
        role="dialog"
      >
        <div class="lux-modal-header">
          <h4>${i18next.t('Add external data', { ns: 'client' })}</h4>
        </div>

        <div class="p-[15px]">
          <div>
            <lux-dropdown
              .options=${this.wmsLayers}
              .placeholder=${i18next.t('Predefined wms', { ns: 'client' })}
              @change=${this.onChangeWmsEndpoint}
            ></lux-dropdown>
            <input
              class="lux-input w-[300px]"
              type="url"
              placeholder=${i18next.t('Choose or write a WMS url', {
                ns: 'client',
              })}
              .value=${this.currentWmsUrl || ''}
              @change=${this.onChangeWmsUrl}
            />
            <button class="lux-btn" @click=${this.onClickGetLayers}>
              ${i18next.t('Get the layers', { ns: 'client' })}
            </button>
          </div>

          ${this.currentWmsEndpoint
            ? html` <div class="text-center">
                  <span class="lux-label"
                    >${i18next.t('Description du service :', {
                      ns: 'client',
                    })}</span
                  >
                  ${this.currentWmsEndpoint.getServiceInfo()?.title}
                </div>
                <div class="text-center">
                  <span class="lux-label"
                    >${i18next.t('Access constraints :', {
                      ns: 'client',
                    })}</span
                  >
                  ${this.currentWmsEndpoint.getServiceInfo()?.constraints}
                </div>`
            : ''}

          <div class="overflow-auto max-h-[calc(400px-36px)]">
            <lux-layer-tree-node
              class="block p-[10px] mb-[11px]"
              .node="${this.layerTree}"
              @parent-toggle="${this.toggleParent}"
              @layer-toggle="${this.toggleLayer}"
            ></lux-layer-tree-node>
          </div>
          <div></div>
        </div>
      </div>
    `
  }

  override createRenderRoot() {
    return this
  }
}
