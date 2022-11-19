import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import HomePage from "./components/HomePage/HomePage"
import { BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/register' element={<RegisterForm />} /> */}
        
      </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
