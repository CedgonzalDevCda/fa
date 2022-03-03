<template>
  <div id="app">
    <h1>Fakeflix</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/films-favoris">Favoris</router-link> |
      <router-link to="/film-a-voir">Watchlist</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
body{
  background-color: black;
  color: white;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1{
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
