<template>
  <div id="nav">
    <div id="header">
      Garret Kern
    </div>
    <router-link to="/">Terminal </router-link> |
    <router-link to="/security">Security</router-link> |
    <router-link to="/engineering">Engineering</router-link> |
    <router-link to="/about">About Me</router-link>
  </div>
</template>

<style lang="scss">
@import "@/variables.scss";
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
      color: $magneta-light;
    }
    &.router-link-exact-active {
      color: $magneta;
    }
  }
}
#header {
  margin-bottom: 0.6rem;
  font-size: 18pt;
  text-align: center;
  color: $cyan;
}
</style>
