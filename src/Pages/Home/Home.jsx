import { useEffect, useState } from 'react'
import { Button, Container } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './Home.css'
import { Link, Element } from 'react-scroll';
import Aside from '../../Components/Aside/Aside';
import Section from '../../Components/Section/Section';
import Aos from 'aos'
import 'aos/dist/aos.css'



const sections = ['Inicio', 'Sobre Nosotros', 'Productos', 'Contacto',
  'Inicio', 'Sobre Nosotros', 'Productos', 'Contacto'];
const URL = 'https://dragonball-api.com/api/characters?limit=58'

const Home = () => {
  const [characterSec1, setCharacterSec1] = useState([]);
  const [characterSec2, setCharacterSec2] = useState([]);
  const [characterSec3, setCharacterSec3] = useState([]);
  const [characterSec4, setCharacterSec4] = useState([]);
  const [characterSec5, setCharacterSec5] = useState([]);
  const [characterSec6, setCharacterSec6] = useState([]);
  

  useEffect(() => {
    fetch(`https://dragonball-api.com/api/characters?page=1&limit=10`)
    .then(response => response.json())
    .then(data => setCharacterSec1(data.items))
    .catch(() => console.log("Oyasumi Okasan"))
    
    fetch(`https://dragonball-api.com/api/characters?page=2&limit=10`)
    .then(response => response.json())
    .then(data => setCharacterSec2(data.items))
    .catch(() => console.log("Oyasumi Okasan"))
    
    fetch(`https://dragonball-api.com/api/characters?page=3&limit=10`)
    .then(response => response.json())
    .then(data => setCharacterSec3(data.items))
    .catch(() => console.log("Oyasumi Okasan"))
    
    fetch(`https://dragonball-api.com/api/characters?page=4&limit=10`)
    .then(response => response.json())
    .then(data => setCharacterSec4(data.items))
    .catch(() => console.log("Oyasumi Okasan"))
    
    fetch(`https://dragonball-api.com/api/characters?page=5&limit=10`)
    .then(response => response.json())
    .then(data => setCharacterSec5(data.items))
    .catch(() => console.log("Oyasumi Okasan"))

    fetch(`https://dragonball-api.com/api/characters?page=6&limit=10`)
    .then(response => response.json())
    .then(data => setCharacterSec6(data.items))
    .catch(() => console.log("Oyasumi Okasan"))
    
    Aos.init();
  }, [])


  return (
    <>
      <div className='header'>
        <h1 className='title'>Mi Aplicación</h1>
        <h1 className='title'>Mi Aplicación</h1>
        <h1 className='title'>Mi Aplicación</h1>
        <h1 className='title'>Mi Aplicación</h1>
        <h1 className='title'>Mi Aplicación</h1>
        <h1 className='title'>Mi Aplicación</h1>
      </div>
      <div className="flex">

        {/* Sidebar */}
        <Aside className='asideContainer' numberOfSections={6} />

        {/* Scrollable content */}
        <div className='content' data-aos="zoom-in" aos-delay="2000">
            <Section idSection={1} array={characterSec1}  className='section'/>
            <Section idSection={2} array={characterSec2}  className='section'/>
            <Section idSection={3} array={characterSec3}  className='section'/>
            <Section idSection={4} array={characterSec4}  className='section'/>
            <Section idSection={5} array={characterSec5}  className='section'/>
            <Section idSection={6} array={characterSec6}  className='section'/>
          
        </div>
      </div>

      <div className='footer'>
        <h1 className='title'>Mi Aplicación</h1>
        <h1 className='title'>Mi Aplicación</h1>
        <h1 className='title'>Mi Aplicación</h1>
        <h1 className='title'>Mi Aplicación</h1>
        <h1 className='title'>Mi Aplicación</h1>
        <h1 className='title'>Mi Aplicación</h1>
      </div>
    </>

  );
}

export default Home
