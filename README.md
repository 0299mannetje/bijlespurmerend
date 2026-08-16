# Bijles Purmerend — website

Statische website voor Bijles Purmerend: geen framework, geen build-tools,
geen server nodig. Gewoon HTML, CSS en vanilla JavaScript.

## Bestanden

- `index.html`, `vakken.html`, `over-ons.html`,
  `proefles-inplannen.html`, `contact.html`, `404.html` —
  de pagina's van de site. Tarieven staan als sectie op `index.html`
  (`#tarieven`), er is geen aparte tarieven-pagina. Er is (voor nu) ook
  geen aparte ervaringen-pagina, tot er echte klantreviews zijn.
- `css/style.css` — alle opmaak (kleuren, layout, componenten).
- `js/main.js` — mobiel menu, actieve navigatielink, footer-jaartal.
- `js/reviews-data.js`, `js/gallery-data.js` — (nog) niet gekoppeld aan een
  pagina; hier voeg je later zelf reviews en foto's toe, zodra de
  ervaringen-pagina terugkomt (zie instructies bovenin die bestanden).
- `images/` — logo en mappen voor foto's, met uitleg per map.
- `SETUP.md` — wat je nog zelf moet doen (placeholders invullen, Google
  Agenda koppelen, publiceren).
- `GOOGLE-AGENDA-INSTRUCTIES.md` — stap-voor-stap uitleg om de Google Agenda
  te koppelen zodat bezoekers zelf een gratis proefles kunnen inplannen.

## Lokaal bekijken

Dubbelklik op `index.html`, of start voor een productie-achtige test een
lokale server (optioneel):

```
python -m http.server 8000
```

en open dan `http://localhost:8000` in je browser.

## Volgende stappen

Zie `SETUP.md`.
