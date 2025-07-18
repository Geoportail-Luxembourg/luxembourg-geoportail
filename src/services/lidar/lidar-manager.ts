//import gmfLidarprofileMeasure from '../../components/lidar/measure'
//import gmfLidarprofilePlot from '../../components/lidar/plot'
//import gmfLidarprofileUtils from '../../components/lidar/utils'
import olLayerVector from 'ol/layer/Vector'
import olOverlay from 'ol/Overlay'
import olSourceVector from 'ol/source/Vector'
import olStyleFill from 'ol/style/Fill'
import olStyleCircle from 'ol/style/Circle'
import olStyleStyle from 'ol/style/Style'
import { select } from 'd3-selection'
import i18next from 'i18next'
import { debounce } from '@/services/utils'
import useMap from '@/composables/map/map.composable'
import { LineString } from 'ol/geom'
import { LidarHelpers } from '@/services/lidar/lidar.helpers'
const d3 = { select }

export class LidarManager {
  map = useMap().getOlMap()
  utils = new LidarHelpers()
  promise: Promise<any> | null = null
  plot: any = null
  measure: any = null
  config: any = null

  cartoHighlight = new olOverlay({
    offset: [0, -15],
    positioning: 'bottom-center'
  })
  lidarPointHighlight = new olLayerVector({
    source: new olSourceVector({}),
    style: new olStyleStyle({
      image: new olStyleCircle({
        fill: new olStyleFill({ color: 'rgba(0, 0, 255, 1)' }),
        radius: 3
      })
    })
  })
  lidarBuffer = new olLayerVector({
    source: new olSourceVector({})
  })
  profilePoints: {
    distance: number[]
    altitude: number[]
    color_packed: number[][]
    intensity: number[]
    classification: number[]
    coords: number[][]
  } = this.getEmptyProfilePoints_()
  isPlotSetup_ = false
  line_: any
  width: number = 0
  
  constructor() {}

  init(config: any) {
    this.config = config
    //this.plot = new gmfLidarprofilePlot(this)
    //this.measure = new gmfLidarprofileMeasure(this)
  }

  clearBuffer() {
    if (this.lidarBuffer) {
      const source = this.lidarBuffer.getSource();
      if (source) {
        source.clear();
      }
    }
  }

  clearRect() {
    const canvas = d3.select('.gmf-lidarprofile-container .lidar-canvas')
    const canvasEl = canvas.node() as HTMLCanvasElement
    const ctx = canvasEl.getContext('2d')
    ctx!.clearRect(0, 0, canvasEl.getBoundingClientRect().width, canvasEl.getBoundingClientRect().height)
    canvas.selectAll('*').remove()
    d3.select('.gmf-lidarprofile-container .lidar-error').style('visibility', 'hidden')
    this.profilePoints = this.getEmptyProfilePoints_()
    this.line_ = undefined
    //this.plot = new gmfLidarprofilePlot(this)
    //this.measure = new gmfLidarprofileMeasure(this)
  }

  setLine(line: LineString) {
    this.line_ = line
  }

  getEmptyProfilePoints_(): {
    distance: number[]
    altitude: number[]
    color_packed: number[][]
    intensity: number[]
    classification: number[]
    coords: number[][]
  } {
    return {
      distance: [],
      altitude: [],
      color_packed: [],
      intensity: [],
      classification: [],
      coords: []
    }
  }

