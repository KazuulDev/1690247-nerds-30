const loginLink = document.querySelector(".contact-button");
const loginPopup = document.querySelector(".modal-wrapper");
const loginClose = loginPopup.querySelector(".modal-escape");



loginLink.addEventListener("click", function () {
    evt.preventDefault();
    loginPopup.classList.add("show");
});
loginClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginPopup.classList.remove("show");
  });