import Tables from '../components/tables/Tables';
import styles from './Pages.module.css';

const TablesPages = () => {
  return (
    <div>
      <main id='main-content' className={styles.mainContent_tables}>
        <div className={styles.tableWrapper}>
          <Tables />
        </div>

        <hr className={styles.separator} />
        <h3 className={styles.heading}>Information om min Tables-komponent</h3>
      </main>
    </div>
  );
};
export default TablesPages;
