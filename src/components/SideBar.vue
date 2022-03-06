<template>
  <div class="side-bar">
    <h3>A la Une</h3>
    <CarouselPopular />
    <p>Mon cv</p>
  </div>
</template>

<script>

import CarouselPopular from "@/components/CarouselPopular.vue";

export default {
  name: "SideBar",
  components: {
    CarouselPopular
  },
};
</script>


<style scoped>
.side-bar{
  width: 20%;
  position: absolute;
  right:0;

}
</style>