  getProfileByLOD(clippedLine: any[], distanceOffset: number, resetPlot: boolean, minLOD: number, exportLAS: boolean, userWidth: number) {
    this.profilePoints = this.getEmptyProfilePoints_()

    if (resetPlot) {
      this.isPlotSetup_ = false
    }

    d3.select('.gmf-lidarprofile-container .lidar-error').style('visibility', 'hidden')
    let pytreeLinestring = this.utils.getPytreeLinestring(this.line_)

    let maxLODWith
    let lastLOD = false
    d3.select('.gmf-lidarprofile-container .lod-info').html('')
    const max_levels = this.config.serverConfig.max_levels
    let profileWidth = 0

    if (distanceOffset == 0) {
      maxLODWith = this.utils.getNiceLOD(this.line_.getLength(), max_levels)
    } else {
      const domain = this.plot.updateScaleX.domain()
      pytreeLinestring = ''
      for (let i = 0; i < clippedLine.length; i++) {
        pytreeLinestring += `{${clippedLine[i][0]},${clippedLine[i][1]}},`
      }
      pytreeLinestring = pytreeLinestring.substr(0, pytreeLinestring.length - 1)
      maxLODWith = this.utils.getNiceLOD(domain[1] - domain[0], max_levels)
    }

    this.config.clientConfig.pointSum = 0
    if (this.config.clientConfig.autoWidth) {
      profileWidth = maxLODWith.width
    } else {
      profileWidth = this.config.serverConfig.width
    }
    profileWidth = userWidth
    const profileWidthTxt = i18next.t('Profile width: ')
    d3.select('.gmf-lidarprofile-container .width-info').html(`${profileWidthTxt} ${profileWidth}m`)
    if (!exportLAS) {
      for (let i = 0; i < maxLODWith.maxLOD; i++) {
        if (i == 0) {
          this.queryPytree_(minLOD, this.config.serverConfig.initialLOD, i, pytreeLinestring, distanceOffset, lastLOD, profileWidth, resetPlot, false)
          i += this.config.serverConfig.initialLOD - 1
        } else if (i < maxLODWith.maxLOD - 1) {
          this.queryPytree_(minLOD + i, minLOD + i + 1, i, pytreeLinestring, distanceOffset, lastLOD, profileWidth, false, false)
        } else {
          lastLOD = true
          this.queryPytree_(minLOD + i, minLOD + i + 1, i, pytreeLinestring, distanceOffset, lastLOD, profileWidth, false, false)
        }
      }
    } else {
      this.queryPytree_(undefined, undefined, undefined, pytreeLinestring, distanceOffset, lastLOD, profileWidth, false, true)
    }
  }

  queryPytree_(minLOD: number | undefined, maxLOD: number | undefined, iter: number | undefined, coordinates: string, distanceOffset: number, lastLOD: boolean, width: number, resetPlot: boolean, exportLAS: boolean) {
    if (!this.config) throw new Error('Missing config')
    if (!this.config.serverConfig) throw new Error('Missing config.serverConfig')
    this.map.getViewport().style.cursor = 'wait'
    document.body.style.cursor = 'wait'
    const lodInfo = d3.select('.gmf-lidarprofile-container .lod-info')
    if (this.config.serverConfig.debug) {
      let html = lodInfo.html()
      const loadingLodTxt = i18next.t('Loading LOD: ')
      html += `${loadingLodTxt} ${minLOD}-${maxLOD}...<br>`
      lodInfo.html(html)
    }

    const pointCloudName = this.config.serverConfig.default_point_cloud
    const getLAS = exportLAS ? 1 : 0

    const options = {
      method: 'GET',
      headers: { 'Content-Type': 'text/plain; charset=x-user-defined' },
      responseType: 'arraybuffer' as const,
    }
    if (exportLAS) {
      const url = `${ import.meta.env.VITE_LIDAR_PROFILE_URL }profile/get?width=${width}&coordinates=${coordinates}&pointCloud=${pointCloudName}&attributes=&getLAS=${getLAS}`
      fetch(url, options).then(res => res.blob())
        .then(blobobject => {
          const blob = window.URL.createObjectURL(blobobject)
          const anchor = document.createElement('a')
          anchor.style.display = 'none'
          anchor.href = blob
          anchor.download = "output.las"
          document.body.appendChild(anchor)
          anchor.click()
          window.URL.revokeObjectURL(blob)
        }).finally(() => {
          map.getViewport().style.cursor = ''
          document.body.style.cursor = ''
        })
    } else {
      let url = `${import.meta.env.VITE_LIDAR_PROFILE_URL }profile/get?minLOD=${minLOD}&maxLOD=${maxLOD}&width=${width}&coordinates=${coordinates}&pointCloud=${pointCloudName}&attributes=&getLAS=${getLAS}`
      if (minLOD === undefined || maxLOD === undefined) {
        url = `${import.meta.env.VITE_LIDAR_PROFILE_URL }profile/get?width=${width}&coordinates=${coordinates}&pointCloud=${pointCloudName}&attributes=&getLAS=${getLAS}`
      }
      fetch(url, options)
        .then((resp) => resp.arrayBuffer())
        .then((data) => {
          if (!this.config) throw new Error('Missing config')
          if (!this.config.serverConfig) throw new Error('Missing config.serverConfig')
          if (this.config.serverConfig.debug) {
            let html = lodInfo.html()
            const lodTxt = i18next.t('LOD: ')
            const loadedTxt = i18next.t('loaded')
            html += `${lodTxt} ${minLOD}-${maxLOD} ${loadedTxt}<br>`
            lodInfo.html(html)
          }
          this.processBuffer_(data, iter ?? 0, distanceOffset, lastLOD, resetPlot)
        })
        .catch((err) => {
          throw `Error on pytree query: ${err.message}`
        }).finally(() => {
          this.map.getViewport().style.cursor = ''
          document.body.style.cursor = ''
        })
    }
  }

