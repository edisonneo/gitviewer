<template lang="pug">
  section.container
    <app-nav-bar/>
    div
      <app-project-readme/>
  
</template>

<script>

import AppProjectReadme from '~/components/AppProjectReadme.vue'
import AppNavBar from '~/components/AppNavBar.vue'

export default {
  components: {
    AppProjectReadme,
    AppNavBar
  }
  // validate ({ params }) {
  //   // Must be a number
  //   return /^\d+$/.test(params.project)
  // }
}
</script>

<style lang='sass'>

body


.container 
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  text-align: center


.title 
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
  display: block
  font-weight: 300
  font-size: 100px
  color: #35495e
  letter-spacing: 1px


.subtitle 
  font-weight: 300
  font-size: 42px
  color: #526488
  word-spacing: 5px
  padding-bottom: 15px


.links 
  padding-top: 15px

</style>
