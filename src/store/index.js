import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    movieId: '',
    movieResult: null,
    query: '',
    movieTrailer: '',
    searchResult: ['test']
  },
  // plugins:[], 
  getters: {

  },
  mutations: {
    setQuery(state, query) {
      state.query = query
    },
    setMovieID(state, movieId) {
      state.movieId = movieId
    },
    setMovieResult(state, movieResult) {
      state.movieResult = movieResult
    },
    setSearchResult(state, result) {
      state.searchResult = result
    },
    setMovieTrailer(state, movieTrailer) {
      state.movieTrailer = movieTrailer
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
    },
    getSingleMovie: async function(context) {
      try {
        let response = await fetch(`https://api.themoviedb.org/3/movie/${context.state.movieId}?api_key=da9f03e1518b17b8988cfcc00dfa3c2b&language=fr-FR`)
        let movieResult = await response.json()
        context.commit('setMovieResult', movieResult)
        context.dispatch("getTrailerMovie");
      } catch (e) {
        console.error('ERREUR', e)
      }
    },
    getTrailerMovie: async function(context) {
      try {
        let response = await fetch(`https://api.themoviedb.org/3/movie/${context.state.movieId}/videos?api_key=da9f03e1518b17b8988cfcc00dfa3c2b&language=fr-FR`)
        let movieTrailer = await response.json()
        context.commit('setMovieTrailer', movieTrailer)
      } catch (e) {
        console.error('ERREUR', e)
      }
    }
  }
})
