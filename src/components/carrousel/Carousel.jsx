import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import root1 from '../../assests_copy/root1.svg';
import root2 from '../../assests_copy/root2.svg';
import root3 from '../../assests_copy/root3.svg';
import Ribby_and_Croaks from '../../assests_copy/Ribby_and_Croaks.svg'
import hilda from '../../assests_copy/hilda.svg';
import cagney from '../../assests_copy/Cagney.svg';
import goopy from '../../assests_copy/goopy.svg';   
import BeppiTheClown from '../../assests_copy/BeppiTheClown.svg';
import Wally from '../../assests_copy/WallyWarbles.svg';
import Djimni from '../../assests_copy/DjimmiTheGreat.svg';
import grim from '../../assests_copy/GrimMatchstick.svg';
import Werner from '../../assests_copy/WernerWerman.svg';
import Sally from '../../assests_copy/SallyStageplay.svg';
import Rumor from '../../assests_copy/RumorHoneybottoms.svg';
import Phantom from '../../assests_copy/Phantom Express.svg';
import Dr from '../../assests_copy/Dr.KahlsRobot.svg';
import cala from '../../assests_copy/CalaMaria.svg';
import captain from '../../assests_copy/CaptainBrineybeard.svg';
import dice from '../../assests_copy/KingDice.svg';
import devil from '../../assests_copy/TheDevil.svg';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true, 
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                <div>
                    <img src={root1} alt="Slide 1" className="carousel-image" />
                </div>
                <div>
                    <img src={root2} alt="Slide 2" className="carousel-image" />
                </div>
                <div>
                    <img src={root3} alt="Slide 3" className="carousel-image" />
                </div>
                <div>
                    <img src={Ribby_and_Croaks} alt="Slide 4" className="carousel-image" />
                </div>
                <div>
                    <img src={cagney} alt="Slide 5" className="carousel-image" />
                </div>
                <div>
                    <img src={goopy} alt="Slide 5" className="carousel-image" />
                </div>
                <div>
                    <img src={hilda} alt="Slide 5" className="carousel-image" />
                </div>
                <div>
                    <img src={BeppiTheClown} alt="Slide 5" className="carousel-image" />
                </div>
                <div>
                    <img src={Wally} alt="Slide 5" className="carousel-image" />
                </div>
                <div>
                    <img src={Werner} alt="Slide 5" className="carousel-image" />
                </div>
                <div>
                    <img src={cala} alt="Slide 5" className="carousel-image" />
                </div>
                <div>
                    <img src={grim} alt="Slide 5" className="carousel-image" />
                </div>
                <div>
                    <img src={Sally} alt="Slide 5" className="carousel-image" />
                </div>
                <div>
                    <img src={Phantom} alt="Slide 5" className="carousel-image" />
                </div>
                <div>
                    <img src={Dr} alt="Slide 5" className="carousel-image" />
                </div>
                <div>
                    <img src={captain} alt="Slide 5" className="carousel-image" />
                </div>
                <div>
                    <img src={dice} alt="Slide 5" className="carousel-image" />
                </div>
                <div>
                    <img src={devil} alt="Slide 5" className="carousel-image" />
                </div>
            </Slider>
        </div>
    );
};

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                right: "-10px",
                zIndex: 10,
            }}
            onClick={onClick}
        />
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                left: "-10px",
                zIndex: 10,
            }}
            onClick={onClick}
        />
    );
};

export default Carousel;