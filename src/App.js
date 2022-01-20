import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react'

import Login from './pages/login/Login.component'
//import UserHeader from './pages/header/Header.component';

function App() {
  //const [name, setName] = useState('Junior Almeyda')
  return (
    <Routes>
      <Route exact path='/' element={<Login />} />
    </Routes>
  );
}

export default App;
