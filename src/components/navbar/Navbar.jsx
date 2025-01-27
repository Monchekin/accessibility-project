import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

// Navbar component for rendering main navigation with accessible skip link and active link styling
const Navbar = () => (
  <nav aria-label='Main navigation'>
    {' '}
    {/* Accessible label for navigation */}
    {/* Skip link to main content */}
    <a href='#main-content' className={styles.skipLink} tabIndex='0'>
      Skip to content
    </a>
    <ul>
      {/* Home link */}
      <li>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? styles.active : styles.link)} // Apply active class if the link is active
          aria-current={({ isActive }) => (isActive ? 'page' : undefined)} // Indicates current page for screen readers
        >
          Home
        </NavLink>
      </li>

      {/* Buttons link */}
      <li>
        <NavLink
          to='/buttons'
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
          aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
        >
          Buttons
        </NavLink>
      </li>

      {/* Inline Input link */}
      <li>
        <NavLink
          to='/inlineInput'
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
          aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
        >
          Inline Input
        </NavLink>
      </li>

      {/* On Top Inputs link */}
      <li>
        <NavLink
          to='/OnTopInputs'
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
          aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
        >
          On Top Inputs
        </NavLink>
      </li>

      {/* Tables link */}
      <li>
        <NavLink
          to='/Tables'
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
          aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
        >
          Tables
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar; // Export the Navbar component
