import React, { useEffect, useState } from 'react';

import 'assets/css/stylesGlobal.css';
import './css/stylesBannerFullServicesSermonsOrSpecialEvents.css';
import { ErrorPage } from 'pages';

interface CollectionYoutube {
    bannerImageHighlightsAndPreviousSermonsMock: string;
}

export function BannerFullServicesSermonsOrSpecialEvents() {
    const [collectionYoutubeBanner, setCollectionYoutubeBanner] = useState<CollectionYoutube | null>(null);

    useEffect(() => {
        const storedMinistry = localStorage.getItem('selectedwatchhighlightsandprevioussermons');
        if (storedMinistry) {
            setCollectionYoutubeBanner(JSON.parse(storedMinistry));
        }
    }, []);

    if (!collectionYoutubeBanner) {
        return <ErrorPage />;
    }

    return (
        <section className="lSectionBannerFullServicesSermonsOrSpecialEvents">
            <div className="imageWrapperBannerFullServicesSermonsOrSpecialEvents">
                <div
                    className={`imageBannerFullServicesSermonsOrSpecialEvents`}
                    style={{ backgroundImage: `url(${collectionYoutubeBanner.bannerImageHighlightsAndPreviousSermonsMock})` }}
                />
            </div>
        </section>
    );
}
