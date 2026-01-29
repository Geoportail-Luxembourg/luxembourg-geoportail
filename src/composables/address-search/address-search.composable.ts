import { ref } from 'vue'
import { fetchApi } from '@/services/api/api.service'

export interface AddressSearchResult {
  label: string
  layer_name: string
  coordinates?: [number, number]
  feature: any
}

export default function useAddressSearch() {
  const isSearching = ref(false)
  const searchResults = ref<AddressSearchResult[]>([])

  async function searchAddresses(
    query: string
  ): Promise<AddressSearchResult[]> {
    if (!query || query.length < 2) {
      searchResults.value = []
      return []
    }

    isSearching.value = true

    try {
      const params = {
        query: query,
        limit: 10,
        layer: 'Adresse,Parcelle,nom_de_rue,lieu_dit',
      }

      const response = await fetchApi(
        import.meta.env.VITE_V3_API_HOST + 'fulltextsearch',
        params,
        'GET'
      )
      const data = await response.json()

      const results: AddressSearchResult[] = []

      if (data.features && Array.isArray(data.features)) {
        data.features.forEach((feature: any) => {
          const label =
            feature.properties.label +
            (feature.properties.layer_name
              ? ` (${feature.properties.layer_name})`
              : '')

          // Extract coordinates from geometry
          let coordinates: [number, number] | undefined
          if (feature.geometry) {
            const geometry = feature.geometry
            if (geometry.type === 'Point' && geometry.coordinates) {
              coordinates = geometry.coordinates as [number, number]
            } else if (geometry.type === 'Polygon' && geometry.coordinates) {
              // For Polygon, take first point of first ring
              const coords = geometry.coordinates
              if (
                Array.isArray(coords) &&
                coords.length > 0 &&
                Array.isArray(coords[0]) &&
                coords[0].length > 0 &&
                Array.isArray(coords[0][0]) &&
                coords[0][0].length >= 2
              ) {
                coordinates = [coords[0][0][0], coords[0][0][1]]
              }
            } else if (geometry.type === 'LineString' && geometry.coordinates) {
              // For LineString, take first point
              const coords = geometry.coordinates
              if (
                Array.isArray(coords) &&
                coords.length > 0 &&
                Array.isArray(coords[0]) &&
                coords[0].length >= 2
              ) {
                coordinates = [coords[0][0], coords[0][1]]
              }
            }
          }

          results.push({
            label,
            layer_name: feature.properties.layer_name || '',
            coordinates,
            feature,
          })
        })
      }

      searchResults.value = results
      return results
    } catch (error) {
      // Swallow address search errors; consumers can react to empty results
      searchResults.value = []
      return []
    } finally {
      isSearching.value = false
    }
  }

  function clearSearch() {
    searchResults.value = []
  }

  return {
    searchAddresses,
    clearSearch,
    isSearching,
    searchResults,
  }
}
