import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Landing from './pages/Non-Auth-Pages/Landing';
import Login from './pages/Non-Auth-Pages/Login';
import SignIn from './pages/Non-Auth-Pages/SignIn';

import style from './style.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signUp" element={<SignIn />}/>
    </Routes>
  );
}

export default App;
