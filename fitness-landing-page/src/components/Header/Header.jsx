import React from 'react'
import Logo from '../../assets/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>

            <img src={Logo} alt='logo' className='logo' />

            <ul className='header-menu'>
                <li>Inicio</li>
                <li>Programas</li>
                <li>Por que nós</li>
                <li>Planos</li>
                <li>Depoimentos</li>
            </ul>
        </div>
    )
}

export default Header