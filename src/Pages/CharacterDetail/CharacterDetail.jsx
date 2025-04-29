import React, { useEffect, useState } from 'react'
import './CharacterDetail.css';
import { useParams } from 'react-router-dom';
import Transformation from '../../Components/Transformation/Transformation';

const colors = ['amarillo', 'azul', 'rojo', 'naranja', 'verde', 'morado', 'rosa', 'blanco'];

const CharacterDetail = () => {

    const { id } = useParams();
    const URL = `https://dragonball-api.com/api/characters/${id}`
    const [character, setCharacter] = useState(null);
    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => { setCharacter(data); console.log(data) })
            .catch(() => console.log("Oyasumi Okasan"))
        console.log(character);


    }, [])

    console.log(character);
    if (character == null) return <p>Loading...</p>;
    return (
        <div className="character-detail">
            <div className="headerCharacter">
                <div className='nameCharacter'>
                    <div className='name'>
                        <h1>{character.name}</h1>
                    </div>

                    <div className='imgCharacter'>
                        <img src={character.image} alt={character.name} /> // imagen
                    </div>
                </div>

                <div className="infoCharacter">
                    <h2>Información del Personaje</h2>
                    <br />
                    <br />
                    <p><strong>Raza: </strong> {character.race}</p>
                    <p><strong>Género</strong> {character.gender}</p>
                    <p><strong>Ki:</strong> {character.ki}</p>
                    <p><strong>Max Ki:</strong> {character.maxKi}</p>
                    <p><strong>Afiliación:</strong> {character.affiliation}</p>
                </div>

                <div className="desCharacter">
                    <h2>Descripción</h2>
                    <br />
                    <br />
                    <p>{character.description}</p>
                </div>
            </div>

            <div className="planet">

                <div className='planetImg'>
                    <img src={character.originPlanet.image} alt={character.originPlanet.name} />
                </div>

                <div className='textDescPlanet'>
                    <h2>Planeta de origen: {character.originPlanet.name}</h2>
                    <br />
                    <p>{character.originPlanet.description}</p>
                </div>

            </div>

            {character.transformations.length > 0 &&
                <section className="transformations">
                    <h2>Transformaciones</h2>
                    <div className="transformation-list">
                        {character.transformations.map((transformation, index) => (
                            <Transformation char={transformation} key={transformation.id} colorBx={colors[index % colors.length]} /> // Componente de transformación
                        ))}
                    </div>
                </section>
            }

        </div>
    );
};

export default CharacterDetail;

