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

//Modal
let btnOpenModal = document.getElementById("btnopenModal");
let registerBtn = document.getElementsByClassName("btnRegister")[0];
let modal = document.getElementById("modal");
let btnCloseModal = document.getElementById("btnCloseModal");
let btnOpenModalByClass = document.getElementsByClassName("btnOpenClass")[0]; //aqui llamo al primer elemento que cumple con esa clase
let btnOpenModalByClassBurger = document.getElementsByClassName("btnOpenClass")[1]; //aqui llamo al segundo
//quisimos evitar usar el mismo id en dos elementos por eso creamos la clase btnOpenClass para poder tarjetear dos elementos
let isModalOpen = false;
let containerGeneral = document.getElementById("containerGeneral");
let animatedDiv = document.getElementsByClassName("animatedDiv")[0];

btnOpenModalByClass.addEventListener("click", function () {
  modal.style.display = "block";
  btnOpenModal.style.display = "none";
  registerBtn.style.display = "none";
  animatedDiv.classList.add("animate__fadeInDown");
});
btnOpenModalByClassBurger.addEventListener("click", function () {
  modal.style.display = "flex";
  btnOpenModal.style.display = "none";
  containerGeneral.style.display = "none";
  animatedDiv.classList.remove("animate__animated");
});
btnCloseModal.addEventListener("click", function () {
  modal.style.display = "none";
  btnOpenModal.style.display = "block";
  registerBtn.style.display = "block";
  containerGeneral.style.display = "block";
});
//esta parte de window.onclick no anda no se porque...
// window.addEventListener("click", function () {
//   if (target != modal) {
//     modal.style.display = "none";
//   }
// });

// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }
