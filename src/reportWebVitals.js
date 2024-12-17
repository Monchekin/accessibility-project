// const reportWebVitals = onPerfEntry => {
//   if (onPerfEntry && onPerfEntry instanceof Function) {
//     import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
//       getCLS(onPerfEntry);
//       getFID(onPerfEntry);
//       getFCP(onPerfEntry);
//       getLCP(onPerfEntry);
//       getTTFB(onPerfEntry);
//     });
//   }
// };

// export default reportWebVitals;
// /src/index.js eller /src/index.tsx
import { reportWebVitals } from './reportWebVitals'; // Importera web-vitals-funktion

reportWebVitals(); // Anropa funktionen för att logga eller skicka web-vitaler till en tjänst
