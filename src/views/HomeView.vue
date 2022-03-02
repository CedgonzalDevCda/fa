<template>
  <div class="home">
    <HeaderTop />
    <p>Welcome home</p>
    <p>Component newMovies</p>
    <div v-for="movie of searchResult.results" :key="movie">
      {{ movie.title }}
      <img v-if="movie.poster_path != '' " :src= "poster_path">
    </div>
    <p>Carousel - film à la une</p>
  </div>
</template>
<script>
// @ is an alias to /src
import HeaderTop from "@/components/HeaderTop.vue";

export default {
  name: "HomeView",
  components: {
    HeaderTop,
  },

  computed: {
    searchResult() {
      return this.$store.state.searchResult;
    },
  },
};
</script>
