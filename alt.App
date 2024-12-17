// * APP TILL INPUT.JSX - INLINE
import React, { useState, useRef, useEffect } from 'react';
import Input from './components/input/Input';
import { validateField, setupFields } from './components/input/Validation';

const App = () => {
  const [errorFields, setErrorFields] = useState(setupFields);
  const [inputValue, setInputValue] = useState('');
  const inputRefs = useRef({});
  const delayRef = useRef(null);

  // Handle changes to input fields
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

    // Starta ny timer
    delayRef.current = setTimeout(() => {
      const feedbackSpan = document.getElementById('feedback');
      if (feedbackSpan) {
        feedbackSpan.ariaLabel = `Du har skrivit ${value}`;
      }
    }, 1000);
  };

  // Validate field on blur and update errors
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

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};
    let hasErrors = false;

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

    if (hasErrors) {
      // Hitta det första fältet med ett fel och sätt fokus
      const firstErrorField = Object.keys(newErrors).find(
        (field) => newErrors[field].error
      );
      if (firstErrorField) {
        inputRefs.current[firstErrorField]?.focus(); // Sätt fokus på det fältet
      }
      console.log('Formuläret har fel och kan inte skickas.');
      return;
    }

    // Om inga fel, formuläret kan skickas
    console.log('Formuläret är skickat!');
  };

  const handleCombinedChange = (e) => {
    handleChange(e, 'name');
    setInputValue(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Name Input */}
      <Input
        type='text'
        label='Namn'
        name='name'
        placeholder='Skriv ditt namn här'
        value={errorFields.name.value}
        error={errorFields.name.error}
        onChange={handleCombinedChange}
        // aria-label={`Du har skrivit: ${inputValue}`}
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
        aria-describedby={errorFields.password.error ? `error-password` : undefined}
        required
      />
           <span id='feedback' aria-live='polite' className='hidden-feedback' />
      <button type='submit'>Skicka</button>
    </form>
  );
};

export default App;
// *******************************************************************************************************************************************************************************

// * APP TILL INPUT.JSX - ON-TOP
// import React, { useRef, useState } from 'react';
// import Input from './components/input/Input';
// import { setupFields, validateField } from './components/input/Validation';
// import './App.css';

// const App = () => {
//   // State för att lagra felmeddelanden och formulärdata
//   const [errorFields, setErrorFields] = useState(() => setupFields());
//   const [showErrorMessages, setShowErrorMessages] = useState(false);

//   // Refs för att referera till element i DOM, används för att fokusera på fält och visa felmeddelanden
//   const errorMessagesRef = useRef(null);
//   const formRef = useRef(null);

