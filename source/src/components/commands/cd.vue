<template>
  <div id="command-cd">
    <div v-if="exists"></div>
    <div v-else>
      <span class="magneta">{{ input }}</span
      >: {{ message }}
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
    let old_path = this.path;
    let path = this.path + "/" + dir;
    if (dir === "..") {
      const parts = this.path.split("/");
      path = parts.slice(0, parts.length - 1).join("/");
    }

    this.exists = exists(path, true);
    // "Garret is always highest permissble directory"
    if (path.indexOf("Garret") === -1) {
      path = old_path;
      this.message = "Permission denied";
    } else if (!this.exists) {
      this.message = "No such directory";
    }
    if (this.exists) {
      // send message to parent
      this.$emit("change-directory", path);
    }
  }
};
</script>
