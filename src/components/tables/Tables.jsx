import styles from './Tables.module.css';

const Tables = () => {
  return (
    <div>
      {/* Table 1 */}
      <div
        className={styles.tableWrapper}
        tabIndex='0' // Enables keyboard focus
        role='region' // Defines this section as a region, allowing screen readers to identify it as a meaningful part of the page
        aria-labelledby='matmeny-caption' // Links the table to its caption for accessibility, helping screen readers identify the table's purpose
      >
        <table
          className={styles.table}
          role='table' // Declares this element as a table to assistive technologies
          aria-describedby='matmeny-info' // Provides additional context for screen readers by referring to the associated description
        >
          <caption id='matmeny-caption'>Veckans matmeny</caption>
          <thead className={styles.horizontally} role='rowgroup'>
            <tr role='row'>
              {/* scope='col' indicates this header applies to its respective column */}
              <th scope='col'></th>
              <th scope='col'>Måndag</th>
              <th scope='col'>Tisdag</th>
              <th scope='col'>Onsdag</th>
              <th scope='col'>Torsdag</th>
              <th scope='col'>Fredag</th>
            </tr>
          </thead>
          <tbody role='rowgroup'>
            <tr role='row'>
              <td role='cell'>
                <b>
                  <u>Lunch</u>
                </b>
              </td>
              <td role='cell'>Pasta</td>
              <td role='cell'>Kyckling</td>
              <td role='cell'>Fisk</td>
              <td role='cell'>Vegetarisk</td>
              <td role='cell'>Hamburgare</td>
            </tr>
            <tr role='row'>
              <td role='cell'>
                <b>
                  <u>Middag</u>
                </b>
              </td>
              <td role='cell'>Soppa</td>
              <td role='cell'>Köttbullar</td>
              <td role='cell'>Lasagne</td>
              <td role='cell'>Pizza</td>
              <td role='cell'>Tacos</td>
            </tr>
          </tbody>
        </table>
        <p id='matmeny-info'>
          Tabellen visar veckans matmeny för både lunch och middag.
        </p>
      </div>
      <hr />

      {/* Table 2 */}
      <div
        className={styles.tableWrapper}
        tabIndex='0'
        role='region'
        aria-labelledby='schema-caption'
      >
        <table className={styles.table} role='table'>
          <caption id='schema-caption'>Veckans schema</caption>
          <tbody role='rowgroup'>
            <tr role='row'>
              {/* scope='row' specifies this header applies to its respective row */}
              <th scope='row'>Måndag</th>
              <td role='cell'>HTML</td>
              <td role='cell'>09:00</td>
              <td role='cell'>Sal A123</td>
            </tr>
            <tr role='row'>
              <th scope='row'>Tisdag</th>
              <td role='cell'>CSS</td>
              <td role='cell'>10:30</td>
              <td role='cell'>Sal B456</td>
            </tr>
            <tr role='row'>
              <th scope='row'>Onsdag</th>
              <td role='cell'>JavaScript</td>
              <td role='cell'>13:00</td>
              <td role='cell'>Sal C789</td>
            </tr>
            <tr role='row'>
              <th scope='row'>Torsdag</th>
              <td role='cell'>React</td>
              <td role='cell'>08:00</td>
              <td role='cell'>Sal D101</td>
            </tr>
            <tr role='row'>
              <th scope='row'>Fredag</th>
              <td role='cell'>Node.js</td>
              <td role='cell'>11:00</td>
              <td role='cell'>Sal E202</td>
            </tr>
          </tbody>
        </table>
        <p id='schema-caption'>
          Tabellen visar veckans schema mellan måndag och fredag.
        </p>
      </div>
      <hr />

      {/* Table 3 */}
      <div
        className={styles.tableWrapper}
        tabIndex='0'
        role='region'
        aria-labelledby='temperatur-caption'
      >
        <table className={styles.table} role='table'>
          <caption id='temperatur-caption'>Veckans temperaturer</caption>
          <thead className={styles.horizontally} role='rowgroup'>
            <tr role='row'>
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
          <tbody role='rowgroup'>
            <tr role='row'>
              <th scope='row'>Morgon</th>
              <td role='cell'>12°C</td>
              <td role='cell'>14°C</td>
              <td role='cell'>11°C</td>
              <td role='cell'>13°C</td>
              <td role='cell'>15°C</td>
              <td role='cell'>10°C</td>
              <td role='cell'>9°C</td>
            </tr>
            <tr role='row'>
              <th scope='row'>Förmiddag</th>
              <td role='cell'>16°C</td>
              <td role='cell'>18°C</td>
              <td role='cell'>17°C</td>
              <td role='cell'>19°C</td>
              <td role='cell'>20°C</td>
              <td role='cell'>15°C</td>
              <td role='cell'>14°C</td>
            </tr>
            <tr role='row'>
              <th scope='row'>Eftermiddag</th>
              <td role='cell'>20°C</td>
              <td role='cell'>22°C</td>
              <td role='cell'>21°C</td>
              <td role='cell'>23°C</td>
              <td role='cell'>24°C</td>
              <td role='cell'>19°C</td>
              <td role='cell'>18°C</td>
            </tr>
            <tr role='row'>
              <th scope='row'>Kväll</th>
              <td role='cell'>15°C</td>
              <td role='cell'>16°C</td>
              <td role='cell'>14°C</td>
              <td role='cell'>15°C</td>
              <td role='cell'>17°C</td>
              <td role='cell'>12°C</td>
              <td role='cell'>11°C</td>
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
