import React, { forwardRef } from 'react';
import styles from './Input.module.css';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

// Input component with label, validation, and accessibility
const Input = forwardRef(
  (
    {
      type,
      label,
      name,
      value,
      onChange,
      onBlur,
      onKeyDown,
      placeholder,
      required,
      error,
      autoFocus,
    },
    // Ref for external access
    ref
  ) => {
    // Unique ID for input
    const id = `input-${uuidv4()}`;

    return (
      <div className={styles['input-container']}>
        {/* Render label if provided */}
        {label && (
          <label htmlFor={id}>
            {label}
            {required && <span aria-hidden='true'>*</span>}
          </label>
        )}

        <div>
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
            required={required}
            aria-describedby={error ? `${name}-error` : undefined}
            className={styles[error ? 'inputError' : '']}
            autoFocus={autoFocus}
            ref={ref}
          />
          {error && <span className={styles['error-icon']}>!</span>}
        </div>

        {/* Error message if validation fails */}
        {error && (
          <div
            aria-live='assertive' // Reads immediately
            aria-atomic='true' // Reads whole message
            id={`${name}-error`} // Matches aria-describedby
            style={{ color: 'red', fontSize: '0.875rem', marginTop: '0.5rem' }}
          >
            {error}
          </div>
        )}
      </div>
    );
  }
);

// Prop types for validation
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
  onBlur: PropTypes.func,
  onKeyDown: PropTypes.func,
  autoFocus: PropTypes.bool,
};

// Default prop values
Input.defaultProps = {
  type: 'text',
  required: false,
  placeholder: '',
};

export default Input;
