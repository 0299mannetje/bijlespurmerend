# Contactformulier scholen.html koppelen (Formspree)

Op `scholen.html` staat een contactformulier voor scholen en organisaties.
Dat formulier stuurt de ingevulde gegevens door naar jouw mailbox via
**Formspree**, een gratis dienst die formuliergegevens omzet in een e-mail —
je hebt hier geen eigen server voor nodig. Dit hoef je maar één keer op te
zetten (ca. 3 minuten).

Belangrijk: doe dit met het **e-mailadres van het bedrijf**
(`bijlespurmerend0299@gmail.com`), zodat aanvragen ook op de juiste plek
binnenkomen.

## Stap 1 — Open de kant-en-klare link

Klik op onderstaande link (of kopieer hem in je browser). Deze link bevat
alle velden van het formulier op `scholen.html` en het juiste
bestemmingsadres al kant-en-klaar ingesteld — je hoeft dus niets handmatig
in te stellen:

```
https://formspree.io/claim?name=Scholen+aanvraagformulier&field.organisatie=text,required&field.contactpersoon=text,required&field.email=email,required&field.telefoon=text&field.bericht=text,required,maxlength:2000&action.email=bijlespurmerend0299@gmail.com
```

## Stap 2 — Claim het formulier

1. Formspree vraagt je in te loggen. Log in met
   `bijlespurmerend0299@gmail.com` (of maak een gratis account aan als dat
   adres nog geen Formspree-account heeft).
2. Na het inloggen "claimt" Formspree het formulier automatisch voor jouw
   account — met de velden en het bestemmingsadres al goed ingesteld.

## Stap 3 — Haal de endpoint-URL op

1. Open het net geclaimde formulier in je Formspree-dashboard.
2. Zoek de **"Your Form's Endpoint"** of **"Integration"**-sectie. Formspree
   toont hier een URL die begint met `https://formspree.io/f/` gevolgd door
   een unieke code, bijvoorbeeld `https://formspree.io/f/abcd1234`.
3. Kopieer deze volledige URL.

## Stap 4 — Plak de URL in de website

1. Open het bestand `scholen.html` (bijvoorbeeld met Kladblok of Visual
   Studio Code).
2. Zoek de regel met `action="[FORMSPREE_ENDPOINT]"`.
3. Vervang **`[FORMSPREE_ENDPOINT]`** (inclusief de rechte haken `[` en `]`)
   door de URL die je bij stap 3 hebt gekopieerd. Bijvoorbeeld:

   ```html
   <!-- Voor -->
   <form id="scholen-contact-form" action="[FORMSPREE_ENDPOINT]" method="POST" novalidate>

   <!-- Na -->
   <form id="scholen-contact-form" action="https://formspree.io/f/abcd1234" method="POST" novalidate>
   ```

4. Sla het bestand op.

Zolang hier nog de letterlijke placeholder staat, toont het formulier bij
versturen automatisch een nette "wordt nog gekoppeld"-melding in plaats van
een kapotte of stille fout.

## Stap 5 — Bevestig je e-mailadres bij Formspree

1. Open `scholen.html` in je browser en vul het formulier in met test-
   gegevens, en klik op **Versturen**.
2. Formspree stuurt bij de **allereerste** binnenkomende aanvraag een
   verificatiemail naar `bijlespurmerend0299@gmail.com` met een bevestigings-
   link. Klik op die link — pas daarna komen aanvragen automatisch door.
3. Verstuur daarna nog een tweede test-aanvraag en controleer of die nu wel
   direct in de inbox verschijnt (check ook de spam-map bij de eerste keer).

## Stap 6 — Testen

1. Vul het formulier op de live site nogmaals in en verstuur het.
2. Controleer of je de e-mail ontvangt, met als onderwerp "Nieuwe aanvraag
   via scholen.html — Bijles Purmerend" en alle ingevulde velden erin.
3. Verwijder eventuele test-aanvragen desgewenst uit je Formspree-dashboard.

## Goed om te weten

- Het gratis Formspree-plan staat tot **50 aanvragen per maand** toe — ruim
  voldoende om mee te beginnen. Kom je hier overheen, dan kun je binnen
  Formspree eenvoudig upgraden naar een betaald plan.
- Er is geen wachtwoord of betaalgegeven van jou nodig om dit werkend te
  krijgen — alleen het inloggen bij Formspree zelf en de endpoint-URL
  hierboven.
