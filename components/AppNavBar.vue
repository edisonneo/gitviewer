<template lang='pug'>
	.navbar
		a(@click="goBack") Back
		h2 {{ $store.state.pageTitle }}

</template>

<script>

import axios from 'axios'
import { mapState } from 'vuex';


export default {
	name: 'navbar',
	
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
		goBack(){
			this.$router.back()
		}
	}
}
</script>

<style lang='sass'>
	
	.navbar
		position: fixed
		background: #fff
		top: 0
		z-index: 10
		left: 0 
		width: 100%
		box-shadow: 0px 0px 10px 0px #777
		padding: 20px 0px
		display: flex 
		justify-content: center
		align-items: center
		a 
			position: absolute 
			left: 20px
			cursor: pointer
			&:hover
				text-decoration: underline


</style>
 