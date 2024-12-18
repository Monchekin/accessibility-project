import { v4 as uuidv4 } from 'uuid'; // Lägg till uuidv4 importen

export const validateField = (value, type) => {
  let error = '';

  if (type === 'name') {
    error = value.trim() === '' ? 'Namnet är obligatoriskt' : '';
  }
  if (type === 'age') {
    error = value < 18 ? 'Du måste vara minst 18 år gammal' : '';
  }
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
      error = ''; // Inga fel
    }
  }

  if (type === 'phone') {
    const phonePattern = /^[+]?[0-9\s-]{8,15}$/;
    error = !phonePattern.test(value.trim()) ? 'Ogiltigt telefonnummer' : '';
  }
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

export const setupFields = () => ({
  name: { value: '', error: '', id: `input-${uuidv4()}` },
  age: { value: '', error: '', id: `input-${uuidv4()}` },
  email: { value: '', error: '', id: `input-${uuidv4()}` },
  phone: { value: '', error: '', id: `input-${uuidv4()}` },
  password: { value: '', error: '', id: `input-${uuidv4()}` },
});
