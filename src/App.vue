<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <!-- <div>
    134241234223
    <a href="###">23423432432432</a>
  </div> -->
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    // HelloWorld
  }
})
</script>

<style lang="stylus">
  div{
    a{
      color red
    }
  }
</style>
