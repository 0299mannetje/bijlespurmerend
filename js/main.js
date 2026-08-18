// Bijles Purmerend — gedeeld gedrag voor alle pagina's:
// mobiel menu open/dicht, actieve navlink markeren, footer-jaartal invullen,
// tarieven-kaartjes voor telefoon opbouwen uit de tarieventabel.

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

  renderPricingCards();
});

// Bouwt de tarieven-kaartjes voor telefoon (.pricing-cards-view) op uit de
// tarieventabel (.pricing-table), zodat prijzen maar op één plek (de tabel)
// hoeven te worden aangepast.
function renderPricingCards() {
  var table = document.querySelector(".pricing-table");
  var cardsWrap = document.querySelector(".pricing-cards-view");
  if (!table || !cardsWrap) {
    return;
  }

  var lessonTypes = Array.prototype.slice
    .call(table.querySelectorAll("thead th"), 1)
    .map(function (th) {
      return th.textContent.trim();
    });

  var rows = Array.prototype.slice.call(table.querySelectorAll("tbody tr"));

  cardsWrap.innerHTML = lessonTypes
    .map(function (lessonType, columnIndex) {
      var itemsHtml = rows
        .map(function (row) {
          var cells = row.querySelectorAll("td");
          var pakketNaam = cells[0].textContent.trim();
          var priceCell = cells[columnIndex + 1];
          var highlightClass = row.classList.contains("is-highlight")
            ? ' class="is-highlight"'
            : "";
          return (
            "<li" +
            highlightClass +
            "><span>" +
            pakketNaam +
            "</span><span>" +
            priceCell.innerHTML +
            "</span></li>"
          );
        })
        .join("");

      return (
        '<div class="card"><h3>' +
        lessonType +
        '</h3><ul class="pricing-list">' +
        itemsHtml +
        "</ul></div>"
      );
    })
    .join("");
}
