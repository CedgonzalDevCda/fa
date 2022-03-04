<template>
  <div class="main-container" v-if="movie !== null">
    <div v-show="trailerKey !== null">
      <iframe :src="youtubeUrl + trailerKey " frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <h2>{{ movie.title }}</h2>
    <p><span>Date de sortie:</span> {{ movie.release_date }}</p>
    <div class="excerpt"><span>Synopsis:</span> {{ movie.overview }}</div>
    <div class="flex j-around align-start">
      <div >
        <img v-if="movie.poster_path !== null" :src="base_url + file_size + movie.poster_path" />
        <img v-else
        src="https://webboy.fr/wp-content/uploads/2022/03/image-non-disponible.png"
          width="200px"
          height="300px">
      </div>
      <div>
        <p>Information</p>
        <ul>
          <li>Popularité {{ movie.popularity }}</li>
          <li>Note: {{ movie.vote_average }}</li>
          <li>Nombre de votes: {{ movie.vote_count }}</li>
        </ul>
      </div>
    </div>
    <div class="f-box j-around">
      <div @click="addToFavorite()" class="boxlist">Ajouter aux favories</div>
      <div @click="addToMovieToSee()" class="boxlist">
        Ajouter aux films "A voir"
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "MoviePage",
  data: function () {
    return {
      base_url: "https://image.tmdb.org/t/p/",
      file_size: "w200/",
      youtubeUrl: "https://www.youtube.com/embed/",

    };
  },
  created: function () {
    this.$store.commit("setMovieID", this.$route.params.movieId);
    this.$store.dispatch("getSingleMovie");
  },
  computed: {
    movie() {
      return this.$store.state.movieResult;
    },
    trailerKey() {
      if (this.$store.state.movieTrailer.results.length !== 0) {
      return this.$store.state.movieTrailer.results[0].key;
      } else return null
    }
  },
  methods: {
    addToFavorite: function () {
      console.log("Film ajouté aux favories");
    },
    addToMovieToSee: function () {
      console.log("Film ajouté à la liste des films à voir");
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  margin: 0 auto;
  width: 70%;
  color: #f1f1f1;
}
h2 {
  color: white;
  font-size: 26px;
}
.excerpt {
  width: 65%;
  margin-left: 150px;
  margin-bottom: 50px;
}

.excerpt span, p span{
  text-decoration: underline;
}

.boxlist {
  width: 190px;
  height: 30px;
  border: 1px solid green;
  border-radius: 5px;
  background-color: green;
  color: white;
  cursor: pointer;
}

.boxlist:hover{
  background-color: rgb(4, 185, 4);
}

.f-box {
  display: flex;
  justify-content: center;
  margin-top:30px;  
}
.flex {
  display: flex;
}

.j-around {
  justify-content: space-around;
}
.align-start {
  align-items: flex-start;
}
</style>
