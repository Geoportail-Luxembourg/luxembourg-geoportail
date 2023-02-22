export const parsedServiceInfo = {
  type: 'WMTS',
  title: 'Service de visualisation WMTS Geoportail Publics',
  abstract:
    "Ce service permet la visualisation de couches de données raster IGN au travers d'un flux WMTS",
  fees: 'licences',
  constraints:
    "Conditions Générales d'Utilisation disponibles ici : https://geoservices.ign.fr/cgu-licences",
  serviceTypeVersion: '1.0.0',
}

export const parsedLayers = [
  {
    type: 'WMTS',
    children: [
      {
        type: 'WMTS',
        abstract:
          'Limites administratives des collectivités territoriales. Régions, départements, cantons, communes, arrondissements (pour Paris, Lyon et Marseille) et établissements publics de coopération intercommunale (EPCI).',
        format: ['application/x-protobuf'],
        name: 'ADMIN_EXPRESS',
        title: 'ADMIN_EXPRESS',
        tileMatrixSetLink: [
          {
            TileMatrixSet: 'PM',
            TileMatrixSetLimits: [
              {
                TileMatrix: '6',
                MinTileRow: 21,
                MaxTileRow: 35,
                MinTileCol: 20,
                MaxTileCol: 41,
              },
              {
                TileMatrix: '7',
                MinTileRow: 42,
                MaxTileRow: 71,
                MinTileCol: 41,
                MaxTileCol: 83,
              },
              {
                TileMatrix: '8',
                MinTileRow: 85,
                MaxTileRow: 143,
                MinTileCol: 83,
                MaxTileCol: 167,
              },
              {
                TileMatrix: '9',
                MinTileRow: 171,
                MaxTileRow: 287,
                MinTileCol: 166,
                MaxTileCol: 335,
              },
              {
                TileMatrix: '10',
                MinTileRow: 342,
                MaxTileRow: 574,
                MinTileCol: 332,
                MaxTileCol: 670,
              },
              {
                TileMatrix: '11',
                MinTileRow: 684,
                MaxTileRow: 1148,
                MinTileCol: 664,
                MaxTileCol: 1341,
              },
              {
                TileMatrix: '12',
                MinTileRow: 1369,
                MaxTileRow: 2297,
                MinTileCol: 1329,
                MaxTileCol: 2683,
              },
              {
                TileMatrix: '13',
                MinTileRow: 2738,
                MaxTileRow: 4594,
                MinTileCol: 2658,
                MaxTileCol: 5366,
              },
              {
                TileMatrix: '14',
                MinTileRow: 5477,
                MaxTileRow: 9189,
                MinTileCol: 5317,
                MaxTileCol: 10733,
              },
              {
                TileMatrix: '15',
                MinTileRow: 10955,
                MaxTileRow: 18378,
                MinTileCol: 10634,
                MaxTileCol: 21467,
              },
              {
                TileMatrix: '16',
                MinTileRow: 21911,
                MaxTileRow: 36757,
                MinTileCol: 21269,
                MaxTileCol: 42934,
              },
              {
                TileMatrix: '17',
                MinTileRow: 43822,
                MaxTileRow: 73515,
                MinTileCol: 42539,
                MaxTileCol: 85869,
              },
              {
                TileMatrix: '18',
                MinTileRow: 87645,
                MaxTileRow: 147030,
                MinTileCol: 85079,
                MaxTileCol: 171738,
              },
              {
                TileMatrix: '19',
                MinTileRow: 175290,
                MaxTileRow: 294060,
                MinTileCol: 170158,
                MaxTileCol: 343476,
              },
            ],
          },
        ],
        wgs84BoundingBox: [-6.50391, 40.9799, 9.84375, 51.2894],
      },
      {
        type: 'WMTS',
        abstract: 'Plan cadastral informatisé vecteur de la DGFIP.',
        format: ['image/png'],
        name: 'CADASTRALPARCELS.PARCELLAIRE_EXPRESS',
        title: 'PCI vecteur',
        tileMatrixSetLink: [
          {
            TileMatrixSet: 'PM',
            TileMatrixSetLimits: [
              {
                TileMatrix: '0',
                MinTileRow: 0,
                MaxTileRow: 0,
                MinTileCol: 0,
                MaxTileCol: 0,
              },
              {
                TileMatrix: '1',
                MinTileRow: 0,
                MaxTileRow: 1,
                MinTileCol: 0,
                MaxTileCol: 1,
              },
              {
                TileMatrix: '2',
                MinTileRow: 1,
                MaxTileRow: 2,
                MinTileCol: 1,
                MaxTileCol: 2,
              },
              {
                TileMatrix: '3',
                MinTileRow: 2,
                MaxTileRow: 4,
                MinTileCol: 2,
                MaxTileCol: 5,
              },
              {
                TileMatrix: '4',
                MinTileRow: 5,
                MaxTileRow: 8,
                MinTileCol: 5,
                MaxTileCol: 10,
              },
              {
                TileMatrix: '5',
                MinTileRow: 10,
                MaxTileRow: 17,
                MinTileCol: 10,
                MaxTileCol: 20,
              },
              {
                TileMatrix: '6',
                MinTileRow: 21,
                MaxTileRow: 35,
                MinTileCol: 20,
                MaxTileCol: 41,
              },
              {
                TileMatrix: '7',
                MinTileRow: 42,
                MaxTileRow: 71,
                MinTileCol: 41,
                MaxTileCol: 83,
              },
              {
                TileMatrix: '8',
                MinTileRow: 85,
                MaxTileRow: 143,
                MinTileCol: 82,
                MaxTileCol: 167,
              },
              {
                TileMatrix: '9',
                MinTileRow: 170,
                MaxTileRow: 287,
                MinTileCol: 165,
                MaxTileCol: 335,
              },
              {
                TileMatrix: '10',
                MinTileRow: 341,
                MaxTileRow: 574,
                MinTileCol: 331,
                MaxTileCol: 671,
              },
              {
                TileMatrix: '11',
                MinTileRow: 682,
                MaxTileRow: 1149,
                MinTileCol: 663,
                MaxTileCol: 1342,
              },
              {
                TileMatrix: '12',
                MinTileRow: 1365,
                MaxTileRow: 2298,
                MinTileCol: 1326,
                MaxTileCol: 2684,
              },
              {
                TileMatrix: '13',
                MinTileRow: 2731,
                MaxTileRow: 4596,
                MinTileCol: 2653,
                MaxTileCol: 5368,
              },
              {
                TileMatrix: '14',
                MinTileRow: 5462,
                MaxTileRow: 9193,
                MinTileCol: 5307,
                MaxTileCol: 10737,
              },
              {
                TileMatrix: '15',
                MinTileRow: 10924,
                MaxTileRow: 18386,
                MinTileCol: 10615,
                MaxTileCol: 21474,
              },
              {
                TileMatrix: '16',
                MinTileRow: 21849,
                MaxTileRow: 36772,
                MinTileCol: 21231,
                MaxTileCol: 42948,
              },
              {
                TileMatrix: '17',
                MinTileRow: 43698,
                MaxTileRow: 73544,
                MinTileCol: 42462,
                MaxTileCol: 85897,
              },
              {
                TileMatrix: '18',
                MinTileRow: 87397,
                MaxTileRow: 147089,
                MinTileCol: 84925,
                MaxTileCol: 171795,
              },
              {
                TileMatrix: '19',
                MinTileRow: 174795,
                MaxTileRow: 294179,
                MinTileCol: 169851,
                MaxTileCol: 343591,
              },
            ],
          },
        ],
        wgs84BoundingBox: [-63.3725, -21.4756, 55.9259, 51.3121],
      },
      {
        type: 'WMTS',
        abstract:
          'Cartographie multi-échelles sur le territoire national, issue des bases de données vecteur de l’IGN, mis à jour régulièrement et réalisée selon un processus entièrement automatisé.',
        format: ['image/png'],
        name: 'GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2',
        title: 'Plan IGN v2',
        tileMatrixSetLink: [
          {
            TileMatrixSet: 'PM',
            TileMatrixSetLimits: [
              {
                TileMatrix: '0',
                MinTileRow: 0,
                MaxTileRow: 1,
                MinTileCol: 0,
                MaxTileCol: 0,
              },
              {
                TileMatrix: '1',
                MinTileRow: 0,
                MaxTileRow: 2,
                MinTileCol: 0,
                MaxTileCol: 2,
              },
              {
                TileMatrix: '2',
                MinTileRow: 0,
                MaxTileRow: 4,
                MinTileCol: 0,
                MaxTileCol: 4,
              },
              {
                TileMatrix: '3',
                MinTileRow: 0,
                MaxTileRow: 8,
                MinTileCol: 0,
                MaxTileCol: 8,
              },
              {
                TileMatrix: '4',
                MinTileRow: 0,
                MaxTileRow: 16,
                MinTileCol: 0,
                MaxTileCol: 16,
              },
              {
                TileMatrix: '5',
                MinTileRow: 0,
                MaxTileRow: 32,
                MinTileCol: 0,
                MaxTileCol: 32,
              },
              {
                TileMatrix: '6',
                MinTileRow: 0,
                MaxTileRow: 64,
                MinTileCol: 0,
                MaxTileCol: 64,
              },
              {
                TileMatrix: '7',
                MinTileRow: 0,
                MaxTileRow: 128,
                MinTileCol: 0,
                MaxTileCol: 128,
              },
              {
                TileMatrix: '8',
                MinTileRow: 80,
                MaxTileRow: 144,
                MinTileCol: 80,
                MaxTileCol: 168,
              },
              {
                TileMatrix: '9',
                MinTileRow: 168,
                MaxTileRow: 288,
                MinTileCol: 160,
                MaxTileCol: 336,
              },
              {
                TileMatrix: '10',
                MinTileRow: 336,
                MaxTileRow: 576,
                MinTileCol: 328,
                MaxTileCol: 672,
              },
              {
                TileMatrix: '11',
                MinTileRow: 680,
                MaxTileRow: 1152,
                MinTileCol: 664,
                MaxTileCol: 1344,
              },
              {
                TileMatrix: '12',
                MinTileRow: 1368,
                MaxTileRow: 2304,
                MinTileCol: 1328,
                MaxTileCol: 2688,
              },
              {
                TileMatrix: '13',
                MinTileRow: 2736,
                MaxTileRow: 4600,
                MinTileCol: 2656,
                MaxTileCol: 5376,
              },
              {
                TileMatrix: '14',
                MinTileRow: 5472,
                MaxTileRow: 9200,
                MinTileCol: 5312,
                MaxTileCol: 10744,
              },
              {
                TileMatrix: '15',
                MinTileRow: 10952,
                MaxTileRow: 18392,
                MinTileCol: 10624,
                MaxTileCol: 21480,
              },
              {
                TileMatrix: '16',
                MinTileRow: 21904,
                MaxTileRow: 36784,
                MinTileCol: 21248,
                MaxTileCol: 42952,
              },
              {
                TileMatrix: '17',
                MinTileRow: 43816,
                MaxTileRow: 73568,
                MinTileCol: 42496,
                MaxTileCol: 85904,
              },
              {
                TileMatrix: '18',
                MinTileRow: 87640,
                MaxTileRow: 147128,
                MinTileCol: 85000,
                MaxTileCol: 171808,
              },
              {
                TileMatrix: '19',
                MinTileRow: 175288,
                MaxTileRow: 294248,
                MinTileCol: 170008,
                MaxTileCol: 343616,
              },
            ],
          },
        ],
        wgs84BoundingBox: [-175, -85, 175, 85],
      },
      {
        type: 'WMTS',
        abstract: 'Photographies aériennes',
        format: ['image/jpeg'],
        name: 'ORTHOIMAGERY.ORTHOPHOTOS',
        title: 'Photographies aériennes',
        tileMatrixSetLink: [
          {
            TileMatrixSet: 'PM',
            TileMatrixSetLimits: [
              {
                TileMatrix: '0',
                MinTileRow: 0,
                MaxTileRow: 1,
                MinTileCol: 0,
                MaxTileCol: 1,
              },
              {
                TileMatrix: '1',
                MinTileRow: 0,
                MaxTileRow: 2,
                MinTileCol: 0,
                MaxTileCol: 2,
              },
              {
                TileMatrix: '2',
                MinTileRow: 0,
                MaxTileRow: 4,
                MinTileCol: 0,
                MaxTileCol: 4,
              },
              {
                TileMatrix: '3',
                MinTileRow: 0,
                MaxTileRow: 8,
                MinTileCol: 0,
                MaxTileCol: 8,
              },
              {
                TileMatrix: '4',
                MinTileRow: 0,
                MaxTileRow: 16,
                MinTileCol: 0,
                MaxTileCol: 16,
              },
              {
                TileMatrix: '5',
                MinTileRow: 0,
                MaxTileRow: 32,
                MinTileCol: 0,
                MaxTileCol: 32,
              },
              {
                TileMatrix: '6',
                MinTileRow: 0,
                MaxTileRow: 64,
                MinTileCol: 0,
                MaxTileCol: 64,
              },
              {
                TileMatrix: '7',
                MinTileRow: 0,
                MaxTileRow: 128,
                MinTileCol: 0,
                MaxTileCol: 128,
              },
              {
                TileMatrix: '8',
                MinTileRow: 0,
                MaxTileRow: 256,
                MinTileCol: 0,
                MaxTileCol: 256,
              },
              {
                TileMatrix: '9',
                MinTileRow: 0,
                MaxTileRow: 512,
                MinTileCol: 0,
                MaxTileCol: 512,
              },
              {
                TileMatrix: '10',
                MinTileRow: 0,
                MaxTileRow: 1024,
                MinTileCol: 0,
                MaxTileCol: 1024,
              },
              {
                TileMatrix: '11',
                MinTileRow: 0,
                MaxTileRow: 2048,
                MinTileCol: 0,
                MaxTileCol: 2048,
              },
              {
                TileMatrix: '12',
                MinTileRow: 0,
                MaxTileRow: 4096,
                MinTileCol: 0,
                MaxTileCol: 4096,
              },
              {
                TileMatrix: '13',
                MinTileRow: 2736,
                MaxTileRow: 4639,
                MinTileCol: 32,
                MaxTileCol: 7935,
              },
              {
                TileMatrix: '14',
                MinTileRow: 5472,
                MaxTileRow: 9263,
                MinTileCol: 80,
                MaxTileCol: 15855,
              },
              {
                TileMatrix: '15',
                MinTileRow: 10944,
                MaxTileRow: 18527,
                MinTileCol: 160,
                MaxTileCol: 31695,
              },
              {
                TileMatrix: '16',
                MinTileRow: 21904,
                MaxTileRow: 37039,
                MinTileCol: 320,
                MaxTileCol: 63391,
              },
              {
                TileMatrix: '17',
                MinTileRow: 43808,
                MaxTileRow: 74063,
                MinTileCol: 656,
                MaxTileCol: 126767,
              },
              {
                TileMatrix: '18',
                MinTileRow: 87616,
                MaxTileRow: 148111,
                MinTileCol: 1312,
                MaxTileCol: 253535,
              },
              {
                TileMatrix: '19',
                MinTileRow: 175248,
                MaxTileRow: 294063,
                MinTileCol: 170144,
                MaxTileCol: 343487,
              },
              {
                TileMatrix: '20',
                MinTileRow: 357008,
                MaxTileRow: 384687,
                MinTileCol: 524400,
                MaxTileCol: 540927,
              },
              {
                TileMatrix: '21',
                MinTileRow: 714032,
                MaxTileRow: 768783,
                MinTileCol: 1048816,
                MaxTileCol: 1081775,
              },
            ],
          },
        ],
        wgs84BoundingBox: [-179.5, -75, 179.5, 75],
      },
      {
        type: 'WMTS',
        abstract: 'BDUni tuilée',
        format: ['application/x-protobuf'],
        name: 'PLAN.IGN',
        title: 'Plan IGN',
        tileMatrixSetLink: [
          {
            TileMatrixSet: 'PM',
            TileMatrixSetLimits: [
              {
                TileMatrix: '0',
                MinTileRow: 0,
                MaxTileRow: 1,
                MinTileCol: 0,
                MaxTileCol: 1,
              },
              {
                TileMatrix: '1',
                MinTileRow: 0,
                MaxTileRow: 2,
                MinTileCol: 0,
                MaxTileCol: 2,
              },
              {
                TileMatrix: '2',
                MinTileRow: 0,
                MaxTileRow: 4,
                MinTileCol: 0,
                MaxTileCol: 4,
              },
              {
                TileMatrix: '3',
                MinTileRow: 0,
                MaxTileRow: 8,
                MinTileCol: 0,
                MaxTileCol: 8,
              },
              {
                TileMatrix: '4',
                MinTileRow: 0,
                MaxTileRow: 16,
                MinTileCol: 0,
                MaxTileCol: 16,
              },
              {
                TileMatrix: '5',
                MinTileRow: 0,
                MaxTileRow: 32,
                MinTileCol: 0,
                MaxTileCol: 32,
              },
              {
                TileMatrix: '6',
                MinTileRow: 0,
                MaxTileRow: 64,
                MinTileCol: 0,
                MaxTileCol: 64,
              },
              {
                TileMatrix: '7',
                MinTileRow: 0,
                MaxTileRow: 128,
                MinTileCol: 0,
                MaxTileCol: 128,
              },
              {
                TileMatrix: '8',
                MinTileRow: 64,
                MaxTileRow: 192,
                MinTileCol: 64,
                MaxTileCol: 192,
              },
              {
                TileMatrix: '9',
                MinTileRow: 128,
                MaxTileRow: 320,
                MinTileCol: 128,
                MaxTileCol: 384,
              },
              {
                TileMatrix: '10',
                MinTileRow: 320,
                MaxTileRow: 576,
                MinTileCol: 320,
                MaxTileCol: 704,
              },
              {
                TileMatrix: '11',
                MinTileRow: 640,
                MaxTileRow: 1152,
                MinTileCol: 640,
                MaxTileCol: 1344,
              },
              {
                TileMatrix: '12',
                MinTileRow: 1344,
                MaxTileRow: 2304,
                MinTileCol: 1280,
                MaxTileCol: 2688,
              },
              {
                TileMatrix: '13',
                MinTileRow: 2688,
                MaxTileRow: 4608,
                MinTileCol: 2624,
                MaxTileCol: 5376,
              },
              {
                TileMatrix: '14',
                MinTileRow: 5440,
                MaxTileRow: 9216,
                MinTileCol: 5312,
                MaxTileCol: 10752,
              },
              {
                TileMatrix: '15',
                MinTileRow: 10944,
                MaxTileRow: 18432,
                MinTileCol: 10624,
                MaxTileCol: 21504,
              },
              {
                TileMatrix: '16',
                MinTileRow: 21888,
                MaxTileRow: 36800,
                MinTileCol: 21248,
                MaxTileCol: 42976,
              },
              {
                TileMatrix: '17',
                MinTileRow: 43776,
                MaxTileRow: 73600,
                MinTileCol: 42496,
                MaxTileCol: 85952,
              },
              {
                TileMatrix: '18',
                MinTileRow: 87616,
                MaxTileRow: 147136,
                MinTileCol: 84992,
                MaxTileCol: 171840,
              },
              {
                TileMatrix: '19',
                MinTileRow: 175232,
                MaxTileRow: 294272,
                MinTileCol: 169984,
                MaxTileCol: 343616,
              },
            ],
          },
        ],
        wgs84BoundingBox: [-6.50391, 40.9799, 9.84375, 51.2894],
      },
    ],
  },
]

