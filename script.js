function showInner(id) {
  const home = document.getElementById("page-home");

  // hide home
  home.style.opacity = "0";

  setTimeout(() => {
    home.style.display = "none";
  }, 400);

  // hide all inner pages
  document.querySelectorAll(".inner-page").forEach((page) => {
    page.classList.remove("visible");
    page.style.display = "none";
  });

  // show target page
  const target = document.getElementById("page-" + id);

  target.style.display = "block";

  requestAnimationFrame(() => {
    target.classList.add("visible");
  });

  // scroll top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function goHome() {
  // hide all inner pages
  document.querySelectorAll(".inner-page").forEach((page) => {
    page.classList.remove("visible");

    setTimeout(() => {
      page.style.display = "none";
    }, 400);
  });

  // show home
  const home = document.getElementById("page-home");

  home.style.display = "flex";

  requestAnimationFrame(() => {
    home.style.opacity = "1";
  });

  // scroll top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // background movement desktop only
  const home = document.getElementById("page-home");

  if (window.innerWidth > 768) {
    home.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 7;

      const bg = document.querySelector("#page-home .bg");

      if (bg) {
        bg.style.transform = `translate(${x}px, ${y}px) scale(1.03)`;
      }
    });
  }

  // mobile touch fix
  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener(
      "touchstart",
      () => {},
      { passive: true }
    );
  });
});