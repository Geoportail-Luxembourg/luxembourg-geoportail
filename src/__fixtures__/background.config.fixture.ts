export const bgConfig = {
  bg_layers: [
    {
      // basemap_2015_global
      icon_id: 'route',
      style_id: 'roadmap',
      id: 556,
      is_default: true,
    },
    {
      // topo_bw_jpeg
      icon_id: 'topo',
      style_id: 'topomap',
      id: 529,
    },
    {
      // topogr_global
      icon_id: 'topo_bw',
      style_id: 'topomap_gray',
      id: 502,
    },
    {
      icon_id: 'ortho', // id for icon
      id: 530,
    },
    {
      icon_id: 'hybrid', // id for icon
      id: 501,
    },
    {
      icon_id: 'blank',
      id: 0,
    },
  ],
  bg_layers_defaultIdTourisme: 502,
  http_bg_server: 'wmts{1-2}',
  https_bg_server: 'wmts{3-4}',
  bg_wmts_server_path: 'mapproxy_4_v3/wmts/{Layer}',
  bg_wmts_tile_template: '{TileMatrixSet}/{TileMatrix}/{TileCol}/{TileRow}',
  bg_layer_projection: 'EPSG:3857',
  olcs_extent: [5.31, 49.38, 6.64, 50.21],
  olcs_extent_projection: 'EPSG:3857',
  bg_layer_resolutions: [
    156543.033928, 78271.516964, 39135.758482, 19567.879241, 9783.9396205,
    4891.96981025, 2445.98490513, 1222.99245256, 611.496226281, 305.748113141,
    152.87405657, 76.4370282852, 38.2185141426, 19.1092570713, 9.55462853565,
    4.77731426782, 2.38865713391, 1.19432856696, 0.597164283478, 0.298582141739,
    0.1492910708695, 0.07464553543475,
  ],
  bg_matrix_ids: [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
  ],
}
