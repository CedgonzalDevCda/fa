// import loadSearchMovies from './components/SearchBar.vue'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    query: '',
    searchResult: ['test']
  },
  getters: {

  },
  mutations: {
    setQuery(state, query) {
      state.query = query
    },
    setSearchResult(state, result) {
      state.searchResult = result
    }
  },
  actions: {
    getSearchMovies: async function(context) {
      try {
          let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=da9f03e1518b17b8988cfcc00dfa3c2b&language=fr-FR&query=${context.state.query}&page=1&include_adult=false`)
          let result = await response.json()
          context.commit('setSearchResult', result)

      } catch (e) {
          console.error('ERREUR', e)
      }
    }
  }
})
