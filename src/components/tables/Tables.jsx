import styles from './Tables.module.css';

const Tables = () => {
  return (
    <div>
      <div className={styles.tables_page}>
        {/* Table 1 */}
        <table className={styles.table}>
          <caption id='matmeny-caption'>Veckans matmeny</caption>
          <thead>
            <tr>
              {/* scope='col' indicates this header applies to its respective column */}
              <th scope='col'></th>
              <th scope='col'>Måndag</th>
              <th scope='col'>Tisdag</th>
              <th scope='col'>Onsdag</th>
              <th scope='col'>Torsdag</th>
              <th scope='col'>Fredag</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Lunch</strong>
              </td>
              <td>Pasta</td>
              <td>Kyckling</td>
              <td>Fisk</td>
              <td>Vegetarisk</td>
              <td>Hamburgare</td>
            </tr>
            <tr>
              <td>
                <strong>Middag</strong>
              </td>
              <td>Soppa</td>
              <td>Köttbullar</td>
              <td>Lasagne</td>
              <td>Pizza</td>
              <td>Tacos</td>
            </tr>
          </tbody>
        </table>
        <p id='matmeny-info'>
          Tabellen visar veckans matmeny för både lunch och middag.
        </p>
      </div>
      <hr />

      {/* Table 2 */}
      <div className={styles.tables_page}>
        <table className={styles.table}>
          <caption id='schema-caption'>Veckans schema</caption>
          <tbody>
            <tr>
              {/* scope='row' specifies this header applies to its respective row */}
              <th scope='row'>Måndag</th>
              <td>HTML</td>
              <td>09:00</td>
              <td>Sal A123</td>
            </tr>
            <tr>
              <th scope='row'>Tisdag</th>
              <td>CSS</td>
              <td>10:30</td>
              <td>Sal B456</td>
            </tr>
            <tr>
              <th scope='row'>Onsdag</th>
              <td>JavaScript</td>
              <td>13:00</td>
              <td>Sal C789</td>
            </tr>
            <tr>
              <th scope='row'>Torsdag</th>
              <td>React</td>
              <td>08:00</td>
              <td>Sal D101</td>
            </tr>
            <tr>
              <th scope='row'>Fredag</th>
              <td>Node.js</td>
              <td>11:00</td>
              <td>Sal E202</td>
            </tr>
          </tbody>
        </table>
        <p id='schema-caption'>
          Tabellen visar veckans schema mellan måndag och fredag.
        </p>
      </div>

      <hr />

      {/* Table 3 */}
      <div className={styles.tables_page}>
        <table className={styles.table}>
          <caption id='temperatur-caption'>Veckans temperaturer</caption>
          <thead>
            <tr>
              <th scope='col'></th>
              <th scope='col'>Måndag</th>
              <th scope='col'>Tisdag</th>
              <th scope='col'>Onsdag</th>
              <th scope='col'>Torsdag</th>
              <th scope='col'>Fredag</th>
              <th scope='col'>Lördag</th>
              <th scope='col'>Söndag</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>Morgon</th>
              <td>12°C</td>
              <td>14°C</td>
              <td>11°C</td>
              <td>13°C</td>
              <td>15°C</td>
              <td>10°C</td>
              <td>9°C</td>
            </tr>
            <tr>
              <th scope='row'>Förmiddag</th>
              <td>16°C</td>
              <td>18°C</td>
              <td>17°C</td>
              <td>19°C</td>
              <td>20°C</td>
              <td>15°C</td>
              <td>14°C</td>
            </tr>
            <tr>
              <th scope='row'>Eftermiddag</th>
              <td>20°C</td>
              <td>22°C</td>
              <td>21°C</td>
              <td>23°C</td>
              <td>24°C</td>
              <td>19°C</td>
              <td>18°C</td>
            </tr>
            <tr>
              <th scope='row'>Kväll</th>
              <td>15°C</td>
              <td>16°C</td>
              <td>14°C</td>
              <td>15°C</td>
              <td>17°C</td>
              <td>12°C</td>
              <td>11°C</td>
            </tr>
          </tbody>
        </table>
        <p id='temperatur-caption'>
          Tabellen visar veckans temperaturer alla dagar i veckan för morgonen,
          förmiddagen, eftermiddagen och kvällen.
        </p>
      </div>
    </div>
  );
};

export default Tables;
