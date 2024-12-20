import InlineInput from '../components/input/InlineInput';

const InlineInputPage = () => {
  return (
    <div>
      <InlineInput />

      <h3>Välkommen till vår Input-komponent!</h3>

      <p>
        Den här <strong>Input-komponenten</strong> är en anpassningsbar och
        tillgänglig lösning för att hantera inmatning i formulär, inklusive
        etiketter, validering och felmeddelanden. Den kan användas för alla
        typer av inmatningar, såsom text, e-post, nummer, telefonnummer och
        lösenord. Komponenten integrerar också smidig hantering av
        felmeddelanden och live-feedback, vilket gör den perfekt för både
        användarvänliga och tillgängliga formulär.
      </p>

      <hr />

      <h4>Props för Input-komponenten</h4>
      <p>
        Komponenten använder ett antal <strong>props</strong> för att anpassa
        beteende och utseende:
      </p>
      <ul>
        <li>
          <strong>`type`</strong>: Bestämmer vilken typ av inmatning (t.ex.
          text, lösenord, e-post). Krävs.
        </li>
        <li>
          <strong>`label`</strong>: Texten som visas som etikett för fältet.
          Krävs.
        </li>
        <li>
          <strong>`name`</strong>: Unikt namn för inputfältet. Krävs.
        </li>
        <li>
          <strong>`value`</strong>: Värdet i inputfältet. Krävs.
        </li>
        <li>
          <strong>`onChange`</strong>: Funktion som anropas vid förändring av
          inputfältets värde. Krävs.
        </li>
        <li>
          <strong>`onBlur`</strong>: Funktion som anropas när inputfältet
          förlorar fokus. Krävs.
        </li>
        <li>
          <strong>`onKeyDown`</strong>: Funktion som anropas vid
          tangentbordshändelser i fältet.
        </li>
        <li>
          <strong>`placeholder`</strong>: Text som visas i fältet som en
          förhandsvisning.
        </li>
        <li>
          <strong>`required`</strong>: Om fältet är obligatoriskt (boolean).
        </li>
        <li>
          <strong>`error`</strong>: Felmeddelande som visas om inmatningen inte
          är korrekt.
        </li>
        <li>
          <strong>`autoFocus`</strong>: Om fältet ska få fokus vid renderingen.
        </li>
      </ul>
      <p>
        Komponenten använder även en <strong>ref</strong> via{' '}
        <code>forwardRef</code> för att ge extern åtkomst till inputfältet.
      </p>

      <hr />

      <h4>Exempel på användning</h4>
      <p>
        För att använda <strong>Input-komponenten</strong> i din applikation kan
        du skapa ett formulär som tar emot användarinput och validerar det. Här
        är ett exempel:
      </p>
      <pre>
        <code>
          {`import React, { useState, useRef } from 'react';
          import Input from './Input';
          import { validateField, setupFields } from './Validation';

          const AppInline = () => {
            const [errorFields, setErrorFields] = useState(setupFields);
            const [inputValue, setInputValue] = useState('');
            const inputRefs = useRef({});
            const delayRef = useRef(null);

            const handleChange = (e, name) => {
              const { value } = e.target;
              const error = validateField(value, name);

              setErrorFields((prevFields) => ({
                ...prevFields,
                [name]: {
                  value,
                  error,
                },
              }));
            };

            const handleSubmit = (e) => {
              e.preventDefault();
              // Form validation logic here
            };

            return (
              <form onSubmit={handleSubmit}>
                <Input
                  type="text"
                  label="Namn"
                  name="name"
                  value={errorFields.name.value}
                  error={errorFields.name.error}
                  onChange={handleChange}
                  onBlur={(e) => handleBlur(e, 'name')}
                  ref={(el) => (inputRefs.current.name = el)}
                  required
                />
                {/* Additional inputs... */}
              </form>
            );
          };`}
        </code>
      </pre>

      <hr />

      <h4>Tillgänglig design i fokus</h4>
      <p>
        För att göra denna komponent så tillgänglig som möjligt har vi
        implementerat följande:
      </p>
      <ul>
        <li>
          <strong>Unik ID för varje inputfält:</strong> Varje inputfält får ett
          unikt ID med hjälp av <code>uuidv4()</code>, vilket gör att det kan
          kopplas till rätt etikett (<code>&lt;label&gt;</code>), och
          skärmläsare kan korrekt läsa upp fältet.
        </li>
        <li>
          <strong>Validering och felmeddelanden:</strong> Om en inmatning inte
          är korrekt visas ett <strong>felmeddelande</strong> under fältet. Med
          hjälp av <code>aria-live="assertive"</code> och{' '}
          <code>aria-atomic="true"</code> säkerställs att meddelandet omedelbart
          läses upp av skärmläsare utan att fördröja andra interaktioner.
        </li>
        <li>
          <strong>Tillgång till live-feedback:</strong> För att ge användaren
          återkoppling om deras input har vi lagt till ett område för{' '}
          <strong>live-feedback</strong> via <code>aria-live="polite"</code>, så
          att skärmläsare kan meddela användaren om förändringar utan att störa
          flödet.
        </li>
        <li>
          <strong>Semantisk HTML:</strong> Vi använder semantiska HTML-element
          som <code>&lt;label&gt;</code>, <code>&lt;input&gt;</code>, och{' '}
          <code>&lt;span&gt;</code> för att förbättra användarupplevelsen och
          säkerställa att alla användare, inklusive de som använder skärmläsare,
          får en tydlig och konsekvent upplevelse.
        </li>
        <li>
          <strong>Ref och fokus:</strong> Ref-hantering gör det möjligt att
          enkelt hantera fokus, vilket är särskilt användbart för att navigera
          direkt till felaktiga fält efter formvalidering.
        </li>
      </ul>

      <hr />

      <h4>Sammanfattning</h4>
      <p>
        Med vår <strong>Input-komponent</strong> får du ett kraftfullt verktyg
        för att skapa tillgängliga och användarvänliga formulär. Komponenten
        hanterar både validering och användarfeedback, vilket gör det lättare
        att bygga professionella och funktionella användargränssnitt.
      </p>
    </div>
  );
};

export default InlineInputPage;
