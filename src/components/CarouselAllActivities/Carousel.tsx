import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import Slider from "react-slick";

import ministriesOrActivitiesMock from 'components/CarouselAllActivities/MockCarousel';

import 'assets/css/stylesGlobal.css';
import './assets/css/stylesCarousel.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                },
            },
        ],
    };

    let navigate = useNavigate();
    const handleClick = (ministryOrActivities: any) => {
        localStorage.setItem('selectedMinistry', JSON.stringify(ministryOrActivities))
        console.log('[DEBUG Pego Ministério]')
        navigate('/ministries');
    }


    return (
        <div className="sliderContainerAllActivities">
            <Slider {...settings}>
                {ministriesOrActivitiesMock.map((ministryOrActivities, index) => (
                    <div
                        key={ministryOrActivities.id}
                        className="carouselCardAllActivities"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="carouselImageWrapperAllActivities">
                            <div
                                className={`carouselImageAllActivities ${hoveredIndex === index ? 'carouselImageBlurAllActivities' : ''}`}
                                style={{ backgroundImage: `url(${ministryOrActivities.image})` }}
                            />
                            <div className="carouselOverlayAllActivities" style={{ backgroundColor: hoveredIndex === index ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.5)' }}>
                                <h2 className="carouselTitleAllActivities">{ministryOrActivities.title}</h2>
                                <p className="carouselDescriptionAllActivities" dangerouslySetInnerHTML={{ __html: ministryOrActivities.description }} />
                                <button
                                    onClick={() => handleClick(ministryOrActivities)}
                                >
                                    Saber Mais
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
