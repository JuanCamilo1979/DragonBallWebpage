import { useEffect, useState } from 'react'
import { Button, Container } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import './Femenino.css'
import { Link, Element } from 'react-scroll';
import Aside from '../../Components/Aside/Aside';
import Section from '../../Components/Section/Section';
import Aos from 'aos'
import 'aos/dist/aos.css'

import dragonBall from '../../img/klipartz.com(1).png'




const URL = 'https://dragonball-api.com/api/characters?gender=Female'

const Femenino = () => {
  const [characters, setCharacters] = useState([]);



  useEffect(() => {
    fetch(URL)
      .then(response => response.json())
      .then(data => setCharacters(data))
      .catch(() => console.log("Oyasumi Okasan"))

    
    Aos.init();
  }, [])

  const splitIntoGroups = (characters, numberOfGroups) =>{
    const groups = Array.from({ length: numberOfGroups }, () => []);
    characters.forEach((char, index) => {
      groups[index % numberOfGroups].push(char);
    });
    return groups;
  }

  const groups = splitIntoGroups(characters, 1);
  console.log(groups);


  return (
    <>
      <div className='header'>

        <img src={dragonBall} className="himage" />

        <div className="intro-text">
          <h1>Bienvenido al Universo de Dragon Ball</h1>
          <br /><br />
          <p>Explora los personajes, sus historias y las batallas que moldearon el destino del universo.</p>
          <p>Elige entre <strong>Hombres</strong>, <strong>Mujeres</strong> o <strong>Todos los personajes</strong> y sumérgete en el mundo de los Super Saiyajin, Namekianos y más.</p>
        </div>

      </div>

      <div className="flex">

        {/* Sidebar */}
        <Aside className='asideContainer' numberOfSections={1} />

        {/* Scrollable content */}
        <div className='content'>
          <Section idSection={1} array={groups[0]} className='section' />

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

export default Femenino;
