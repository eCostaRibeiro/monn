import "./App.css"

import Navbar from "./components/Navbar"
import Portfolio from "./components/Portfolio"
import Footer from "./components/Footer"
import About from "./components/About"
import Contact from "./components/Contact"
import React from "react"



export default props => (
    <div className="App">
        <Navbar />
        <Portfolio />

        <About />
        <Contact />



        <Footer />
    </div>
);