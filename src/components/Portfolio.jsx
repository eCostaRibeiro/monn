import React from 'react'
import Title from './utils/Title'
import Subtitle from './utils/Subtitle'
import "./Portfolio.css"
import Players from "./Players"




const altura = 200
const largura = 360
const larguraFilm = '70%'
const alturaFilm = '720'


export default props => (
    <>
        <div title='Portifolio' className='Section'>
            <Title titulo="Portfólio" />
            <Subtitle titulo="Publicitários" />
            <div className="GridVimeo">
                <iframe width={largura} height={altura} src="https://www.youtube.com/embed/ZlOIRPp34TU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <iframe title='reels' allowfullscreen="" frameborder="0" height={altura} mozallowfullscreen="" src="https://player.vimeo.com/video/687658239?h=d4fdd64ce8" width={largura}></iframe>

                <iframe title='upburger' allowfullscreen="" frameborder="0" height={altura} mozallowfullscreen="" src="https://player.vimeo.com/video/494182764?h=340f07bc28" width={largura}></iframe>

                <iframe title='maxcasa' allowfullscreen="" frameborder="0" height={altura} mozallowfullscreen="" src="https://player.vimeo.com/video/311729272" width={largura}></iframe>

                <iframe title='cerradinho' allowfullscreen="" frameborder="0" height={altura} mozallowfullscreen="" src="https://player.vimeo.com/video/317547441" width={largura}></iframe>

                <iframe title='goldbarUm' allowfullscreen="" frameborder="0" height={altura} mozallowfullscreen="" src="https://player.vimeo.com/video/319554620" width={largura}></iframe>

                <iframe title='goldbarDois' allowfullscreen="" frameborder="0" height={altura} mozallowfullscreen="" src="https://player.vimeo.com/video/319505087" width={largura}></iframe>

                <iframe title='jingle' allowfullscreen="" frameborder="0" height={altura} mozallowfullscreen="" src="https://player.vimeo.com/video/446829125?h=d02a2e9d75" width={largura}></iframe>

                <iframe title='vinhetaIM' allowfullscreen="" frameborder="0" height={altura} mozallowfullscreen="" src="https://player.vimeo.com/video/668479349?h=4516d59273" width={largura}></iframe>

                <iframe title='retrospectiva' allowfullscreen="" frameborder="0" height={altura} mozallowfullscreen="" src="https://player.vimeo.com/video/668377958?h=d52c6918c7" width={largura}></iframe>

                <iframe title='casaIpe' allowfullscreen="" frameborder="0" height={altura} mozallowfullscreen="" src="https://player.vimeo.com/video/620020300?h=237fdfc88f" width={largura}></iframe>

                <iframe title='hsaude' allowfullscreen="" frameborder="0" height={altura} mozallowfullscreen="" src="https://player.vimeo.com/video/616317645?h=291e247669" width={largura}></iframe>

                <iframe title='psicologia' allowfullscreen="" frameborder="0" height={altura} mozallowfullscreen="" src="https://player.vimeo.com/video/596944858?h=d6ee81554f" width={largura}></iframe>

                <iframe title='omilionario' allowfullscreen="" frameborder="0" height={altura} mozallowfullscreen="" src="https://player.vimeo.com/video/394219459?h=84113a2969" width={largura}></iframe>

                <iframe title='desceumapinga' allowfullscreen="" frameborder="0" height={altura} mozallowfullscreen="" src="https://player.vimeo.com/video/427396132?h=cecbe84572" width={largura}></iframe>

                <iframe title='roundsix' allowfullscreen="" frameborder="0" height={altura} mozallowfullscreen="" src="https://player.vimeo.com/video/647448526?h=8e7523b162" width={largura}></iframe>

                <iframe title='eletronic' allowfullscreen="" frameborder="0" height={altura} mozallowfullscreen="" src="https://player.vimeo.com/video/463532360?h=3454c39e3a" width={largura}></iframe>

                <iframe title='ajanela' allowfullscreen="" frameborder="0" height={altura} mozallowfullscreen="" src="https://player.vimeo.com/video/502229394?h=62fc705d1a" width={largura}></iframe>

                <iframe title='vocesemavc' allowfullscreen="" frameborder="0" height={altura} mozallowfullscreen="" src="https://player.vimeo.com/video/504136997?h=ea5d657489" width={largura}></iframe>

                <iframe title='vitor' allowfullscreen="" frameborder="0" height={altura} mozallowfullscreen="" src="https://player.vimeo.com/video/678501433?h=339dc8ff92" width={largura}></iframe>
            </div>

            <Subtitle titulo="Filmes" />
            <div className="Film">
                <iframe title='soroco' allowfullscreen="" frameborder="0" height={alturaFilm} mozallowfullscreen="" src="https://player.vimeo.com/video/588927347?h=cd8e58c2f4" width={larguraFilm}></iframe>

                <iframe title='Beco360' width={larguraFilm} height={alturaFilm} src="https://www.youtube.com/embed/dNQZy5kCz4s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                <iframe title='Minimo' width={larguraFilm} height={alturaFilm} src="https://www.youtube.com/embed/lwWpm4cUnJw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                <iframe title='uspdigital' allowfullscreen="" frameborder="0" height={alturaFilm} mozallowfullscreen="" src="https://player.vimeo.com/video/311728908" width={larguraFilm}></iframe>

                <iframe title='corpoartificio' allowfullscreen="" frameborder="0" height={alturaFilm} mozallowfullscreen="" src="https://player.vimeo.com/video/676665061?h=e8d0b001a8" width={larguraFilm}></iframe>




            </div>
            <Subtitle titulo="Músicas" />
            <Players />
        </div >

    </>
);
