import i18next from 'i18next'
import { html, LitElement, TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators'
import { i18nMixin } from '../../../../mixins/i18n-lit-element'
import { LayerMetadataModel } from './layer-metadata.model'

@customElement('lux-layer-metadata')
export class LayerMetadata extends i18nMixin(LitElement) {
  @property({ type: Object }) private layerMetadata?: LayerMetadataModel

  render(): TemplateResult {
    const content = this.layerMetadata
      ? html`
          <div
            class="fixed right-8 top-96 z-50 bg-white lux-modal w-[600px] p-3"
            role="dialog"
          >
            <div class="lux-modal-header flex flex-row justify-between">
              <h1>${i18next.t(`${this.layerMetadata.title}`)}</h1>
              <button @click="${this.closeMetadata}">X</button>
            </div>
            <div class="pt-3">
              <dl>
                <dt>${i18next.t('Name')}</dt>
                <dd>${this.layerMetadata.name}</dd>
                <dt>${i18next.t('Description du Service')}</dt>
                <dd>${this.layerMetadata.serviceDescription}</dd>
                <!--WMS/WMTS-->
                <dt>${i18next.t('Description')}</dt>
                <dd>${this.layerMetadata.description}</dd>
                <!--short_trusted_description || trusted_description-->
                <dt>${i18next.t("Contrainte d'utilisation")}</dt>
                <dd>${this.layerMetadata.legalConstraints}</dd>
                <dt>${i18next.t('Url vers la resource')}</dt>
                <dd>${this.layerMetadata.link.join(',')}</dd>
                <dt>${i18next.t('Revision date')}</dt>
                <dd>${this.layerMetadata.revisionDate}</dd>
                <dt>${i18next.t('Keywords')}</dt>
                <dd>${this.layerMetadata.keyword.join(',')}</dd>
                <dt>${i18next.t('Contact')}</dt>
                <dd>${this.layerMetadata.responsibleParty.join(',')}</dd>
                <dt>${i18next.t('Link to the metadata')}</dt>
                <dd>${this.layerMetadata.metadataLink}</dd>
                <!--{{content.geonetworkBaseUrl}}/fre/catalog.search#/metadata/{{content.uid}}-->
                <dt>${i18next.t('The metadata is right now not available')}</dt>
                <dd>${this.layerMetadata.isError}</dd>
                <dt>${i18next.t('Legend')}</dt>
                <dd>${this.layerMetadata.legendHtml}</dd>
                <!--hasLegend-->
              </dl>
            </div>
          </div>
        `
      : html``
    return content
  }

  closeMetadata() {
    const event = new CustomEvent(`close-layer-metadata`)
    this.dispatchEvent(event)
  }

  override createRenderRoot() {
    return this
  }
}
