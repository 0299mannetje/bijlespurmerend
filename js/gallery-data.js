// ============================================================================
// Bijles Purmerend — fotogalerij
//
// HIER LATER ZELF FOTO'S TOEVOEGEN:
// 1. Zet je foto's in de map images/gallery/ (zie images/gallery/README.md
//    voor afmetingen/naamgeving).
// 2. Voeg hieronder per foto een blokje toe met het bestandspad en een
//    korte omschrijving (alt-tekst, voor toegankelijkheid en SEO).
//
// Voorbeeld van een ingevulde foto:
// {
//   src: "images/gallery/proefles-01.jpg",
//   alt: "Loek geeft een proefles wiskunde aan een leerling"
// },
// ============================================================================

var BIJLES_GALLERY = [
  // Nog geen foto's. Voeg hierboven binnen deze [ ] je eerste foto toe.
];

function renderGallery(containerId, options) {
  var container = document.getElementById(containerId);
  if (!container) return;

  var limit = (options && options.limit) || BIJLES_GALLERY.length;
  var photos = BIJLES_GALLERY.slice(0, limit);

  if (photos.length === 0) {
    container.innerHTML =
      '<div class="empty-state">' +
      "<p><strong>Foto's volgen binnenkort.</strong></p>" +
      "<p>Zodra ons Google Bedrijfsprofiel klaar is, plaatsen we hier foto's van onze bijlessen.</p>" +
      "</div>";
    return;
  }

  var html = photos
    .map(function (photo) {
      return '<img src="' + photo.src + '" alt="' + photo.alt + '" loading="lazy">';
    })
    .join("");

  container.innerHTML = html;
}
