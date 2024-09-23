import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RiArrowLeftWideFill } from 'react-icons/ri';

import 'assets/css/stylesGlobal.css';
import './assets/css/StylesError404.css'

import astronautError404Image from './assets/images/astronautError404.png'

export function Error404() {

    return (
        <section className='lSectionError404' id='sectionError404'>
            <div className='backGroundImageError404'>
                <div className='containerError404'>
                    <Link to="/homepage" className='backButtonError404'>
                        <RiArrowLeftWideFill className='arrowIconWhiteError404' />
                        <div className='textWhiteButtonError404'>Voltar</div>
                    </Link>
                    <div className='sectionColumError404'>
                        <div className='sectiontextsError404'>
                            <h2 className="titleTextWhiteError404">
                                404
                            </h2>
                            <p className="subTextWhiteError404">Você está perdido?</p>
                            <p className='subTextchameleonGrayorWhiteError404'>Tente recarregar esta página ou voltar para a página inicial</p>
                        </div>
                        <div className='columImageError404'>
                            <motion.img
                                className="divImageError404"
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.8 }}
                                transition={{
                                    type: "smooth",
                                    repeatType: "mirror",
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                                src={`${astronautError404Image}`}
                                alt="Astronalta Imagem"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}