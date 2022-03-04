<template>
  <div class="home">
    <HeaderTop />
    <div>
      <MainPage />
      <SideBar />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import HeaderTop from "@/components/HeaderTop.vue";
import MainPage from "@/components/MainPage.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  name: "HomeView",
  components: {
    HeaderTop,
    MainPage,
    SideBar
  }
};
</script>
