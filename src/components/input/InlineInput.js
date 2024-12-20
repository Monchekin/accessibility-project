import React, { useState, useRef } from 'react';
import Input from './Input';
import '../../App.css';
import { validateField, setupFields } from './Validation';

const AppInline = () => {
  const [errorFields, setErrorFields] = useState(setupFields);
  const [inputValue, setInputValue] = useState('');
  const inputRefs = useRef({});
  const delayRef = useRef(null);

  // Handles changes in input fields, validates and updates error state
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

    if (delayRef.current) {
      clearTimeout(delayRef.current);
    }

    // Starts a new timer to update the live feedback message after 1 second
    delayRef.current = setTimeout(() => {
      const feedbackSpan = document.getElementById('feedback');
      if (feedbackSpan) {
        feedbackSpan.ariaLabel = `Du har skrivit ${value}`;
      }
    }, 1000);
  };

  // Validates field when it loses focus and updates errors
  const handleBlur = (e, fieldName) => {
    const { value } = e.target;
    const error = validateField(value, fieldName);

    setErrorFields((prev) => ({
      ...prev,
      [fieldName]: {
        ...prev[fieldName],
        error,
      },
    }));
  };

  // Handles form submission, validates all fields and updates error state
  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    let hasErrors = false;

    // Validates all fields and sets errors where needed
    Object.keys(errorFields).forEach((field) => {
      const value = errorFields[field].value || '';
      const error = validateField(value, field);

      if (error) {
        hasErrors = true;
        newErrors[field] = { ...errorFields[field], error };
      }
    });

    setErrorFields((prev) => ({
      ...prev,
      ...newErrors,
    }));

    // If there are errors, focus on the first field with an error
    if (hasErrors) {
      const firstErrorField = Object.keys(newErrors).find(
        (field) => newErrors[field].error
      );
      if (firstErrorField) {
        inputRefs.current[firstErrorField]?.focus();
      }
      console.log('Formuläret har fel och kan inte skickas.');
      return;
    }

    // If no errors, the form is successfully submitted
    console.log('Formuläret är skickat!');
  };

  // Handles combined change of input and stores the current input value
  const handleCombinedChange = (e) => {
    handleChange(e, 'name');
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Du tittar nu på inline-meddelanden</h3>

      {/* Name Input */}
      <Input
        type='text'
        label='Namn'
        name='name'
        placeholder='Skriv ditt namn här'
        value={errorFields.name.value}
        error={errorFields.name.error}
        onChange={handleCombinedChange}
        onBlur={(e) => handleBlur(e, 'name')}
        ref={(el) => (inputRefs.current.name = el)}
        aria-describedby={errorFields.name.error ? `error-name` : undefined}
        required
      />
      <span id='feedback' aria-live='polite' className='hidden-feedback' />

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
        aria-describedby={errorFields.age.error ? `error-age` : undefined}
        required
      />
      <span id='feedback' aria-live='polite' className='hidden-feedback' />

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
        aria-describedby={errorFields.email.error ? `error-email` : undefined}
        required
      />
      <span id='feedback' aria-live='polite' className='hidden-feedback' />

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
        aria-describedby={errorFields.phone.error ? `error-phone` : undefined}
        required
      />
      <span id='feedback' aria-live='polite' className='hidden-feedback' />

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
        aria-describedby={
          errorFields.password.error ? `error-password` : undefined
        }
        required
      />
      <span id='feedback' aria-live='polite' className='hidden-feedback' />
      <button type='submit'>Skicka</button>
    </form>
  );
};

export default AppInline;
