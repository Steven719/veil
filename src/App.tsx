import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./layout/Header.tsx";
import Home from "./pages/Home.tsx";
import Footer from "./layout/Footer.tsx";
import FAQs from './pages/FAQs.tsx';
import Token from './pages/Token.jsx';
import Revenue from './pages/Revenue.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div style={{marginTop : 100}}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/faqs" element={<FAQs/>} />
          <Route path="/token" element={<Token/>} />
          <Route path="/revenue-share" element={<Revenue/>} />
        </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