  processBuffer_(profile: ArrayBuffer, iter: number, distanceOffset: number, lastLOD: boolean, resetPlot: boolean) {
    const lidarError = d3.select('.gmf-lidarprofile-container .lidar-error');

    const typedArrayInt32 = new Int32Array(profile, 0, 4);
    const headerSize = typedArrayInt32[0];

    const uInt8header = new Uint8Array(profile, 4, headerSize);
    let strHeaderLocal = '';
    for (let i = 0; i < uInt8header.length; i++) {
      strHeaderLocal += String.fromCharCode(uInt8header[i]);
    }

    try {

      JSON.parse(strHeaderLocal);

    } catch (e) {
      if (!this.isPlotSetup_) {
        const canvas = d3.select('.gmf-lidarprofile-container .lidar-canvas');
        const canvasEl = canvas.node();
        if (canvasEl && canvasEl instanceof HTMLCanvasElement) {
            const ctx = canvasEl.getContext('2d');
            if (ctx) {
              ctx.clearRect(0, 0, canvasEl.getBoundingClientRect().width, canvasEl.getBoundingClientRect().height);
            }
            canvas.selectAll('*').remove();
            const errorTxt = this.getHTMLError_();
            lidarError.style('visibility', 'visible');
            lidarError.html(errorTxt);}
      }
      return;
    }

    lidarError.style('visibility', 'hidden');

    const jHeader = JSON.parse(strHeaderLocal);

    // If number of points return is higher than Pytree configuration max value,
    // stop sending requests.
    this.config.clientConfig.pointSum += jHeader['points'];
    if (this.config.clientConfig.pointSum >
        this.config.serverConfig.max_point_number) {
      console.warn('Number of points is higher than Pytree configuration max value !');
    }

    const attr = jHeader['pointAttributes'];
    const attributes = [];
    for (let j = 0; j < attr.length; j++) {
      if (this.config.serverConfig.point_attributes[attr[j]] != undefined) {
        attributes.push(this.config.serverConfig.point_attributes[attr[j]]);
      }
    }
    const scale = jHeader['scale'];

    if (jHeader['points'] < 3) {
      return;
    }

    const points = this.getEmptyProfilePoints_();
    const bytesPerPoint = jHeader['bytesPerPoint'];
    const buffer = profile.slice(4 + headerSize);
    for (let i = 0; i < jHeader['points']; i++) {

      const byteOffset = bytesPerPoint * i;
      const view = new DataView(buffer, byteOffset, bytesPerPoint);
      let aoffset = 0;
      for (let k = 0; k < attributes.length; k++) {

        if (attributes[k]['value'] == 'POSITION_PROJECTED_PROFILE') {
          const udist = view.getUint32(aoffset, true);
          const dist = udist * scale;
          points.distance.push(Math.round(100 * (distanceOffset + dist)) / 100);
          this.profilePoints.distance.push(Math.round(100 * (distanceOffset + dist)) / 100);

        } else if (attributes[k]['value']  == 'CLASSIFICATION') {
          const classif = view.getUint8(aoffset);
          points.classification.push(classif);
          this.profilePoints.classification.push(classif);

        } else if (attributes[k]['value']  == 'INTENSITY') {
          const intensity = view.getUint8(aoffset);
          points.intensity.push(intensity);
          this.profilePoints.intensity.push(intensity);

        } else if (attributes[k]['value'] == 'COLOR_PACKED') {
          const r = view.getUint8(aoffset);
          const g = view.getUint8(aoffset + 1);
          const b = view.getUint8(aoffset + 2);
          points.color_packed.push([r, g, b]);
          this.profilePoints.color_packed.push([r, g, b]);

        } else if (attributes[k]['value']  == 'POSITION_CARTESIAN') {
          const x = view.getInt32(aoffset, true) * scale + jHeader['boundingBox']['lx'];
          const y = view.getInt32(aoffset + 4, true) * scale + jHeader['boundingBox']['ly'];
          const z = view.getInt32(aoffset + 8, true) * scale + jHeader['boundingBox']['lz'];
          points.coords.push([x, y]);
          points.altitude.push(z);
          this.profilePoints.altitude.push(z);
          this.profilePoints.coords.push([x, y]);
        }
        aoffset = aoffset + attributes[k]['bytes'];
      }
    }

    const rangeX = [0, this.line_.getLength()];

    const rangeY = [this.utils.arrayMin(points.altitude), this.utils.arrayMax(points.altitude)];

    if ((iter == 0 && resetPlot) || !this.isPlotSetup_) {
      this.plot.setupPlot(rangeX, rangeY);
      this.isPlotSetup_ = true;
    }
    this.plot.drawPoints(points);
  }
  getHTMLError_() {
    const errorInfoTxt = i18next.t('Lidar profile service error')
    const errorOfflineTxt = i18next.t('It might be offline')
    const errorOutsideTxt = i18next.t('Or did you attempt to draw a profile outside data extent?')
    const errorNoPointError = i18next.t('Or did you attempt to draw such a small profile that no point was returned?')
    return `
      <div class="lidarprofile-error">
      <p class="bold">${errorInfoTxt}</p>
      <p>${errorOfflineTxt}</p>
      <p>${errorOutsideTxt}</p>
      <p>${errorNoPointError}</p>
    `
  }

