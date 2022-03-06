<template>
  <div id="app">
    <div id="banner-home" class="container">  
      <h1><router-link to="/">Fakeflix</router-link></h1>
    </div>
    <router-view />
    <main>
    </main>
    <footer>
      <span id="git">The Github of this project:</span> <a href="https://github.com/CedgonzalDevCda/fa">Click here</a></footer>
  </div>
</template>

<style>
body {
  background-color: black;
  color: white;
}
body a{
  text-decoration: none;
  list-style: none;
  color: red;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}
.container {
  display: flex; 
  justify-content: center;
  align-items: center;
}

#banner-home{
  height: 30vh;
}
main{
  height: 28vh;
}
footer{
  margin-top: 40px;
  height: 20vh;
  font-size:20px;
  background-image: url(@/Images/img_accueil_fakeflix.jpg);
  box-shadow: inset 50px 50px 50px #000;
  background-size: cover;
}
#git{
  text-decoration: underline;
}
footer a{
  text-decoration: none;
  list-style: none;
  color: red;
}

h1 {
  font-size: 50px;
  font-weight: normal;
  color: red;
  text-shadow: 3px 3px 3px #373737;

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
