import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import './MenuItens.css'

const offSet = 115

export default (props) =>
    <div className="MenuItens">
        <ul>
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
    </div>