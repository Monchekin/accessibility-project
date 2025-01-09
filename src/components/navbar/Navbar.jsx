import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav aria-label='Main navigation'>
    <a href='#main-content' className={styles.skipLink} tabIndex='0'>
      Skip to content
    </a>

    <ul>
      <li>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
          aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/buttons'
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
          aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
        >
          Buttons
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/inlineInput'
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
          aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
        >
          Inline Input
        </NavLink>
      </li>
      <li>
        <NavLink
          to='/OnTopInputs'
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
          aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
        >
          On Top Inputs
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
