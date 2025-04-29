import React from 'react'
import './Section.css'
import { Element } from 'react-scroll'
import CardCharacter from '../CardCharacter/CardCharacter'


const Section = ({ idSection, array }) => {
    /* En esta seccion se hará como máximo la presentación de como máximo 10 personajes
        se recibirá un array de personajes y se mostrará el nombre y la imagen de cada uno
        Recibirá un array de personajes y un id de sección a la que pertenece
     */
    return (
        <Element name={`${idSection}`} className='sectionContainer'>
            <div className='sepContainer'>
                <img src="https://lacremamalta.com/wp-content/themes/lacrema/static/images/pg-spacer-1.svg" alt="falfd" />
            </div>
            <div className='titleContainer'>
                
                {`Sección  ${idSection} `.split("").map((letter, i) => (
                    <span key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                        {letter === " " ? '\u00A0' : letter}
                    </span>
                ))}
            </div>
            <div className='itemsContainer'>
                {array.map((item) => (
                    <CardCharacter item={item} />
                ))}
            </div>
        </Element>

    )
}

export default Section