
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './CardCharacter.css'
import backImage from '../../img/blob-haikei(1).svg'
import { Link } from 'react-router-dom';

const CardCharacter = ({ item }) => {
  return (
    <div className='cardContainer' data-aos="fade-up" data-aos-duration="1000">
      <Link to={`/character/${item.id}`} className='link'>
        <div className='imageContainer'>
          <img className='image' src={item.image} alt="imageCaracter" />
        </div>
        <div className='backContainer'>
          <img className='imgBack' src={backImage} />
        </div>
        <Card className='contentContainer' sx={{ width: 345 }}>
          <CardContent>

            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              <h1>{item.name}</h1>
              <h2>{item.race} - {item.gender}</h2>
              <br />
              <h3>Afiliación {item.affiliation}</h3>
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}

export default CardCharacter;