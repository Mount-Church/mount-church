import './assets/css/StylesEventsAndParties.css';
import 'assets/css/stylesGlobal.css';

import CarouselEventsAndParties from './CarouselEventsAndParties';


export function EventsAndParties() {
    return (
        <section className="lSectionEventsAndParties" id="lSectionEventsAndParties">
            <div className="sectionEventsAndParties">
                <div className="sectionEventsAndPartiesData">
                    <div className="containerLineGlobalStyles">
                        <div className="lineDarkGlobalStyles"></div>
                        <div className="textDarkGlobalStyles">Nossos Eventos</div>
                    </div>
                    <p className="globalSectionTextDark">
                        Eventos
                    </p>
                    <div className='customDivCarouselEventsAndParties'>
                        <CarouselEventsAndParties />
                    </div>
                </div>
            </div>
        </section>
    );
}