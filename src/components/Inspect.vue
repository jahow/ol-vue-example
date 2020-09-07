<template>
  <ul>
    <li :key="prop" v-for="prop in props">
      <b>{{prop}}:</b> {{feature.get(prop)}}
    </li>
  </ul>
</template>

<script>
  import Feature from 'ol/Feature'

  export default {
    name: 'Inspect',
    props: {
      feature: Feature
    },
    computed: {
      props() {
        return this.feature
          ? this.feature.getKeys().filter(key => key !== this.feature.getGeometryName())
          : []
      }
    }
  }
</script>

<style scoped>
  ul {
    list-style: none;
  }
</style>
