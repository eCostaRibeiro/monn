import "./Navbar.css"
import Midias from "./Imagens/Midias"
import AnchorLink from "react-anchor-link-smooth-scroll"


import React from "react"


const offSet = 100

const RightNav = ({ props }) => {
    return (
        <ul className="PagesContent">

            <li>
                <AnchorLink offset={offSet} href='#portfolio'>portfólio</AnchorLink>
            </li>
            <li>
                <AnchorLink offset={offSet} href='#services'>serviços</AnchorLink>
            </li>
            <li>
                <AnchorLink offset={offSet} href="#idAbout">sobre</AnchorLink>
            </li>
            <li>
                <AnchorLink offset={offSet} href='#contact'>contato</AnchorLink>
            </li>
        </ul>
    )
}



export default props =>
    <nav className="Menu">
        <RightNav />
        <Midias />
    </nav>


