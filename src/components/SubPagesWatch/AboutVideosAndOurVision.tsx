import React, { useEffect, useState } from 'react';

import './css/stylesAboutVideosAndOurVision.css';
import 'assets/css/stylesGlobal.css';
import { ErrorPage } from 'pages';

interface CollectionYoutube {
    id: number;
    subTitleName: string;
    subTitleDescription: string;
    aboutVideosTitle: string;
    aboutVideosDescription: string;
    ourVisionFirstDescription: string;
    ourVisionSecondDescription: string;
    ourVisionThirdDescription: string;
}

export function AboutVideosAndOurVision() {
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
        <section className='lSectionAboutVideosAndOurVision' id='sectionAboutVideosAndOurVision'>
            <div className='containerAboutVideosAndOurVision'>
                <div className='sectionColumAboutVideosAndOurVision'>
                    <div>
                        <h2 className="globalSectionMediumTextDark">
                            Sobre os videos
                        </h2>
                        <h2 className="SubTitleAboutVideosAndOurVision">
                            {collectionYoutube.subTitleName}
                        </h2>
                        <p className="globalSectionTextDark"
                            dangerouslySetInnerHTML={{ __html: collectionYoutube.aboutVideosDescription }}>
                        </p>
                    </div>

                    <div >
                        <h2 className="globalSectionMediumTextDark  MarginTopColumAboutVideosAndOurVision">
                            Nossa visão
                        </h2>
                        <h2 className="SubTitleAboutVideosAndOurVision">
                            {collectionYoutube.aboutVideosTitle}
                        </h2>
                        <ul className="listAboutVideosAndOurVision">
                            <li>
                                <p className="globalSectionTextDark mb-3"
                                    dangerouslySetInnerHTML={{ __html: collectionYoutube.ourVisionFirstDescription }}>
                                </p>
                            </li>
                            <li>
                                <p className="globalSectionTextDark mb-3"
                                    dangerouslySetInnerHTML={{ __html: collectionYoutube.ourVisionSecondDescription }}>
                                </p>
                            </li>
                            <li>
                                <p className="globalSectionTextDark"
                                    dangerouslySetInnerHTML={{ __html: collectionYoutube.ourVisionFirstDescription }}>
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
