function showInner(id) {
  const home = document.getElementById("page-home");
  const target = document.getElementById("page-" + id);

  if (!target) return;

  home.classList.remove("visible");
  home.style.display = "none";

  document.querySelectorAll(".inner-page").forEach((page) => {
    page.classList.remove("visible");
    page.style.display = "none";
  });

  target.style.display = "block";
  target.classList.add("visible");
  target.scrollTop = 0;
  window.scrollTo(0, 0);
}

function goHome() {
  document.querySelectorAll(".inner-page").forEach((page) => {
    page.classList.remove("visible");
    page.style.display = "none";
  });

  const home = document.getElementById("page-home");
  home.style.display = "flex";
  home.classList.add("visible");
  home.style.opacity = "1";

  window.scrollTo(0, 0);
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-page]").forEach((button) => {
    button.addEventListener("click", () => {
      showInner(button.dataset.page);
    });
  });
});