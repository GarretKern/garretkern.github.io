// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
  // Look for files in the current directory
  "@/components/filesystem",
  // Look in subdirectories
  true,
  // Only .vue files
  /\.vue$/
);

let system = build_system(requireComponent.keys());

// Parse paths to find directories and filenames
function build_system(paths) {
  let system = [];
  for (var i = 0; i < paths.length; i++) {
    // create file
    const cur_path = paths[i].replace(".", "~/Home/Garret").split("/");
    const names = cur_path[cur_path.length - 1].split(".")[0].split("-");
    const component_name = names[1];
    const file_name = names[0];
    const directory = cur_path.slice(0, cur_path.length - 1).join("/");
    const full_path = directory + "/" + file_name;
    const file = {
      name: file_name,
      path: full_path,
      dir: false,
      component: component_name
    };
    system.push(file);

    // check directory
    if (
      system.filter(dir => {
        return dir.dir && dir.path === directory;
      }).length === 0
    ) {
      const directory_name = directory.split("/")[
        directory.split("/").length - 1
      ];
      system.push({ name: directory_name, path: directory, dir: true });
    }
  }
  return system;
}

function get_contents(path) {
  let directory = system.filter(dir => {
    return dir.dir && dir.path === path;
  })[0];

  let files = system.filter(file => {
    return file.path === path + "/" + file.name;
  });
  return files;
}

function get_component(path) {
  let component = system.filter(file => {
    return file.path === path;
  })[0];
  return component.component;
}

function exists(path, dir) {
  return (
    system.filter(file => {
      return file.path === path && file.dir === dir;
    }).length > 0
  );
}

export { exists, get_contents, get_component };
