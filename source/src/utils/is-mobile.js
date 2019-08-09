function is_mobile() {
  let mobile;
  try {
    document.createEvent("TouchEvent");
    mobile = true;
  } catch (e) {
    mobile = false;
  }
  return mobile;
}

export { is_mobile };
