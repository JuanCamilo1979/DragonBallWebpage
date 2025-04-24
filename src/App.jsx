import { useState } from 'react'
import { Button, Container } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './App.css'
import { Link, Element } from 'react-scroll';
import Aside from './Components/Aside/Aside';
import Home from './Pages/Home/Home';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout/Layout";
import Masculino from "./Pages/Masculino/Masculino";
import Femenino from "./Pages/Femenino/Femenino";
import CharacterDetail from "./Pages/CharacterDetail/CharacterDetail";
import NotFound from "./Pages/NotFound/NotFound";


const App = () => {

  return (
    <>
      

      <Router>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home />} />
            <Route path="men" element={<Masculino />} />
            <Route path="female" element={<Femenino />} />
            <Route path="character/:id" element={<CharacterDetail />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>

  );
}

export default App
