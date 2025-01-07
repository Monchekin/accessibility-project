import styles from './Navbar.module.css';

const Navbar = () => (
  <nav aria-label='Main navigation'>
    <a href='#main-content' className={styles.skipLink} tabIndex='0'>
      Skip to content
    </a>

    <ul>
      <li>
        <a
          href='/'
          aria-current={window.location.pathname === '/' ? 'page' : undefined}
        >
          Home
        </a>
      </li>
      <li>
        <a
          href='/buttons'
          aria-current={
            window.location.pathname === '/buttons' ? 'page' : undefined
          }
        >
          Buttons
        </a>
      </li>
      <li>
        <a
          href='/inlineInput'
          aria-current={
            window.location.pathname === '/inlineInput' ? 'page' : undefined
          }
        >
          Inline Input
        </a>
      </li>
      <li>
        <a
          href='/OnTopInputs'
          aria-current={
            window.location.pathname === '/OnTopInputs' ? 'page' : undefined
          }
        >
          On Top Inputs
        </a>
      </li>
    </ul>
  </nav>
);

export default Navbar;
