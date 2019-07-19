<template>
  <div id="command-ls">
    <div v-for="item in contents" class="item">
      <div v-if="item.dir">
        <span class="blue"> {{ item.name }}&nbsp</span>
      </div>
      <div v-else style="display:inline">{{ item.name }}&nbsp</div>
    </div>
    <br />
  </div>
</template>

<script>
import { get_contents } from "@/utils/filesystem.js";
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

<style scoped lang="scss">
.item {
  float: left;
}
</style>
