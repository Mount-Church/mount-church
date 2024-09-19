import React from 'react';

import 'assets/css/stylesBannerAboutUs.css';

import BannerAboutUsImg from '../../assets/images/BannerAboutUs.jpg'

export function BannerAboutUs() {
    return (
        <section className="lSectionBannerAboutUs">
            <div className="imageWrapperBannerAboutUs">
                <div
                    className={`imageBannerAboutUs`}
                    style={{ backgroundImage: `url(${BannerAboutUsImg})` }}
                />
            </div>
        </section>
    );
}
