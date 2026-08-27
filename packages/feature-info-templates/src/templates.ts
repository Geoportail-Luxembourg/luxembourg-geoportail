import type { Component } from 'vue'

import AdresseTemplate from './components/templates/adresse-template.vue'
import AeroTemplate from './components/templates/aero-template.vue'
import AffairesTemplate from './components/templates/affaires-template.vue'
import AstaTemplate from './components/templates/asta-template.vue'
import AutomaticSolsTemplate from './components/templates/automatic-sols-template.vue'
import BatimentsTemplate from './components/templates/batiments-template.vue'
import BusTemplate from './components/templates/bus-template.vue'
import BusWoTitleTemplate from './components/templates/bus-wo-title-template.vue'
import CasipoTemplate from './components/templates/casipo-template.vue'
import DefaultAttachmentNoPrefixTemplate from './components/templates/default-attachment-no-prefix-template.vue'
import DefaultAttachmentTemplate from './components/templates/default-attachment-template.vue'
import DefaultTableNoPrefixTemplate from './components/templates/default-table-no-prefix-template.vue'
import DefaultTableTemplate from './components/templates/default-table-template.vue'
import DefaultTemplate from './components/templates/default-template.vue'
import FlikTemplate from './components/templates/flik-template.vue'
import ForageVirtuelTemplate from './components/templates/forage-virtuel-template.vue'
import LignesBusTemplate from './components/templates/lignes-bus-template.vue'
import MeteoTemplate from './components/templates/meteo-template.vue'
import MeteoluxEuropeTemplate from './components/templates/meteolux-europe-template.vue'
import MeteoluxGrTemplate from './components/templates/meteolux-gr-template.vue'
import MoTemplate from './components/templates/mo-template.vue'
import MymapsTemplate from './components/templates/mymaps-template.vue'
import Ng95NewTemplate from './components/templates/ng95-new-template.vue'
import Ng95Template from './components/templates/ng95-template.vue'
import NpOurPoiTemplate from './components/templates/npour-poi-template.vue'
import NpOurWoAddressPoiTemplate from './components/templates/npour-wo-address-poi-template.vue'
import PagStagingTemplate from './components/templates/pag-staging-template.vue'
import PagTemplate from './components/templates/pag-template.vue'
import ParcelsTemplate from './components/templates/parcels-template.vue'
import PcnPagTemplate from './components/templates/pcn-pag-template.vue'
import PdsTemplate from './components/templates/pds-template.vue'
import PegelTemplate from './components/templates/pegel-template.vue'
import RemembrementsTemplate from './components/templates/remembrements-template.vue'
import SentierNatureTemplate from './components/templates/sentier-nature-template.vue'
import UrplangTemplate from './components/templates/urplang-template.vue'
import VitiFlikTemplate from './components/templates/viti-flik.vue'
import VitiKleinlageTemplate from './components/templates/viti-kleinlage.vue'
import VitiNameTemplate from './components/templates/viti-name.vue'
import VitiParcelsTemplate from './components/templates/viti-parcels.vue'

export {
  AdresseTemplate,
  AeroTemplate,
  AffairesTemplate,
  AstaTemplate,
  AutomaticSolsTemplate,
  BatimentsTemplate,
  BusTemplate,
  BusWoTitleTemplate,
  CasipoTemplate,
  DefaultAttachmentNoPrefixTemplate,
  DefaultAttachmentTemplate,
  DefaultTableNoPrefixTemplate,
  DefaultTableTemplate,
  DefaultTemplate,
  FlikTemplate,
  ForageVirtuelTemplate,
  LignesBusTemplate,
  MeteoTemplate,
  MeteoluxEuropeTemplate,
  MeteoluxGrTemplate,
  MoTemplate,
  MymapsTemplate,
  Ng95NewTemplate,
  Ng95Template,
  NpOurPoiTemplate,
  NpOurWoAddressPoiTemplate,
  PagStagingTemplate,
  PagTemplate,
  ParcelsTemplate,
  PcnPagTemplate,
  PdsTemplate,
  PegelTemplate,
  RemembrementsTemplate,
  SentierNatureTemplate,
  UrplangTemplate,
  VitiFlikTemplate,
  VitiKleinlageTemplate,
  VitiNameTemplate,
  VitiParcelsTemplate,
}

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
export const luxTplTemplates: Record<string, Component> = {
  'adresse.html': AdresseTemplate,
  'aero.html': AeroTemplate,
  'affaires.html': AffairesTemplate,
  'asta_esp.html': AstaTemplate,
  'automatic_sols.html': AutomaticSolsTemplate,
  'batiments.html': BatimentsTemplate,
  'bus_wo_title.html': BusWoTitleTemplate,
  'bus.html': BusTemplate,
  'casipo.html': CasipoTemplate,
  'default.html': DefaultTemplate,
  'default_attachment.html': DefaultAttachmentTemplate,
  'default_attachment_no_prefix.html': DefaultAttachmentNoPrefixTemplate,
  'default_table.html': DefaultTableTemplate,
  'default_table_no_prefix.html': DefaultTableNoPrefixTemplate,
  'flik.html': FlikTemplate,
  'forage_virtuel.html': ForageVirtuelTemplate,
  'lignes_bus.html': LignesBusTemplate,
  'meteo.html': MeteoTemplate,
  'meteolux_europe.html': MeteoluxEuropeTemplate,
  'meteolux_gr.html': MeteoluxGrTemplate,
  'mymaps.html': MymapsTemplate,
  'mo.html': MoTemplate,
  'ng95.html': Ng95Template,
  'ng95_new.html': Ng95NewTemplate,
  'npour_poi.html': NpOurPoiTemplate,
  'npour_poi_wo_address.html': NpOurWoAddressPoiTemplate,
  'parcels.html': ParcelsTemplate,
  'parcels_prof.html': ParcelsTemplate,
  'parcels_go.html': ParcelsTemplate,
  'pcn_pag.html': PcnPagTemplate,
  'pag.html': PagTemplate,
  'pag_staging.html': PagStagingTemplate,
  'pds.html': PdsTemplate,
  'pegel.html': PegelTemplate,
  'remembrements.html': RemembrementsTemplate,
  'sentier_nature.html': SentierNatureTemplate,
  'urplang.html': UrplangTemplate,
  'viti_flik.html': VitiFlikTemplate,
  'viti_kleinlage.html': VitiKleinlageTemplate,
  'viti_name.html': VitiNameTemplate,
  'viti_parcels.html': VitiParcelsTemplate,
}

/**
 * Resolve the component for a backend `template` filename, falling back to the
 * default template for anything unknown (which is how the backend signals
 * "render generically").
 */
export function getTemplateComponent(template: string): Component {
  return luxTplTemplates[template] ?? DefaultTemplate
}
