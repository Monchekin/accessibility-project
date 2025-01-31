import Tables from '../components/tables/Tables';
import styles from './Pages.module.css';

const TablesPage = () => {
  return (
    <div className={styles.pageContainer}>
      <main id='main-content' className={styles.mainContent}>
        {/* Tables component */}
        <Tables />
        <hr className={styles.separator} />

        {/* Section heading for component information */}
        <h3 className={styles.heading}>Information om min Tables-komponent</h3>

        {/* Description of table component content */}
        <p className={styles.paragraph}>
          Här hittar du en tillgänglig lösning för att presentera information i
          tabellform. Tables-komponenten visar tre olika typer av tabeller, var
          och en med unika kodstrukturer:
        </p>
        <ol className={styles.list}>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>Struktur</div>
            <p>
              Tabellerna använder semantiska HTML-element som
              <code className={styles.inlineCode}>&lt;thead&gt;</code> och
              <code className={styles.inlineCode}>&lt;tbody&gt;</code>
              för tydlig struktur och bättre kompatibilitet med skärmläsare.
            </p>
          </li>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>Hierarki</div>
            <p>
              Både <code className={styles.inlineCode}>scope="col"</code> och
              <code className={styles.inlineCode}>scope="row"</code> används för
              att definiera relationen mellan rader och kolumner, vilket
              underlättar navigering för hjälpmedel.
            </p>
          </li>
        </ol>

        <p className={styles.paragraph}>
          Varje tabell är responsiv och optimerad för skärmläsare och
          tangentbordsanvändning.
        </p>

        <hr className={styles.separator} />

        {/* Props section explaining the Tables component */}
        <h4 className={styles.subHeading}>Props för Tables-komponenten</h4>
        <p className={styles.paragraph}>
          Komponenten har <strong>inga props</strong> definierade, vilket
          innebär att den är fristående och fungerar utan externa parametrar.
          Detta gör den enkel att använda i olika projekt utan behov av extra
          konfiguration.
        </p>

        <hr className={styles.separator} />

        {/* Accessibility-focused design explanation */}
        <h4 className={styles.subHeading}>Tillgänglig design i fokus</h4>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>Responsivitet:</div>
            <div className={styles.itemText}>
              Tabellen är anpassad för mindre skärmar med horisontell scroll och
              tillräcklig padding för enkel navigering.
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>Semantiska element:</div>
            <div className={styles.itemText}>
              Korrekt användning av HTML-element såsom
              <code className={styles.inlineCode}>&lt;th&gt;</code>,
              <code className={styles.inlineCode}>&lt;td&gt;</code> och
              <code className={styles.inlineCode}>&lt;caption&gt;</code> ger en
              tydlig struktur och förbättrar tillgängligheten för hjälpmedel.
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>Skärmläsaroptimering:</div>
            <div className={styles.itemText}>
              Tabellerna innehåller beskrivande
              <code className={styles.inlineCode}>caption</code>-taggar som ger
              kontext till skärmläsaranvändare och gör det enklare att förstå
              tabellens syfte.
            </div>
          </li>
        </ul>

        <hr className={styles.separator} />

        {/* Example usage of the Tables component */}
        <h4 className={styles.subHeading}>Exempel på användning</h4>
        <pre className={styles.codeBlock}>
          <code>
            {`import React from 'react';
import Tables from './Tables';

function App() {
  return (
    <div>
      <h1>Veckans information</h1>
      <Tables />
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

export default TablesPage;
