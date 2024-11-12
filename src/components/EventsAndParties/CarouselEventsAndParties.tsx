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
    const handleClick = (ministryOrActivities: any) => {
        localStorage.setItem('selectedMinistry', JSON.stringify(ministryOrActivities))
        console.log('[DEBUG Pego Ministério]')
        navigate('/ministries');
    }


    // id: 3,
    //     // CARD
    //     eventData: '30',
    //     eventMonth: 'Maio',
    //     eventName: 'Retiro ONE TEENS',

    //     // INFORMAÇÕES
    //     image: 'OneImg',
    //     eventDataInformation: '30 de Maio a 01 de Junho, das 17h às 16h',
    //     eventAddress: 'Rua Waldemiro josé Borges, 4911, Recando da Paz - Itinga, Joinville - SC 89235-160 - Brasil',
    //     eventAbout:'O Retiro ONE TEENS está programado para acontecer nos dias 30, 31/05 e 01/06/2025, no Recanto da Paz. Ovalor é incluso: taxa do local +  alimentação. <br> O transporte será por conta do participante. <br><br> Atenção: Menores de 18 anos, precisa retirar declaração de autorização na secretaria da igreja ou com os lideres Anderson ou Juliana. Sem este, a participação não será possível.',
    //     eventMoreInformation: 'https://wa.me/5547992397946',

    return (
        <div className='sliderContainerCarouselEventsAndParties'>
            <Slider {...settings}>
                {mockCarouselEventsAndParties.map((ministryOrActivities, index) => (
                    <div
                        key={ministryOrActivities.id}
                        className='carouselCardCarouselEventsAndParties'
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className='carouselImageWrapperCarouselEventsAndParties'>
                            <div
                                className={`carouselImageCarouselEventsAndParties ${hoveredIndex === index ? 'carouselImageBlurCarouselEventsAndParties' : ''}`}
                                style={{ backgroundImage: `url(${ministryOrActivities?.image})` }}
                            />
                            <div className='carouselOverlayCarouselEventsAndParties' style={{ backgroundColor: hoveredIndex === index ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.5)' }}>
                                <div className='divContainerGridEventsAndParties'>
                                    <div className='divContainerDataAndMonthEventsAndParties'>
                                        <h1 className='titleEventDataEventsAndParties'>30</h1>
                                        <h2 className='titleEventMonthEventsAndParties'>Maio</h2>
                                    </div>
                                    <div className='divContainerEventNameEventsAndParties'>
                                        <h2 className='carouselTitleCarouselEventsAndParties'>{ministryOrActivities.eventName}</h2>
                                    </div>
                                </div>
                                <p className='carouselDescriptionCarouselEventsAndParties' dangerouslySetInnerHTML={{ __html: ministryOrActivities?.eventAbout }} />
                                <button
                                    className={`carouselButtonEventsAndParties ${hoveredIndex === index ? 'carouselButtonVisibleEventsAndParties' : ''}`}
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

export default CarouselEventsAndParties;
