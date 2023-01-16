import React from "react"

import './About.css'

export default props => (
    <div className="About">
        <article className="Estudio">
            <header>
                Monn Custom Audio
            </header>
            <section>
                Somos uma produtora de música e áudio especializada na criação de peças sonoras para artistas, publicidade, filmes, jogos, instalações e os mais diversos projetos audiovisuais. Com mais de 04 anos de mercado, a Monn tem o prazer e a honra de trabalhar com as maiores empresas nacionais, agências de publicidade e produtoras de vídeo, assim como também atende o mercado internacional de videomakers e artistas. Temos um compromisso: alinhar criatividade, qualidade e profissionalismo.
            </section>
        </article>
        <article className="Staff">
            <img className="Pics" src="/imgs/jomMonnazzi.png" alt="Jom Monnazzi" />
            <header>Jom Monnazzi</header>
            <section>
                João (Jom) Monnazzi, filho de Maria e de José, é apaixonado por música e filmes desde a infância, quando teve seu contato com seus primeiros instrumentos musicais. É formado em Música (USP), Especialista em Composição para Cinema e Televisão (UAM), Mestre em Música, na área de processos criativos com sua pesquisa focando composição e sistemas interativos para performances (USP) e atualmente doutorando em Música (USP) com sua pesquisa focada nas estereotipias da música de cinema. Com mais 08 anos de experiência nas áreas de produção musical, composição, sound design, mixagem e masterização, atualmente Jom está a frente da Monn Custom Audio.
            </section>
        </article>
        <article className="Staff">
            <img className="Pics" src="/imgs/pandaCosta.png" alt="Eduardo Costa Ribeiro" />
            <header>Eduardo Costa Ribeiro</header>
            <section>
                Eduardo Costa Ribeiro, músico formado em TI com especialização em Audiovisual, passa pelas mais variadas expressões artísticas além da música, como design gráfico, audiovisual e desenvolvimento de jogos. Enquanto músico é compositor, intérprete e arranjador e já realizou trabalhos com as mais variadas formações (desde solos e grupos de câmara a orquestras sinfônicas) e tem dedicado seus últimos anos ao estudo da canção.
            </section>
        </article>
    </div>
);