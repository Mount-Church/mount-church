import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import 'assets/css/stylesGlobal.css';
import './css/stylesFullServicesSermonsOrSpecialEvents.css';
import { RiArrowLeftWideFill } from 'react-icons/ri';
import { ErrorPage } from 'pages';

interface CollectionYoutube {
    id: number;
    bannerName: string;
    titleName: string;
    subTitleName: string;
    subTitleDescription: string;
}

export function FullServicesSermonsOrSpecialEvents() {
    const [collectionYoutube, setCollectionYoutube] = useState<CollectionYoutube | null>(null);

    useEffect(() => {
        const storedMinistry = localStorage.getItem('selectedwatchhighlightsandprevioussermons');
        if (storedMinistry) {
            setCollectionYoutube(JSON.parse(storedMinistry));
        }
    }, []);

    if (!collectionYoutube) {
        return <ErrorPage />;
    }
    return (
        <section className='lSectionFullServicesSermonsOrSpecialEvents' id='FullServicesSermonsOrSpecialEvents'>
            <div className='containerFullServicesSermonsOrSpecialEvents globalContainers'>
                <Link to="/watch" className='backButtonGlobal'>
                    <RiArrowLeftWideFill />
                    <div className='textBackButtonGlobal'>Voltar</div>
                </Link>
                <div>
                    <div className='containerLineGlobalStyles'>
                        <div className='lineDarkGlobalStyles'></div>
                        <div className='textDarkGlobalStyles'>{collectionYoutube.bannerName}</div>
                    </div>
                </div>
                <div className='sectionFullServicesSermonsOrSpecialEvents'>
                    <h2 className="globalSectionTitleTextDark45px">
                        {collectionYoutube.titleName}
                    </h2>
                    <div>
                        <h2 className="globalSectionMediumTextDark">
                            {collectionYoutube.subTitleName}
                        </h2>
                        <p className="globalSectionTextDark"
                            dangerouslySetInnerHTML={{ __html: collectionYoutube.subTitleDescription }}>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
