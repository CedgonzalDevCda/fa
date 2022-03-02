<template>
  <div>
    <input type="text" id="query" placeholder="Recherche" />
    <button @click="searchMovie()">Rechercher</button>
    <p>{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
  methods: {
    searchMovie: function () {
      let query = document.getElementById('query').value
      this.$store.commit("setQuery", query)
      this.$store.dispatch('getSearchMovies')
    }
  },
};
</script>


<style scoped>
</style>