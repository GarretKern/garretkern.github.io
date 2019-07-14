<template>
  <div id="command-cat">
    <p>cat coming soon</p>
    {{ this.input }}
  </div>
</template>

<script>
export default {
  name: "cat",
  props: { input: String }
};
</script>
