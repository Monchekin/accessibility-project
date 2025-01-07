import styles from './Pages.module.css';

const HomePage = () => {
  return (
    <div className={styles.pageContainer}>
      <main id='main-content' className={styles.mainContent}>
        <h1 className={styles.heading}>Tillgängliga komponenter</h1>
        <p className={styles.paragraph}>
          På den här sidan hittar du en samling komponenter som är utformade för
          att vara tillgängliga för alla, oavsett förutsättningar.
        </p>
        <h2 className={styles.subHeading}>Utforska våra komponenter</h2>
        <p className={styles.paragraph}>
          I menyn finns tre olika typer av komponenter att utforska:
          <strong>Buttons</strong>, <strong>Inline Inputs</strong>, och
          <strong>OnTop Inputs</strong>. <br />
          Varje sida erbjuder två huvudsakliga sektioner:
        </p>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>Interaktivt testområde</div>
            <div className={styles.itemText}>
              Här kan du själv prova komponenterna i realtid för att förstå hur
              de fungerar och uppför sig i olika scenarier.
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.itemHeader}>
              Detaljerad komponentinformation
            </div>
            <div className={styles.itemText}>
              Varje komponent har en egen sektion där du kan läsa:
              <ul className={styles.list}>
                <li className={styles.subList}>
                  - En beskrivning av komponenten och dess syfte.
                </li>
                <li className={styles.subList}>
                  - En lista över de props som komponenten stöder, inklusive
                  deras användningsområden.
                </li>
                <li className={styles.subList}>
                  - En genomgång av den tillgänglighetsdesign som har
                  tillämpats.
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <p className={styles.paragraph}>
          Sidan är skapad med fokus på att kombinera funktionalitet och
          tillgänglighet. Målet är att visa hur gränssnitt kan byggas för att
          vara inkluderande och samtidigt enkla att använda. Genom att testa och
          läsa om komponenterna får du både praktiska och teoretiska insikter om
          tillgänglig design.
        </p>
      </main>
    </div>
  );
};

export default HomePage;
