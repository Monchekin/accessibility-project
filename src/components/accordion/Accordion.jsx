import styles from './Accordion.module.css';
import { useState } from 'react';

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div>
      <div className={styles.accordion}>
        {data.map((item, i) => (
          <div className={styles.item} key={i}>
            <h2>
              <button
                className={styles.accordionButton}
                onClick={() => toggle(i)}
                aria-expanded={selected === i}
                aria-controls={`accordion-panel-${i}`}
              >
                <span>{item.heading}</span>
                <span aria-hidden='true'>{selected === i ? '-' : '+'}</span>
              </button>
            </h2>

            <div
              id={`accordion-panel-${i}`}
              className={selected === i ? styles.visible : styles.hidden}
              aria-hidden={selected !== i}
            >
              <p>{selected === i && item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const data = [
  {
    heading: 'Vad är tillgänglighet på webben?',
    content:
      'Tillgänglighet handlar om att göra webbsidor och appar användbara för så många som möjligt, inklusive personer med funktionsnedsättningar. Det innebär att innehållet ska kunna uppfattas, hanteras och förstås av alla, oavsett om de använder skärmläsare, tangentbordsnavigering eller andra hjälpmedel.',
  },
  {
    heading: 'Varför är tillgänglighet viktigt?',
    content:
      'En tillgänglig webbplats gör det möjligt för fler människor att ta del av information och tjänster. Det gynnar inte bara personer med funktionsnedsättningar utan även äldre användare, personer med tillfälliga begränsningar (t.ex. en bruten arm) och de som använder mobila enheter i utmanande miljöer, som i starkt solljus eller med låg bandbredd.',
  },
  {
    heading: 'Vanliga tillgänglighetsproblem',
    content:
      'Några vanliga problem inkluderar låg kontrast mellan text och bakgrund, brist på alternativtext för bilder, otydliga länkar, svårnavigerade gränssnitt och formulär som inte är optimerade för skärmläsare. Många webbplatser missar också att göra allt innehåll tillgängligt med endast tangentbordet, vilket kan skapa hinder för vissa användare.',
  },
  {
    heading: 'Hur förbättrar man tillgängligheten?',
    content:
      'Det finns många sätt att förbättra tillgängligheten på en webbplats. Använd semantisk HTML så att skärmläsare kan tolka innehållet korrekt, se till att allt går att navigera med tangentbordet och skapa tydliga kontraster mellan text och bakgrund. Dessutom bör du alltid testa din webbplats med riktiga användare och hjälpmedel som skärmläsare för att identifiera problem.',
  },
  {
    heading: 'Lagar och riktlinjer för tillgänglighet',
    content:
      'Det finns flera riktlinjer och lagar som styr tillgängligheten på webben. De mest kända är WCAG (Web Content Accessibility Guidelines), som innehåller krav på hur webbplatser ska utformas för att vara tillgängliga. Inom EU finns också webbtillgänglighetsdirektivet, som kräver att offentliga webbplatser och appar ska vara tillgängliga för alla.',
  },
];

export default Accordion;