  updateData() {
    debounce(this.updateData_.bind(this), 200)()
  }

  updateData_() {
    console.log("Update data")
    const domainX = this.plot.updateScaleX['domain']();
    let map_resolution = this.map_ ? this.map_.getView().getResolution() : 0;
    map_resolution = map_resolution || 0;
    const clip = this.utils.clipLineByMeasure(this.line_, domainX[0], domainX[1]);
    const bufferSource = this.lidarBuffer.getSource();
    if (bufferSource) {
      bufferSource.clear();
      bufferSource.addFeature(clip.bufferGeom);
    }
    this.lidarBuffer.setStyle(clip.bufferStyle);

    const span = domainX[1] - domainX[0];
    const maxLODWidth = this.utils.getNiceLOD(span, this.config.serverConfig.max_levels);
    const xTolerance = 0.2;

    if (Math.abs(domainX[0] - this.plot.previousDomainX[0]) < xTolerance &&
        Math.abs(domainX[1] - this.plot.previousDomainX[1]) < xTolerance) {

      this.plot.drawPoints(this.profilePoints);

    } else {
      if (maxLODWidth.maxLOD <= this.config.serverConfig.initialLOD) {
        this.plot.drawPoints(this.profilePoints);
      } else {
        this.getProfileByLOD(clip.clippedLine, clip.distanceOffset, false, 0, false, this.width);
      }
    }

    this.plot.previousDomainX = domainX;
  }
}