import React from "react";
import './Main.css';
import Video from '../../assests_copy/Cuphead Launch Trailer.mp4';
import Dlc from '../dlc/Dlc';
import Carousel from "../carrousel/Carousel";
import Cup from '../../assests_copy/cup.png';
import Brothers from '../../assests_copy/brothers.svg';
import Cuphead from '../../assests_copy/cuphead_solo.svg';
import Mugman from '../../assests_copy/mugman.svg';
import Chalice from '../../assests_copy/Chalice.png';

const Main = () => {
    const handleRedirect = () => {
        window.location.href = "https://store.steampowered.com/app/268910/Cuphead/";
    };

    return (
        <>
            <div className="background">
                <video autoPlay muted loop>
                    <source src={Video} type="video/mp4" />
                </video>
                <div className="background-overlay"></div>
            </div>
            <div className="container">
                <div className="textos">
                    <img src={Cup} id="cup" alt="Cuphead logo" />
                    <h1 className="title">Uma aventura espetacular aguarda você!</h1>
                    <p className="text">
                    Cuphead é um jogo de plataforma e tiro desenvolvido pelo estúdio independente Studio MDHR, criado pelos irmãos Chad e Jared Moldenhauer. Lançado em 2017, o jogo rapidamente chamou a atenção por seu estilo artístico único, inspirado nos desenhos animados clássicos dos anos 1930, como os da Fleischer Studios e dos primeiros trabalhos da Disney. Toda a animação foi desenhada à mão, recriando o visual vintage, com cenários coloridos, personagens caricatos e uma trilha sonora baseada em jazz e ragtime, fiel à era de ouro das animações. No jogo, os jogadores assumem o controle de Cuphead e seu irmão Mugman, que entram em uma aventura após perderem uma aposta com o Diabo. Para salvar suas almas, os irmãos devem derrotar uma série de chefes, cada um mais criativo e desafiador que o outro. Essas batalhas contra chefes são o foco principal do jogo, intercaladas por níveis de plataforma que exigem precisão, agilidade e uma boa dose de paciência.
                    </p>
                    <div className="botoes">
                        <button onClick={handleRedirect} className="button-compre">Compre agora</button>
                        <button className="button-saiba">Saiba mais</button>
                    </div>
                </div>
                <div className="imagem">
                    <img src={Brothers} id="imga" alt="Cuphead and Mugman" />
                </div>
            </div>
            <div className="personagens" id="herois">
                <h1 className="tituloh1">Os heróis da Ilha Tinteiro</h1>
                <main className="herois">
                    <div className="hero-item">
                        <img src={Cuphead} className="hero-img" alt="Cuphead" />
                    </div>
                    <div className="hero-item">
                        <img src={Mugman} className="hero-img" alt="Mugman" />
                    </div>
                    <div className="hero-item">
                        <img src={Chalice} className="hero-img" alt="Chalice" />
                    </div>
                </main>
            </div>
            <div className="carousel" id="chefes">
                <h1 className="chefe">Enfrente chefes variados</h1>
                <Carousel />
            </div>
            <section>
                <div className="dlc-section" id="dlc">
                    <Dlc />
                </div>
            </section>
        </>
    );
};

export default Main;
