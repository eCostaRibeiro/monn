import React from "react";
import './Contact.css'
import Midias from './Imagens/Midias'
import { FaPhone } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const sizeIco = '1.5rem'

export default props => (
    <div className="Contact">
        <span className="Coisas">
            <div className="Input">
                <header>telefone</header>
                <section>(16) 99308.7021</section>
                <footer><FaPhone size={sizeIco} /></footer>
            </div>
            <div className="Input">
                <header>email</header>
                <section>contato@monn.com.br</section>
                <footer><MdEmail size={sizeIco} /></footer>
            </div>
            <div className="Input">
                <header>endereço</header>
                <section>Rua Sinharinha Frota, 1021, <br /> Centro - Matão/SP</section>
                <footer><MdEmail size={sizeIco} /></footer>
            </div>
        </span>
        <span className="Maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29675.755639837935!2d-48.363798!3d-21.606623!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b91f61912d367f%3A0x5dcd82f87fa524cf!2sMonn%20Custom%20Audio!5e0!3m2!1spt-BR!2sbr!4v1673831206179!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </span>
        <span className="Resto">
            <Midias Tamanho="3rem" className="Alinha" />
        </span>



    </div>
);