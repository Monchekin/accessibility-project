import React, { useState } from 'react';
import AppInline from './AppInline';
import AppOnTop from './AppOnTop';
import Buttons from './components/buttons/Buttons';

const App = () => {
  const [useInlineApp, setUseInlineApp] = useState(true);

  return (
    <div>
      {useInlineApp ? <AppInline /> : <AppOnTop />}
      <button onClick={() => setUseInlineApp(!useInlineApp)}>
        {useInlineApp ? 'Gå till App-OnTop' : 'Gå till App-Inline'}
      </button>

      <hr />

      <Buttons />
    </div>
  );
};

export default App;
