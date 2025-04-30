import React from 'react'
import personalImage from '../../img/personalImage.jpg'
import './About.css';
import Footer from '../../Components/Footer/Footer';

const About = () => {
    return (
        <div className='aboutContainer'>
            <div className="headerAbout">
                <div className='titleAbout'>
                    <div className='name'>
                        <h1>Acerca de mí</h1>
                        <p>Hola, soy Juan Camilo Guzmán Ascencio. Aquí hay algo de información sobre mí.</p>
                    </div>

                    <div className='imgAbout'>
                        <img src={personalImage} alt='Juan Camilo Guzmán' /> // imagen
                    </div>
                </div>

                <div className="infoPersonal">
                    <h2>Información Personal</h2>
                    <br />
                    <br />
                    <p><strong>Docente: </strong> Wilmer Arley Perdomo</p>
                    <p><strong>Ubicación semestral: </strong> Quinto semestre</p>
                    <p><strong>Materia: </strong> Programación Web</p>
                </div>

                <div className="desPersonal">
                    <h2>Descripción</h2>
                    <br />
                    <br />
                    <p>Soy una persona comprometida, creativa y con pasión por el 
                        aprendizaje continuo. Me interesa el desarrollo de proyectos
                         innovadores y disfruto trabajar en equipo para generar 
                         soluciones que marquen la diferencia. Siempre busco nuevos
                          retos que me permitan crecer tanto personal como profesionalmente.</p>
                </div>
            </div>

            <div className="city">

                <div className='cityImg'>
                    <img src="https://cdn.viajala.com/img/blog/arq-florencia_M.jpeg?xxNsfG2hTjutE9hPeoeqUj5zAn3yLEKs" alt="Florencia, Caqueta" />
                </div>

                <div className='textDesCity'>
                    <h2>Florencia, Caquetá</h2>
                    <br />
                    <p>Florencia, jardín donde despierta la selva,
                        susurra el viento entre palmas y guaduales,
                        y el sol, como un faro dorado, se cuela
                        por ríos que danzan en verdes rituales.

                        Puerta de la Amazonía viva y profunda,
                        con alma de lluvia y espíritu andino,
                        allí donde la tierra fértil fecunda
                        esperanzas, raíces y destino.</p>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default About