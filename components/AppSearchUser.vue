<template lang='pug'>
	section
		h1 Enter a Github username 
		input(v-on:keyup.enter="submit" type="text" placeholder="githubusername")

</template>

<script>

import axios from 'axios'
import { mapState } from 'vuex';


export default {
	name: 'search-user',
	
	data() {
		return {
		}
	},
	
	computed: {
		
	},
	created(){
		
	},
	mounted () {
		
	},
	methods: {
		submit(event){
			var username = event.target.value;
			this.$store.commit('setUsername', username)
			this.$store.commit('setPageTitle', username + "'s projects");
			this.$router.push('/'+ username);
		}
	}
}
</script>

<style lang='sass'>
	
	input
		margin: 28px 0px
		height: 40px
		width: 100%
		max-width: 300px
		font-size: 1.2rem
		font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
		text-align: center

</style>
