import './App.css';
import { Route, Routes } from 'react-router-dom';

import Login from './pages/login/Login.component';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Login/>} />
    </Routes>
  );
}

export default App;
