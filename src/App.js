import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/HomePage';
import Buttons from './pages/ButtonPage';
import InlineInput from './pages/InlineInputPage';
import OnTopInput from './pages/OnTopInputPage';
import './App.css';

const App = () => {
  useEffect(() => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
    }
  }, []);

  return (
    <>
      <div className='appContentWrap'>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path='/accessibility-project/' element={<HomePage />} />
          <Route path='/accessibility-project/buttons' element={<Buttons />} />
          <Route
            path='/accessibility-project/inlineInput'
            element={<InlineInput />}
          />
          <Route
            path='/accessibility-project/OnTopInputs'
            element={<OnTopInput />}
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
