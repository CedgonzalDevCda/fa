<template>
  <div class="main-page flex f-wrap j-between">
    <div
      :id="movie.id"
      class="movie-box"
      v-for="movie of searchResult.results"
      :key="movie"
    >
      <router-link
        @click="searchSingleMovie()"
        :id="movie.id"
        :to="{ name: 'movie', params: { movieId: movie.id } }"
      >
        <p class="movie-title">{{ movie.title }}</p>
        <p v-if="movie.poster_path == null">
          <img
            src="https://webboy.fr/wp-content/uploads/2022/03/image-non-disponible.png"
            width="200px"
            height="300px"
          />
        </p>
        <p v-else>
          <img
            :src="base_url + file_size + movie.poster_path"
            width="200px"
            height="300px"
          />
        </p>
      </router-link>
      <!-- <a :href="`https://api.themoviedb.org/3/movie/${movie.id}?api_key=da9f03e1518b17b8988cfcc00dfa3c2b&language=fr-FR`">Lien id# {{ movie.id }}</a><br> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchPage",
  data: function () {
    return {
      // See https://developers.themoviedb.org/3/getting-started/images
      base_url: "https://image.tmdb.org/t/p/",
      file_size: "w200/",
    };
  },
  computed: {
    searchResult() {
      return this.$store.state.searchResult;
    },
  },
  methods: {
    searchSingleMovie: function (id) {
      let movieID = document.getElementById(id).value;
      this.$store.commit("setMovieID", movieID);
      this.$store.dispatch("getSingleMovie");
    },
  },
};
</script>


<style scoped>

.main-page {
  margin: 0 auto;
  color: whitesmoke;
  width: 60%;

}
.flex {
  display: flex;
}
.f-wrap {
  flex-wrap: wrap;
}
.j-between {
  justify-content: space-between;
}
.j-around {
  justify-content: space-around;
}
.movie-box {
  width: 205px;
  height: 380px;
  border-radius: 5px;
}

.movie-box a {
  text-decoration: none;
  list-style: none;
  color: #f1f1f1;
  text-shadow: 3px 3px 3px red;
}

.movie-title {
  height: 20px;
  font-size: 14px;
  font-weight: bold;
}
</style>