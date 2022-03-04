<template>
  <div class="login">
    <HeaderTop />
    <LoginAccess />
  </div>
</template>
<script>
// @ is an alias to /src
import HeaderTop from "@/components/HeaderTop.vue";
import LoginAccess from "@/components/LoginAccess.vue";
// import SideBar from "@/components/SideBar.vue";

export default {
  name: "LoginView",
  components: {
    LoginAccess,
    HeaderTop
  },
};
</script>
