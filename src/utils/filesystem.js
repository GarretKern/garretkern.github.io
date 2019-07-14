// filesystem is imported by app and a filesystem object is passed to terminal
// this object offers the following commands: "exists(path)"
// this reads in all file objects and directories based on what is in filesystem folder
// each file has a filename-truename
// ex. readme-garret.vue
// route view should be able to navigate directly to files, and create a terminal which includes a starting command cat filename
// runs cd, then cat

// https://webpack.js.org/guides/dependency-management/#require-context
const requireComponent = require.context(
  // Look for files in the current directory
  "../components/filesystem",
  // Look in subdirectories
  true,
  // Only .vue files
  /\.vue$/
);

let system = build_system(requireComponent.keys());

// Parse paths to find directories and filenames
function build_system(paths) {
  let files = [];
  let directories = [];
  for (var i = 0; i < paths.length; i++) {
    const cur_path = paths[i].replace(".", "~/Home/Garret").split("/");
    const filename = cur_path[cur_path.length - 1].split(".")[0].split("-")[0];
    const directory = cur_path.slice(0, cur_path.length - 1).join("/");
    const directory_name = directory.split("/")[
      directory.split("/").length - 1
    ];
    const full_path = directory + "/" + filename;
    const file = { name: filename, path: full_path };
    files.push(file);
    directories.push({ name: directory_name, path: directory });
  }
  return { files: files, directories: directories };
}

function get_contents(path) {
  let directory = system.directories.filter(dir => {
    return dir.path === path;
  })[0];

  let directories = system.directories.filter(dir => {
    return dir.path === path + "/" + dir.name;
  });
  let files = system.files.filter(file => {
    return file.path === path + "/" + file.name;
  });
  return { files: files, directories: directories };
}

function path_exists(path) {
  return (
    system.directories.filter(dir => {
      return dir.path === path;
    }).length > 0
  );
}

function file_exists(path) {
  return (
    system.files.filter(file => {
      return file.path === path;
    }).length > 0
  );
}

export { path_exists, file_exists, get_contents };
