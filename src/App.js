import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home Page/home-page.component';
import Navbar from './components/Navbar/navbar.component';
import AboutPage from './pages/About Page/about-page.component';
import GalleryPage from './pages/Gallery Page/gallery-page.component';
import ContactPage from './pages/Contact Page/contact-page.component';



const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<HomePage/>}></Route>
          <Route path='about-us' element={<AboutPage/>}></Route>
          <Route path='gallery' element={<GalleryPage/>} ></Route>
          <Route path='contact-us' element={<ContactPage/>} ></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;
