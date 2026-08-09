// Bijles Purmerend — gedeeld gedrag voor alle pagina's:
// mobiel menu open/dicht, actieve navlink markeren, footer-jaartal invullen.

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  var currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a[href]").forEach(function (link) {
    var linkPath = link.getAttribute("href").split("#")[0];
    if (linkPath === currentPath) {
      link.setAttribute("aria-current", "page");
    }
  });

  var yearEl = document.querySelector("[data-year]");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
