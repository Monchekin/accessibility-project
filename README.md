# Accessibility Projekt

## React Formulärkomponenter med Tillgänglighet och Validering

Detta projekt visar hur man bygger tillgängliga och användarvänliga formulär i React. Formuläret inkluderar knappar med text, ikoner och en kombination av båda, tillsammans med inmatningsfält som har validering, felmeddelanden och livefeedback.

## Funktioner

- **Knappar** med olika konfigurationer (text, ikon eller båda)
- **Inmatningskomponenter** med tillgänglighetsfunktioner (etiketter, felmeddelanden, livefeedback)
- **Formulärvalidering** som ger dynamisk valideringsfeedback
- **Felhantering** med livefelmeddelanden och felnavigation
- **Fördröjningar i feedbacken** för en smidigare användarupplevelse
- **Fokus-hantering** för tillgänglighet, särskilt för användare som är beroende av tangentbordsnavigering

## Komponenter

### Knapparskomponent

`Buttons`-komponenten ger tre typer av knappar:

1. **Textknapp**: En enkel knapp med text.
2. **Ikonknapp**: En knapp som bara innehåller en ikon.
3. **Text & Ikon-knapp**: En knapp som kombinerar både text och en ikon.

Komponenten spårar vilken knapp som klickades och ger livefeedback för skärmläsare med hjälp av `aria-live="polite"`.

### Inmatningskomponent

`Input`-komponenten är ett återanvändbart inmatningsfält med inbyggd validering, felhantering och tillgänglighetsstöd. Den inkluderar:

- Unika ID:n för inmatningsfälten.
- Etiketter med valfria asterisker för att indikera obligatoriska fält.
- Dynamiska felmeddelanden.
- Livefeedback för inmatningsändringar.

### Formulär med Validering och Felhantering

Formuläret använder `Input`-komponenten och validerar varje fält dynamiskt när användaren interagerar med det. Formuläret innehåller:

- **Inline-validering**: Felmeddelanden visas så snart användaren skriver eller lämnar ett fält.
- **Validering ovanför**: Felmeddelanden visas högst upp, med länkar för att fokusera på specifika inmatningsfält som har fel.

### Tables-komponenten

`Tables`-komponenten är en responsiv och semantiskt korrekt implementation av tabeller. Den är utformad för att vara fullt tillgänglig för användare som använder skärmläsare eller tangentbord. Tabellen inkluderar:

1. **Veckans matmeny**: Visar olika maträtter för lunch och middag under veckan.
2. **Veckans schema**: Visar aktiviteter med tid och plats under veckan.
3. **Veckans temperaturer**: Presenterar temperaturdata för varje dag och del av dagen.

### Setup

För att köra projektet lokalt:

1. Klona detta repository:

   ```bash
   git clone https://github.com/Monchekin/accessibility-project.git
   ```

2. Gå till projektmappen:

   ```bash
   cd your-repository
   ```

3. Installera beroenden:

   ```bash
   npm install
   ```

4. Starta utvecklingsservern:
   ```bash
   npm start
   ```

Din applikation bör nu vara igång på `http://localhost:3000`.

## Utveckling

För att börja arbeta på knappar, inmatningskomponenter och tabeller kan du ändra `Buttons.js`, `Input.js` och `Tables.js`.Alla ändringar du gör i formulär eller tabeller kan testas i respektive komponent eller huvudfil.
Alla ändringar du gör i formulärfunktionaliteten kan uppdateras i `AppInline.js` eller `AppOnTop.js`.

## Tillgänglighet

Detta projekt är byggt med tillgänglighet i åtanke:

- Alla inmatningsfält har korrekt etiketter och felmeddelanden.
- Dynamiska uppdateringar läses av skärmläsare.
- Tabellerna använder semantiska element och beskrivande rubriker.
- Felmeddelanden hanteras med `aria-live`-attribut för att säkerställa att hjälpmedelstekniker kan meddela ändringar i realtid.

---

```

```
