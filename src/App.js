import React, { useState, useEffect } from 'react';
import AppInline from './AppInline';
import AppOnTop from './AppOnTop';
import Buttons from './components/buttons/Buttons';
import './App.css';

const App = () => {
  const [focusedDiv, setFocusedDiv] = useState(null);

  // Handles the focus logic to activate and deactivate each section
  const handleFocus = (id) => {
    if (focusedDiv === id) {
      setFocusedDiv(null); // Deactivates focus if the same section is clicked again
    } else {
      setFocusedDiv(id); // Activates the selected section
    }
  };

  // Sets focus on the first button when the page loads
  useEffect(() => {
    const firstButton = document.querySelector('.focus-button');
    if (firstButton) {
      firstButton.focus();
    }
  }, []);

  return (
    <div className='app-container'>
      {/* AppInline section */}
      <div className='section-wrapper'>
        <button
          onClick={() => handleFocus('appInline')}
          className='focus-button'
          tabIndex={0}
          aria-expanded={focusedDiv === 'appInline'}
          aria-controls='appInlineSection'
        >
          Aktivera Inline-meddelanden
        </button>
        <div
          id='appInlineSection'
          className={`app-section ${
            focusedDiv === 'appInline' ? 'focused' : ''
          }`}
          tabIndex={focusedDiv === 'appInline' ? 0 : -1}
          style={{
            pointerEvents: focusedDiv === 'appInline' ? 'auto' : 'none',
            visibility: focusedDiv === 'appInline' ? 'visible' : 'hidden',
          }}
        >
          <AppInline />
        </div>
      </div>

      {/* AppOnTop section */}
      <div className='section-wrapper'>
        <button
          onClick={() => handleFocus('appOnTop')}
          className='focus-button'
          tabIndex={0}
          aria-expanded={focusedDiv === 'appOnTop'}
          aria-controls='appOnTopSection'
        >
          Aktivera OnTop-meddelnaden
        </button>
        <div
          id='appOnTopSection'
          className={`app-section ${
            focusedDiv === 'appOnTop' ? 'focused' : ''
          }`}
          tabIndex={focusedDiv === 'appOnTop' ? 0 : -1}
          style={{
            pointerEvents: focusedDiv === 'appOnTop' ? 'auto' : 'none',
            visibility: focusedDiv === 'appOnTop' ? 'visible' : 'hidden',
          }}
        >
          <AppOnTop />
        </div>
      </div>

      {/* Buttons section */}
      <div className='section-wrapper'>
        <button
          onClick={() => handleFocus('buttons')}
          className='focus-button'
          tabIndex={0}
          aria-expanded={focusedDiv === 'buttons'}
          aria-controls='buttonsSection'
        >
          Aktivera Knappar
        </button>
        <div
          id='buttonsSection'
          className={`app-section ${focusedDiv === 'buttons' ? 'focused' : ''}`}
          tabIndex={focusedDiv === 'buttons' ? 0 : -1}
          style={{
            pointerEvents: focusedDiv === 'buttons' ? 'auto' : 'none',
            visibility: focusedDiv === 'buttons' ? 'visible' : 'hidden',
          }}
        >
          <Buttons />
        </div>
      </div>
    </div>
  );
};

export default App;
