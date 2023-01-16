import "./Navbar.css"
import Logo from "./Imagens/Branding"
import Midias from "./Imagens/Midias"


import React from "react"



const RightNav = ({ open }) => {
    return (
        <ul open={open} className="PagesContent">
            <li><a href='#portfolio'>portfólio</a></li>
            <li><a href='#services'>serviços</a></li>
            <li><a href="#id-About">sobre</a></li>
            <li><a href='#contact'>contato</a></li>
        </ul>
    )
}



export default props =>
    <nav className="Menu">
        <Logo />
        <RightNav />
        <Midias />
    </nav>


