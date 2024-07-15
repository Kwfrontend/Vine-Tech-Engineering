import React from 'react';
import './App.css';

import { Routes, Route, Outlet } from 'react-router-dom';
import HomePage from './pages/Home Page/home-page.component';
import Navbar from './components/Navbar/navbar.component';



const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<HomePage/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;
