// Page layout and content container
import Buttons from '../components/buttons/Buttons';
import styles from './Pages.module.css';

const ButtonPage = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Main content section */}
      <main id='main-content' className={styles.mainContent}>
        {/* Buttons component */}
        <Buttons />
        <hr className={styles.separator} />

        {/* Section heading for component information */}
        <h3 className={styles.heading}>Information om min Buttons-komponent</h3>

        {/* Description of button component types */}
        <p className={styles.paragraph}>
          Här hittar du en flexibel och tillgänglig lösning för att skapa
          knappar med olika stilar och funktioner. <br />
          Buttons-komponenten finns tre exempel på olika typer av login-knappar:
        </p>
        <ol className={styles.list}>
          <li className={styles.listItem}>
            <strong>Textknapp</strong> – En enkel knapp med endast text, perfekt
            för tydliga och lättförståeliga åtgärder.
          </li>
          <li className={styles.listItem}>
            <strong>Ikonknapp</strong> – En knapp med endast en ikon, idealisk
            för minimalistiska designlösningar.
          </li>
          <li className={styles.listItem}>
            <strong>Text- och ikonknapp</strong> – En kombination av text och
            ikon, perfekt för att balansera tydlighet och design.
          </li>
        </ol>
        <p className={styles.paragraph}>
          Varje knapp är responsiv och fungerar med både tangentbord och
          skärmläsare, så att alla användare kan använda dem utan problem. När
          du klickar på en knapp visas ett dynamiskt meddelande som bekräftar
          ditt val.
        </p>

        <hr className={styles.separator} />

        {/* Props section explaining the Buttons component */}
        <h4 className={styles.subHeading}>Props för Buttons-komponenten</h4>
        <p className={styles.paragraph}>
          Komponenten har <strong>inga props</strong> definierade, vilket
          innebär att den är fristående och inte tar emot några externa
          parametrar.
        </p>

        <hr className={styles.separator} />

        {/* Accessibility-focused design explanation */}
        <h4 className={styles.subHeading}>Tillgänglig design i fokus</h4>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>Skärmläsarstöd:</div>
            <div className={styles.itemText}>
              För knappen med endast ikon har jag lagt till dold text för
              skärmläsare via en
              <code className={styles.inlineCode}>&lt;span&gt;</code> med
              klassen <code className={styles.inlineCode}>visually-hidden</code>
              . Detta gör att skärmläsare läser upp samma text som finns på
              knappen, trots att den inte syns.
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>
              Liveuppdatering av meddelanden:
            </div>
            <div className={styles.itemText}>
              Ett område med attributen
              <code className={styles.inlineCode}>aria-live="polite"</code> och
              <code className={styles.inlineCode}>aria-atomic="true"</code>
              används för att meddela användaren om vilken knapp som har
              klickats på. Detta gör att skärmläsare kan ge dynamisk
              återkoppling när meddelandet ändras.
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>Semantiska element:</div>
            <div className={styles.itemText}>
              Jag har använt mig av rubriktaggar och stycken för en logisk
              struktur. Det här gör att innehållet är lätt att förstå både för
              användare och skärmläsare.
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>Fokusindikatorer:</div>
            <div className={styles.itemText}>
              Har förbättrat tangentbordsnavigeringen med CSS-stil. Detta gör
              att användare kan se vilket element som är aktivt genom att lägga
              till en tydlig fokusindikator.
            </div>
          </li>
        </ul>

        <hr className={styles.separator} />

        {/* Example usage of the Buttons component */}
        <h4 className={styles.subHeading}>Exempel på användning</h4>
        <pre className={styles.codeBlock}>
          <code>
            {`import React from 'react';
import Buttons from './Buttons';

function App() {
  return (
    <div>
      <h1>Välkommen till vår applikation!</h1>
      <Buttons />
    </div>
  );
}

export default App;`}
          </code>
        </pre>
      </main>
    </div>
  );
};

export default ButtonPage;
