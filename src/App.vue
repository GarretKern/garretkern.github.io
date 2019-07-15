<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import $ from "jquery";
import "@/utils/_register_files.js";
import "@/utils/_register_commands.js";

export default {};
</script>

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
</style>
