// HomePage layout and content container
import styles from './Pages.module.css';
import Tables from '../components/tables/Tables';

const HomePage = () => {
  return (
    <div className={styles.pageContainer}>
      {/* Main content section */}
      <main id='main-content' className={styles.mainContent}>
        
        {/* Heading for the page */}
        <h1 className={styles.heading}>Tillgängliga komponenter</h1>
        <p className={styles.paragraph}>
          På den här sidan hittar du en samling komponenter som är utformade för
          att vara tillgängliga för alla, oavsett förutsättningar.
        </p>

        {/* Subtitle for exploring components */}
        <h2 className={styles.subHeading}>Utforska våra komponenter</h2>
        <p className={styles.paragraph}>
          I menyn finns tre olika typer av komponenter att utforska: 
          Buttons, Inline Inputs, OnTop Inputs och Tables. <br />
          Varje sida erbjuder två huvudsakliga sektioner:
        </p>

        {/* List of available component features */}
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

        {/* Page goal explanation */}
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