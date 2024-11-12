import './assets/css/stylesEventsAndParties.css';
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
                        Participe dos eventos da nossa igreja e encontre um espaço de acolhimento, aprendizado e comunhão. Estamos de portas abertas para você!
                    </p>
                    <div className='customDivCarouselEventsAndParties'>
                        <CarouselEventsAndParties />
                    </div>
                </div>
            </div>
        </section>
    );
}