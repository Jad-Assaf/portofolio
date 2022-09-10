import React from 'react'
import Header from './componenets/header/header'
import Nav from './componenets/nav/nav'
import About from './componenets/about/about'
import Experience from './componenets/experience/experience'
import Services from './componenets/services/services'
import Portofolio from './componenets/portofolio/portofolio'
import Testimonials from './componenets/testimonials/testimonials'
import Contact from './componenets/contact/contact'
import Footer from './componenets/footer/footer'

const App = () => {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portofolio />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default App