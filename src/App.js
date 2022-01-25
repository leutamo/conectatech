import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react'

import UserHeader from './pages/header/user/UserHeader.component';
import ProfessionalHeader from './pages/header/professional/ProfessionalHeader.component';
import Login from './pages/login/Login.component'
//import UserHeader from './pages/header/Header.component';
import AsideLogo from './pages/aside/AsideLogo.component'
import Registro from './pages/registro/Registro.component'
import RegistroProfesional from './pages/registro/profesional/RegistroProfesional.component'
function App() {
  const [userName, setUserName] = useState('Usuario')
  const [professionaName, setProfessionalName] = useState('Profesional')
  return (
    <Routes>
      <Route exact path='/' element={<Login />} />
      <Route exact path='/ejemplo' element={<RegistroProfesional />} />
      <Route exact path='/user' element={<UserHeader  name = { userName }/>} />
      <Route exact path='/profesional' element={<ProfessionalHeader  name = { professionaName }/>} />
    </Routes>
  );
}

export default App;
