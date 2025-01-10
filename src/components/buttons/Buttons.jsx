import React from 'react';
import { useState } from 'react';
import { SlLogin } from 'react-icons/sl';
import styles from './Button.module.css';

const Buttons = () => {
  const [message, setMessage] = useState('');

  // Handle button click logic based on button type
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
      <h2>Tre tillgängliga knappar</h2>

      {/* Button with only text */}
      <button
        className={styles['button']}
        type='button'
        onClick={() => handleClick('text')}
      >
        Login
      </button>

      {/* Button with only an icon */}
      <button
        className={styles['button']}
        type='button'
        onClick={() => handleClick('icon')}
      >
        <span className={styles['visually-hidden']}>Login</span>
        <SlLogin aria-hidden='true' focusable='false' />
      </button>

      {/* Button with both text and an icon */}
      <button
        className={styles['button']}
        type='button'
        onClick={() => handleClick('text and icon')}
      >
        <span className={styles['paragraph']}>Login</span>
        <SlLogin aria-hidden='true' focusable='false' />
      </button>

      {/* Dynamic message read by screen readers */}
      <div aria-live='polite' aria-atomic='true'>
        {message && <p>{message}</p>}
      </div>
    </>
  );
};

export default Buttons;
