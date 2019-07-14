import Vue from "vue";

// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
  // Look for files in the current directory
  "../components/filesystem",
  // Look in subdirectories
  true,
  // Only .vue files
  /\.vue$/
);

register(requireComponent.keys());
// Parse paths to find directories and filenames
function register(paths) {
  let files = [];
  let directories = [];
  for (var i = 0; i < paths.length; i++) {
    const cur_path = paths[i].replace(".", "~/Home/Garret").split("/");
    const component_name = cur_path[cur_path.length - 1]
      .split(".")[0]
      .split("-")[1];
    register_component(paths[i], component_name);
  }
}

function register_component(path, name) {
  const componentConfig = requireComponent(path);
  // Register component globally
  Vue.component(name, componentConfig.default || componentConfig);
}
