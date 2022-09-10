import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { BsDribbble } from 'react-icons/bs'

const headerSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkdedin.com" target="_blank" rel='noopener noreferrer'><BsLinkedin /></a>
            <a href="https://github.com" target="_blank" rel='noopener noreferrer'><BsGithub /></a>
            <a href="https://dribbble.com" target="_blank" rel='noopener noreferrer'><BsDribbble /></a>
        </div>
    )
}

export default headerSocials