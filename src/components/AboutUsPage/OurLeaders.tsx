import React from 'react';

import 'assets/css/stylesOurLeaders.css';
import 'assets/css/stylesGlobal.css';

import { motion } from "framer-motion";

export function OurLeaders() {
    return (
        <section className="lSectionOurLeaders" id="sectionOurLeaders">
            <div className="sectionOurLeaders">
                <div className="sectionOurLeadersData">
                    <div className="containerLineGlobalStyles">
                        <div className="lineDarkGlobalStyles"></div>
                        <div className="textDarkGlobalStyles">Nossos lideres</div>
                    </div>
                    <h2 className="globalSectionTitleTextDark">
                        Jornada de Dedicação e Transformação
                    </h2>
                    {/* Image that appears when the screen is less than or equal to 1350px */}
                    <div className='flex justify-center'>
                        <div className="imageSmallShowAndHideOurLeaders sectionOurLeadersImg">
                            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
                        </div>
                    </div>

                    <p className="globalSectionTextDark">
                        Pastor <strong>Aldo</strong> e Pastora <strong>Fabi</strong> são casados e dedicados ao ministério pastoral há 23 anos. Há quase 9 anos, chegaram a Joinville com a missão de pastorear as vidas que Deus lhes confiou. Durante esse tempo, têm testemunhado inúmeras transformações e restaurações de vidas e famílias através de Jesus. Eles têm dois filhos e são apaixonados por servir a Deus e a comunidade, liderando com amor, sabedoria e dedicação.
                    </p>
                </div>
                {/* Image that appears when the screen is larger than 1350px */}
                <div className="imageLargeShowAndHideOurLeaders sectionOurLeadersImg">
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
                </div>
            </div>
        </section>
    );
}
