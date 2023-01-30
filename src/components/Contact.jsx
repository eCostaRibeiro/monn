import React from "react";
import './Contact.css'
import Midias from './Imagens/Midias'
import Title from './utils/Title'
import { FaPhone } from 'react-icons/fa'
import { MdEmail, MdLocationPin } from 'react-icons/md'

const sizeIco = '3rem'

export default props => (
    <>
        <Title titulo='Contato' />
        <div className="Contact">

            <div className="Infos">
                <a href="tel:+5516993087021" className="Input">
                    <section>(16) 99308.7021</section>
                    <footer><FaPhone className="icoInfo" size={sizeIco} /></footer>
                </a>
                <a href="mailto:contato@monn.com.br" className="Input">
                    <section>contato@monn.com.br</section>
                    <footer><MdEmail className="icoInfo" size={sizeIco} /></footer>
                </a>

                <a className="Input" href="https://maps.google.com/maps?ll=-21.606591,-48.363801&z=13&t=m&hl=pt-BR&gl=BR&mapclient=embed&cid=6759202619558012111">
                    <section>Rua Sinharinha Frota, 1021, Centro - Matão/SP</section>
                    <footer><MdLocationPin className="icoInfo" size={sizeIco} /></footer>
                </a>

            </div>

            <div className="Infos">
                <iframe id="GoogleMaps" className="Maps" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29675.755639837935!2d-48.363798!3d-21.606623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b91f61912d367f%3A0x5dcd82f87fa524cf!2sMonn%20Custom%20Audio!5e0!3m2!1spt-BR!2sbr!4v1673831206179!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </>
);