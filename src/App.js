import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react'

import Login from './pages/login/Login.component'
//import UserHeader from './pages/header/Header.component';
import AsideLogo from './pages/aside/AsideLogo.component'
import Registro from './pages/registro/Registro.component'
import RegistroProfesional from './pages/registro/profesional/RegistroProfesional.component'
function App() {
  //const [name, setName] = useState('Junior Almeyda')
  return (
    <Routes>
      <Route exact path='/' element={<Login />} />
      <Route exact path='/ejemplo' element={<RegistroProfesional />} />
    </Routes>
  );
}

export default App;
