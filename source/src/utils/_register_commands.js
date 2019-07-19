import Vue from "vue";

const requireCommands = require.context(
  "@/components/commands",
  false,
  /\.vue$/
);

requireCommands.keys().forEach(path => {
  const componentConfig = requireCommands(path);
  const name = path.replace("./", "").split(".")[0];
  // Register component globally
  Vue.component(name, componentConfig.default || componentConfig);
});
