import { Component } from 'vue';
import { default as AdresseTemplate } from './components/templates/adresse-template.vue';
import { default as AeroTemplate } from './components/templates/aero-template.vue';
import { default as AffairesTemplate } from './components/templates/affaires-template.vue';
import { default as AstaTemplate } from './components/templates/asta-template.vue';
import { default as AutomaticSolsTemplate } from './components/templates/automatic-sols-template.vue';
import { default as BatimentsTemplate } from './components/templates/batiments-template.vue';
import { default as BusTemplate } from './components/templates/bus-template.vue';
import { default as BusWoTitleTemplate } from './components/templates/bus-wo-title-template.vue';
import { default as CasipoTemplate } from './components/templates/casipo-template.vue';
import { default as DefaultAttachmentNoPrefixTemplate } from './components/templates/default-attachment-no-prefix-template.vue';
import { default as DefaultAttachmentTemplate } from './components/templates/default-attachment-template.vue';
import { default as DefaultTableNoPrefixTemplate } from './components/templates/default-table-no-prefix-template.vue';
import { default as DefaultTableTemplate } from './components/templates/default-table-template.vue';
import { default as DefaultTemplate } from './components/templates/default-template.vue';
import { default as FlikTemplate } from './components/templates/flik-template.vue';
import { default as ForageVirtuelTemplate } from './components/templates/forage-virtuel-template.vue';
import { default as LignesBusTemplate } from './components/templates/lignes-bus-template.vue';
import { default as MeteoTemplate } from './components/templates/meteo-template.vue';
import { default as MeteoluxEuropeTemplate } from './components/templates/meteolux-europe-template.vue';
import { default as MeteoluxGrTemplate } from './components/templates/meteolux-gr-template.vue';
import { default as MoTemplate } from './components/templates/mo-template.vue';
import { default as MymapsTemplate } from './components/templates/mymaps-template.vue';
import { default as Ng95NewTemplate } from './components/templates/ng95-new-template.vue';
import { default as Ng95Template } from './components/templates/ng95-template.vue';
import { default as NpOurPoiTemplate } from './components/templates/npour-poi-template.vue';
import { default as NpOurWoAddressPoiTemplate } from './components/templates/npour-wo-address-poi-template.vue';
import { default as PagStagingTemplate } from './components/templates/pag-staging-template.vue';
import { default as PagTemplate } from './components/templates/pag-template.vue';
import { default as ParcelsTemplate } from './components/templates/parcels-template.vue';
import { default as PcnPagTemplate } from './components/templates/pcn-pag-template.vue';
import { default as PdsTemplate } from './components/templates/pds-template.vue';
import { default as PegelTemplate } from './components/templates/pegel-template.vue';
import { default as RemembrementsTemplate } from './components/templates/remembrements-template.vue';
import { default as SentierNatureTemplate } from './components/templates/sentier-nature-template.vue';
import { default as UrplangTemplate } from './components/templates/urplang-template.vue';
import { default as VitiFlikTemplate } from './components/templates/viti-flik.vue';
import { default as VitiKleinlageTemplate } from './components/templates/viti-kleinlage.vue';
import { default as VitiNameTemplate } from './components/templates/viti-name.vue';
import { default as VitiParcelsTemplate } from './components/templates/viti-parcels.vue';
export { AdresseTemplate, AeroTemplate, AffairesTemplate, AstaTemplate, AutomaticSolsTemplate, BatimentsTemplate, BusTemplate, BusWoTitleTemplate, CasipoTemplate, DefaultAttachmentNoPrefixTemplate, DefaultAttachmentTemplate, DefaultTableNoPrefixTemplate, DefaultTableTemplate, DefaultTemplate, FlikTemplate, ForageVirtuelTemplate, LignesBusTemplate, MeteoTemplate, MeteoluxEuropeTemplate, MeteoluxGrTemplate, MoTemplate, MymapsTemplate, Ng95NewTemplate, Ng95Template, NpOurPoiTemplate, NpOurWoAddressPoiTemplate, PagStagingTemplate, PagTemplate, ParcelsTemplate, PcnPagTemplate, PdsTemplate, PegelTemplate, RemembrementsTemplate, SentierNatureTemplate, UrplangTemplate, VitiFlikTemplate, VitiKleinlageTemplate, VitiNameTemplate, VitiParcelsTemplate, };
/**
 * Maps the `template` filename returned by the GetFeatureInfo backend onto the
 * component that renders it. Shared by every host so template selection cannot
 * drift between the 2D app and the 3D viewer.
 *
 * `poi.html` / `poi_eat.html` and the `viti-*` entries below the fold were
 * commented out in the geoportail dispatcher; `poi` and `poi_eat` remain
 * excluded here (the components exist but are not wired) — see "Open
 * decisions" in docs/plan-feature-info-templates.md.
 */
export declare const luxTplTemplates: Record<string, Component>;
/**
 * Resolve the component for a backend `template` filename, falling back to the
 * default template for anything unknown (which is how the backend signals
 * "render generically").
 */
export declare function getTemplateComponent(template: string): Component;
