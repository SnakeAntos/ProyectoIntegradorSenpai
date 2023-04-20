const dropdownMenu = document.getElementsByClassName("dropdownNavMenu")[0];
const burgerIcon = document.getElementsByClassName("burgerIcon")[0];
const imagen = document.getElementById("menu");

let menuAbierto = false;

const toggleMenu = () => {
  if (menuAbierto) {
    closeMenu();
  } else {
    openMenu();
  }
  menuAbierto = !menuAbierto;
};

const openMenu = () => {
  dropdownMenu.style.display = "block";
  imagen.src = "img/x-icon.svg";
};

const closeMenu = () => {
  dropdownMenu.style.display = "none";
  imagen.src = "img/burger-icon.svg";
};

burgerIcon.addEventListener("click", toggleMenu);
