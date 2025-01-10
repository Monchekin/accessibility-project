// InlineInputPage layout and content container
import InlineInput from '../components/input/InlineInput';
import styles from './Pages.module.css';

const InlineInputPage = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Main content section */}
      <main id='main-content' className={styles.mainContent}>
        <InlineInput />
        <hr className={styles.separator} />

        {/* Heading for the Input component */}
        <h3 className={styles.heading}>
          Information om min Input-komponent med inlines
        </h3>

        {/* Description of the component */}
        <p className={styles.paragraph}>
          Den här Input-komponenten är en anpassningsbar och tillgänglig lösning
          för att hantera inmatning i formulär, inklusive etiketter, validering
          och felmeddelanden. Den kan användas för alla typer av inmatningar,
          såsom text, e-post, nummer, telefonnummer och lösenord. Komponenten
          integrerar en smidig hantering av felmeddelanden och live-feedback,
          vilket gör den perfekt för både användarvänliga och tillgängliga
          formulär.
        </p>

        <hr className={styles.separator} />

        {/* Props for the Input component */}
        <h4 className={styles.subHeading}>Props för Input-komponenten</h4>
        <p className={styles.paragraph}>Komponenten har följande props:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>`type`:</div>
            <div className={styles.itemText}>
              Bestämmer vilken typ av inmatning (t.ex. text, lösenord, e-post).
              <br /> Den är obligatorisk.
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>`label`:</div>
            <div className={styles.itemText}>
              Texten som visas som etikett för fältet. <br /> Den är
              obligatorisk.
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>`name`:</div>
            <div className={styles.itemText}>
              Unikt namn för inputfältet. <br /> Den är obligatorisk.
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>`value`:</div>
            <div className={styles.itemText}>
              Värdet som visas i inputfältet. Kommer från det aktuella
              tillståndet för fältet (t.ex. från `errorFields`). <br />
              Den är obligatorisk.
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>`onChange`:</div>
            <div className={styles.itemText}>
              Funktion som anropas när användaren ändrar innehållet i fältet
              (t.ex. `handleChange`). <br />
              Den är obligatorisk.
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>`onBlur`:</div>
            <div className={styles.itemText}>
              Funktion som anropas när fältet förlorar fokus (t.ex.
              `handleBlur`). <br />
              Den är obligatorisk.
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>`placeholder`:</div>
            <div className={styles.itemText}>
              Texten som visas som platsinnehåll i inputfältet när det är tomt
              (t.ex. 'Skriv ditt namn här'). <br />
              Den är valfri.
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>`error`:</div>
            <div className={styles.itemText}>
              Eventuellt felmeddelande som är kopplat till fältet. <br />
              Den är valfri.
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>`ref`:</div>
            <div className={styles.itemText}>
              En referens till inputfältet, används för att fokusera på fältet
              vid behov. <br />
              Den är valfri.
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>`aria-describedby`:</div>
            <div className={styles.itemText}>
              ARIA-egenskap som kopplar ett felmeddelande (om det finns) till
              inputfältet för att ge tillgänglighetsinformation. <br />
              Den är valfri.
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>`required`:</div>
            <div className={styles.itemText}>
              Anger att fältet är obligatoriskt att fylla i innan formuläret kan
              skickas. <br />
              Den är valfri men rekommenderas.
            </div>
          </li>
        </ul>

        <hr className={styles.separator} />

        {/* Accessible design focus */}
        <h4 className={styles.subHeading}>Tillgänglig design i fokus</h4>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>
              Unik ID för varje inputfält:
            </div>
            <div className={styles.itemText}>
              Varje inputfält får ett unikt ID med hjälp av
              <code className={styles.inlineCode}>uuidv4()</code>, vilket gör
              att det kan kopplas till rätt etikett.
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>
              Validering och felmeddelanden:
            </div>
            <div className={styles.itemText}>
              Om en inmatning inte är korrekt visas ett felmeddelande under
              fältet, och fältet får en särskild CSS-klass för att indikera att
              något är fel. Felmeddelandet är också tillgängligt för skärmläsare
              genom
              <code className={styles.inlineCode}>aria-live="assertive"</code>.
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>Skärmläsarstöd:</div>
            <div className={styles.itemText}>
              Varje inputfält är kopplat till ett felmeddelande via
              <code className={styles.inlineCode}>aria-describedby</code> när
              ett fel inträffar, vilket gör att skärmläsare kan läsa upp fältets
              tillstånd och eventuella fel.
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>Live-feedback:</div>
            <div className={styles.itemText}>
              För att förbättra användarupplevelsen får användare live-feedback
              om deras inmatning via
              <code className={styles.inlineCode}>aria-live="polite"</code>,
              vilket gör att skärmläsaren meddelar användaren om deras senaste
              inmatning utan att avbryta annan information.
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>Fokus på fel:</div>
            <div className={styles.itemText}>
              Om ett fält inte är korrekt ifyllt, flyttas fokus till det första
              fältet med ett fel när användaren försöker skicka formuläret, så
              att de snabbt kan åtgärda felet.
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>Tillgänglig felhantering:</div>
            <div className={styles.itemText}>
              Felmeddelanden är kopplade till de relevanta inputfälten och görs
              tillgängliga för skärmläsare genom
              <code className={styles.inlineCode}>aria-describedby</code>, så
              att användaren kan höra varför inmatningen inte är giltig.
            </div>
          </li>
        </ul>

        <hr className={styles.separator} />

        {/* Example usage of the component */}
        <h4 className={styles.subHeading}>Exempel på användning</h4>
        <pre className={styles.codeBlock}>
          <code>
            {`import React from 'react';
import Input from './Input';

const App = () => (
    <form>
      <Input
      type="text"
      label="Namn"
      name="name"
      required
      />
    </form>
  );
    
    export default AppInline;`}
          </code>
        </pre>
      </main>
    </div>
  );
};

export default InlineInputPage;
