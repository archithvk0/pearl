document.body.addEventListener("click", function () {
  document.body.style.animation = "fadeOut 2s ease-out";
  setTimeout(() => (window.location.href = "message.html"), 2000);
});
