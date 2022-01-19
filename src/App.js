import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'

import Login from './pages/login/Login.component'
import UserHeader from './pages/header/Header.component';

function App() {
  const [name, setName] = useState('Junior Almeyda')
  return (
    <Routes>
      <Route exact path='/' element={<UserHeader  name = { name }/>} />
    </Routes>
  );
}

export default App;
