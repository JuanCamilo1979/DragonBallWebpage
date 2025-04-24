import React from 'react'
import { Link, Element } from 'react-scroll';
import { Button } from '@mui/material';
import './Aside.css';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import Looks3Icon from '@mui/icons-material/Looks3';
import Looks4Icon from '@mui/icons-material/Looks4';
import Looks5Icon from '@mui/icons-material/Looks5';

const Aside = ({ numberOfSections }) => {
    const icons = [
        <LooksOneIcon className='icon' style={{fontSize:"80px"}} />,
        <LooksTwoIcon className='icon' style={{fontSize:"80px"}}/>,
        <Looks3Icon className='icon' style={{fontSize:"80px"}}/>,
        <Looks4Icon className='icon' style={{fontSize:"80px"}}/>,
        <Looks5Icon className='icon' style={{fontSize:"80px"}}/>,
        
    ];

    const [activeIndex, setActiveIndex] = React.useState(null);

    return (
        
        <div className='asideContainer'>
            {
                Array.from({ length: numberOfSections }, (_, index) => (
                    <Link activeClass='linkActive' to={index+1}
                     spy={true} 
                     smooth={true} 
                     duration={500} 
                     offset={-20}
                     onSetActive={() => setActiveIndex(index)}>
                        {activeIndex === index? 
                        (<p className='linkActive'>Section {icons[index % icons.length]}</p>):
                        (icons[index % icons.length])
                        }
                        
                    </Link>
                ))
            }
        </div>
    )
}

export default Aside