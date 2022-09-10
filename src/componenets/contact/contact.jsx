import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerFill } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


const contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_fe4u58e', 'template_0km37pk', form.current, 'zANOGUOuBf4b130I7')

        e.target.reset()
    };

    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>jad.a.assaf@gmail.com</h5>
                        <a href="mailto:jad.a.assaf@gmail.com" target='_blank' rel='noreferrer noopener'>Send a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerFill className='contact__option-icon' />
                        <h4>Messenger</h4>
                        <h5>Jad Assaf</h5>
                        <a href="https://m.me/jad.assaf" target='_blank' rel='noreferrer noopener'>Send a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <h5>+96171039693</h5>
                        <a href="https://api.whatsapp.com/send?phone=0096171039693" target='_blank' rel='noreferrer noopener'>Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default contact