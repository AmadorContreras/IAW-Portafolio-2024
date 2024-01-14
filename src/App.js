import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Main from './components/Main'

import Page from './routes/Page'
import Contacto from './routes/Contacto'
import Projects from './routes/Newsletter'

import './Styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page/>}>
          <Route index element={<Main/>}/>
          <Route path='contacto' element={<Contacto/>}/>
          <Route path='newsletter' element={<Projects/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
