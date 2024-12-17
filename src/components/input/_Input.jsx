import React, { useEffect } from 'react';
import styles from './Input.module.css';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const Input = ({
  type,
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  error,
  onFocus,
  setId, // Callback för att skicka ID tillbaka till App.js
}) => {
  const id = `input-${uuidv4()}`; 

  useEffect(() => {
    if (setId) {
      setId(id); // Skicka ID till App.js vid render
    }
  }, [id, setId]);

  return (
    <div className={styles['input-container']}>
      {label && (
        <label htmlFor={id}>
          {label}
          {required && <span aria-hidden='true'> *</span>}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={`${id}-error`}
        onFocus={onFocus}
        className={error ? styles.inputError : ''}
      />
      {error && (
        <div
          id={`${id}-error`}
          className={styles.errorMessage}
          role='alert'
          aria-live='assertive'
        >
          {error}
        </div>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'tel'])
    .isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  onFocus: PropTypes.func,
  setId: PropTypes.func, 
};

Input.defaultProps = {
  type: 'text',
  required: false,
  placeholder: '',
  error: '',
  onFocus: () => {},
  setId: null,
};

export default Input;
