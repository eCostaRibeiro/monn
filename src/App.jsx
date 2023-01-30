import "./App.css"

import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Footer from "./components/Footer"
import Services from "./components/Services"
import About from "./components/About"
import Contact from "./components/Contact"
import ButtonW from "./components/Imagens/ButtonW"
import React from "react"
import Logo from "./components/Imagens/Branding"
import ScrollToTop from "react-scroll-to-top"


export default props => (
    <div className="App">
        <ButtonW />
        <Logo />
        <Navbar />
        <div id='portfolio'>
            <Portfolio />
        </div>
        <div id="services">
            <Services />
        </div>

        <div id="idAbout">
            <About />
        </div>


        <div id='contact'>
            <Contact />
        </div>
        <ScrollToTop smooth color="#2573b3" width="40" height="40" />

        <Footer />
    </div>
);