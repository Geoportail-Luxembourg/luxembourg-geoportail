import { LayerTreeNodeModel } from '@/components/layer-tree/layer-tree.model'
import { ThemeNodeModel } from '@/composables/themes/themes.model'
import { wmsHelper } from '../common/wms.helper'
import { layerMetadataService } from './layer-metadata.service'

const internalLayerTreeNodeMock: LayerTreeNodeModel = {
  name: 'districts_labels',
  id: '268',
  depth: 3,
  checked: false,
  expanded: false,
}

const WMSLayerTreeNodeMock: LayerTreeNodeModel = {
  id: 'WMS||http://wmts1.geoportail.lu/opendata/service||ortho_2001',
  name: 'ortho_2001',
  depth: 2,
  checked: false,
  expanded: false,
}

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
const useThemesMock = {
  findById: vi.fn(id => (id === 268 ? themeNodeMock : undefined)),
}
vi.mock('@/composables/themes/themes.composable', () => ({
  default: () => useThemesMock,
}))

const metadataMock = {
  title: 'Some internal or external layer',
  description: '',
  keywords: [],
  accessConstraints: 'none',
  serviceDescription:
    'Toutes les données publiées à travers ce service sont licencées sous CC0 ou CC-BY selon la couche',
}

const legendMock = document.createElement('body')

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
    beforeEach(async () => {
      await layerMetadataService.getLayerMetadata(
        internalLayerTreeNodeMock,
        'fr'
      )
    })
    it('should call getLocalMetadata', () => {
      expect(spyLocalMetadata).toHaveBeenCalledTimes(1)
    })
    it('should call getLegendHtml', () => {
      expect(spyLegendHtml).toHaveBeenCalledTimes(1)
    })
  })
  describe('#getLayerMetadata with WMS layer', () => {
    let spyWMSMetadata
    beforeEach(async () => {
      spyWMSMetadata = vi
        .spyOn(wmsHelper, 'getMetadata')
        .mockReturnValue(metadataMock)
      await layerMetadataService.getLayerMetadata(WMSLayerTreeNodeMock, 'fr')
    })
    it('should call get WMS metadata', () => {
      expect(spyWMSMetadata).toHaveBeenCalledTimes(1)
    })
  })
})
