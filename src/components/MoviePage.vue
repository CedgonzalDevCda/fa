<template>
  <div class="main-container" v-if="movie !== null">
    <div v-if="movie.video !== false">
      <!-- bande-annonce du film:<br> -->
      <!-- <iframe :src="this.youtubeUrl+movie.video" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
    </div>
    <h2>{{ movie.title }}</h2>
    <p><span>Date de sortie:</span> {{ movie.release_date }}</p>
    <div class="excerpt"><span>Synopsis:</span> {{ movie.overview }}</div>
    <div class="flex j-around align-start">
      <div>
        <img :src="base_url + file_size + movie.poster_path" />
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
// @ is an alias to /src

export default {
  name: "MoviePage",
  data: function () {
    return {
      // See https://developers.themoviedb.org/3/getting-started/images
      base_url: "https://image.tmdb.org/t/p/",
      file_size: "w200/",
      // youtubeUrl: "https://www.youtube.com/embed/",
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
  },
  methods: {
    addToFavorite: function () {
      console.log("Film ajouté aux favories");
    },
    addToMovieToSee: function () {
      console.log("Film ajouté à la liste des films à voir");
    },
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
  margin: 0 auto;
}

.excerpt span{
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
.f-start {
  display: flex;
  justify-content: flex-start;
}

.j-around {
  justify-content: space-around;
}
.align-start {
  align-items: flex-start;
}
</style>
