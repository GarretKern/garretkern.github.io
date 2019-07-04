<template>
  <div id="app">
    <div id="nav">
      <div id="header"><router-link to="/"> Garret Kern </router-link></div>

      <router-link to="/security">Security</router-link> |
      <router-link to="/engineering">Engineering</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/resume">Resume</router-link>
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
  font-weight: bold;
  font-size: 14pt;
  text-align: center;
  a.router-link-exact-active {
    color: $green;
  }
  a {
    color: $cyan;
    text-decoration: none;
  }
}
#header {
  font-size: 18pt;
  text-align: center;
  color: $cyan;
}
</style>
