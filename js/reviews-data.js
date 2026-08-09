// ============================================================================
// Bijles Purmerend — reviews
//
// HIER LATER ZELF ECHTE REVIEWS TOEVOEGEN:
// Zodra je een Google Bedrijfsprofiel hebt, kopieer je de tekst van een
// review hieronder in de lijst. Elke review is een blokje tussen { }.
// Kopieer een heel blokje (inclusief de { } en de komma erna) om een
// nieuwe review toe te voegen. "sterren" mag 1 t/m 5 zijn.
//
// Voorbeeld van een ingevulde review:
// {
//   naam: "Marieke de Vries",
//   sterren: 5,
//   tekst: "Loek legt alles heel duidelijk uit, mijn dochter haalt nu veel betere cijfers voor wiskunde!",
//   vak: "Wiskunde"
// },
// ============================================================================

var BIJLES_REVIEWS = [
  // Nog geen reviews. Voeg hierboven binnen deze [ ] je eerste review toe.
];

function renderReviews(containerId, options) {
  var container = document.getElementById(containerId);
  if (!container) return;

  var limit = (options && options.limit) || BIJLES_REVIEWS.length;
  var reviews = BIJLES_REVIEWS.slice(0, limit);

  if (reviews.length === 0) {
    container.innerHTML =
      '<div class="empty-state">' +
      "<p><strong>Reviews volgen binnenkort.</strong></p>" +
      "<p>Zodra onze eerste leerlingen een review hebben achtergelaten, staan ze hier.</p>" +
      "</div>";
    return;
  }

  var html = reviews
    .map(function (review) {
      var stars = "★★★★★☆☆☆☆☆".slice(5 - review.sterren, 10 - review.sterren);
      return (
        '<div class="card review-card">' +
        '<div class="stars" aria-label="' +
        review.sterren +
        ' van 5 sterren">' +
        stars +
        "</div>" +
        "<blockquote>&ldquo;" +
        review.tekst +
        "&rdquo;</blockquote>" +
        "<footer>" +
        review.naam +
        (review.vak
          ? ' <span class="text-muted">&middot; ' + review.vak + "</span>"
          : "") +
        "</footer>" +
        "</div>"
      );
    })
    .join("");

  container.innerHTML = html;
}
