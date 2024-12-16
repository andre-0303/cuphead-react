import React from "react";
import Logo from '../../assests_copy/logo.svg';
import './Header.css';

const Header = () =>{
    return(
    <header>
            <img src={Logo} alt="logo" id="logo"/> 
            <ul className="nav">
                <li>
                       <a href="#" className="nav-link">Início</a>
                </li>
                <li>
                    <a href="#herois" className="nav-link">Personagens</a>
                </li>
                <li>
                    <a href="#chefes" className="nav-link">Chefes</a>
                </li>
                <li>
                    <a href="#dlc" className="nav-link">Dlc</a>
                </li>
                <li>
                    <a href="https://store.steampowered.com/app/268910/Cuphead/" className="nav-link">Compre</a>
                </li>
                
            </ul>
    </header>
    )
}

export default Header;