# Google Agenda koppelen voor de gratis proefles

Deze site heeft een pagina (`proefles-inplannen.html`) waar bezoekers zelf een
gratis proefles kunnen inplannen. Dat werkt via een gratis functie van Google
Agenda: het **Afspraakschema**. Hieronder staat stap voor stap hoe je dit
opzet. Dit hoef je maar één keer te doen (ca. 10 minuten).

Belangrijk: doe dit met het **Google-account van het bedrijf** (bijvoorbeeld
het Google Workspace-account dat je net hebt aangemaakt), niet met een
privéaccount — dan blijft de agenda ook van het bedrijf als er later meer
mensen bijles gaan geven.

## Stap 1 — Open Google Agenda

1. Ga naar [calendar.google.com](https://calendar.google.com) en log in met
   het Google-account van Bijles Purmerend.

## Stap 2 — Maak een afspraakschema aan

1. Klik linksboven op **Maken** (het knopje met het plusje).
2. Kies **Afspraakschema** (in het Engels: "Appointment schedule").
3. Geef het een duidelijke naam, bijvoorbeeld: `Gratis proefles - Bijles Purmerend`.

## Stap 3 — Stel de duur en beschikbaarheid in

1. Zet de lesduur op **45 minuten**.
2. Stel in op welke dagen en tijden je proeflessen kunt geven (bijvoorbeeld
   doordeweeks na school-/studietijd en in het weekend).
3. Zet er eventueel een kleine buffer tussen (bijv. 15 minuten), zodat je niet
   direct van de ene naar de andere afspraak hoeft.

## Stap 4 — Voeg intakevragen toe (aanbevolen: vak + niveau altijd toevoegen)

Onder **Intakeformulier** of **Aangepaste vragen** kun je velden toevoegen die
een bezoeker moet invullen bij het boeken. Voeg in elk geval deze twee toe en
zet ze op **verplicht**, zodat je vóór de proefles al weet waar de leerling
hulp bij nodig heeft:

1. **Vak(ken) waar bijles voor gewenst is** — kies vraagtype "Keuzelijst"
   (meerdere antwoorden toestaan) met deze opties, gelijk aan de lijst op
   `vakken.html`:
   - Wiskunde A
   - Wiskunde B
   - Natuurkunde
   - Scheikunde
   - NaSk
   - Economie
   - Bedrijfseconomie
   - Geschiedenis
   - Aardrijkskunde
   - Biologie
   - Nederlands
   - Engels
   - Latijn
   - Grieks
   - Begrijpend lezen (basisschool)
   - Rekenen (basisschool)
   - Taal (basisschool)
   - Wereldoriëntatie & presentaties (basisschool)
   - Anders, namelijk... (vrij tekstveld)

2. **Niveau en leerjaar** — vraagtype "Keuzelijst" (één antwoord) met opties:
   - Basisschool
   - VMBO
   - HAVO
   - VWO (incl. Gymnasium)
   - MBO
   - Anders, namelijk... (vrij tekstveld)

   Voeg er evt. een los tekstveld "Leerjaar" aan toe (bijv. "3 HAVO").

Optioneel kun je ook nog toevoegen:

- Naam van de leerling
- Telefoonnummer van ouder/verzorger (indien van toepassing)

Deze antwoorden komen automatisch mee in de bevestigingsmail en in de agenda-
afspraak zelf — er is geen aparte koppeling met de website nodig. Wil je de
lijst met vakken op `vakken.html` later aanpassen, werk dan ook deze
intakevraag in Google Agenda bij zodat ze in sync blijven.

## Stap 5 — Publiceer het afspraakschema

1. Klik rechtsboven op **Opslaan**.
2. Klik daarna op **Delen** (of het icoon met de pijl/vierkantje).

## Stap 6 — Haal de embed-code (insluitcode) op

1. Zoek de optie **Insluiten op je website** (Engels: "Embed on your
   website"). Google laat hier een stukje `<iframe>`-code zien.
2. Kopieer alléén de **URL** die tussen `src="..."` staat. Deze begint met
   `https://calendar.google.com/calendar/appointments/schedules/...`.
3. Als Google alleen een link geeft in plaats van een iframe-code, kun je ook
   gewoon die link gebruiken.

## Stap 7 — Plak de URL in de website

1. Open het bestand `proefles-inplannen.html` (bijvoorbeeld met Kladblok of
   Visual Studio Code).
2. Zoek de regel met `data-src="[GOOGLE_AGENDA_EMBED_URL]"`.
3. Vervang **`[GOOGLE_AGENDA_EMBED_URL]`** (inclusief de rechte haken `[` en
   `]`) door de URL die je bij stap 6 hebt gekopieerd. Bijvoorbeeld:

   ```html
   <!-- Voor -->
   <iframe id="agenda-iframe" data-src="[GOOGLE_AGENDA_EMBED_URL]" ... hidden>

   <!-- Na -->
   <iframe id="agenda-iframe" data-src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ...?gv=true" ... hidden>
   ```

   Laat `hidden` gewoon staan — een klein scriptje op de pagina haalt dit
   automatisch weg zodra er een echte URL staat (en toont anders netjes een
   "volgt binnenkort"-melding in plaats van een foutmelding).

4. Sla het bestand op.

## Stap 8 — Testen

1. Open `proefles-inplannen.html` in je browser (dubbelklikken op het
   bestand is genoeg).
2. Controleer of de agenda met beschikbare tijden zichtbaar is.
3. Plan zelf een test-afspraak in en check of je een bevestigingsmail krijgt
   en of de afspraak in de Google Agenda van het bedrijf verschijnt.
4. Vergeet niet om je testafspraak weer te verwijderen uit de agenda.

## Later een tweede docent toevoegen?

Je kunt een afspraakschema aan meerdere agenda's/docenten koppelen, of voor
elke docent een eigen schema maken. Zoek in dat geval in Google's hulpsite
naar "Afspraakschema's delen met een team" voor de exacte stappen — dat valt
buiten deze basisinstructie.
