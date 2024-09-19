import React, { useEffect, useState } from 'react';

import 'assets/css/stylesMinistriesPageInfo.css';
import 'assets/css/stylesGlobal.css';

import { RiArrowLeftWideFill } from "react-icons/ri";

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ErrorPage } from 'pages';

interface Ministry {
    id: number;
    infoTitle: string,
    infoDescription: string,
    description: string,
    infoImage: string,
}

export function MinistriesInfoPage() {
    const [ministry, setMinistry] = useState<Ministry | null>(null);

    useEffect(() => {
        const storedMinistry = localStorage.getItem('selectedMinistry');
        if (storedMinistry) {
            setMinistry(JSON.parse(storedMinistry));
        }
    }, []);

    if (!ministry) {
        return <ErrorPage />;
    }

    return (
        <section className='lSectionMinistriesPageInfo' id='sectionMinistriesPageInfo'>
            <div className='containerMinistriesPageInfo'>
                <Link to="/homepage" className='backButtonGlobal'>
                    <RiArrowLeftWideFill />
                    <div className='textBackButtonGlobal'>Voltar</div>
                </Link>
                <div>
                    <div className='containerLineGlobalStyles'>
                        <div className='lineDarkGlobalStyles'></div>
                        <div className='textDarkGlobalStyles'>Ministérios</div>
                    </div>
                </div>
                <div className='sectionColumMinistriesPageInfo'>
                    <div>
                        <h2 className="globalSectionTitleTextDark">
                            {ministry.infoTitle}
                        </h2>
                        <p className="globalSectionTextDark"
                            dangerouslySetInnerHTML={{ __html: ministry.infoDescription }}></p>
                    </div>
                    <div className='columImageMinistriesPageInfo'>
                        <motion.img
                            className="divImageMinistriesPageInfo"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            src={`${ministry.infoImage}`}
                            alt={`${ministry.description}`}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
