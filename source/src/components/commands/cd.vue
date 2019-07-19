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
  created: function() {
    let dir = this.input.split(" ")[1];
    let path = this.path + "/" + dir;
    if (dir === "..") {
      console.log(dir);
      const parts = this.path.split("/");
      path = parts.slice(0, parts.length - 1).join("/");
    }
    let check = exists(path, true);
    this.exists = check;
    if (check) {
      // send message to parent
      this.$emit("change-directory", path);
    }
  }
};
</script>
