<template>
  <div id="command-cd">
    <div v-if="exists"></div>
    <div v-else>
      <span class="magneta">{{ input }}</span
      >: No such directory
    </div>
  </div>
</template>

<script>
import { exists } from "@/utils/filesystem.js";
export default {
  name: "cd",
  props: { input: String, path: String },
  computed: {
    exists: function() {
      let dir = this.input.split(" ")[1];
      let path = this.path + "/" + dir;
      let check = exists(path, true);
      return check;
    }
  },
  created: function() {
    let dir = this.input.split(" ")[1];
    let path = this.path + "/" + dir;
    let check = exists(path, true);
    if (check) {
      // send message to parent
      this.$emit("change-directory", path);
    }
  }
};
</script>
