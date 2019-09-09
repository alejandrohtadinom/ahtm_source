<template>
  <div id="app">
    <baseNavbarComponent />
    <router-view/>
  </div>
</template>
<style lang="scss">
  @import "./styles/global.scss";
</style>
<script>
  import baseNavbarComponent from '@/components/base/baseNavbarComponent.vue'

  export default {
    name: 'app',
    components: {
      baseNavbarComponent
    }
  }
</script>