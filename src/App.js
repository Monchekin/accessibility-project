import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/HomePage';
import Buttons from './pages/ButtonPage';
import InlineInput from './pages/InlineInputPage';
import OnTopInput from './pages/OnTopInputPage';
import Tables from './pages/TablesPages.jsx';
import Accordion from './pages/AccordionPage.jsx';
import './App.css';

const App = () => {
  useEffect(() => {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
    }
  }, []);

  return (
    <div className='appContentWrap'>
      <header>
        <Navbar />
      </header>
      <main id='main-content' tabIndex='-1'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/buttons' element={<Buttons />} />
          <Route path='/inlineInput' element={<InlineInput />} />
          <Route path='/OnTopInputs' element={<OnTopInput />} />
          <Route path='/Tables' element={<Tables />} />
          <Route path='/Accordion' element={<Accordion />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
