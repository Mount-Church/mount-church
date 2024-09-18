import React from 'react';

import 'assets/css/stylesBannerBePartOfTheCommunity.css';

import bannerComunity from '../../assets/images/bannerComunuty.jpg'

export function BannerBePartOfTheCommunity() {
    return (
        <section className="lSectionBannerBePartOfTheCommunity" id="lSectionBannerBePartOfTheCommunity">
            <div className="imageWrapperBannerBePartOfTheCommunity">
                <div
                    className={`imageBannerBePartOfTheCommunity imageBlurAllBannerBePartOfTheCommunity`}
                    style={{ backgroundImage: `url(${bannerComunity})` }}
                />
                <div className="overlayBannerBePartOfTheCommunity" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <h2 className="titleBannerBePartOfTheCommunity">Faça Parte da Comunidade</h2>
                </div>
            </div>
        </section>
    );
}
