<script setup lang="ts"></script>
<style lang="css" scoped>
.lidarprofile-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.lidar-flex {
  display: flex;
  flex: 1 1 0%;
  height: 100%;
}
.lidar-legend {
  width: 15rem;
  min-width: 15rem;
  max-width: 15rem;
  height: 100%;
  background: #f8fafc;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 2;
}
.lidarprofile {
  flex: 1 1 0%;
  position: relative;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
}
.close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 10;
  font-size: 2rem;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}
</style>
<template>
  <div class="lidarprofile-container">
    <div class="close">&times;</div>
    <div class="lidar-flex">
      <div class="lidar-legend">
        <div class="width-info"></div>
        <div class="lod-info"></div>
        <div class="lidar-info"></div>
      </div>
      <div class="lidarprofile">
        <div class="lidar-error"></div>
        <canvas class="lidar-canvas"></canvas>
        <svg
          class="lidar-svg"
          style="fill: #ffff00; position: absolute; z-index: 1"
        ></svg>
      </div>
    </div>
  </div>
</template>
