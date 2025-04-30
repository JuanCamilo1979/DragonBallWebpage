import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footerContainer'>
            <div>
                <h1>Seguí el proyecto en GitHub</h1>
                <p>Proyecto creado con React y la ayuda de otras librerías para añadir animación</p>
            </div>
            <div className='footerIcon'>
                <GitHubIcon className='githubIcon' fontSize='340' />
            </div>

        </div>

    )
}

export default Footer