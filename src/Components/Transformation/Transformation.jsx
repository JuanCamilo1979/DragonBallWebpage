import React from 'react'
import './Transformation.css';

const Transformation = ({ char, colorBx}) => {
  const dinamicClass = `carTransformationContainer ${colorBx}`;
  console.log(dinamicClass);
  return (
    <div className={dinamicClass}>
      <div className='carTransformationText'>
        <div className='textTransformation'>
          <h1>{char.name}</h1>
          <h2>Ki usado</h2>
          <p>{char.ki}</p>
        </div>
      </div>
      <div className='carTransformationImageContainer'>
        <img src={char.image} alt="jejejejeje" />
      </div>
    </div>
  )
}

export default Transformation