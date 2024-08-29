<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { select, Selection } from 'd3-selection'
import * as olEvents from 'ol/events'
// import olFeature from 'ol/Feature'
// import olGeomPoint from 'ol/geom/Point'

import { debounce } from '@/services/utils'
import D3GraphElevation from './d3-graph-elevation'
import { Profile, ProfileOptions } from './d3-graph-elevation.d'
import { dataset } from './d3-graph-elevation.fixtures' // TODO: Remove dataset from fixtures and use api instead

const d3 = { select }
const graph = ref()

const props = withDefaults(
  defineProps<{
    showTooltip: boolean
  }>(),
  {
    showTooltip: true,
  }
)

function removeMeasureTooltip() {
  // TODO:
  // if (this.measureTooltipElement_  !== null) {
  //   this.measureTooltipElement_.parentNode.removeChild(
  //       this.measureTooltipElement_);
  //   this.measureTooltipElement_ = null;
  //   this.measureTooltip_ = null;
  // }
}

// function createMeasureTooltip() {
// TODO:
// this.removeMeasureTooltip_();
// this.measureTooltipElement_ = document.createElement('DIV');
// this.measureTooltipElement_.classList.add('tooltip');
// this.measureTooltipElement_.classList.add('ngeo-tooltip-measure');
// this.measureTooltip_ = new olOverlay({
//   element: this.measureTooltipElement_,
//   offset: [0, -15],
//   positioning: 'bottom-center'
// });
// this.map_.addOverlay(this.measureTooltip_);
// }

let profile: Profile, elevationData: any, poiData: any
let selection: Selection<any, unknown, null, undefined>
let hoverCallback = () =>
  // point: any,
  // dist: number,
  // xUnits: string,
  // elevation: Elevations,
  // yUnits: string
  {
    // TODO:
    if (props.showTooltip) {
      // An item in the list of points given to the profile.
      // this['point'] = point;
      // this.featureOverlay_.clear();
      // const curPoint = new olGeomPoint([point['x'], point['y']]);
      // curPoint.transform('EPSG:2169', this.map_.getView().getProjection());
      // var positionFeature = new olFeature({
      //   geometry: curPoint
      // });
      // this.featureOverlay_.addFeature(positionFeature);
      // createMeasureTooltip();
      // this.measureTooltipElement_.innerHTML = this.distanceLabel_ +
      //     this.formatDistance_(dist, xUnits) +
      //     '<br>' +
      //     this.elevationLabel_ +
      //     this.formatElevation_(elevation['line1'], yUnits);
      // this.measureTooltip_.setPosition(curPoint.getCoordinates());
      // this.snappedPoint_.setGeometry(new olGeomPoint([point.x, point.y]));
    }
  }
let profileOptions: ProfileOptions = {
  linesConfiguration: {
    line1: {
      zExtractor: item =>
        'values' in item && 'dhm' in item['values']
          ? parseFloat(item['values']['dhm'].toPrecision(5))
          : 0,
    },
  },
  distanceExtractor: item => ('dist' in item ? item['dist'] : 0),
  hoverCallback,
  outCallback: () => {
    // TODO:
    if (props.showTooltip) {
      // this['point'] = null;
      removeMeasureTooltip()
      // this.featureOverlay_.clear();
      // this.snappedPoint_.setGeometry(null);
    }
  },
  formatter: {
    xhover: (dist, units) => parseFloat(dist.toPrecision(3)) + ' ' + units,
    yhover: (elevation, units) =>
      parseFloat(elevation.toPrecision(4)) + ' ' + units,
  },
}

onMounted(() => {
  selection = d3.select(graph.value)
  profile = D3GraphElevation(profileOptions)

  refreshData()
})

olEvents.listen(window, 'resize', debounce(refreshData, 50))

function refreshData() {
  if (profile !== undefined) {
    selection.datum(dataset).call(profile)
    if (elevationData !== undefined) {
      profile.showPois(poiData)
    }
  }
}
</script>

<template>
  <div class="h-[250px]" ref="graph"></div>
</template>
