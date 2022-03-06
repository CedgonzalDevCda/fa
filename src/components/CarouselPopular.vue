<template>
  <hooper :settings="hooperSettings">
    <slide v-for="movie of moviesPopular.results" :key="movie">
      <router-link
        @click="searchSingleMovie()"
        :to="{ name: 'movie', params: { movieId: movie.id } }"
      >
        <div v-if="movie.poster_path == null">
          <p>{{ movie.title }}</p>
          />
        </div>
        <div v-else>
          <img :src="base_url + file_size + movie.poster_path" height="300px" :title= movie.title />
        </div>
      </router-link>
    </slide>
  </hooper>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "CarouselPopular",
  components: {
    Hooper,
    Slide,
  },
  data() {
    return {
      base_url: "https://image.tmdb.org/t/p/",
      file_size: "w200/",
      hooperSettings: {
        itemsToShow: 1,
        centerMode: true,
        infiniteScroll: "true",
        autoPlay: "true",
        playSpeed: "2000",
        vertical: "true",
      },
    };
  },
  computed: {
    moviesPopular() {
      return this.$store.state.moviesPopular;
    },
  },
  created: function () {
    this.$store.dispatch("getCarouselPopular");
  },
};
</script>
