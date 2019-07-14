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
export default {
  name: "cat",
  props: { input: String },
  computed: {
    file: function() {
      let file = this.input.split(" ")[1];
      if (file != "garret") {
        file = "";
      }
      return file;
    }
  }
};
</script>
