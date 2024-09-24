import React, { useEffect, useState } from 'react';

import './assets/css/stylesMinistriesPageInfo.css';
import 'assets/css/stylesGlobal.css';

import { RiArrowLeftWideFill } from "react-icons/ri";

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ErrorPage } from 'pages';

interface MinistryOrActivities {
    id: number;
    mockType: string;
    infoTitle: string,
    infoDescription: string,
    description: string,
    infoImage: string,
}

export function MinistriesInfoPage() {
    const [ministryOrActivities, setMinistryOrActivities] = useState<MinistryOrActivities | null>(null);

    useEffect(() => {
        const storedMinistry = localStorage.getItem('selectedMinistry');
        if (storedMinistry) {
            setMinistryOrActivities(JSON.parse(storedMinistry));
        }
    }, []);

    if (!ministryOrActivities) {
        return <ErrorPage />;
    }

    return (
        <section className='lSectionMinistriesInfoPage' id='sectionMinistriesInfoPage'>
            <div className='containerMinistriesInfoPage'>
                <Link to="/homepage" className='backButtonGlobal'>
                    <RiArrowLeftWideFill />
                    <div className='textBackButtonGlobal'>Voltar</div>
                </Link>
                <div>
                    <div className='containerLineGlobalStyles'>
                        <div className='lineDarkGlobalStyles'></div>
                        <div className='textDarkGlobalStyles'>{ministryOrActivities.mockType}</div>
                    </div>
                </div>
                <div className='sectionColumMinistriesInfoPage'>
                    <div>
                        <h2 className="globalSectionTitleTextDark">
                            {ministryOrActivities.infoTitle}
                        </h2>
                        <p className="globalSectionTextDark"
                            dangerouslySetInnerHTML={{ __html: ministryOrActivities.infoDescription }}></p>
                    </div>
                    <div className='columImageMinistriesInfoPage'>
                        <motion.img
                            className="divImageMinistriesInfoPage"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            src={`${ministryOrActivities.infoImage}`}
                            alt={`${ministryOrActivities.description}`}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
