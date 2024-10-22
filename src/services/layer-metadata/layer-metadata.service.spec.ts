const findById = vi.fn(id => (id === 268 ? themeNodeMock : undefined))
const findBgLayerById = vi.fn(id => (id === 556 ? bgNodeMock : undefined))
const find3dLayerById = vi.fn(id => (id === 333 ? ol3dNodeMock : undefined))

const useThemesMock = {
  findById,
  findBgLayerById,
  find3dLayerById,
  findAnyLayerById: vi.fn(
    id => findById(id) || findBgLayerById(id) || find3dLayerById(id)
  ),
}

vi.mock('@/composables/themes/themes.composable', () => ({
  default: () => useThemesMock,
}))

import { ThemeNodeModel } from '@/composables/themes/themes.model'
import { layerMetadataService } from './layer-metadata.service'
import { remoteMetadataHelper } from './remote-metadata.helper'

const themeNodeMock: ThemeNodeModel = {
  id: 268,
  name: 'districts_labels',
  metadata: {
    is_queryable: true,
    metadata_id: 'c42842e2-834a-427a-99f6-eb8cb79d1db4',
    legend_name: 'districts',
  },
  dimensions: {},
  type: 'WMS',
  layers: 'districts_labels',
  imageType: 'image/png',
  style: 'default',
  childLayers: [
    {
      name: 'districts_labels__DISTRICTS_LABELS',
    },
  ],
}

const ol3dNodeMock: ThemeNodeModel = {
  id: 333,
  name: '3d buildings',
  metadata: {
    attribution: 'bla',
    metadata_id: 'a1fea2a0e',
  },
}

const bgNodeMock: ThemeNodeModel = {
  id: 556,
  name: 'basemap_2015_global',
  metadata: {
    attribution:
      '&copy; <a href="https://www.mapzen.com/rights">CARTO</a>  &copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors for data outside of Luxembourg',
    exclusion: '[31, 32]',
    legend_name: 'act:roadmap_vt',
    metadata_id: 'a1fea2a0-e0a0-4e5f-a61d-9b3c3a9426bd',
  },
  dimensions: {},
  type: 'BG WMTS',
  url: 'http://wmts.geoportail.lu/mapproxy_4_v3/wmts/1.0.0/WMTSCapabilities.xml',
  style: 'default',
  matrixSet: 'GLOBAL_WEBMERCATOR',
  layer: 'basemap_2015_global',
  imageType: 'image/png',
  previousOpacity: 1,
  opacity: 1,
}

const metadataMock = {
  title: 'Title that will be ignored on internal layer',
  description: '',
  keywords: [],
  accessConstraints: 'none',
  serviceDescription:
    'Toutes les données publiées à travers ce service sont licencées sous CC0 ou CC-BY selon la couche',
}
const legendMock = document.createElement('h4')
legendMock.textContent = 'The mocked legend'

describe('LayerMetadataService', () => {
  let spyLocalMetadata
  let spyLegendHtml
  beforeEach(() => {
    spyLocalMetadata = vi
      .spyOn(layerMetadataService, 'getLocalMetadata')
      .mockReturnValue(metadataMock)
    spyLegendHtml = vi
      .spyOn(layerMetadataService, 'getLegendHtml')
      .mockReturnValue(legendMock)
  })
  describe('#getLayerMetadata with internal layer', () => {
    let metadata
    beforeEach(async () => {
      metadata = await layerMetadataService.getLayerMetadata(268, 'fr')
    })
    it('should call getLocalMetadata and getLegendHtml', () => {
      expect(spyLocalMetadata).toHaveBeenCalledTimes(1)
      expect(spyLegendHtml).toHaveBeenCalledTimes(1)
    })
    it('should get correct metadata', () => {
      expect(metadata).toEqual({
        ...metadataMock,
        hasLegend: true,
        legendHtml: legendMock,
        title: 'districts_labels', // uses name from theme node
      })
    })
  })
  describe('#getLayerMetadata with background layer', () => {
    let metadata
    beforeEach(async () => {
      metadata = await layerMetadataService.getLayerMetadata(556, 'fr')
    })
    it('should call getLocalMetadata and getLegendHtml', () => {
      expect(spyLocalMetadata).toHaveBeenCalledTimes(1)
      expect(spyLegendHtml).toHaveBeenCalledTimes(1)
    })
    it('should get correct metadata', () => {
      expect(metadata).toEqual({
        ...metadataMock,
        hasLegend: true,
        legendHtml: legendMock,
        title: 'basemap_2015_global', // uses name from theme node
      })
    })
  })
  describe('#getLayerMetadata with WMS layer', () => {
    let spyRemoteMetadata
    let metadata
    beforeEach(async () => {
      spyRemoteMetadata = vi
        .spyOn(remoteMetadataHelper, 'getMetadata')
        .mockReturnValue(metadataMock)
      metadata = await layerMetadataService.getLayerMetadata(
        'WMS||http://wmts1.geoportail.lu/opendata/service||ortho_2001',
        'fr'
      )
    })
    it('should call get WMS metadata', () => {
      expect(spyRemoteMetadata).toHaveBeenCalledTimes(1)
    })
    it('should get correct metadata', () => {
      expect(metadata).toEqual(metadataMock)
    })
  })
  describe('#getLayerMetadata with WMTS layer', () => {
    let spyRemoteMetadata
    let metadata
    beforeEach(async () => {
      spyRemoteMetadata = vi
        .spyOn(remoteMetadataHelper, 'getMetadata')
        .mockReturnValue(metadataMock)
      metadata = await layerMetadataService.getLayerMetadata(
        'WMTS||http://wmts1.geoportail.lu/opendata/service||ortho_2001',
        'fr'
      )
    })
    it('should call get WMTS metadata', () => {
      expect(spyRemoteMetadata).toHaveBeenCalledTimes(1)
    })
    it('should get correct metadata', () => {
      expect(metadata).toEqual(metadataMock)
    })
  })
  describe('#getLayerMetadata with 3d layer', () => {
    let metadata
    beforeEach(async () => {
      metadata = await layerMetadataService.getLayerMetadata(333, 'fr')
    })
    it('should call get 3d metadata', () => {
      expect(spyLocalMetadata).toHaveBeenCalledTimes(1)
    })
    it('should get correct metadata', () => {
      expect(metadata).toEqual({
        title: '3d buildings',
        description: '',
        hasLegend: true,
        legendHtml: legendMock,
        keywords: [],
        accessConstraints: 'none',
        serviceDescription:
          'Toutes les données publiées à travers ce service sont licencées sous CC0 ou CC-BY selon la couche',
      })
    })
  })
})
