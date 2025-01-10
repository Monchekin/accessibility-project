import OnTopInput from '../components/input/OnTopInput';
import styles from './Pages.module.css';

const OnTopInputPage = () => {
  return (
    <div className={styles.pageContainer}>
      <main id='main-content' className={styles.mainContent}>
        {/* Render the OnTopInput component */}
        <OnTopInput />
        <hr className={styles.separator} />

        {/* Heading for the page */}
        <h3 className={styles.heading}>
          Information om min Input-komponent med onTop-meddelanden
        </h3>

        {/* Description of the component */}
        <p className={styles.paragraph}>
          Här hittar du en flexibel och tillgänglig lösning för att skapa
          anpassade formulärfält med etiketter, validering och responsiv design.
          Input-komponenten är utformad för att stödja en rad olika fält,
          inklusive text, lösenord, e-post, telefonnummer och mer. Den erbjuder
          också funktioner för felhantering och användarfeedback.
        </p>

        <hr className={styles.separator} />

        {/* List of component props */}
        <h4 className={styles.subHeading}>Props för Input-komponenten</h4>
        <p className={styles.paragraph}>Komponenten har följande props:</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>`type`:</div>
            <div className={styles.itemText}>
              Bestämmer typen av input (t.ex. text, lösenord, e-post,
              telefonnummer, etc.). Detta gör att komponenten kan anpassa sig
              efter olika behov.
            </div>
          </li>
          {/* More props listed below */}
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>`label`:</div>
            <div className={styles.itemText}>
              Etiketten som visas för inputfältet. Denna är obligatorisk och
              hjälper användare att förstå vad fältet ska innehålla.
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>`name`:</div>
            <div className={styles.itemText}>
              Namnet på inputfältet som används för att referera till fältet i
              formuläret.
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>`value`:</div>
            <div className={styles.itemText}>
              Värdet i inputfältet. Detta är nödvändigt för att hålla reda på
              användarens inmatning.
            </div>
          </li>
          {/* More props continue */}
        </ul>

        <hr className={styles.separator} />

        {/* Accessibility considerations */}
        <h4 className={styles.subHeading}>Tillgänglig design i fokus</h4>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>Skärmläsarstöd:</div>
            <div className={styles.itemText}>
              För att säkerställa att alla användare, inklusive de som använder
              skärmläsare, kan förstå fältet, har jag inkluderat en etikett (
              <code className={styles.inlineCode}>&lt;label&gt;</code>) som är
              kopplad till inputfältet via
              <code className={styles.inlineCode}>htmlFor</code>. Dessutom
              används
              <code className={styles.inlineCode}>aria-live</code> och andra
              ARIA-attribut för att säkerställa att användare med hjälpmedel får
              rätt feedback i realtid.
            </div>
          </li>
          {/* Error handling and feedback */}
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>Felhantering och feedback:</div>
            <div className={styles.itemText}>
              När validering misslyckas visas ett felmeddelande under fältet,
              och fältet får en särskild CSS-klass för att indikera att något är
              fel. Felmeddelandet är också tillgängligt för skärmläsare genom
              <code className={styles.inlineCode}>aria-live="assertive"</code>,
              vilket innebär att användaren omedelbart får veta om ett fel utan
              att behöva leta efter det.
            </div>
          </li>
          {/* Semantic elements */}
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>Semantiska element:</div>
            <div className={styles.itemText}>
              Jag använder mig av semantiska HTML-element, såsom
              <code className={styles.inlineCode}>&lt;label&gt;</code> och
              <code className={styles.inlineCode}>&lt;input&gt;</code>, för att
              säkerställa att formuläret är logiskt strukturerat och
              tillgängligt för skärmläsare och användare. Semantiska element gör
              det enklare för hjälpmedel att tolka och läsa upp innehållet för
              användarna.
            </div>
          </li>
          {/* Focus indicators with CSS */}
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>Fokusindikatorer (via CSS):</div>
            <div className={styles.itemText}>
              För att förbättra tangentbordsnavigeringen kan du lägga till
              fokusindikatorer i din CSS-stil, vilket gör det lättare för
              användare att se vilket fält som är aktivt. Detta hjälper
              användare som navigerar med tangentbordet att förstå vilken del av
              formuläret de för närvarande interagerar med.
            </div>
          </li>
        </ul>

        <hr className={styles.separator} />

        {/* Example usage of the input component */}
        <h4 className={styles.subHeading}>Exempel på användning</h4>
        <p className={styles.paragraph}>
          Här är ett exempel på hur du använder den i ett formulär:
        </p>

        <pre className={styles.codeBlock}>
          <code>
            {`import React, { useState } from 'react';
import Input from './Input';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e, name) => {
    setFormData({ ...formData, [name]: e.target.value });
  };

  return (
    <form>
      <h1>Vänligen fyll i dina uppgifter</h1>

      <Input
        type="text"
        label="Namn"
        name="name"
        value={formData.name}
        onChange={(e) => handleChange(e, 'name')}
        required={true}
      />

      <Input
        type="email"
        label="E-post"
        name="email"
        value={formData.email}
        onChange={(e) => handleChange(e, 'email')}
        required={true}
      />

      <button type="submit">Skicka</button>
    </form>
  );
}

export default App;
           `}
          </code>
        </pre>
      </main>
    </div>
  );
};

export default OnTopInputPage;
