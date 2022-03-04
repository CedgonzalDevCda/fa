<template>
  <hooper :settings="hooperSettings">
    <!-- Manque ajout des films populaires -->
    <!-- <slide v-for="(slide, indx) in slides" :key="indx" :index="indx">
      {{ slide }}
    </slide> -->
    <slide >
      <img
        src="https://webboy.fr/wp-content/uploads/2022/03/image-non-disponible.png"
        width="150px"
        height="200px"
      />
    </slide>
    <slide>
      <img
        src="https://webboy.fr/wp-content/uploads/2022/03/image-non-disponible.png"
        width="150px"
        height="200px"
      />
    </slide>
    <slide>
      <img
        src="https://webboy.fr/wp-content/uploads/2022/03/image-non-disponible.png"
        width="150px"
        height="200px"
      />
    </slide>
    <slide>
      <img
        src="https://webboy.fr/wp-content/uploads/2022/03/image-non-disponible.png"
        width="150px"
        height="200px"
      />
    </slide>
    ...
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
};
</script>
