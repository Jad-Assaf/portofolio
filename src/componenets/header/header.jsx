import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './headerSocials'


const header = () => {
    return (
        <header>
            <div className="container header__container" id='home'>
                <h5>Hello I'm</h5>
                <h1>Jad Assaf</h1>
                <h5 className='text-light'>Fullstack Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>

                <a href="#contact" className='scroll__down'>Scroll down</a>
            </div>
        </header>
    )
}

export default header