import 'assets/css/stylesGlobal.css';
import './assets/css/stylesHowToContribute.css';
import OverviewAndImpactTabs from './OverviewAndImpactTabs';

export function HowToContribute() {
    return (
        <section className='lSectionPlanYourVisit' id='sectionPlanYourVisit'>
            <div className='containerPlanYourVisit'>
                <div className='sectionColumPlanYourVisit'>
                    <div>
                        <h2 className="globalSectionTitleTextDark">
                            Como você pode contribuir
                        </h2>
                        <div className='divContainerPlanYourVisit'>
                            <p className="globalSectionTextDark">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                                <br></br>
                                <br></br>
                                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                            </p>
                        </div>
                    </div>
                    <div className='columInfoPlanYourVisit'>
                        <OverviewAndImpactTabs />
                    </div>
                </div>
            </div >
        </section >
    );
}
