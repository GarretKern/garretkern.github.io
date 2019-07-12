<template>
  <div id="app">
    <div id="nav">
      <div id="header">
        <router-link to="/"> Garret Kern </router-link>
      </div>

      <router-link to="/">Security</router-link> |
      <router-link to="/">Engineering</router-link> |
      <router-link to="/">About Me</router-link>
    </div>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<style lang="scss">
@import "@/variables.scss";
body {
  background-color: $dark;
}
#app {
  font-family: "Monaco", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $cyan;
}
#nav {
  border: none;
  -moz-outline-style: none;
  outline: none;
  font-weight: bold;
  font-size: 14pt;
  text-align: center;

  a {
    color: $cyan;
    text-decoration: none;

    &:hover {
      color: $magneta;
    }
  }
}
#header {
  font-size: 18pt;
  text-align: center;
  color: $cyan;
}
</style>
