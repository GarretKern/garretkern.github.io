<template>
  <div id="command-help">
    <span class="magneta">{{ input }}</span
    >: invalid command
  </div>
</template>

<script>
export default {
  name: "invalid",
  props: { input: String }
};
</script>
