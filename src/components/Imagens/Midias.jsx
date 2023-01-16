import React from "react";
import "./Midias.css"

import { SiFacebook, SiInstagram, SiSoundcloud, SiVimeo, SiYoutube } from "react-icons/si"



export default props =>
    <span>
        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/monnmusicalspace/"><SiFacebook size={props.Tamanho || '2rem'} className="icoSocial" /></a>
        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/monncustomaudio/"><SiInstagram size={props.Tamanho || '2rem'} className="icoSocial" /></a>
        <a target="_blank" rel="noreferrer" href="https://www.youtube.com/c/JomMonnazzi"><SiYoutube size={props.Tamanho || '2rem'} className="icoSocial" /></a>
        <a target="_blank" rel="noreferrer" href="https://vimeo.com/monnmusicalspace"><SiVimeo size={props.Tamanho || '2rem'} className="icoSocial" /></a>
        <a target="_blank" rel="noreferrer" href="https://soundcloud.com/monnmusicalspace"><SiSoundcloud size={props.Tamanho || '2rem'} className="icoSocial" /></a>

    </span>