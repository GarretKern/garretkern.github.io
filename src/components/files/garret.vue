<template>
  <div id="home-readme">
    <p>
      Hi. My name is Garret Kern. <br />I am a student at
      <span class="color">Brown University</span>
      studying <span class="color">computer science</span>.
    </p>

    <p>
      I have experience in
      <span class="color"> full-stack engineering </span>
      and <span class="color">infosecurity</span>.
    </p>

    <p>
      This is my personal website, emulating a nix style terminal. <br />
      I post my security walkthroughs and project writeups here.
    </p>

    <p>
      Type "help" to learn how to navigate. <br />
      Type "treeview" to see a traditional view
    </p>
  </div>
</template>

<script>
export default {
  name: "Garret"
};
</script>

<style scoped lang="scss">
@import "@/variables.scss";
.color {
  color: $magneta;
}
</style>
