import React, { useEffect, useState } from 'react';

import './assets/css/stylesEventsAndPartiesInformationPage.css';
import 'assets/css/stylesGlobal.css';

import { RiArrowLeftWideFill } from "react-icons/ri";

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ErrorPage } from 'pages';

interface EventsAndPartiesInformation {
    id: number;
    eventName: string;
    infoTitle: string,
    eventAbout: string,
    eventimage: string,
    eventMoreInformationButton: string;
}

export function EventsAndPartiesInformationPage() {
    const [eventsAndPartiesInformation, setEventsAndPartiesInformation] = useState<EventsAndPartiesInformation | null>(null);

    useEffect(() => {
        const storedMinistry = localStorage.getItem('selectedEventsAndParties');
        if (storedMinistry) {
            setEventsAndPartiesInformation(JSON.parse(storedMinistry));
        }
    }, []);

    if (!eventsAndPartiesInformation) {
        return <ErrorPage />;
    }

    return (
        <section className='lSectionEventsAndPartiesInformationPage' id='sectionEventsAndPartiesInformationPage'>
            <div className='containerEventsAndPartiesInformationPage'>
                <Link to="/homepage" className='backButtonGlobal'>
                    <RiArrowLeftWideFill />
                    <div className='textBackButtonGlobal'>Voltar</div>
                </Link>
                <div>
                    <div className='containerLineGlobalStyles'>
                        <div className='lineDarkGlobalStyles'></div>
                        <div className='textDarkGlobalStyles'>
                            Nossos Eventos
                        </div>
                    </div>
                </div>
                <div className='sectionColumEventsAndPartiesInformationPage'>
                    <div>
                        <h2 className="globalSectionTitleTextDark45px">
                            {eventsAndPartiesInformation.eventName}
                        </h2>
                        <p className="globalSectionTextDark"
                            dangerouslySetInnerHTML={{ __html: eventsAndPartiesInformation.eventAbout }}></p>

                        <div className='customButtonEventsAndPartiesInformationPage'>
                            <button
                                className='py-2 px-4 text-sm buttonPrimary'
                                onClick={() => window.open(`${eventsAndPartiesInformation.eventMoreInformationButton}`, '_blank')}
                            >
                                Mais Informações
                            </button>
                        </div>
                    </div>
                    <div className='columImageEventsAndPartiesInformationPage'>
                        <motion.img
                            className="divImageEventsAndPartiesInformationPage"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            src={`${eventsAndPartiesInformation.eventimage}`}
                            alt={`${eventsAndPartiesInformation.eventName}`}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
