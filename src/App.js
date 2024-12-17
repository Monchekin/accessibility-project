import React, { useState, useRef, useEffect } from 'react';
import Input from './components/input/Input';
import './App.css';
import { validateField, setupFields } from './components/input/Validation';

const App = () => {
  console.log('App component rendered');

  const [errorFields, setErrorFields] = useState(setupFields);
  const [inputValue, setInputValue] = useState('');
  const inputRefs = useRef({});
  const delayRef = useRef(null);
  const formRef = useRef(null);

  const focusOnFirstError = () => {
    console.log('focusOnFirstError triggered');
    const firstErrorLink = document.querySelector('.error-link');
    if (firstErrorLink) {
      console.log('Focusing on first error link:', firstErrorLink);
      firstErrorLink.setAttribute('tabIndex', '0');
      firstErrorLink.focus();
      firstErrorLink.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChange = (e, name) => {
    const { value } = e.target;
    console.log(`handleChange: ${name} = ${value}`);
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

    delayRef.current = setTimeout(() => {
      const feedbackSpan = document.getElementById('feedback');
      if (feedbackSpan) {
        console.log(`Setting aria-label for feedback: ${value}`);
        feedbackSpan.ariaLabel = `Du har skrivit ${value}`;
      }
    }, 1000);
  };

  const handleBlur = (e, fieldName) => {
    const { value } = e.target;
    console.log(`handleBlur: ${fieldName} = ${value}`);
    const error = validateField(value, fieldName);

    setErrorFields((prev) => ({
      ...prev,
      [fieldName]: {
        ...prev[fieldName],
        error,
      },
    }));
  };

  const handleSubmit = (e) => {
    console.log('Submit triggered');
    e.preventDefault();

    let newErrors = {};
    let hasErrors = false;

    Object.keys(errorFields).forEach((field) => {
      const value = errorFields[field].value || '';
      const error = validateField(value, field);
      console.log(`Validating ${field}: ${error}`);

      if (error) {
        hasErrors = true;
        newErrors[field] = { ...errorFields[field], error };
      }
    });

    setErrorFields((prev) => ({
      ...prev,
      ...newErrors,
    }));

    if (hasErrors) {
      console.log('Errors found in form');
      focusOnFirstError();
      return;
    }

    console.log('Form successfully submitted!');
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          console.log('Form onSubmit triggered');
          handleSubmit(e);
        }}
        ref={formRef}
      >
        <fieldset className="error-messages">
          <legend>Felmeddelanden</legend>
          {Object.keys(errorFields).map(
            (field) =>
              errorFields[field].error && (
                <div key={field} style={{ color: 'red' }}>
                  <a
                    href={`#${field}`}
                    onClick={(e) => {
                      e.preventDefault();
                      console.log(`Focusing on input ${field}`);
                      inputRefs.current[field]?.focus();
                    }}
                    className="error-link"
                  >
                    {errorFields[field].error}
                  </a>
                </div>
              )
          )}
        </fieldset>

        <Input
          type="text"
          label="Namn"
          name="name"
          placeholder="Skriv ditt namn här"
          value={errorFields.name.value}
          error={errorFields.name.error}
          onChange={(e) => handleChange(e, 'name')}
          onBlur={(e) => handleBlur(e, 'name')}
          ref={(el) => {
            inputRefs.current.name = el;
            console.log('Ref set for name input');
          }}
        />

        <Input
          type="number"
          label="Ålder"
          name="age"
          placeholder="Skriv din ålder här"
          value={errorFields.age.value}
          error={errorFields.age.error}
          onChange={(e) => handleChange(e, 'age')}
          onBlur={(e) => handleBlur(e, 'age')}
          ref={(el) => {
            inputRefs.current.age = el;
            console.log('Ref set for age input');
          }}
        />

        <Input
          type="email"
          label="E-post"
          name="email"
          placeholder="Skriv din email här"
          value={errorFields.email.value}
          error={errorFields.email.error}
          onChange={(e) => handleChange(e, 'email')}
          onBlur={(e) => handleBlur(e, 'email')}
          ref={(el) => {
            inputRefs.current.email = el;
            console.log('Ref set for email input');
          }}
        />

        <Input
          type="tel"
          label="Telefonnummer"
          name="phone"
          placeholder="Skriv ditt telefonnummer här"
          value={errorFields.phone.value}
          error={errorFields.phone.error}
          onChange={(e) => handleChange(e, 'phone')}
          onBlur={(e) => handleBlur(e, 'phone')}
          ref={(el) => {
            inputRefs.current.phone = el;
            console.log('Ref set for phone input');
          }}
        />

        <Input
          type="password"
          label="Lösenord"
          name="password"
          placeholder="Skriv ditt lösenord här"
          value={errorFields.password.value}
          error={errorFields.password.error}
          onChange={(e) => handleChange(e, 'password')}
          onBlur={(e) => handleBlur(e, 'password')}
          ref={(el) => {
            inputRefs.current.password = el;
            console.log('Ref set for password input');
          }}
        />

        <button type="submit">Skicka</button>
      </form>
    </div>
  );
};

export default App;
