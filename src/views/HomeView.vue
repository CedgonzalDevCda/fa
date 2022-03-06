<template>
  <div class="home">
    <HeaderTop />
    <div>
      <SideBar /> 
      <SearchPage />
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
import HeaderTop from "@/components/HeaderTop.vue";
import SearchPage from "@/components/SearchPage.vue";
import SideBar from "@/components/SideBar.vue";

export default {
  name: "HomeView",
  components: {
    HeaderTop,
    SearchPage,
    SideBar
  }
};
</script>
