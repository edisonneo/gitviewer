<template lang='pug'>
	section
		#spinner
		ul
			li(v-for="project in projects")
				h4(@click='viewReadme(project)') {{ project.name }}
		h2#error-msg

</template>

<script>

import axios from 'axios'
import { mapState } from 'vuex';


export default {
	name: 'project-list',
	
	data() {
		return {
			projects: null
		}
	},
	
	computed: {
		...mapState(['username'])	
	},
	created(){
		
	},
	mounted () {
		var vm = this;
		this.$spinner = document.getElementById('spinner');
		this.$errorMsg = document.getElementById('error-msg');

		this.$spinner.style.display = 'block';
		
		if(!this.username){
			var username = this.$route.path.replace('/', '')
			this.$store.commit('setUsername', username)
		}

		this.$store.commit('setPageTitle', this.username + "'s projects");
		axios.get("https://api.github.com/users"+ this.$route.path +"/repos")
			.then(response => {
				this.$spinner.style.display = 'none';
				this.projects = response.data;
				if(response.data.length == 0){
					this.$errorMsg.innerHTML = 'No projects found :('
				}
				
			})
			.catch(error => {
				var errorMsg = error.response.data.message
				this.$spinner.style.display = 'none';
				this.$errorMsg.innerHTML = errorMsg
			});

	},
	methods: {
		viewReadme(project){
			this.$store.commit('setProject', project)
			this.$store.commit('setPageTitle', project.name + "'s Readme File")
			this.$router.push('/'+ this.username +'/'+ project.name);
		}
	}
}
</script>

<style lang='sass'>
	
	ul
		margin: 30px 0px
		padding: 0
		li
			text-align: left
			list-style: none
			margin-bottom: 16px 
			h4 
				font-weight: 400
				font-size: 1.2rem
				&:hover
					text-decoration: underline
					cursor: pointer


</style>
