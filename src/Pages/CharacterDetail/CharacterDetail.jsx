import React, { useEffect, useState } from 'react'
import './CharacterDetail.css';
import { useParams } from 'react-router-dom';



const CharacterDetail = () => {

    const { id } = useParams();
    const URL = `https://dragonball-api.com/api/characters/${id}`
    const [character, setCharacter] = useState(null);
    useEffect(() => {
        fetch(URL)
            .then(response => response.json())
            .then(data => {setCharacter(data); console.log(data)})
            .catch(() => console.log("Oyasumi Okasan"))
        console.log(character);
        
        
    }, [])

    console.log(character);
    if (character == null) return <p>Loading...</p>;
    return (
        <div className="character-detail">
            <div className="header">
                <img src={character.image} alt={character.name} className="character-image" />
                <div className="info">
                    <h1>{character.name}</h1>
                    <p><strong>Race:</strong> {character.race}</p>
                    <p><strong>Gender:</strong> {character.gender}</p>
                    <p><strong>Ki:</strong> {character.ki}</p>
                    <p><strong>Max Ki:</strong> {character.maxKi}</p>
                    <p><strong>Affiliation:</strong> {character.affiliation}</p>
                </div>
            </div>

            <section className="description">
                <h2>Description</h2>
                <p>{character.description}</p>
            </section>

            <section className="planet">
                <h2>Origin Planet: {character.originPlanet.name}</h2>
                <img src={character.originPlanet.image} alt={character.originPlanet.name} />
                <p>{character.originPlanet.description}</p>
            </section>

            <section className="transformations">
                <h2>Transformations</h2>
                <div className="transformation-list">
                    {character.transformations.map((transformation) => (
                        <div key={transformation.id} className="transformation-card">
                            <img src={transformation.image} alt={transformation.name} />
                            <h4>{transformation.name}</h4>
                            <p><strong>Ki:</strong> {transformation.ki}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CharacterDetail;

