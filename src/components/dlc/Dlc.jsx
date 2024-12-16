import React from "react";
import './Dlc.css';
import Chalice from '../../assests_copy/Chalice.png';
import heros from '../../assests_copy/3hero.png';

const Dlc = () => {
    return (
        <>
            <div id="dlc">
                <div id="dlc-titles">
                    <h2>Não perca a nova aventura!</h2>
                    <h1>Cuphead - The Delicious Last Course</h1>
                </div>
                <div id="dlc-content">
                  
                    <div className="chalice-and-text">
                        <div className="text-content">
                            <p id="text">
                               <strong> Prepare-se para uma nova e emocionante aventura no mundo de Cuphead! Em 'The Delicious Last Course', os irmãos Cuphead e Mugman embarcam em uma jornada épica ao lado da destemida Ms. Chalice. Explore uma ilha completamente nova, enfrente chefes desafiadores e descubra segredos escondidos enquanto aproveita visuais deslumbrantes no clássico estilo animado dos anos 1930.</strong>
                            </p>
                            <h2>Novos Desafios e Chefes!</h2>
                            <p id="text"><strong>A DLC apresenta uma série de novos e desafiadores chefes, cada um com habilidades e padrões únicos. Teste sua habilidade e reflexos enquanto enfrenta batalhas épicas em cenários incríveis, projetados para cativar e desafiar até os jogadores mais experientes.</strong></p>
                        </div>
                    </div>
                  
                </div>
            </div>
        </>
    );
};

export default Dlc;
