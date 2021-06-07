const loginLink = document.querySelector(".contact-button");
const loginPopup = document.querySelector(".modal-wrapper");
const loginClose = loginPopup.querySelector(".modal-escape");



loginLink.addEventListener("click", function (event) {
    evt.preventDefault();
    loginPopup.classList.toggle("hidden");
});


loginClose.addEventListener("click", function (event) {
    evt.preventDefault();
    loginPopup.classList.toggle("hidden");
  });