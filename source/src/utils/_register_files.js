import Vue from "vue";

const requireFiles = require.context(
  // Look for files in the current directory
  "@/components/filesystem",
  // Look in subdirectories
  true,
  // Only .vue files
  /\.vue$/
);

register(requireFiles.keys());
// Parse paths to find directories and filenames
function register(paths) {
  let files = [];
  let directories = [];
  for (var i = 0; i < paths.length; i++) {
    const cur_path = paths[i].split("/");
    const component_name = cur_path[cur_path.length - 1]
      .split(".")[0]
      .split("-")[1];
    register_component(paths[i], component_name);
  }
}

function register_component(path, name) {
  const componentConfig = requireFiles(path);
  // Register component globally
  Vue.component(name, componentConfig.default || componentConfig);
}
