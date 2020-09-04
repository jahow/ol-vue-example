<template>
  <div id="ol-map"></div>
</template>

<style>
  #ol-map {
    width: 100%;
    height: 100%;
    border-radius: 4px;
  }
</style>

<script>
  import View from 'ol/View'
  import Map from 'ol/Map'
  import TileLayer from 'ol/layer/Tile'
  import XYZ from 'ol/source/XYZ'

  export default {
    name: 'MapContainer',
    components: {},
    props: {},
    mounted() {
      new Map({
        target: 'ol-map',
        layers: [
          new TileLayer({
            source: new XYZ({
              url: 'http://a.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png',
            }),
          }),
        ],
        view: new View({
          zoom: 0,
          center: [0, 0],
          constrainResolution: true
        }),
      })
    },
  }
</script>
