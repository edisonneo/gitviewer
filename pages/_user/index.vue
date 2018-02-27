<template lang="pug">
  section.container
    <app-nav-bar/>
    div
      <app-project-list/>

      
  
</template>

<script>

import AppProjectList from '~/components/AppProjectList.vue'
import AppNavBar from '~/components/AppNavBar.vue'

export default {
  components: {
    AppProjectList,
    AppNavBar
    // AppSearchUser
  }
}
</script>

<style lang='sass'>


</style>