//   // Funktion för att hantera ändringar i inmatningsfälten
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setErrorFields((prevFields) => ({
//       ...prevFields,
//       [name]: { ...prevFields[name], value },
//     }));
//   };

//   // Funktion för att hantera när ett fält lämnar fokus (blur)
//   const handleInputBlur = (e) => {
//     const { name, value, type } = e.target;
//     const error = validateField(value, name, type);
//     setErrorFields((prevFields) => ({
//       ...prevFields,
//       [name]: { ...prevFields[name], error },
//     }));
//   };

//   // Funktion som aktiveras när användaren trycker på en tangent (för att hantera Enter-tangenten)
//   const handleKeyDown = (e) => {
//     if (e.key === 'Enter') {
//       e.preventDefault(); // Förhindra att formuläret skickas
//       focusOnFirstError(); // Fokusera på första fältet med fel
//     }
//   };

  // // Funktion för att fokusera på det första fältet som har ett fel
  // const focusOnFirstError = () => {
  //   const firstErrorLink = document.querySelector('.error-link');
  //   if (firstErrorLink) {
  //     firstErrorLink.setAttribute('tabIndex', '0');
  //     firstErrorLink.focus();
  //     firstErrorLink.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

//   // Funktion som hanterar formulärinlämning
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const updatedErrors = {};
//     let hasErrors = false;

//     Object.keys(errorFields).forEach((key) => {
//       const { value } = errorFields[key];
//       const error = validateField(value, key);
//       updatedErrors[key] = { ...errorFields[key], error }; // Uppdatera felmeddelandet för fältet

//       if (error) {
//         hasErrors = true;
//       }
//     });

//     setErrorFields(updatedErrors); // Uppdatera state med de nya felmeddelandena

//     if (hasErrors) {
//       setShowErrorMessages(true); // Visa felmeddelandena om det finns några
//       focusOnFirstError();
//     } else {
//       setShowErrorMessages(false); // Om inga fel, dölja felmeddelandena
//     }
//   };

//   //! ev något att titta på
// //   const inputRef = useRef(null);

// // useEffect(() => {
// //   inputRef.current.focus(); // Fokuserar automatiskt input vid montering
// // }, []);

// // return <input ref={inputRef} />;

//   return (
//     <form onSubmit={handleSubmit} onKeyDown={handleKeyDown} ref={formRef}>
//       <fieldset
//         ref={errorMessagesRef}
//         className={`error-messages ${showErrorMessages ? 'visible' : ''}`}
//         tabIndex='-1'
//       >
//         <legend>Felmeddelanden</legend>
//         {Object.keys(errorFields)
//           .map((key) => ({
//             key,
//             error: errorFields[key].error,
//           }))
//           .filter((item) => item.error) // Filtrera bort de fält som inte har några fel
//           .map((item) => (
//             <a
//               href={`#${errorFields[item.key].id}`} // Länk till det fältet med fel
//               key={item.key}
//               className='error-link'
//               onClick={(e) => {
//                 e.preventDefault();
//                 const element = document.getElementById(
//                   errorFields[item.key].id
//                 );
//                 if (element) {
//                   element.focus(); // Fokusera på det tillhörande input-fältet
//                   element.scrollIntoView({
//                     behavior: 'smooth',
//                     block: 'center',
//                   }); // Scrolla till fältet
//                 }
//               }}
//             >
//               {item.error}
//             </a>
//           ))}
//       </fieldset>

//       {/* Input-fält för användardata */}
//       <Input
//         id={errorFields.name.id}
//         type='text'
//         label='Namn'
//         name='name'
//         value={errorFields.name.value}
//         placeholder='Skriv ditt namn här'
//         required
//         onChange={handleInputChange}
//         onBlur={handleInputBlur}
//         // error={errorFields.name.error}
//       />

//       <Input
//         id={errorFields.age.id}
//         type='number'
//         label='Ålder'
//         name='age'
//         value={errorFields.age.value}
//         placeholder='Skriv din ålder här'
//         required
//         onChange={handleInputChange}
//         onBlur={handleInputBlur}
//         // error={errorFields.age.error}
//       />

//       <Input
//         id={errorFields.email.id}
//         type='email'
//         label='Email'
//         name='email'
//         value={errorFields.email.value}
//         placeholder='Skriv din email här'
//         required
//         onChange={handleInputChange}
//         onBlur={handleInputBlur}
//         // error={errorFields.email.error}
//       />

//       <Input
//         id={errorFields.phone.id}
//         type='tel'
//         label='Telefonnummer'
//         name='phone'
//         value={errorFields.phone.value}
//         placeholder='Skriv ditt telefonnummer här'
//         required
//         onChange={handleInputChange}
//         onBlur={handleInputBlur}
//         // error={errorFields.phone.error}
//       />

//       <Input
//         id={errorFields.password.id}
//         type='password'
//         label='Lösenord'
//         name='password'
//         value={errorFields.password.value}
//         placeholder='Skriv ditt lösenord här'
//         required
//         onChange={handleInputChange}
//         onBlur={handleInputBlur}
//         // error={errorFields.password.error}
//       />

//       {/* Submit-knapp för att skicka formuläret */}
//       <button type='submit'>Skicka</button>
//     </form>
//   );
// };

// export default App;
