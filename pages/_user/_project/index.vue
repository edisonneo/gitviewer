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
}
</script>

<style lang='sass'>
</style>
