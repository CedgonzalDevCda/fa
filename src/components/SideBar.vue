<template>
  <div class="side-bar">
    <CarouselPopular />
  </div>
</template>

<script>

import CarouselPopular from "@/components/CarouselPopular.vue";

export default {
  name: "SideBar",
  components: {
    CarouselPopular
  }
};
</script>


<style scoped>
.side-bar{
  width: 30%;
}
</style>