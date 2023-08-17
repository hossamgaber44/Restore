import React, { Component } from 'react';
import './App.css';
import Home from './component/Home/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './component/Footer/Footer';
import Contact from './component/Contact/Contact';
import Navbar from './component/Navbar/Navbar';
import AboutUs from './component/AboutUs/AboutUs';

class App extends Component {
  render() {
    return (
    <>
      <Navbar/>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<AboutUs/>}/>
         <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
   </>
  );
}
}

export default App;
