import React from "react"
import './Services.css'
import poundFive from "./Imagens/poundfive.png"
import Title from "./utils/Title"

import { IoFootsteps } from 'react-icons/io5'
import { BsFillSpeakerFill, BsMusicNoteBeamed, BsSpeaker } from 'react-icons/bs'
import { GiFilmSpool, GiMusicalScore, GiPublicSpeaker, GiSoundOn, GiSoundWaves } from 'react-icons/gi'
import { TbRotate360, TbVectorBezier2 } from 'react-icons/tb'
import { RiSoundModuleFill } from 'react-icons/ri'
import { } from 'react-icons/tb'



const icoSize = '5rem'

export default props => (
    <><Title titulo="Serviços" />
        <div className="Services">
            <article className="Cards">
                <GiFilmSpool size={icoSize} className="icoCards" />
                <header>Música para Vídeo</header>
                <section>Música instrumental original para vídeo</section>
                <footer>Música original exclusiva, composta para o vídeo em especifico. Complementando a narrativa e otimizando a mensagem do material.</footer>
            </article>

            <article className="Cards">
                <GiSoundWaves size={icoSize} className="icoCards" />
                <header>Sound Design</header>
                <section>Desenho de Efeitos Sonoros para Vídeo</section>
                <footer>Desenho de som construído sobre o corte do vídeo. Ex: (sonorização de movimento de câmera; criação de sons para animações gráficas; criação vozes não naturais, entre outros.</footer>
            </article>

            <article className="Cards">
                <IoFootsteps size={icoSize} className="icoCards" />
                <header>Foley</header>
                <section>Captação e sonorização de movimentos para vídeo</section>
                <footer>Recriação de sons que não puderem ser captados pelo som direto. (ex: sons de movimento, ambiente, objetos entre outros)</footer>
            </article>

            <article className="Cards">
                <BsMusicNoteBeamed size={icoSize} className="icoCards" />
                <header>Trilha Sonora</header>
                <section>Trilha Sonora <br /> (Música, Sound Design e Foley)
                </section>
                <footer>Criação de toda banda sonora (música, sound design e foley) exclusiva, feita sob medida para o vídeo.</footer>
            </article>

            <article className="Cards">
                <BsFillSpeakerFill size={icoSize} className="icoCards" />
                <header>Trilha Branca<br /> (sob encomenda)
                </header>
                <section>Trilha musical para climatização de obra audiovisual
                </section>
                <footer>Criação de trilha musical para climatização de obra audiovisual. É disponibilizado a licença de uso da obra musical para uma obra audiovisual em específico.</footer>
            </article>

            <article className="Cards">
                <BsSpeaker size={icoSize} className="icoCards" />
                <header>Trilha Branca <br /> (sob licença)
                </header>
                <section>Trilha musical para climatização de obra audiovisual
                </section>
                <footer>Escolha de trilha musical dentre o repositório da produtora, para climatização de obra audiovisual. É disponibilizado a licença de uso da obra musical para uma obra audiovisual em específico.</footer>
            </article>

            <article className="Cards">
                <GiSoundOn size={icoSize} className="icoCards" />
                <header>Paisagem Sonora
                </header>
                <section>Composição de ambientação sonora
                </section>
                <footer>Criação de paisagens sonoras para instalações artísticas, lojas, jogos, filmes, entre outros (ex: cidade urbana, noite chuvosa, dia no campo, entre outros)</footer>
            </article>

            <article className="Cards">
                <GiPublicSpeaker size={icoSize} className="icoCards" />
                <header>Canção Institucional
                </header>
                <section>Canção (música e letra) com temática institucional
                </section>
                <footer>Composição de letra e música para campanhas institucionais audiovisuais.</footer>
            </article>

            <article className="Cards">
                <GiMusicalScore size={icoSize} className="icoCards" />
                <header>Jingle</header>
                <section>Canção (música e letra) para propaganda
                </section>
                <footer>Composição de letra e música para criação de branding da empresa com foco no marketing para vendas.</footer>
            </article>

            <article className="Cards">
                <TbVectorBezier2 size={icoSize} className="icoCards" />
                <header>Edição de Áudio
                </header>
                <section>Manipulação de áudio gravado por terceiros
                </section>
                <footer>Processo de limpeza e edição de vozes, som direto, entre outros.</footer>
            </article>

            <article className="Cards">
                <RiSoundModuleFill size={icoSize} className="icoCards" />
                <header>Mixagem & Masterização
                </header>
                <section>Mixagem e masterização de peças musicais para artistas, publicidade, filmes e jogos.</section>
                <footer>Processo de limpeza e edição de vozes, som direto, entre outros</footer>
            </article>

            <article className="Cards">
                <TbRotate360 size={icoSize} className="icoCards" />
                <header>Produção 360°
                </header>
                <section>Atuação na pré, produção e pós de trabalhos audiovisuais.
                </section>
                <footer>Atuando desde a concepção, organização e estrturação do projeto. Captação e gravação de material. Finalização (edição, mixagem e masterização).</footer>
            </article>

            <article className="FivePound">
                <a href="https://www.pond5.com/pt/artist/MonnCustomAudio?ref=MonnCustomAudio">
                    <header>Blue Tracks - "Trilhas para licenciamento"</header>
                    <section>
                        <img src={poundFive} alt="Screenprint Pound5 Monn Custom Audio" />
                    </section>
                </a>
            </article>
        </div>
    </>
);