export const wmtsCapabilities = `
<Capabilities xmlns="http://www.opengis.net/wmts/1.0" xmlns:gml="http://www.opengis.net/gml" xmlns:ows="http://www.opengis.net/ows/1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="1.0.0" xsi:schemaLocation="http://www.opengis.net/wmts/1.0 http://schemas.opengis.net/wmts/1.0/wmtsGetCapabilities_response.xsd">
<ows:ServiceIdentification>
<ows:Title>Service de visualisation WMTS Geoportail Publics</ows:Title>
<ows:Abstract>Ce service permet la visualisation de couches de données raster IGN au travers d'un flux WMTS</ows:Abstract>
<ows:Keywords>
<ows:Keyword>WTMS</ows:Keyword>
<ows:Keyword>Unités administratives</ows:Keyword>
<ows:Keyword>Limites administratives</ows:Keyword>
<ows:Keyword>Surfaces bâties</ows:Keyword>
<ows:Keyword>Réseaux de transport</ows:Keyword>
<ows:Keyword>Routes</ows:Keyword>
<ows:Keyword>Réseaux ferroviaires</ows:Keyword>
<ows:Keyword>Aérodromes</ows:Keyword>
<ows:Keyword>Réseau hydrographique</ows:Keyword>
<ows:Keyword>Parcelles cadastrales</ows:Keyword>
<ows:Keyword>Bâtiments</ows:Keyword>
<ows:Keyword>Services d'utilité publique et services publics</ows:Keyword>
<ows:Keyword>Réseaux de transport</ows:Keyword>
<ows:Keyword>Hydrographie</ows:Keyword>
<ows:Keyword>Photographies aériennes</ows:Keyword>
<ows:Keyword>Cartes</ows:Keyword>
<ows:Keyword>Cartes historiques</ows:Keyword>
<ows:Keyword>Altitude</ows:Keyword>
</ows:Keywords>
<ows:ServiceType>OGC WMTS</ows:ServiceType>
<ows:ServiceTypeVersion>1.0.0</ows:ServiceTypeVersion>
<ows:Fees>licences</ows:Fees>
<ows:AccessConstraints>Conditions Générales d'Utilisation disponibles ici : https://geoservices.ign.fr/cgu-licences</ows:AccessConstraints>
</ows:ServiceIdentification>
<ows:ServiceProvider>
<ows:ProviderName>IGN</ows:ProviderName>
<ows:ProviderSite xlink:href=""/>
<ows:ServiceContact>
<ows:IndividualName>Géoportail SAV</ows:IndividualName>
<ows:PositionName>custodian</ows:PositionName>
<ows:ContactInfo>
<ows:Phone>
<ows:Voice/>
<ows:Facsimile/>
</ows:Phone>
<ows:Address>
<ows:DeliveryPoint>73 avenue de Paris</ows:DeliveryPoint>
<ows:City>Saint Mandé</ows:City>
<ows:AdministrativeArea/>
<ows:PostalCode>94160</ows:PostalCode>
<ows:Country>France</ows:Country>
<ows:ElectronicMailAddress>geop_services@geoportail.fr</ows:ElectronicMailAddress>
</ows:Address>
</ows:ContactInfo>
</ows:ServiceContact>
</ows:ServiceProvider>
<ows:OperationsMetadata>
<ows:Operation name="GetCapabilities">
<ows:DCP>
<ows:HTTP>
<ows:Get xlink:href="https://wxs.ign.fr/essentiels/geoportail/wmts?">
<ows:Constraint name="GetEncoding">
<ows:AllowedValues>
<ows:Value>KVP</ows:Value>
</ows:AllowedValues>
</ows:Constraint>
</ows:Get>
</ows:HTTP>
</ows:DCP>
</ows:Operation>
<ows:Operation name="GetTile">
<ows:DCP>
<ows:HTTP>
<ows:Get xlink:href="https://wxs.ign.fr/essentiels/geoportail/wmts?">
<ows:Constraint name="GetEncoding">
<ows:AllowedValues>
<ows:Value>KVP</ows:Value>
</ows:AllowedValues>
</ows:Constraint>
</ows:Get>
</ows:HTTP>
</ows:DCP>
</ows:Operation>
<ows:Operation name="GetFeatureInfo">
<ows:DCP>
<ows:HTTP>
<ows:Get xlink:href="https://wxs.ign.fr/essentiels/geoportail/wmts?">
<ows:Constraint name="GetEncoding">
<ows:AllowedValues>
<ows:Value>KVP</ows:Value>
</ows:AllowedValues>
</ows:Constraint>
</ows:Get>
</ows:HTTP>
</ows:DCP>
</ows:Operation>
</ows:OperationsMetadata>
<Contents>
<Layer>
<ows:Title>ADMIN_EXPRESS</ows:Title>
<ows:Abstract>Limites administratives des collectivités territoriales. Régions, départements, cantons, communes, arrondissements (pour Paris, Lyon et Marseille) et établissements publics de coopération intercommunale (EPCI).</ows:Abstract>
<ows:Keywords>
<ows:Keyword>PM</ows:Keyword>
</ows:Keywords>
<ows:WGS84BoundingBox>
<ows:LowerCorner>-6.50391 40.9799</ows:LowerCorner>
<ows:UpperCorner>9.84375 51.2894</ows:UpperCorner>
</ows:WGS84BoundingBox>
<ows:Identifier>ADMIN_EXPRESS</ows:Identifier>
<Format>application/x-protobuf</Format>
<TileMatrixSetLink>
<TileMatrixSet>PM</TileMatrixSet>
<TileMatrixSetLimits>
<TileMatrixLimits>
<TileMatrix>6</TileMatrix>
<MinTileRow>21</MinTileRow>
<MaxTileRow>35</MaxTileRow>
<MinTileCol>20</MinTileCol>
<MaxTileCol>41</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>7</TileMatrix>
<MinTileRow>42</MinTileRow>
<MaxTileRow>71</MaxTileRow>
<MinTileCol>41</MinTileCol>
<MaxTileCol>83</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>8</TileMatrix>
<MinTileRow>85</MinTileRow>
<MaxTileRow>143</MaxTileRow>
<MinTileCol>83</MinTileCol>
<MaxTileCol>167</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>9</TileMatrix>
<MinTileRow>171</MinTileRow>
<MaxTileRow>287</MaxTileRow>
<MinTileCol>166</MinTileCol>
<MaxTileCol>335</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>10</TileMatrix>
<MinTileRow>342</MinTileRow>
<MaxTileRow>574</MaxTileRow>
<MinTileCol>332</MinTileCol>
<MaxTileCol>670</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>11</TileMatrix>
<MinTileRow>684</MinTileRow>
<MaxTileRow>1148</MaxTileRow>
<MinTileCol>664</MinTileCol>
<MaxTileCol>1341</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>12</TileMatrix>
<MinTileRow>1369</MinTileRow>
<MaxTileRow>2297</MaxTileRow>
<MinTileCol>1329</MinTileCol>
<MaxTileCol>2683</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>13</TileMatrix>
<MinTileRow>2738</MinTileRow>
<MaxTileRow>4594</MaxTileRow>
<MinTileCol>2658</MinTileCol>
<MaxTileCol>5366</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>14</TileMatrix>
<MinTileRow>5477</MinTileRow>
<MaxTileRow>9189</MaxTileRow>
<MinTileCol>5317</MinTileCol>
<MaxTileCol>10733</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>15</TileMatrix>
<MinTileRow>10955</MinTileRow>
<MaxTileRow>18378</MaxTileRow>
<MinTileCol>10634</MinTileCol>
<MaxTileCol>21467</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>16</TileMatrix>
<MinTileRow>21911</MinTileRow>
<MaxTileRow>36757</MaxTileRow>
<MinTileCol>21269</MinTileCol>
<MaxTileCol>42934</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>17</TileMatrix>
<MinTileRow>43822</MinTileRow>
<MaxTileRow>73515</MaxTileRow>
<MinTileCol>42539</MinTileCol>
<MaxTileCol>85869</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>18</TileMatrix>
<MinTileRow>87645</MinTileRow>
<MaxTileRow>147030</MaxTileRow>
<MinTileCol>85079</MinTileCol>
<MaxTileCol>171738</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>19</TileMatrix>
<MinTileRow>175290</MinTileRow>
<MaxTileRow>294060</MaxTileRow>
<MinTileCol>170158</MinTileCol>
<MaxTileCol>343476</MaxTileCol>
</TileMatrixLimits>
</TileMatrixSetLimits>
</TileMatrixSetLink>
</Layer>
<Layer>
<ows:Title>PCI vecteur</ows:Title>
<ows:Abstract>Plan cadastral informatisé vecteur de la DGFIP.</ows:Abstract>
<ows:Keywords>
<ows:Keyword>Parcelles cadastrales</ows:Keyword>
</ows:Keywords>
<ows:WGS84BoundingBox>
<ows:LowerCorner>-63.3725 -21.4756</ows:LowerCorner>
<ows:UpperCorner>55.9259 51.3121</ows:UpperCorner>
</ows:WGS84BoundingBox>
<ows:Identifier>CADASTRALPARCELS.PARCELLAIRE_EXPRESS</ows:Identifier>
<Style isDefault="true">
<ows:Title>PCI vecteur</ows:Title>
<ows:Abstract>Légende de la couche PCI vecteur</ows:Abstract>
<ows:Keywords>
<ows:Keyword>CADASTRALPARCELS.PARCELLAIRE_EXPRESS</ows:Keyword>
</ows:Keywords>
<ows:Identifier>PCI vecteur</ows:Identifier>
<LegendURL format="image/png" height="183" maxScaleDenominator="10000000" minScaleDenominator="1" width="300" xlink:href="https://wxs.ign.fr/static/legends/CADASTRALPARCELS.PARCELLAIRE_EXPRESS.png"/>
</Style>
<Style>
<ows:Title>Légende générique</ows:Title>
<ows:Abstract>Fichier de légende générique – pour la compatibilité avec certains systèmes</ows:Abstract>
<ows:Keywords>
<ows:Keyword>Défaut</ows:Keyword>
</ows:Keywords>
<ows:Identifier>normal</ows:Identifier>
<LegendURL format="image/jpeg" height="200" maxScaleDenominator="100000000" minScaleDenominator="200" width="200" xlink:href="https://wxs.ign.fr/static/legends/LEGEND.jpg"/>
</Style>
<Format>image/png</Format>
<InfoFormat>text/plain</InfoFormat>
<InfoFormat>text/html</InfoFormat>
<InfoFormat>text/xml</InfoFormat>
<InfoFormat>application/xml</InfoFormat>
<InfoFormat>application/json</InfoFormat>
<TileMatrixSetLink>
<TileMatrixSet>PM</TileMatrixSet>
<TileMatrixSetLimits>
<TileMatrixLimits>
<TileMatrix>0</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>0</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>0</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>1</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>1</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>1</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>2</TileMatrix>
<MinTileRow>1</MinTileRow>
<MaxTileRow>2</MaxTileRow>
<MinTileCol>1</MinTileCol>
<MaxTileCol>2</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>3</TileMatrix>
<MinTileRow>2</MinTileRow>
<MaxTileRow>4</MaxTileRow>
<MinTileCol>2</MinTileCol>
<MaxTileCol>5</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>4</TileMatrix>
<MinTileRow>5</MinTileRow>
<MaxTileRow>8</MaxTileRow>
<MinTileCol>5</MinTileCol>
<MaxTileCol>10</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>5</TileMatrix>
<MinTileRow>10</MinTileRow>
<MaxTileRow>17</MaxTileRow>
<MinTileCol>10</MinTileCol>
<MaxTileCol>20</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>6</TileMatrix>
<MinTileRow>21</MinTileRow>
<MaxTileRow>35</MaxTileRow>
<MinTileCol>20</MinTileCol>
<MaxTileCol>41</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>7</TileMatrix>
<MinTileRow>42</MinTileRow>
<MaxTileRow>71</MaxTileRow>
<MinTileCol>41</MinTileCol>
<MaxTileCol>83</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>8</TileMatrix>
<MinTileRow>85</MinTileRow>
<MaxTileRow>143</MaxTileRow>
<MinTileCol>82</MinTileCol>
<MaxTileCol>167</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>9</TileMatrix>
<MinTileRow>170</MinTileRow>
<MaxTileRow>287</MaxTileRow>
<MinTileCol>165</MinTileCol>
<MaxTileCol>335</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>10</TileMatrix>
<MinTileRow>341</MinTileRow>
<MaxTileRow>574</MaxTileRow>
<MinTileCol>331</MinTileCol>
<MaxTileCol>671</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>11</TileMatrix>
<MinTileRow>682</MinTileRow>
<MaxTileRow>1149</MaxTileRow>
<MinTileCol>663</MinTileCol>
<MaxTileCol>1342</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>12</TileMatrix>
<MinTileRow>1365</MinTileRow>
<MaxTileRow>2298</MaxTileRow>
<MinTileCol>1326</MinTileCol>
<MaxTileCol>2684</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>13</TileMatrix>
<MinTileRow>2731</MinTileRow>
<MaxTileRow>4596</MaxTileRow>
<MinTileCol>2653</MinTileCol>
<MaxTileCol>5368</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>14</TileMatrix>
<MinTileRow>5462</MinTileRow>
<MaxTileRow>9193</MaxTileRow>
<MinTileCol>5307</MinTileCol>
<MaxTileCol>10737</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>15</TileMatrix>
<MinTileRow>10924</MinTileRow>
<MaxTileRow>18386</MaxTileRow>
<MinTileCol>10615</MinTileCol>
<MaxTileCol>21474</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>16</TileMatrix>
<MinTileRow>21849</MinTileRow>
<MaxTileRow>36772</MaxTileRow>
<MinTileCol>21231</MinTileCol>
<MaxTileCol>42948</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>17</TileMatrix>
<MinTileRow>43698</MinTileRow>
<MaxTileRow>73544</MaxTileRow>
<MinTileCol>42462</MinTileCol>
<MaxTileCol>85897</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>18</TileMatrix>
<MinTileRow>87397</MinTileRow>
<MaxTileRow>147089</MaxTileRow>
<MinTileCol>84925</MinTileCol>
<MaxTileCol>171795</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>19</TileMatrix>
<MinTileRow>174795</MinTileRow>
<MaxTileRow>294179</MaxTileRow>
<MinTileCol>169851</MinTileCol>
<MaxTileCol>343591</MaxTileCol>
</TileMatrixLimits>
</TileMatrixSetLimits>
</TileMatrixSetLink>
</Layer>
<Layer>
<ows:Title>Plan IGN v2</ows:Title>
<ows:Abstract>Cartographie multi-échelles sur le territoire national, issue des bases de données vecteur de l’IGN, mis à jour régulièrement et réalisée selon un processus entièrement automatisé.</ows:Abstract>
<ows:Keywords>
<ows:Keyword>Plan IGN V2</ows:Keyword>
</ows:Keywords>
<ows:WGS84BoundingBox>
<ows:LowerCorner>-175 -85</ows:LowerCorner>
<ows:UpperCorner>175 85</ows:UpperCorner>
</ows:WGS84BoundingBox>
<ows:Identifier>GEOGRAPHICALGRIDSYSTEMS.PLANIGNV2</ows:Identifier>
<Style isDefault="true">
<ows:Title>Légende générique</ows:Title>
<ows:Abstract>Fichier de légende générique – pour la compatibilité avec certains systèmes</ows:Abstract>
<ows:Keywords>
<ows:Keyword>Défaut</ows:Keyword>
</ows:Keywords>
<ows:Identifier>normal</ows:Identifier>
<LegendURL format="image/jpeg" height="200" maxScaleDenominator="100000000" minScaleDenominator="200" width="200" xlink:href="https://wxs.ign.fr/static/legends/LEGEND.jpg"/>
</Style>
<Format>image/png</Format>
<TileMatrixSetLink>
<TileMatrixSet>PM</TileMatrixSet>
<TileMatrixSetLimits>
<TileMatrixLimits>
<TileMatrix>0</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>1</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>0</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>1</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>2</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>2</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>2</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>4</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>4</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>3</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>8</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>8</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>4</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>16</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>16</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>5</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>32</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>32</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>6</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>64</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>64</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>7</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>128</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>128</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>8</TileMatrix>
<MinTileRow>80</MinTileRow>
<MaxTileRow>144</MaxTileRow>
<MinTileCol>80</MinTileCol>
<MaxTileCol>168</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>9</TileMatrix>
<MinTileRow>168</MinTileRow>
<MaxTileRow>288</MaxTileRow>
<MinTileCol>160</MinTileCol>
<MaxTileCol>336</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>10</TileMatrix>
<MinTileRow>336</MinTileRow>
<MaxTileRow>576</MaxTileRow>
<MinTileCol>328</MinTileCol>
<MaxTileCol>672</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>11</TileMatrix>
<MinTileRow>680</MinTileRow>
<MaxTileRow>1152</MaxTileRow>
<MinTileCol>664</MinTileCol>
<MaxTileCol>1344</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>12</TileMatrix>
<MinTileRow>1368</MinTileRow>
<MaxTileRow>2304</MaxTileRow>
<MinTileCol>1328</MinTileCol>
<MaxTileCol>2688</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>13</TileMatrix>
<MinTileRow>2736</MinTileRow>
<MaxTileRow>4600</MaxTileRow>
<MinTileCol>2656</MinTileCol>
<MaxTileCol>5376</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>14</TileMatrix>
<MinTileRow>5472</MinTileRow>
<MaxTileRow>9200</MaxTileRow>
<MinTileCol>5312</MinTileCol>
<MaxTileCol>10744</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>15</TileMatrix>
<MinTileRow>10952</MinTileRow>
<MaxTileRow>18392</MaxTileRow>
<MinTileCol>10624</MinTileCol>
<MaxTileCol>21480</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>16</TileMatrix>
<MinTileRow>21904</MinTileRow>
<MaxTileRow>36784</MaxTileRow>
<MinTileCol>21248</MinTileCol>
<MaxTileCol>42952</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>17</TileMatrix>
<MinTileRow>43816</MinTileRow>
<MaxTileRow>73568</MaxTileRow>
<MinTileCol>42496</MinTileCol>
<MaxTileCol>85904</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>18</TileMatrix>
<MinTileRow>87640</MinTileRow>
<MaxTileRow>147128</MaxTileRow>
<MinTileCol>85000</MinTileCol>
<MaxTileCol>171808</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>19</TileMatrix>
<MinTileRow>175288</MinTileRow>
<MaxTileRow>294248</MaxTileRow>
<MinTileCol>170008</MinTileCol>
<MaxTileCol>343616</MaxTileCol>
</TileMatrixLimits>
</TileMatrixSetLimits>
</TileMatrixSetLink>
</Layer>
<Layer>
<ows:Title>Photographies aériennes</ows:Title>
<ows:Abstract>Photographies aériennes</ows:Abstract>
<ows:Keywords>
<ows:Keyword>Photographies</ows:Keyword>
</ows:Keywords>
<ows:WGS84BoundingBox>
<ows:LowerCorner>-179.5 -75</ows:LowerCorner>
<ows:UpperCorner>179.5 75</ows:UpperCorner>
</ows:WGS84BoundingBox>
<ows:Identifier>ORTHOIMAGERY.ORTHOPHOTOS</ows:Identifier>
<Style isDefault="true">
<ows:Title>Légende générique</ows:Title>
<ows:Abstract>Fichier de légende générique – pour la compatibilité avec certains systèmes</ows:Abstract>
<ows:Keywords>
<ows:Keyword>Défaut</ows:Keyword>
</ows:Keywords>
<ows:Identifier>normal</ows:Identifier>
<LegendURL format="image/jpeg" height="200" maxScaleDenominator="100000000" minScaleDenominator="200" width="200" xlink:href="https://wxs.ign.fr/static/legends/LEGEND.jpg"/>
</Style>
<Format>image/jpeg</Format>
<InfoFormat>text/plain</InfoFormat>
<InfoFormat>text/html</InfoFormat>
<InfoFormat>text/xml</InfoFormat>
<InfoFormat>application/xml</InfoFormat>
<InfoFormat>application/json</InfoFormat>
<TileMatrixSetLink>
<TileMatrixSet>PM</TileMatrixSet>
<TileMatrixSetLimits>
<TileMatrixLimits>
<TileMatrix>0</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>1</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>1</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>1</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>2</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>2</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>2</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>4</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>4</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>3</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>8</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>8</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>4</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>16</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>16</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>5</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>32</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>32</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>6</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>64</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>64</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>7</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>128</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>128</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>8</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>256</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>256</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>9</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>512</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>512</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>10</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>1024</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>1024</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>11</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>2048</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>2048</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>12</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>4096</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>4096</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>13</TileMatrix>
<MinTileRow>2736</MinTileRow>
<MaxTileRow>4639</MaxTileRow>
<MinTileCol>32</MinTileCol>
<MaxTileCol>7935</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>14</TileMatrix>
<MinTileRow>5472</MinTileRow>
<MaxTileRow>9263</MaxTileRow>
<MinTileCol>80</MinTileCol>
<MaxTileCol>15855</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>15</TileMatrix>
<MinTileRow>10944</MinTileRow>
<MaxTileRow>18527</MaxTileRow>
<MinTileCol>160</MinTileCol>
<MaxTileCol>31695</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>16</TileMatrix>
<MinTileRow>21904</MinTileRow>
<MaxTileRow>37039</MaxTileRow>
<MinTileCol>320</MinTileCol>
<MaxTileCol>63391</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>17</TileMatrix>
<MinTileRow>43808</MinTileRow>
<MaxTileRow>74063</MaxTileRow>
<MinTileCol>656</MinTileCol>
<MaxTileCol>126767</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>18</TileMatrix>
<MinTileRow>87616</MinTileRow>
<MaxTileRow>148111</MaxTileRow>
<MinTileCol>1312</MinTileCol>
<MaxTileCol>253535</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>19</TileMatrix>
<MinTileRow>175248</MinTileRow>
<MaxTileRow>294063</MaxTileRow>
<MinTileCol>170144</MinTileCol>
<MaxTileCol>343487</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>20</TileMatrix>
<MinTileRow>357008</MinTileRow>
<MaxTileRow>384687</MaxTileRow>
<MinTileCol>524400</MinTileCol>
<MaxTileCol>540927</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>21</TileMatrix>
<MinTileRow>714032</MinTileRow>
<MaxTileRow>768783</MaxTileRow>
<MinTileCol>1048816</MinTileCol>
<MaxTileCol>1081775</MaxTileCol>
</TileMatrixLimits>
</TileMatrixSetLimits>
</TileMatrixSetLink>
</Layer>
<Layer>
<ows:Title>Plan IGN</ows:Title>
<ows:Abstract>BDUni tuilée</ows:Abstract>
<ows:Keywords>
<ows:Keyword>PM</ows:Keyword>
</ows:Keywords>
<ows:WGS84BoundingBox>
<ows:LowerCorner>-6.50391 40.9799</ows:LowerCorner>
<ows:UpperCorner>9.84375 51.2894</ows:UpperCorner>
</ows:WGS84BoundingBox>
<ows:Identifier>PLAN.IGN</ows:Identifier>
<Format>application/x-protobuf</Format>
<TileMatrixSetLink>
<TileMatrixSet>PM</TileMatrixSet>
<TileMatrixSetLimits>
<TileMatrixLimits>
<TileMatrix>0</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>1</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>1</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>1</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>2</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>2</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>2</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>4</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>4</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>3</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>8</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>8</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>4</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>16</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>16</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>5</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>32</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>32</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>6</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>64</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>64</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>7</TileMatrix>
<MinTileRow>0</MinTileRow>
<MaxTileRow>128</MaxTileRow>
<MinTileCol>0</MinTileCol>
<MaxTileCol>128</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>8</TileMatrix>
<MinTileRow>64</MinTileRow>
<MaxTileRow>192</MaxTileRow>
<MinTileCol>64</MinTileCol>
<MaxTileCol>192</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>9</TileMatrix>
<MinTileRow>128</MinTileRow>
<MaxTileRow>320</MaxTileRow>
<MinTileCol>128</MinTileCol>
<MaxTileCol>384</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>10</TileMatrix>
<MinTileRow>320</MinTileRow>
<MaxTileRow>576</MaxTileRow>
<MinTileCol>320</MinTileCol>
<MaxTileCol>704</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>11</TileMatrix>
<MinTileRow>640</MinTileRow>
<MaxTileRow>1152</MaxTileRow>
<MinTileCol>640</MinTileCol>
<MaxTileCol>1344</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>12</TileMatrix>
<MinTileRow>1344</MinTileRow>
<MaxTileRow>2304</MaxTileRow>
<MinTileCol>1280</MinTileCol>
<MaxTileCol>2688</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>13</TileMatrix>
<MinTileRow>2688</MinTileRow>
<MaxTileRow>4608</MaxTileRow>
<MinTileCol>2624</MinTileCol>
<MaxTileCol>5376</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>14</TileMatrix>
<MinTileRow>5440</MinTileRow>
<MaxTileRow>9216</MaxTileRow>
<MinTileCol>5312</MinTileCol>
<MaxTileCol>10752</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>15</TileMatrix>
<MinTileRow>10944</MinTileRow>
<MaxTileRow>18432</MaxTileRow>
<MinTileCol>10624</MinTileCol>
<MaxTileCol>21504</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>16</TileMatrix>
<MinTileRow>21888</MinTileRow>
<MaxTileRow>36800</MaxTileRow>
<MinTileCol>21248</MinTileCol>
<MaxTileCol>42976</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>17</TileMatrix>
<MinTileRow>43776</MinTileRow>
<MaxTileRow>73600</MaxTileRow>
<MinTileCol>42496</MinTileCol>
<MaxTileCol>85952</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>18</TileMatrix>
<MinTileRow>87616</MinTileRow>
<MaxTileRow>147136</MaxTileRow>
<MinTileCol>84992</MinTileCol>
<MaxTileCol>171840</MaxTileCol>
</TileMatrixLimits>
<TileMatrixLimits>
<TileMatrix>19</TileMatrix>
<MinTileRow>175232</MinTileRow>
<MaxTileRow>294272</MaxTileRow>
<MinTileCol>169984</MinTileCol>
<MaxTileCol>343616</MaxTileCol>
</TileMatrixLimits>
</TileMatrixSetLimits>
</TileMatrixSetLink>
</Layer>
<TileMatrixSet>
<ows:Identifier>LAMB93</ows:Identifier>
<ows:SupportedCRS>EPSG:2154</ows:SupportedCRS>
<TileMatrix>
<ows:Identifier>0</ows:Identifier>
<ScaleDenominator>373497230.5353357571875677</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>2</MatrixWidth>
<MatrixHeight>2</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>1</ows:Identifier>
<ScaleDenominator>186705472.6921089404495433</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>2</MatrixWidth>
<MatrixHeight>2</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>2</ows:Identifier>
<ScaleDenominator>93341025.2806978682347108</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>2</MatrixWidth>
<MatrixHeight>2</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>3</ows:Identifier>
<ScaleDenominator>46667469.2207142901243060</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>2</MatrixWidth>
<MatrixHeight>3</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>4</ows:Identifier>
<ScaleDenominator>23332959.3004053602435306</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>2</MatrixWidth>
<MatrixHeight>5</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>5</ows:Identifier>
<ScaleDenominator>11666284.0159382160591122</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>3</MatrixWidth>
<MatrixHeight>9</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>6</ows:Identifier>
<ScaleDenominator>5833092.8735621436167094</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>5</MatrixWidth>
<MatrixHeight>16</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>7</ows:Identifier>
<ScaleDenominator>2916534.1249500003143567</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>8</MatrixWidth>
<MatrixHeight>30</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>8</ows:Identifier>
<ScaleDenominator>1458263.9809885714915936</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>14</MatrixWidth>
<MatrixHeight>59</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>9</ows:Identifier>
<ScaleDenominator>729131.2196817857459905</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>26</MatrixWidth>
<MatrixHeight>117</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>10</ows:Identifier>
<ScaleDenominator>364565.4170828571558332</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>51</MatrixWidth>
<MatrixHeight>232</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>11</ows:Identifier>
<ScaleDenominator>182282.6603450000154965</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>100</MatrixWidth>
<MatrixHeight>462</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>12</ows:Identifier>
<ScaleDenominator>91141.3181225000130965</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>199</MatrixWidth>
<MatrixHeight>922</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>13</ows:Identifier>
<ScaleDenominator>45570.6560485714301016</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>396</MatrixWidth>
<MatrixHeight>1842</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>14</ows:Identifier>
<ScaleDenominator>22785.3272714285733418</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>791</MatrixWidth>
<MatrixHeight>3682</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>15</ows:Identifier>
<ScaleDenominator>11392.6634475000012445</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>1581</MatrixWidth>
<MatrixHeight>7363</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>16</ows:Identifier>
<ScaleDenominator>5696.3316767857149872</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>3161</MatrixWidth>
<MatrixHeight>14724</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>17</ows:Identifier>
<ScaleDenominator>2848.1658267857144691</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>6321</MatrixWidth>
<MatrixHeight>29447</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>18</ows:Identifier>
<ScaleDenominator>1424.0829103571428959</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>12641</MatrixWidth>
<MatrixHeight>58892</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>19</ows:Identifier>
<ScaleDenominator>712.0414546428572171</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>25281</MatrixWidth>
<MatrixHeight>117782</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>20</ows:Identifier>
<ScaleDenominator>356.0207275000000519</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>50561</MatrixWidth>
<MatrixHeight>235563</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>21</ows:Identifier>
<ScaleDenominator>178.0103635714285826</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>101121</MatrixWidth>
<MatrixHeight>471125</MatrixHeight>
</TileMatrix>
</TileMatrixSet>
<TileMatrixSet>
<ows:Identifier>LAMB93_1M_MNT</ows:Identifier>
<ows:SupportedCRS>IGNF:LAMB93</ows:SupportedCRS>
<TileMatrix>
<ows:Identifier>0</ows:Identifier>
<ScaleDenominator>3571428.5714285717415351</ScaleDenominator>
<TopLeftCorner>-500.0000000000000000 12000500.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>4</MatrixWidth>
<MatrixHeight>23</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>1</ows:Identifier>
<ScaleDenominator>1785714.2857142858707675</ScaleDenominator>
<TopLeftCorner>-250.0000000000000000 12000250.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>8</MatrixWidth>
<MatrixHeight>46</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>2</ows:Identifier>
<ScaleDenominator>892857.1428571429353838</ScaleDenominator>
<TopLeftCorner>-125.0000000000000000 12000125.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>16</MatrixWidth>
<MatrixHeight>92</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>3</ows:Identifier>
<ScaleDenominator>357142.8571428571741535</ScaleDenominator>
<TopLeftCorner>-50.0000000000000000 12000050.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>40</MatrixWidth>
<MatrixHeight>230</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>4</ows:Identifier>
<ScaleDenominator>267857.1428571428806151</ScaleDenominator>
<TopLeftCorner>-37.5000000000000000 12000037.5000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>54</MatrixWidth>
<MatrixHeight>307</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>5</ows:Identifier>
<ScaleDenominator>178571.4285714285870768</ScaleDenominator>
<TopLeftCorner>-25.0000000000000000 12000025.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>80</MatrixWidth>
<MatrixHeight>460</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>6</ows:Identifier>
<ScaleDenominator>89285.7142857142935384</ScaleDenominator>
<TopLeftCorner>-12.5000000000000000 12000012.5000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>160</MatrixWidth>
<MatrixHeight>920</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>7</ows:Identifier>
<ScaleDenominator>17857.1428571428587073</ScaleDenominator>
<TopLeftCorner>-2.5000000000000000 12000002.5000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>800</MatrixWidth>
<MatrixHeight>4600</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>8</ows:Identifier>
<ScaleDenominator>3571.4285714285717415</ScaleDenominator>
<TopLeftCorner>-0.5000000000000000 12000000.5000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>4000</MatrixWidth>
<MatrixHeight>23000</MatrixHeight>
</TileMatrix>
</TileMatrixSet>
<TileMatrixSet>
<ows:Identifier>LAMB93_5cm</ows:Identifier>
<ows:SupportedCRS>IGNF:LAMB93</ows:SupportedCRS>
<TileMatrix>
<ows:Identifier>0</ows:Identifier>
<ScaleDenominator>748982857.1428572500590235</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>1</MatrixWidth>
<MatrixHeight>1</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>1</ows:Identifier>
<ScaleDenominator>374491428.5714286250295117</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>1</MatrixWidth>
<MatrixHeight>1</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>2</ows:Identifier>
<ScaleDenominator>187245714.2857143125147559</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>1</MatrixWidth>
<MatrixHeight>1</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>3</ows:Identifier>
<ScaleDenominator>93622857.1428571562573779</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>1</MatrixWidth>
<MatrixHeight>2</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>4</ows:Identifier>
<ScaleDenominator>46811428.5714285781286890</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>1</MatrixWidth>
<MatrixHeight>4</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>5</ows:Identifier>
<ScaleDenominator>23405714.2857142890643445</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>1</MatrixWidth>
<MatrixHeight>7</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>6</ows:Identifier>
<ScaleDenominator>11702857.1428571445321722</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>2</MatrixWidth>
<MatrixHeight>13</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>7</ows:Identifier>
<ScaleDenominator>5851428.5714285722660861</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>4</MatrixWidth>
<MatrixHeight>26</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>8</ows:Identifier>
<ScaleDenominator>2925714.2857142861330431</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>7</MatrixWidth>
<MatrixHeight>52</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>9</ows:Identifier>
<ScaleDenominator>1462857.1428571430665215</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>13</MatrixWidth>
<MatrixHeight>103</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>10</ows:Identifier>
<ScaleDenominator>731428.5714285715332608</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>25</MatrixWidth>
<MatrixHeight>206</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>11</ows:Identifier>
<ScaleDenominator>365714.2857142857666304</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>50</MatrixWidth>
<MatrixHeight>411</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>12</ows:Identifier>
<ScaleDenominator>182857.1428571428833152</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>99</MatrixWidth>
<MatrixHeight>822</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>13</ows:Identifier>
<ScaleDenominator>91428.5714285714416576</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>197</MatrixWidth>
<MatrixHeight>1643</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>14</ows:Identifier>
<ScaleDenominator>45714.2857142857208288</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>394</MatrixWidth>
<MatrixHeight>3285</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>15</ows:Identifier>
<ScaleDenominator>22857.1428571428604144</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>788</MatrixWidth>
<MatrixHeight>6569</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>16</ows:Identifier>
<ScaleDenominator>11428.5714285714302072</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>1575</MatrixWidth>
<MatrixHeight>13138</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>17</ows:Identifier>
<ScaleDenominator>5714.2857142857151036</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>3150</MatrixWidth>
<MatrixHeight>26276</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>18</ows:Identifier>
<ScaleDenominator>2857.1428571428575518</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>6300</MatrixWidth>
<MatrixHeight>52552</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>19</ows:Identifier>
<ScaleDenominator>1428.5714285714287759</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>12600</MatrixWidth>
<MatrixHeight>105102</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>20</ows:Identifier>
<ScaleDenominator>714.2857142857143879</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>25200</MatrixWidth>
<MatrixHeight>210205</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>21</ows:Identifier>
<ScaleDenominator>357.1428571428571940</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>50400</MatrixWidth>
<MatrixHeight>420409</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>22</ows:Identifier>
<ScaleDenominator>178.5714285714285970</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>100800</MatrixWidth>
<MatrixHeight>840818</MatrixHeight>
</TileMatrix>
</TileMatrixSet>
<TileMatrixSet>
<ows:Identifier>LAMB93_5cm_EPSG</ows:Identifier>
<ows:SupportedCRS>EPSG:2154</ows:SupportedCRS>
<TileMatrix>
<ows:Identifier>0</ows:Identifier>
<ScaleDenominator>748982857.1428572500590235</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>1</MatrixWidth>
<MatrixHeight>1</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>1</ows:Identifier>
<ScaleDenominator>374491428.5714286250295117</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>1</MatrixWidth>
<MatrixHeight>1</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>2</ows:Identifier>
<ScaleDenominator>187245714.2857143125147559</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>1</MatrixWidth>
<MatrixHeight>1</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>3</ows:Identifier>
<ScaleDenominator>93622857.1428571562573779</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>1</MatrixWidth>
<MatrixHeight>2</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>4</ows:Identifier>
<ScaleDenominator>46811428.5714285781286890</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>1</MatrixWidth>
<MatrixHeight>4</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>5</ows:Identifier>
<ScaleDenominator>23405714.2857142890643445</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>1</MatrixWidth>
<MatrixHeight>7</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>6</ows:Identifier>
<ScaleDenominator>11702857.1428571445321722</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>2</MatrixWidth>
<MatrixHeight>13</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>7</ows:Identifier>
<ScaleDenominator>5851428.5714285722660861</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>4</MatrixWidth>
<MatrixHeight>26</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>8</ows:Identifier>
<ScaleDenominator>2925714.2857142861330431</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>7</MatrixWidth>
<MatrixHeight>52</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>9</ows:Identifier>
<ScaleDenominator>1462857.1428571430665215</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>13</MatrixWidth>
<MatrixHeight>103</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>10</ows:Identifier>
<ScaleDenominator>731428.5714285715332608</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>25</MatrixWidth>
<MatrixHeight>206</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>11</ows:Identifier>
<ScaleDenominator>365714.2857142857666304</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>50</MatrixWidth>
<MatrixHeight>411</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>12</ows:Identifier>
<ScaleDenominator>182857.1428571428833152</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>99</MatrixWidth>
<MatrixHeight>822</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>13</ows:Identifier>
<ScaleDenominator>91428.5714285714416576</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>197</MatrixWidth>
<MatrixHeight>1643</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>14</ows:Identifier>
<ScaleDenominator>45714.2857142857208288</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>394</MatrixWidth>
<MatrixHeight>3285</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>15</ows:Identifier>
<ScaleDenominator>22857.1428571428604144</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>788</MatrixWidth>
<MatrixHeight>6569</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>16</ows:Identifier>
<ScaleDenominator>11428.5714285714302072</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>1575</MatrixWidth>
<MatrixHeight>13138</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>17</ows:Identifier>
<ScaleDenominator>5714.2857142857151036</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>3150</MatrixWidth>
<MatrixHeight>26276</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>18</ows:Identifier>
<ScaleDenominator>2857.1428571428575518</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>6300</MatrixWidth>
<MatrixHeight>52552</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>19</ows:Identifier>
<ScaleDenominator>1428.5714285714287759</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>12600</MatrixWidth>
<MatrixHeight>105102</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>20</ows:Identifier>
<ScaleDenominator>714.2857142857143879</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>25200</MatrixWidth>
<MatrixHeight>210205</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>21</ows:Identifier>
<ScaleDenominator>357.1428571428571940</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>50400</MatrixWidth>
<MatrixHeight>420409</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>22</ows:Identifier>
<ScaleDenominator>178.5714285714285970</ScaleDenominator>
<TopLeftCorner>0.0000000000000000 12000000.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>100800</MatrixWidth>
<MatrixHeight>840818</MatrixHeight>
</TileMatrix>
</TileMatrixSet>
<TileMatrixSet>
<ows:Identifier>PM</ows:Identifier>
<ows:SupportedCRS>EPSG:3857</ows:SupportedCRS>
<TileMatrix>
<ows:Identifier>0</ows:Identifier>
<ScaleDenominator>559082264.0287178958533332</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>1</MatrixWidth>
<MatrixHeight>1</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>1</ows:Identifier>
<ScaleDenominator>279541132.0143588959472254</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>2</MatrixWidth>
<MatrixHeight>2</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>2</ows:Identifier>
<ScaleDenominator>139770566.0071793960087234</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>4</MatrixWidth>
<MatrixHeight>4</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>3</ows:Identifier>
<ScaleDenominator>69885283.0035897239868063</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>8</MatrixWidth>
<MatrixHeight>8</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>4</ows:Identifier>
<ScaleDenominator>34942641.5017948619934032</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>16</MatrixWidth>
<MatrixHeight>16</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>5</ows:Identifier>
<ScaleDenominator>17471320.7508974309967016</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>32</MatrixWidth>
<MatrixHeight>32</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>6</ows:Identifier>
<ScaleDenominator>8735660.3754487154983508</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>64</MatrixWidth>
<MatrixHeight>64</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>7</ows:Identifier>
<ScaleDenominator>4367830.1877243577491754</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>128</MatrixWidth>
<MatrixHeight>128</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>8</ows:Identifier>
<ScaleDenominator>2183915.0938621788745877</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>256</MatrixWidth>
<MatrixHeight>256</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>9</ows:Identifier>
<ScaleDenominator>1091957.5469310886252288</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>512</MatrixWidth>
<MatrixHeight>512</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>10</ows:Identifier>
<ScaleDenominator>545978.7734655447186469</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>1024</MatrixWidth>
<MatrixHeight>1024</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>11</ows:Identifier>
<ScaleDenominator>272989.3867327723085907</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>2048</MatrixWidth>
<MatrixHeight>2048</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>12</ows:Identifier>
<ScaleDenominator>136494.6933663861796617</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>4096</MatrixWidth>
<MatrixHeight>4096</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>13</ows:Identifier>
<ScaleDenominator>68247.3466831930771477</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>8192</MatrixWidth>
<MatrixHeight>8192</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>14</ows:Identifier>
<ScaleDenominator>34123.6733415965449154</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>16384</MatrixWidth>
<MatrixHeight>16384</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>15</ows:Identifier>
<ScaleDenominator>17061.8366707982724577</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>32768</MatrixWidth>
<MatrixHeight>32768</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>16</ows:Identifier>
<ScaleDenominator>8530.9183353991362289</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>65536</MatrixWidth>
<MatrixHeight>65536</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>17</ows:Identifier>
<ScaleDenominator>4265.4591676995681144</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>131072</MatrixWidth>
<MatrixHeight>131072</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>18</ows:Identifier>
<ScaleDenominator>2132.7295838497840572</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>262144</MatrixWidth>
<MatrixHeight>262144</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>19</ows:Identifier>
<ScaleDenominator>1066.3647919248918304</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>524288</MatrixWidth>
<MatrixHeight>524288</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>20</ows:Identifier>
<ScaleDenominator>533.1823959624461134</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>1048576</MatrixWidth>
<MatrixHeight>1048576</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>21</ows:Identifier>
<ScaleDenominator>266.5911979812228585</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>2097152</MatrixWidth>
<MatrixHeight>2097152</MatrixHeight>
</TileMatrix>
</TileMatrixSet>
<TileMatrixSet>
<ows:Identifier>PM_5cm</ows:Identifier>
<ows:SupportedCRS>EPSG:3857</ows:SupportedCRS>
<TileMatrix>
<ows:Identifier>0</ows:Identifier>
<ScaleDenominator>559082264.0287178958533332</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>1</MatrixWidth>
<MatrixHeight>1</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>1</ows:Identifier>
<ScaleDenominator>279541132.0143588959472254</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>2</MatrixWidth>
<MatrixHeight>2</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>2</ows:Identifier>
<ScaleDenominator>139770566.0071793960087234</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>4</MatrixWidth>
<MatrixHeight>4</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>3</ows:Identifier>
<ScaleDenominator>69885283.0035897239868063</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>8</MatrixWidth>
<MatrixHeight>8</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>4</ows:Identifier>
<ScaleDenominator>34942641.5017948619934032</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>16</MatrixWidth>
<MatrixHeight>16</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>5</ows:Identifier>
<ScaleDenominator>17471320.7508974309967016</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>32</MatrixWidth>
<MatrixHeight>32</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>6</ows:Identifier>
<ScaleDenominator>8735660.3754487154983508</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>64</MatrixWidth>
<MatrixHeight>64</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>7</ows:Identifier>
<ScaleDenominator>4367830.1877243577491754</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>128</MatrixWidth>
<MatrixHeight>128</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>8</ows:Identifier>
<ScaleDenominator>2183915.0938621788745877</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>256</MatrixWidth>
<MatrixHeight>256</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>9</ows:Identifier>
<ScaleDenominator>1091957.5469310886252288</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>512</MatrixWidth>
<MatrixHeight>512</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>10</ows:Identifier>
<ScaleDenominator>545978.7734655447186469</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>1024</MatrixWidth>
<MatrixHeight>1024</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>11</ows:Identifier>
<ScaleDenominator>272989.3867327723085907</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>2048</MatrixWidth>
<MatrixHeight>2048</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>12</ows:Identifier>
<ScaleDenominator>136494.6933663861796617</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>4096</MatrixWidth>
<MatrixHeight>4096</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>13</ows:Identifier>
<ScaleDenominator>68247.3466831930771477</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>8192</MatrixWidth>
<MatrixHeight>8192</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>14</ows:Identifier>
<ScaleDenominator>34123.6733415965449154</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>16384</MatrixWidth>
<MatrixHeight>16384</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>15</ows:Identifier>
<ScaleDenominator>17061.8366707982724577</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>32768</MatrixWidth>
<MatrixHeight>32768</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>16</ows:Identifier>
<ScaleDenominator>8530.9183353991362289</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>65536</MatrixWidth>
<MatrixHeight>65536</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>17</ows:Identifier>
<ScaleDenominator>4265.4591676995681144</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>131072</MatrixWidth>
<MatrixHeight>131072</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>18</ows:Identifier>
<ScaleDenominator>2132.7295838497840572</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>262144</MatrixWidth>
<MatrixHeight>262144</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>19</ows:Identifier>
<ScaleDenominator>1066.3647919248918304</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>524288</MatrixWidth>
<MatrixHeight>524288</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>20</ows:Identifier>
<ScaleDenominator>533.1823959624461134</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>1048576</MatrixWidth>
<MatrixHeight>1048576</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>21</ows:Identifier>
<ScaleDenominator>266.5911979812228585</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>2097152</MatrixWidth>
<MatrixHeight>2097152</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>22</ows:Identifier>
<ScaleDenominator>133.2955989906114292</ScaleDenominator>
<TopLeftCorner>-20037508.3427892476320267 20037508.3427892476320267</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>4194304</MatrixWidth>
<MatrixHeight>4194304</MatrixHeight>
</TileMatrix>
</TileMatrixSet>
<TileMatrixSet>
<ows:Identifier>WGS84G</ows:Identifier>
<ows:SupportedCRS>IGNF:WGS84G</ows:SupportedCRS>
<TileMatrix>
<ows:Identifier>0</ows:Identifier>
<ScaleDenominator>279541132.0143588675418869</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>2</MatrixWidth>
<MatrixHeight>1</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>1</ows:Identifier>
<ScaleDenominator>139770566.0071794337709434</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>4</MatrixWidth>
<MatrixHeight>2</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>2</ows:Identifier>
<ScaleDenominator>69885283.0035897168854717</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>8</MatrixWidth>
<MatrixHeight>4</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>3</ows:Identifier>
<ScaleDenominator>34942641.5017948584427359</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>16</MatrixWidth>
<MatrixHeight>8</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>4</ows:Identifier>
<ScaleDenominator>17471320.7508974292213679</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>32</MatrixWidth>
<MatrixHeight>16</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>5</ows:Identifier>
<ScaleDenominator>8735660.3754487146106840</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>64</MatrixWidth>
<MatrixHeight>32</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>6</ows:Identifier>
<ScaleDenominator>4367830.1877243573053420</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>128</MatrixWidth>
<MatrixHeight>64</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>7</ows:Identifier>
<ScaleDenominator>2183915.0938621786526710</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>256</MatrixWidth>
<MatrixHeight>128</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>8</ows:Identifier>
<ScaleDenominator>1091957.5469310893263355</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>512</MatrixWidth>
<MatrixHeight>256</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>9</ows:Identifier>
<ScaleDenominator>545978.7734655446631677</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>1024</MatrixWidth>
<MatrixHeight>512</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>10</ows:Identifier>
<ScaleDenominator>272989.3867327723315839</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>2048</MatrixWidth>
<MatrixHeight>1024</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>11</ows:Identifier>
<ScaleDenominator>136494.6933663861657919</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>4096</MatrixWidth>
<MatrixHeight>2048</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>12</ows:Identifier>
<ScaleDenominator>68247.3466831930828960</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>8192</MatrixWidth>
<MatrixHeight>4096</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>13</ows:Identifier>
<ScaleDenominator>34123.6733415965414480</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>16384</MatrixWidth>
<MatrixHeight>8192</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>14</ows:Identifier>
<ScaleDenominator>17061.8366707982707240</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>32768</MatrixWidth>
<MatrixHeight>16384</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>15</ows:Identifier>
<ScaleDenominator>8530.9183353991353620</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>65536</MatrixWidth>
<MatrixHeight>32768</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>16</ows:Identifier>
<ScaleDenominator>4265.4591676995676810</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>131072</MatrixWidth>
<MatrixHeight>65536</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>17</ows:Identifier>
<ScaleDenominator>2132.7295838497838405</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>262144</MatrixWidth>
<MatrixHeight>131072</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>18</ows:Identifier>
<ScaleDenominator>1066.3647919248919202</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>524288</MatrixWidth>
<MatrixHeight>262144</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>19</ows:Identifier>
<ScaleDenominator>533.1823959624459601</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>1048576</MatrixWidth>
<MatrixHeight>524288</MatrixHeight>
</TileMatrix>
</TileMatrixSet>
<TileMatrixSet>
<ows:Identifier>WGS84G_PO</ows:Identifier>
<ows:SupportedCRS>IGNF:WGS84G</ows:SupportedCRS>
<TileMatrix>
<ows:Identifier>0</ows:Identifier>
<ScaleDenominator>279541132.0143588675418869</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>2</MatrixWidth>
<MatrixHeight>1</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>1</ows:Identifier>
<ScaleDenominator>139770566.0071794337709434</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>4</MatrixWidth>
<MatrixHeight>2</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>2</ows:Identifier>
<ScaleDenominator>69885283.0035897168854717</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>8</MatrixWidth>
<MatrixHeight>4</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>3</ows:Identifier>
<ScaleDenominator>34942641.5017948584427359</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>16</MatrixWidth>
<MatrixHeight>8</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>4</ows:Identifier>
<ScaleDenominator>17471320.7508974292213679</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>32</MatrixWidth>
<MatrixHeight>16</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>5</ows:Identifier>
<ScaleDenominator>8735660.3754487146106840</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>64</MatrixWidth>
<MatrixHeight>32</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>6</ows:Identifier>
<ScaleDenominator>4367830.1877243573053420</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>128</MatrixWidth>
<MatrixHeight>64</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>7</ows:Identifier>
<ScaleDenominator>2183915.0938621786526710</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>256</MatrixWidth>
<MatrixHeight>128</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>8</ows:Identifier>
<ScaleDenominator>1091957.5469310893263355</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>512</MatrixWidth>
<MatrixHeight>256</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>9</ows:Identifier>
<ScaleDenominator>545978.7734655446631677</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>1024</MatrixWidth>
<MatrixHeight>512</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>10</ows:Identifier>
<ScaleDenominator>272989.3867327723315839</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>2048</MatrixWidth>
<MatrixHeight>1024</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>11</ows:Identifier>
<ScaleDenominator>136494.6933663861657919</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>4096</MatrixWidth>
<MatrixHeight>2048</MatrixHeight>
</TileMatrix>
<TileMatrix>
<ows:Identifier>12</ows:Identifier>
<ScaleDenominator>68247.3466831930828960</ScaleDenominator>
<TopLeftCorner>-180.0000000000000000 90.0000000000000000</TopLeftCorner>
<TileWidth>256</TileWidth>
<TileHeight>256</TileHeight>
<MatrixWidth>8192</MatrixWidth>
<MatrixHeight>4096</MatrixHeight>
</TileMatrix>
</TileMatrixSet>
</Contents>
</Capabilities>`
