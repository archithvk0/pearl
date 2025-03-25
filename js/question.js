document.getElementById("no-button").addEventListener("click", function () {
  document.getElementById("yes-button").style.transform = "scale(1.5)";
  document.body.innerHTML += '<div class="emoji">🖕</div>'.repeat(50);
  setTimeout(() => (window.location.href = "final.html"), 2000);
});

document.getElementById("yes-button").addEventListener("click", function () {
  window.location.href = "final.html";
});
