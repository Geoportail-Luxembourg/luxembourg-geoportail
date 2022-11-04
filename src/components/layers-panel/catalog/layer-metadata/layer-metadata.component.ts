import i18next from 'i18next'
import { html, LitElement, TemplateResult } from 'lit'
import { customElement, property } from 'lit/decorators'
import { i18nMixin } from '../../../../mixins/i18n-lit-element'
import { LayerMetadataModel } from './layer-metadata.model'
import './layer-metadata-item.component'
@customElement('lux-layer-metadata')
export class LayerMetadata extends i18nMixin(LitElement) {
  @property({ type: Object }) private layerMetadata?: LayerMetadataModel

  render(): TemplateResult {
    const content = this.layerMetadata
      ? html`
          <div
            class="fixed right-8 top-96 z-[100] bg-white lux-modal w-[600px] p-3"
            role="dialog"
          >
            <div class="lux-modal-header flex flex-row justify-between">
              <h1>${i18next.t(`${this.layerMetadata.title}`)}</h1>
              <button @click="${this.closeMetadata}">X</button>
            </div>
            <div class="pt-3">
              <dl>
                <lux-layer-metadata-item
                  label=${i18next.t('Name')}
                  value=${this.layerMetadata.name}
                ></lux-layer-metadata-item>
                <lux-layer-metadata-item
                  label=${i18next.t('Description du Service')}
                  value=${this.layerMetadata.serviceDescription}
                ></lux-layer-metadata-item>
                <!--short_trusted_description || trusted_description-->
                <lux-layer-metadata-item
                  label=${i18next.t('Description')}
                  value=${this.layerMetadata.description}
                ></lux-layer-metadata-item>
                <lux-layer-metadata-item
                  label=${i18next.t("Contrainte d'utilisation")}
                  value=${this.layerMetadata.legalConstraints}
                ></lux-layer-metadata-item>
                <lux-layer-metadata-item
                  label=${i18next.t('Url vers la resource')}
                  value=${this.layerMetadata.link?.join(',')}
                ></lux-layer-metadata-item>
                <lux-layer-metadata-item
                  label=${i18next.t('Revision date')}
                  value=${this.layerMetadata.revisionDate}
                ></lux-layer-metadata-item>
                <lux-layer-metadata-item
                  label=${i18next.t('Keywords')}
                  value=${this.layerMetadata.keyword?.join(',')}
                ></lux-layer-metadata-item>
                <lux-layer-metadata-item
                  label=${i18next.t('Contact')}
                  value=${this.layerMetadata.responsibleParty?.join(',')}
                ></lux-layer-metadata-item>
                <!--{{content.geonetworkBaseUrl}}/fre/catalog.search#/metadata/{{content.uid}}-->
                <lux-layer-metadata-item
                  label=${i18next.t('Link to the metadata')}
                  value=${this.layerMetadata.metadataLink}
                ></lux-layer-metadata-item>
                <lux-layer-metadata-item
                  label=${i18next.t('The metadata is right now not available')}
                  value=${this.layerMetadata.isError}
                ></lux-layer-metadata-item>
                <lux-layer-metadata-item
                  label=${i18next.t('Legend')}
                  value=${this.layerMetadata.legendHtml}
                ></lux-layer-metadata-item>
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
