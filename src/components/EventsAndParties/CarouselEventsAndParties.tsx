import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import Slider from 'react-slick';

import mockCarouselEventsAndParties from './MockCarouselEventsAndParties';

import 'assets/css/stylesGlobal.css';
import './assets/css/StylesCarouselEventsAndParties.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselEventsAndParties: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 1,
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
    const handleClick = (eventsAndParties: any) => {
        localStorage.setItem('selectedEventsAndParties', JSON.stringify(eventsAndParties))
        console.log('[DEBUG Pegou Eventos e festas]')
        navigate('/events');
    }

    return (
        <div className='sliderContainerCarouselEventsAndParties'>
            <Slider {...settings}>
                {mockCarouselEventsAndParties.map((eventsAndParties, index) => (
                    <div
                        key={eventsAndParties.id}
                        className='carouselCardCarouselEventsAndParties'
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className='carouselImageWrapperCarouselEventsAndParties'>
                            <div
                                className={`carouselImageCarouselEventsAndParties ${hoveredIndex === index ? 'carouselImageBlurCarouselEventsAndParties' : ''}`}
                                style={{ backgroundImage: `url(${eventsAndParties?.image})` }}
                            />
                            <div className='carouselOverlayCarouselEventsAndParties' style={{ backgroundColor: hoveredIndex === index ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.5)' }}>
                                <div className='divContainerGridEventsAndParties'>
                                    <div className='divContainerDataAndMonthEventsAndParties'>
                                        <h1 className='titleEventDataEventsAndParties'>30</h1>
                                        <h2 className='titleEventMonthEventsAndParties'>Maio</h2>
                                    </div>
                                    <div className='divContainerEventNameEventsAndParties'>
                                        <h2 className='carouselTitleCarouselEventsAndParties'>{eventsAndParties.eventName}</h2>
                                    </div>
                                </div>
                                <p className='carouselDescriptionCarouselEventsAndParties' dangerouslySetInnerHTML={{ __html: eventsAndParties?.eventAbout }} />
                                <button
                                    className={`carouselButtonEventsAndParties ${hoveredIndex === index ? 'carouselButtonVisibleEventsAndParties' : ''}`}
                                    onClick={() => handleClick(eventsAndParties)}
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

export default CarouselEventsAndParties;
