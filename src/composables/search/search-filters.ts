import { ref } from 'vue'
export const initialFilters = {
  layers: true,
  cms: true,
  address: false,
  parcels: false,
  localite: false,
  lieudit: false,
  commune: false,
  flik: false,
  hydro: false,
  biotopes: false,
  extent: false,
  activeLayers: true,
}

export const curFilters = ref(
  Object.assign(
    {},
    localStorage.getItem('searchFacets')
      ? JSON.parse(localStorage.getItem('searchFacets') as string)
      : initialFilters
  )
)

export const esLabels = {
  address: 'Adresses',
  parcels: 'Parcelles cadastrales',
  localite: 'Localités',
  lieudit: 'Lieux-dits',
  commune: 'Communes',
  flik: 'Éléments agricoles',
  hydro: 'Hydrographie',
  biotopes: 'Biotopes',
}

export const esMatch: Record<string, string[]> = {
    address: ['Adresse', 'nom_de_rue'],
    parcels: ['Parcelle'],
    localite: ['Localité'],
    lieudit: ['lieu_dit'],
    commune: ['Commune'],
    flik: ['FLIK','asta esp','FLIK_Provisoire'],
    hydro: ['hydro', 'hydro_km'],
    biotopes: ['biotope']
  }