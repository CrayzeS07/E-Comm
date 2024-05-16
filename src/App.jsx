import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { Card1 } from './pages/home';
import { Cards12 } from './pages/Card1';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Card1 />} />
        <Route path='/card' element={<Cards12 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
 