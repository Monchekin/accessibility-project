import React from 'react';
import Buttons from '../components/buttons/Buttons';

const ButtonPage = () => {
  return (
    <div>
      <h3>Välkommen till vår Buttons-komponent!</h3>
      <Buttons />
      <p>
        Här hittar du en flexibel och tillgänglig lösning för att skapa knappar
        med olika stilar och funktioner. Buttons-komponenten erbjuder tre olika
        typer av knappar:
      </p>
      <ol>
        <li>
          <strong>Textknapp</strong> – En enkel knapp med endast text, perfekt
          för tydliga och lättförståeliga åtgärder.
        </li>
        <li>
          <strong>Ikonknapp</strong> – En knapp med endast en ikon, idealisk för
          minimalistiska designlösningar.
        </li>
        <li>
          <strong>Text- och ikonknapp</strong> – En kombination av text och
          ikon, perfekt för att balansera tydlighet och design.
        </li>
      </ol>
      <p>
        Varje knapp är responsiv och fungerar med både tangentbord och
        skärmläsare, så att alla användare kan använda dem utan problem. När du
        klickar på en knapp visas ett dynamiskt meddelande som bekräftar ditt
        val.
      </p>
      <hr />
      <h4>Props för Buttons-komponenten</h4>
      <p>
        Komponenten har <strong>inga props</strong> definierade, vilket innebär
        att den är fristående och inte tar emot några externa parametrar.
      </p>
      <hr />
      <h4>Tillgänglig design i fokus</h4>
      <ul>
        <li>
          <strong>Skärmläsarstöd:</strong> För knappen med endast ikon har vi
          lagt till dold text för skärmläsare.
        </li>
        <li>
          <strong>Liveuppdatering av meddelanden:</strong> Ett område med
          attributen <code>aria-live="polite"</code> och{' '}
          <code>aria-atomic="true"</code> används för att meddela användaren om
          vilken knapp som har klickats.
        </li>
        <li>
          <strong>Semantiska element:</strong> Vi har använt rubriktaggar och
          stycken för en logisk struktur.
        </li>
        <li>
          <strong>Fokusindikatorer:</strong> Förbättra tangentbordsnavigeringen
          med CSS-stil.
        </li>
      </ul>
      <hr />
      <h4>Exempel på användning</h4>
      <pre>
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

      <p>
        Vårt mål är att göra det enkelt för dig att skapa en snygg och
        användarvänlig upplevelse för dina användare.
      </p>
    </div>
  );
};

export default ButtonPage;
