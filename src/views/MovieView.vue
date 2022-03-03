<template>
  <div>
    <HeaderTop />
    <MoviePage />
  </div>
</template>
<script>
// @ is an alias to /src
import HeaderTop from "@/components/HeaderTop.vue";
import MoviePage from "@/components/MoviePage.vue";

export default {
  name: "MovieView",
  components: {
    HeaderTop,
    MoviePage
  }
};
</script>
