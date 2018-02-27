<template lang='pug'>
	section
		#spinner
		#content
		h2#error-msg

</template>

<script>

import axios from 'axios';
import { mapState } from 'vuex';
import showdown from 'showdown';

export default {
	name: 'project-list',
	
	data() {
		return {
			
		}
	},
	
	computed: {
		...mapState(['username','project'])
		
	},
	created(){
		
	},
	mounted () {
		var vm = this;
		this.$spinner = document.getElementById('spinner');
		this.converter = new showdown.Converter();
		this.$content = document.getElementById('content');					
		this.$errorMsg = document.getElementById('error-msg');
		
		this.$spinner.style.display = 'block';
		
		axios.get("https://api.github.com/repos/"+ this.username +"/"+ this.project.name +"/contents/README.md")
				.then(response => {
					this.renderReadme(response.data.content)
				})
				.catch(error => {
					axios.get("https://api.github.com/repos/"+ this.username +"/"+ this.project.name +"/contents/readme.markdown")
						.then(response => {
							this.renderReadme(response.data.content)
						})	
						.catch(error => {
							var errorMsg = error.response.data.message
							this.$spinner.style.display = 'none';
							this.$errorMsg.innerHTML = "No Readme File Found :("
						})
				})
	},
	methods: {
		
		renderReadme(content){
			var markdown = atob(content)	
			this.$spinner.style.display = 'none';
			this.$content.innerHTML = this.converter.makeHtml(markdown);
		}
	}
}
</script>

<style lang='sass'>
	#content
		padding-top: 40px
		max-width: 700px
		text-align: left
		h1 
			margin-bottom: 20px
		h2
			margin: 16px 0px
		h3,h4,p 
			margin-bottom: 8px
		pre
			padding: 20px 
			background: #f8f8f8
			border-radius: 5px
			margin-bottom: 12px
			overflow-x: scroll
		code 
			 background: #f8f8f8
		ul 
			padding-left: 40px
			li
				list-style: default
</style>
