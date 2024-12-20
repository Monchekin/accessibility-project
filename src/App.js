import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/navbar/Navbar';
import Buttons from './pages/ButtonPage';
import InlineInput from './pages/InlineInputPage';
import OnTopInput from './pages/OnTopInputPage';
import './App.css';

const App = () => {
  return (
    <>
      <div className='appContentWrap'>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/buttons' element={<Buttons />} />
          <Route path='/inlineInput' element={<InlineInput />} />
          <Route path='/OnTopInputs' element={<OnTopInput />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
