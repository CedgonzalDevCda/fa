<template>
  <div class="fond">
    <div class="main-container flex j-between">
      <nav id="banner" class="flex j-between gap20">
        <router-link to="/login">Login</router-link>
        <router-link to="/">Accueil</router-link>
        <router-link to="/films-favoris">Films favoris</router-link>
        <router-link to="/film-a-voir">Films à voir</router-link>
      </nav>
      <div>
        <SearchBar />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchBar from '@/components/SearchBar.vue'

export default {
  name: "HeaderTop",
  components: {
    SearchBar
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fond{
  height:60px;
  background-color: grey;
  margin-bottom: 30px;
  padding-top: 20px;
}
.main-container {
  margin: 0 auto;
  width: 70%;
  /* background-color: grey; */
}

.flex {
  display: flex;
}
.j-between {
  justify-content: space-between;
}
.j-around {
  justify-content: space-around;
}

.gap20 {
  gap: 20px;
}

/**/

  nav {
    padding: 5px;
  }

nav a {
  font-weight: bold;
  color: red;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: whitesmoke;
}

</style>
