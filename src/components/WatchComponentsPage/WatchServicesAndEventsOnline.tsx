
import { Link } from 'react-router-dom';

import { ButtonPrimary } from 'components/Button/ButtonPrimary';

import 'assets/css/stylesGlobal.css';
import './assets/css/stylesWatchServicesAndEventsOnline.css'

export function WatchServicesAndEventsOnline() {
    return (
        <section className="lSectionWatchServicesAndEventsOnline" id="sectionWatchServicesAndEventsOnline">
            <div className="sectionWatchServicesAndEventsOnline">
                <div className="sectionWatchServicesAndEventsOnlineData">
                    <div className="containerLineGlobalStyles mt-40">
                        <div className="lineDarkGlobalStyles"></div>
                        <div className="textDarkGlobalStyles">Atividades </div>
                    </div>
                    <h2 className="globalSectionTitleTextDark">
                        Assista Cultos e Eventos Online
                    </h2>
                    <p className="sectionTextDarkWatchServicesAndEventsOnline">
                        Não pode estar presente fisicamente? Sem problemas! Na <strong>MountChurch</strong>, oferecemos a <strong>transmissão online</strong> de nossos cultos e eventos para que você possa participar de onde estiver.
                    </p>
                    <div className='customDivButtonWatchServicesAndEventsOnline'
                        onClick={() => window.open(`https://www.youtube.com/@MountChurchoficial/videos`, '_blank')}
                    >
                        <Link to="">
                            <ButtonPrimary>Assistir agora</ButtonPrimary>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}