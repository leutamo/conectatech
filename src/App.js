import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Login from './pages/login/Login.component'
import Header from './pages/header/Header.component';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Header/>} />
    </Routes>
  );
}

export default App;
