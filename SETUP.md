# Setup — dit moet je nog zelf doen

Deze website is klaar om te vullen en te publiceren. Hieronder staat precies
wat er nog moet gebeuren.

## 1. Placeholder-checklist

Zoek in alle bestanden op het teken `[` om alles te vinden — of loop deze
lijst na. Elke placeholder komt op meerdere plekken voor (footer van iedere
pagina, en soms nog een extra plek):

| Placeholder | Waar | Vervang door |
|---|---|---|
| `[TELEFOONNUMMER]` | Footer van elke pagina, `contact.html`, `proefles-inplannen.html` | Je telefoonnummer, bv. `06 12345678` |
| `[EMAIL]` | Footer van elke pagina, `contact.html`, `proefles-inplannen.html` | Je e-mailadres, bv. je Google Workspace-adres |
| `[WHATSAPP LINK]` | Footer van elke pagina, `contact.html`, `proefles-inplannen.html` | Een `wa.me`-link, bv. `https://wa.me/31612345678` |
| `[GOOGLE_BUSINESS_PROFIEL_LINK]` | Footer van elke pagina | De link naar je Google Bedrijfsprofiel (zodra aangemaakt) |
| `[GOOGLE_AGENDA_EMBED_URL]` | `proefles-inplannen.html` (in het `data-src`-attribuut van de iframe) | De embed-URL van je Google Agenda-afspraakschema — zie `GOOGLE-AGENDA-INSTRUCTIES.md` |
| `[FORMSPREE_ENDPOINT]` | `scholen.html` (in het `action`-attribuut van het contactformulier) | Je Formspree-endpoint-URL — zie `FORMSPREE-INSTRUCTIES.md` |

Tip: gebruik in een teksteditor (bv. VS Code, Kladblok++) "Zoeken en
vervangen in alle bestanden" om een placeholder overal in één keer te
vervangen.

## 2. Google Agenda koppelen

Zie `GOOGLE-AGENDA-INSTRUCTIES.md` voor de volledige stap-voor-stap uitleg.

## 3. Contactformulier scholen.html koppelen

Zie `FORMSPREE-INSTRUCTIES.md` voor de volledige stap-voor-stap uitleg.

## 4. Foto's en reviews toevoegen (als het Google Bedrijfsprofiel er is)

- Reviews: voeg ze toe in `js/reviews-data.js` (zie instructies bovenin dat bestand).
- Foto's: zet de bestanden in `images/gallery/` en voeg ze toe in `js/gallery-data.js`.
- Teamfoto's: zie `images/team/README.md`.

Zolang deze leeg zijn, toont de site automatisch een nette "volgt binnenkort"-melding — er verschijnen dus geen kapotte afbeeldingen of lege vlakken.

## 5. Lokaal bekijken

Dubbelklik op `index.html` om de site direct in je browser te openen. Alles
werkt zonder server of installatie.

## 6. Publiceren via GitHub Pages

1. Maak een gratis account aan op [github.com](https://github.com) (indien nog niet gedaan).
2. Maak een nieuwe, lege repository aan (zonder README/gitignore aan te vinken), bv. genaamd `bijles-purmerend-website`.
3. Open een terminal in deze projectmap en voer uit:
   ```
   git init
   git add .
   git commit -m "Eerste versie van de website"
   git branch -M main
   git remote add origin https://github.com/<jouw-gebruikersnaam>/bijles-purmerend-website.git
   git push -u origin main
   ```
4. Ga op GitHub naar je repository → **Settings** → **Pages**.
5. Zet bij **Source** op **Deploy from a branch**, kies branch `main` en map `/ (root)`. Klik **Save**.
6. Na 1-2 minuten is de site live op `https://<jouw-gebruikersnaam>.github.io/bijles-purmerend-website/`.
7. (Optioneel, later) Koppel je eigen domeinnaam via dezelfde Pages-instellingen (**Custom domain**) en stel een CNAME-record in bij je domeinregistrar.

## 7. Na het publiceren nog even checken

- Alle links in de navigatie en footer werken.
- Geen `[...]`-placeholders meer zichtbaar.
- De Google Agenda-widget laadt en toont beschikbare tijden.
- Het contactformulier op `scholen.html` stuurt een test-aanvraag succesvol door.
- De site ziet er goed uit op je telefoon (responsief).
