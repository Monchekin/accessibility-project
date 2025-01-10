import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 for generating unique IDs

// Function to validate form fields based on their type
export const validateField = (value, type) => {
  let error = '';

  // Name field validation
  if (type === 'name') {
    error = value.trim() === '' ? 'Namnet är obligatoriskt' : '';
  }
  // Age field validation
  if (type === 'age') {
    error = value < 18 ? 'Du måste vara minst 18 år gammal' : '';
  }
  // Email field validation
  if (type === 'email') {
    const hasAtSymbol = /@/.test(value);
    const hasDot = /\./.test(value);

    if (value.length === 0) {
      error = 'E-postadress kan inte vara tom';
    } else if (!hasAtSymbol) {
      error = 'E-postadressen måste innehålla ett "@"';
    } else if (!hasDot) {
      error = 'E-postadressen måste innehålla en punkt "."';
    } else {
      error = ''; // No error
    }
  }

  // Phone field validation
  if (type === 'phone') {
    const phonePattern = /^[+]?[0-9\s-]{8,15}$/;
    error = !phonePattern.test(value.trim()) ? 'Ogiltigt telefonnummer' : '';
  }
  // Password field validation
  if (type === 'password') {
    const hasUpperCase = /[A-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);

    if (value.length < 6) {
      error = 'Lösenordet måste vara minst 6 tecken';
    } else if (!hasUpperCase) {
      error = 'Lösenordet måste innehålla minst en stor bokstav';
    } else if (!hasNumber) {
      error = 'Lösenordet måste innehålla minst en siffra';
    } else {
      error = '';
    }
  }

  return error;
};

// Function to set up initial field values and IDs
export const setupFields = () => ({
  name: { value: '', error: '', id: `input-${uuidv4()}` }, // Unique ID generated for each field
  age: { value: '', error: '', id: `input-${uuidv4()}` },
  email: { value: '', error: '', id: `input-${uuidv4()}` },
  phone: { value: '', error: '', id: `input-${uuidv4()}` },
  password: { value: '', error: '', id: `input-${uuidv4()}` },
});
