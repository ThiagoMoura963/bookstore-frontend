import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Header from './components/Header/index.jsx';
import GlobalStyle from './GlobalStyle.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favorites from './pages/Favorites/index.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favoritos' element={<Favorites />} />
      </Routes>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    </BrowserRouter>
  </React.StrictMode>,
)
