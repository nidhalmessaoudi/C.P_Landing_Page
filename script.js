window.addEventListener("load", function () {
  const overlayEl = document.getElementById("overlay");
  const menuEl = document.getElementById("menu");
  const menuBox = document.getElementById("menuBox");

  menuEl.addEventListener("click", menuClickHandler);
  overlayEl.addEventListener("click", overlayClickHandler);

  function menuClickHandler() {
    overlayEl.classList.remove("overlay-invisible");
    menuBox.classList.add("menu-box__visible");
  }

  function overlayClickHandler() {
    menuBox.classList.remove("menu-box__visible");
    overlayEl.classList.add("overlay-invisible");
  }
});
