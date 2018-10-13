var fgh = document.querySelector(".header");
var dam = fgh.querySelector(".header__submit");

fgh.classList.remove("header--show");
dam.classList.remove("header__submit--active");

dam.addEventListener("click", function (evt) {
  evt.preventDefault();
  this.classList.toggle("header__submit--active");
  fgh.classList.toggle("header--show");
});
