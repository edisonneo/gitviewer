import Vuex from 'vuex'

const AppStore = () => {
	return new Vuex.Store({
		state: {
			username: null,
			project: null,
			pageTitle: null
		},
		mutations: {
			setUsername(state, username){
				state.username = username
			},
			setProject(state, project){
				state.project = project
			},
			setPageTitle(state, title){
				state.pageTitle = title
			}
		}
	})
}

export default AppStore