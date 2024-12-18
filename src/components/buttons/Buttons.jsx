import React from 'react';
import { useState } from 'react';
import { SlLogin } from 'react-icons/sl';
import styles from './Button.module.css';

const Buttons = () => {
  const [message, setMessage] = useState('');

  const handleClick = (buttonType) => {
    if (buttonType === 'text') {
      setMessage('Du klickade på knappen med text');
    } else if (buttonType === 'icon') {
      setMessage('Du klickade på knappen med endast en ikon');
    } else if (buttonType === 'text and icon') {
      setMessage('Du klickade på knappen med både text och en ikon');
    }
  };

  return (
    <>
    <h3>Här är mina knappar</h3>
      {/* text-button */}
      <button
        className={styles['button']}
        type='button'
        onClick={() => handleClick('text')}
      >
        Login
      </button>

      {/* icon-button */}
      <button
        className={styles['button']}
        type='button'
        onClick={() => handleClick('icon')}
      >
        <span className={styles['visually-hidden']}>Login</span>
        <SlLogin aria-hidden='true' focusable='false' />
      </button>

      {/* text & icon button */}
      <button
        className={styles['button']}
        type='button'
        onClick={() => handleClick('text and icon')}
      >
        <span className={styles['paragraph']}>Login</span>
        <SlLogin aria-hidden='true' focusable='false' />
      </button>

      {/* The screenreader will read the message dynamically when it updates */}
      <div aria-live='polite' aria-atomic='true'>
        {message && <p>{message}</p>}
      </div>
    </>
  );
};

export default Buttons;

// TODO:   Dagens uppgift nr.2:
// TODO: - Knapp med text
// TODO: - Knapp med endast en ikon
// TODO: - Knapp med text och ikon
