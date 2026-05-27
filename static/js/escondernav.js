document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("navHome");
  const btn = document.getElementById("toggleNavbarBtn");
  let navVisible = true;

  // Define padding-top inicial para espaço da navbar visível
  document.body.style.paddingTop = "60px";

  btn.addEventListener("click", function () {
    navVisible = !navVisible;

    if (navVisible) {
      nav.classList.remove("hide-navbar");
      btn.classList.remove("navbar-hidden-btn");
      // Quando navbar aparece, mantém padding no body
      document.body.style.paddingTop = "60px";
    } else {
      nav.classList.add("hide-navbar");
      btn.classList.add("navbar-hidden-btn");
      // Quando navbar some, tira o padding do body
      document.body.style.paddingTop = "0";
    }
  });
});
