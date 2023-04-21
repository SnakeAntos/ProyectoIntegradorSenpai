var btnOpenModal = document.getElementById("btnopenModal");
var modal = document.getElementById("modal");
var btnCloseModal = document.getElementById("btnCloseModal");

btnOpenModal.onclick = function () {
  modal.style.display = "block";
  btnOpenModal.style.display = "none";
  modal.querySelector(".modal-content").classList.add("animate__fadeInDown");
};

btnCloseModal.addEventListener("click", function () {
  modal.querySelector(".modal-content").classList.add("animate__fadeOutDown");
  modal.querySelector(".modal-content").addEventListener("animationend", function () {
    modal.style.display = "none";
  });
});
//esta parte de window.onclick no anda no se porque...
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
