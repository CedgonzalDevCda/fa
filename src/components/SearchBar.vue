<template>
  <div>
    <input @keydown.enter="searchMovie()" type="text" id="query" placeholder="Recherche" />
    <button @click="searchMovie()">Rechercher</button>
  </div>
</template>

<script>
export default {
  name: "SearchBar",

  methods: {
    searchMovie: function () {
      this.$router.push({ name: 'home' })
      let query = document.getElementById('query').value
      this.$store.commit("setQuery", query)
      this.$store.dispatch('getSearchMovies')
    }
  },
};
</script>


<style scoped>
</style>