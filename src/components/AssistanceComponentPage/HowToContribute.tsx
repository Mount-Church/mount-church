import 'assets/css/stylesGlobal.css';
import './assets/css/stylesHowToContribute.css';
import OverviewAndImpactTabs from './OverviewAndImpactTabs';

export function HowToContribute() {
    return (
        <section className='lSectionHowToContribute' id='sectionlSectionHowToContribute'>
            <div className='containerHowToContribute'>
                <div className='sectionColumHowToContribute'>
                    <div className='sectionAlignTextHowToContribute'>
                        <h2 className="globalSectionTitleTextDark">
                            Como você pode contribuir
                        </h2>
                        <div className='divContainerHowToContribute'>
                            <p className="globalSectionTextDark">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                                <br></br>
                                <br></br>
                                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                            </p>
                        </div>
                    </div>
                    <div className='columTabHowToContribute'>
                        <OverviewAndImpactTabs />
                    </div>
                </div>
                <div className="lineBottonHowToContribute"></div>
            </div >
        </section >
    );
}
