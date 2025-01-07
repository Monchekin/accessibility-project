import React, { useState, useRef } from 'react';
import styles from './Input.module.css';

import Input from './Input';
import '../../App.css';

import { validateField, setupFields } from './Validation';

const AppOnTop = () => {
  const [errorFields, setErrorFields] = useState(setupFields);
  const [showErrors, setShowErrors] = useState(false);

  const inputRefs = useRef({});
  const delayRef = useRef(null);
  const formRef = useRef(null);
  const isMouseInteraction = useRef(false);

  // Focus on the first error link if there are any errors
  const focusOnFirstError = () => {
    if (isMouseInteraction.current) return;

    const errorLinks = document.querySelectorAll('.error-link[tabindex="0"]');
    if (errorLinks.length > 0) {
      errorLinks[0].focus();
      errorLinks[0].scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Set the mouse interaction flag when mouse is pressed down
  const handleMouseDown = () => {
    isMouseInteraction.current = true;
  };

  // Resets error messages during user interaction and updates errorFields
  const handleChange = (e, name) => {
    const { value } = e.target;
    const error = validateField(value, name);

    setErrorFields((prevFields) => ({
      ...prevFields,
      [name]: {
        value,
        error,
      },
    }));

    // Delayed feedback update
    if (delayRef.current) {
      clearTimeout(delayRef.current);
    }

    delayRef.current = setTimeout(() => {
      const feedbackSpan = document.getElementById('feedback');
      if (feedbackSpan) {
        feedbackSpan.ariaLabel = `Du har skrivit ${value}`;
      }
    }, 1000);
  };

  // Handles blur event, validates the field, and sets error if necessary
  const handleBlur = (e, fieldName) => {
    isMouseInteraction.current = false;

    const { value } = e.target;
    const error = validateField(value, fieldName);

    setErrorFields((prev) => ({
      ...prev,
      [fieldName]: {
        ...prev[fieldName],
        error,
      },
    }));

    if (!error) {
      const errorLinks = document.querySelectorAll('.error-link[tabindex="0"]');
      if (errorLinks.length > 0) {
        errorLinks[0].focus();
      }
    }
  };

  // Handles form submission, validates all fields, and displays errors if needed
  const handleSubmit = (e) => {
    e.preventDefault();
    isMouseInteraction.current = false;

    let newErrors = {};
    let hasErrors = false;

    // Validates all fields
    Object.keys(errorFields).forEach((field) => {
      const value = errorFields[field].value || '';
      const error = validateField(value, field);

      if (error) {
        hasErrors = true;
        newErrors[field] = { ...errorFields[field], error };
      } else {
        newErrors[field] = { ...errorFields[field], error: '' };
      }
    });

    setErrorFields((prev) => ({
      ...prev,
      ...newErrors,
    }));

    if (hasErrors) {
      setShowErrors(true);
      setTimeout(() => focusOnFirstError(), 0);
      return;
    }

    console.log('Form successfully submitted!');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} onMouseDown={handleMouseDown} ref={formRef}>
        <h3>Du tittar nu på OnTop-meddelanden</h3>
        {showErrors && (
          <fieldset className='error-messages'>
            <legend aria-live='polite' aria-atomic='true'>
              Error Messages
            </legend>
            {Object.keys(errorFields).map(
              (field) =>
                errorFields[field].error && (
                  <div key={field} style={{ color: 'red' }}>
                    <a
                      href={`#${field}`}
                      onClick={(e) => {
                        e.preventDefault();
                        inputRefs.current[field]?.focus();
                      }}
                      className='error-link'
                      tabIndex={errorFields[field].error ? '0' : '-1'}
                    >
                      {errorFields[field].error}
                    </a>
                  </div>
                )
            )}
          </fieldset>
        )}

        {/* Name Input */}
        <Input
          type='text'
          label='Namn'
          name='name'
          placeholder='Skriv ditt namn här'
          value={errorFields.name.value}
          error={errorFields.name.error}
          onChange={(e) => handleChange(e, 'name')}
          onBlur={(e) => handleBlur(e, 'name')}
          ref={(el) => (inputRefs.current.name = el)}
        />
        <span
          id='feedback'
          aria-live='polite'
          // className={styles['hidden-feedback']}
        />

        {/* Age Input */}
        <Input
          type='number'
          label='Ålder'
          name='age'
          placeholder='Skriv din ålder här'
          value={errorFields.age.value}
          error={errorFields.age.error}
          onChange={(e) => handleChange(e, 'age')}
          onBlur={(e) => handleBlur(e, 'age')}
          ref={(el) => (inputRefs.current.age = el)}
        />
        <span
          id='feedback'
          aria-live='polite'
          // className={styles['hidden-feedback']}
        />

        {/* Email Input */}
        <Input
          type='email'
          label='E-post'
          name='email'
          placeholder='Skriv din email här'
          value={errorFields.email.value}
          error={errorFields.email.error}
          onChange={(e) => handleChange(e, 'email')}
          onBlur={(e) => handleBlur(e, 'email')}
          ref={(el) => (inputRefs.current.email = el)}
        />
        <span
          id='feedback'
          aria-live='polite'
          // className={styles['hidden-feedback']}
        />

        {/* Phone Number Input */}
        <Input
          type='tel'
          label='Telefonnummer'
          name='phone'
          placeholder='Skriv ditt telefonnummer här'
          value={errorFields.phone.value}
          error={errorFields.phone.error}
          onChange={(e) => handleChange(e, 'phone')}
          onBlur={(e) => handleBlur(e, 'phone')}
          ref={(el) => (inputRefs.current.phone = el)}
        />
        <span
          id='feedback'
          aria-live='polite'
          // className={styles['hidden-feedback']}
        />

        {/* Password Input */}
        <Input
          type='password'
          label='Lösenord'
          name='password'
          placeholder='Skriv ditt lösenord här'
          value={errorFields.password.value}
          error={errorFields.password.error}
          onChange={(e) => handleChange(e, 'password')}
          onBlur={(e) => handleBlur(e, 'password')}
          ref={(el) => (inputRefs.current.password = el)}
        />
        <span
          id='feedback'
          aria-live='polite'
          // className={styles['hidden-feedback']}
        />

        <button type='submit'>Skicka</button>
      </form>
    </div>
  );
};

export default AppOnTop;
