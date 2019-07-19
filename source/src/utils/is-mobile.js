function is_mobile() {
  let check = false;
  let ua = navigator.userAgent;
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
      ua
    )
  ) {
    check = true;
  }
  return !check;
}

export { is_mobile };
