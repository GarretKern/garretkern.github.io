<template>
  <p>{{ contents }}</p>
</template>

<script>
import { path_exists, file_exists, get_contents } from "@/utils/filesystem.js";
export default {
  name: "ls",
  props: { input: String, path: String },
  computed: {
    contents: function() {
      let contents = get_contents(this.path);
      return contents;
    }
  }
};
</script>
