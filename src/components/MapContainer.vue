<template>
  <div ref="map-root"
       style="width: 100%; height: 100%">
  </div>
</template>

<script>
  import View from 'ol/View'
  import Map from 'ol/Map'
  import TileLayer from 'ol/layer/Tile'
  import OSM from 'ol/source/OSM'
  import VectorLayer from 'ol/layer/Vector'
  import VectorSource from 'ol/source/Vector'
  import GeoJSON from 'ol/format/GeoJSON'

  import 'ol/ol.css'

  export default {
    name: 'MapContainer',
    components: {},
    props: {
      geojson: Object
    },
    data: () => ({
      olMap: null,
      vectorLayer: null,
      selectedFeature: null
    }),
    mounted() {
      this.vectorLayer = new VectorLayer({
        source: new VectorSource({
          features: [],
        }),
      })

      this.olMap = new Map({
        target: this.$refs['map-root'],
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
          this.vectorLayer
        ],
        view: new View({
          zoom: 0,
          center: [0, 0],
          constrainResolution: true
        }),
      })

      this.olMap.on('pointermove', (event) => {
        const hovered = this.olMap.forEachFeatureAtPixel(event.pixel, (feature) => feature)
        if (hovered !== this.selectedFeature) {
          this.$set(this, 'selectedFeature', hovered);
        }
      })

      this.updateSource(this.geojson)
    },
    watch: {
      geojson(value) {
        this.updateSource(value)
      },
      selectedFeature(value) {
        this.$emit('select', value)
      }
    },
    methods: {
      updateSource(geojson) {
        const view = this.olMap.getView();
        const source = this.vectorLayer.getSource();

        const features = new GeoJSON({
          featureProjection: 'EPSG:3857',
        }).readFeatures(geojson);

        source.clear();
        source.addFeatures(features);

        view.fit(source.getExtent())
      }
    }
  }
</script>
