import React, { useState } from 'react'
import style from './navbar.module.css'
import Button from '../Button/Button'
import Logo from '../Logo/Logo'
import mobileNavIcon from '../../assets/mobile-nav-icon.svg'

import btnStyle from '../Button/button.module.css'

import Text from '../Text/Text'

const Navbar = () => {

    return (
        <div className={`${style.navbarContainer} margin-edge`}>
            <Logo type='secondary' />
            <ul id={style.navLinks} >
                <li><Text text='Home' variant='mobile-txt' fontSize='1.37rem' color='#fff' /></li>
                <li>Product</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className={style.btnMenuWrapper}>
                <Button
                    title='Sign Up'
                    width="9rem"
                    varaint='primary'
                    classname={btnStyle.navBtn}
                />
                <img id={style.mobileMenuIcon}  src={mobileNavIcon} alt="navbar-icon" />
            </div>
        </div>
    )
}

export default Navbar