function is_mobile() {
  let mobile;
  try {
    document.createEvent("TouchEvent");
    mobile = true;
  } catch (e) {
    mobile = false;
  }
  console.log(mobile);
  return mobile;
}

export { is_mobile };
