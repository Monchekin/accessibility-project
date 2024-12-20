import OnTopInput from '../components/input/OnTopInput';

const OnTopInputPage = () => {
  return (
    <div>
      <OnTopInput />

      <h3>Välkommen till vår Input-komponent!</h3>
      <p>
        Här hittar du en flexibel och tillgänglig lösning för att skapa
        anpassade formulärfält med etiketter, validering och responsiv design.
        Input-komponenten är utformad för att stödja en rad olika fält,
        inklusive text, lösenord, e-post, telefonnummer och mer. Den erbjuder
        också funktioner för felhantering och användarfeedback.
      </p>

      <hr />

      <h4>Props för Input-komponenten</h4>
      <p>Komponenten har följande props:</p>
      <ul>
        <li>
          <strong>type</strong>: Bestämmer typen av input (t.ex. text, lösenord,
          e-post, telefonnummer, etc.). Detta gör att komponenten kan anpassa
          sig efter olika behov.
        </li>
        <li>
          <strong>label</strong>: Etiketten som visas för inputfältet. Denna är
          obligatorisk och hjälper användare att förstå vad fältet ska
          innehålla.
        </li>
        <li>
          <strong>name</strong>: Namnet på inputfältet som används för att
          referera till fältet i formuläret.
        </li>
        <li>
          <strong>value</strong>: Värdet i inputfältet. Detta är nödvändigt för
          att hålla reda på användarens inmatning.
        </li>
        <li>
          <strong>onChange</strong>: En funktion som anropas när användaren
          ändrar värdet i inputfältet.
        </li>
        <li>
          <strong>onBlur</strong>: En funktion som anropas när inputfältet
          förlorar fokus.
        </li>
        <li>
          <strong>onKeyDown</strong>: En funktion som anropas när en tangent
          trycks ner på tangentbordet.
        </li>
        <li>
          <strong>placeholder</strong>: En text som visas i inputfältet när det
          är tomt.
        </li>
        <li>
          <strong>required</strong>: Anger om fältet är obligatoriskt att fylla
          i.
        </li>
        <li>
          <strong>error</strong>: Ett felmeddelande som visas om validering
          misslyckas.
        </li>
        <li>
          <strong>autoFocus</strong>: Om inputfältet ska få fokus vid
          sidladdning.
        </li>
        <li>
          <strong>ref</strong>: En referens som gör att externa komponenter kan
          få åtkomst till inputfältet.
        </li>
      </ul>

      <hr />

      <h4>Tillgänglig design i fokus</h4>
      <p>
        Vi har lagt stor vikt vid att göra Input-komponenten tillgänglig för
        alla användare:
      </p>
      <ul>
        <li>
          <strong>Skärmläsarstöd</strong>: För att säkerställa att alla
          användare, inklusive de som använder skärmläsare, kan förstå fältet,
          har vi inkluderat en etikett (<code>&lt;label&gt;</code>) som är
          kopplad till inputfältet via <code>htmlFor</code>.
        </li>
        <li>
          <strong>Felhantering och feedback</strong>: När validering misslyckas
          visas ett felmeddelande under fältet, och fältet får en särskild
          CSS-klass för att indikera att något är fel. Felmeddelandet är också
          tillgängligt för skärmläsare genom <code>aria-live="assertive"</code>.
        </li>
        <li>
          <strong>Semantiska element</strong>: Vi använder semantiska
          HTML-element, såsom <code>&lt;label&gt;</code> och{' '}
          <code>&lt;input&gt;</code>, för att säkerställa att formuläret är
          logiskt strukturerat och tillgängligt för skärmläsare och användare.
        </li>
        <li>
          <strong>Fokusindikatorer (via CSS)</strong>: För att förbättra
          tangentbordsnavigeringen kan du lägga till fokusindikatorer i din
          CSS-stil, vilket gör det lättare för användare att se vilket fält som
          är aktivt.
        </li>
      </ul>

      <hr />

      <h4>Exempel på användning</h4>
      <p>
        Du kan enkelt lägga till vår Input-komponent i din applikation. Här är
        ett exempel på hur du använder den i ett formulär:
      </p>

      <pre>
        <code>
          {`
import React, { useState } from 'react';
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

      <p>
        Med Input-komponenten får du ett flexibelt, tillgängligt och
        användarvänligt sätt att hantera formulärfält i din applikation.
      </p>
    </div>
  );
};

export default OnTopInputPage;
