import Vuex from 'vuex'

const AppStore = () => {
  return new Vuex.Store({
    state: {
      view: 0,
      username: null,
      project: null,
      pageTitle: null
    },
    mutations: {
      updateView (state, view) {
        state.view = view 
      },
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