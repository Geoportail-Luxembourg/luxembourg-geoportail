import {
  css,
  CSSResult,
  html,
  LitElement,
  TemplateResult,
  unsafeCSS,
} from 'lit'
import { Subscription } from 'rxjs'
import { customElement, state } from 'lit/decorators'
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
import { OgcClientWmsEndpoint } from './remote-layers.model'

import '../../../common/modal.component'
import '../../../common/dropdown.component'

import cssFa from 'bundle-text:@fortawesome/fontawesome-free/css/all.min.css'
import cssGlobal from 'bundle-text:./../../../../styles/tailwind.global.css'

@customElement('lux-remote-layers')
export class RemoteLayer extends LitElement {
  @state() private wmsLayers: DropdownOptionModel[]
  @state() private layerTree: LayerTreeNodeModel | undefined
  @state() private isLoading = false
  private subscription = new Subscription()
  private inputWmsUrl: string
  private currentWmsUrl: string
  private currentWmsEndpoint: OgcClientWmsEndpoint

  static globalStyle: CSSResult = css`
    ${unsafeCSS(cssGlobal)}
  `

  static faStyle: CSSResult = css`
    ${unsafeCSS(cssFa)}
  `

  static styles: CSSResult[] = [RemoteLayer.globalStyle, RemoteLayer.faStyle]

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
    this.isLoading = true

    try {
      const wmsEndpoint = remoteLayersService.getWmsEndpoint(url)

      await wmsEndpoint.isReady()

      this.currentWmsEndpoint = wmsEndpoint
      this.currentWmsUrl = url
    } catch (e) {
      alert(i18next.t('Impossible de contacter ce WMS', { ns: 'client' }))
    }

    this.isLoading = false
  }

  public async getWmsLayers() {
    const wmsEndpoint = this.currentWmsEndpoint
    const remoteLayers = wmsEndpoint?.getLayers()

    if (remoteLayers && remoteLayers[0]) {
      this.layerTree = remoteLayersToLayerTreeMapper(
        remoteLayers[0],
        this.currentWmsUrl
      )
    }
  }

  public async onChangeWmsEndpoint(event: CustomEvent) {
    this.currentWmsUrl = this.inputWmsUrl = event.detail.value
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
      const remoteLayer = wmsEndpoint?.getLayerByName(name)

      if (remoteLayer) {
        mapState.addLayer(
          remoteLayerToLayer({
            id,
            url: remoteLayersService.getProxyfiedUrl(this.currentWmsUrl),
            remoteLayer,
          })
        )
      }
    }
  }

  render(): TemplateResult {
    return html`
      <lux-modal>
        <h4 slot="lux-modal-header">
          ${i18next.t('Add external data', { ns: 'client' })}
        </h4>

        <div class="p-[15px]" slot="lux-modal-body">
          <div class="relative text-center">
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
            <button
              type="button"
              class="lux-btn"
              @click=${this.onClickGetLayers}
            >
              ${i18next.t('Get the layers', { ns: 'client' })}
            </button>
          </div>

          ${!this.isLoading && this.currentWmsEndpoint
            ? html` <div class="text-center">
                  <span class="lux-label"
                    >${i18next.t('Description du service :', {
                      ns: 'client',
                    })}</span
                  >
                  ${this.currentWmsEndpoint.getServiceInfo()?.abstract}
                </div>
                <div class="text-center">
                  <span class="lux-label"
                    >${i18next.t('Access constraints :', {
                      ns: 'client',
                    })}</span
                  >
                  ${this.currentWmsEndpoint.getServiceInfo()?.constraints}
                </div>`
            : null}
          ${this.isLoading
            ? html`
                <div class="text-center">
                  <div class="fa fa-refresh fa-spin"></div>
                  <span translate
                    >${i18next.t('Chargement des informations', {
                      ns: 'client',
                    })}</span
                  >
                </div>
              `
            : null}
          ${!this.isLoading
            ? html`
                <div class="overflow-auto max-h-[calc(400px-36px)]">
                  <lux-layer-tree-node
                    class="block p-[10px] mb-[11px]"
                    .node="${this.layerTree}"
                    @parent-toggle="${this.toggleParent}"
                    @layer-toggle="${this.toggleLayer}"
                  ></lux-layer-tree-node>
                </div>
              `
            : null}
        </div>
      </lux-modal>
    `
  }

  override createRenderRoot() {
    return this
  }
}
