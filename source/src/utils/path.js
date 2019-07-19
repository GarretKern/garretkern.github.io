function baseName(str) {
  var base = new String(str).substring(str.lastIndexOf("/") + 1);
  if (base.lastIndexOf(".") != -1)
    base = base.substring(0, base.lastIndexOf("."));
  return base;
}

function dirName(str) {}

function normalize(str) {}

function join(str) {}
