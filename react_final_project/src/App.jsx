import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Componenets/Navbar';
import Home from './Componenets/Home';
import Shop from './Componenets/Shop';
import About from './Componenets/About';
import Contact from './Componenets/Contact';
import ItemDetails from './Componenets/ItemDetails';
import NotFound from './Componenets/NotFound';
function App() {


  return (
    <>
      <BrowserRouter>
    
    <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shop/:id" element={<ItemDetails />} />
            <Route path="*" element={<NotFound />} />
      </Routes>
      
    </BrowserRouter>
    </>
  )
}

export default App
