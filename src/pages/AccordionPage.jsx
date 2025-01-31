import Accordion from '../components/accordion/Accordion';
import styles from './Pages.module.css';

const AccordionPage = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Main content section */}
      <main id='main-content' className={styles.mainContent}>
        {/* Accordion-komponenten */}
        <Accordion />
        <hr className={styles.separator} />

        {/* Information om komponenten */}
        <h3 className={styles.heading}>Information om Accordion-komponenten</h3>
        <p className={styles.paragraph}>
          Accordion är en interaktiv komponent som låter användare visa och
          dölja innehåll i sektioner. Den används för att organisera information
          på ett kompakt sätt, vilket förbättrar överskådlighet och
          användarupplevelse.
        </p>

        <hr className={styles.separator} />

        {/* Props för komponenten */}
        <h4 className={styles.subHeading}>Props för Accordion-komponenten</h4>
        <p className={styles.paragraph}>Komponenten har följande props:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>`data` (array, krävs)</div>
            <div className={styles.itemText}>
              En lista av objekt där varje objekt innehåller `heading` (rubrik)
              och `content` (innehåll).
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>
              `defaultOpen` (nummer eller null, valfri)
            </div>
            <div className={styles.itemText}>
              Bestämmer vilken sektion som ska vara öppen vid start. Om `null`
              är alla sektioner stängda initialt.
            </div>
          </li>
        </ul>

        <hr className={styles.separator} />

        {/* Tillgänglighet och designfokus */}
        <h4 className={styles.subHeading}>Tillgänglig design i fokus</h4>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>ARIA-attribut</div>
            <div className={styles.itemText}>
              Knappen använder
              <code className={styles.inlineCode}>aria-controls</code> för att
              koppla den till rätt innehåll.
              <code className={styles.inlineCode}>aria-expanded</code> anger om
              en sektion är öppen eller stängd, och
              <code className={styles.inlineCode}>aria-hidden</code> används för
              att dölja innehåll för skärmläsare när det är kollapsat.
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>Tangentbordsnavigering</div>
            <div className={styles.itemText}>
              Användare kan navigera mellan sektionerna med
              <code className={styles.inlineCode}>Tab</code> och öppna/stänga
              dem med <code className={styles.inlineCode}>Enter</code> eller
              <code className={styles.inlineCode}>Mellanslag</code>.
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>Fokusindikatorer</div>
            <div className={styles.itemText}>
              En tydlig fokusmarkering gör det enkelt att se vilket element som
              är aktivt vid tangentbordsnavigation.
            </div>
          </li>
        </ul>

        <hr className={styles.separator} />

        {/* Exempel på hur komponenten används */}
        <h4 className={styles.subHeading}>Exempel på användning</h4>
        <pre className={styles.codeBlock}>
          <code>
            {`import React from 'react';
import Accordion from './Accordion';

const data = [
  { heading: 'Fråga 1', content: 'Svar på fråga 1' },
  { heading: 'Fråga 2', content: 'Svar på fråga 2' }
];

const App = () => (
    <Accordion data={data} defaultOpen={0} />
);

export default App;`}
          </code>
        </pre>
      </main>
    </div>
  );
};

export default AccordionPage;
