<template>
  <div id="command-cat">
    <component v-if="file" v-bind:is="file"></component>
    <p v-else>
      <span class="magneta">{{ input }}</span
      >: No such file
    </p>
  </div>
</template>

<script>
import { exists, get_component } from "@/utils/filesystem.js";
export default {
  name: "cat",
  props: { input: String, path: String },
  computed: {
    file: function() {
      let file = this.input.split(" ")[1];
      let path = this.path + "/" + file;
      if (!exists(path, false)) {
        return "";
      }
      let component = get_component(path);
      return component;
    }
  }
};
</script>
