<template>
  <div id="app">
    <div id="banner-home">
      <h1>Fakeflix</h1>
    </div>
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/films-favoris">Favoris</router-link> |
      <router-link to="/film-a-voir">Watchlist</router-link>
    </nav> -->
    <router-view />
  </div>
</template>

<style>
body {
  background-color: black;
  color: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
#banner-home{
  height: 20vh;
  background-image: url(@/Images/img_accueil_fakeflix.jpg);
}
h1 {
  font-size: 50px;
  font-weight: normal;
  color: red;
}

nav {
  padding: 30px;
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
