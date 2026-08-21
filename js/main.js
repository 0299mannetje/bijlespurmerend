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
  initScholenForm();
});

// Verzending van het scholen-aanvraagformulier (scholen.html) via Formspree.
// Zolang het action-attribuut nog de letterlijke placeholder [FORMSPREE_ENDPOINT]
// bevat (zie FORMSPREE-INSTRUCTIES.md), wordt er niets verstuurd en tonen we
// een nette "nog niet gekoppeld"-melding, zodat een vergeten placeholder nooit
// een kapotte of stille fout oplevert voor een bezoeker.
function initScholenForm() {
  var form = document.getElementById("scholen-contact-form");
  if (!form) {
    return;
  }

  var success = document.getElementById("scholen-form-success");
  var error = document.getElementById("scholen-form-error");
  var endpoint = form.getAttribute("action");
  var isConfigured = endpoint && endpoint.indexOf("[") === -1;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (success) {
      success.hidden = true;
    }
    if (error) {
      error.hidden = true;
    }

    if (!isConfigured) {
      if (error) {
        error.textContent =
          "Dit formulier wordt nog gekoppeld. Neem ondertussen contact op via telefoon, e-mail of WhatsApp hiernaast.";
        error.hidden = false;
      }
      return;
    }

    fetch(endpoint, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    })
      .then(function (response) {
        if (response.ok) {
          if (success) {
            success.hidden = false;
          }
          form.reset();
        } else if (error) {
          error.hidden = false;
        }
      })
      .catch(function () {
        if (error) {
          error.hidden = false;
        }
      });
  });
}

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
