<script setup lang="ts">

</script>
<template>
    <div class="lidarprofile-container">
        <div class="lidar-legend">
            <div class="width-info"></div>
            <div class="lod-info"></div>
            <div class="lidar-info"></div>
        </div>
        <div class="lidarprofile">
            <div class="lidar-error">RRRRRRRRRRRRRRRRRRR</div>
            <canvas class="lidar-canvas"></canvas>
            <svg class="lidar-svg" style="fill: #ffff00;position:absolute;z-index:1;"></svg>
        </div>
        <div class="close">&times;</div>
    </div>
</template>