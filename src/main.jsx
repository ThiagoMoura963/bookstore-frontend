import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import DefaultPage from './pages/DefaultPage/index.jsx';
import Header from './components/Header/index.jsx';
import GlobalStyle from './GlobalStyle.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favorites from './pages/Favorites/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path='/favoritos' element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
