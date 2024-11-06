import AnimateVisionMissionAndValues from './AnimateVisionMissionAndValues';
import './assets/css/stylesLivingTheGospel.css';
import 'assets/css/stylesGlobal.css';

export function LivingTheGospel() {
    return (
        <section className='lSectionLivingTheGospel' id='LivingTheGospel'>
            <div className='containerLivingTheGospel'>
                <div>
                    <div className='containerLineGlobalStyles'>
                        <div className='lineDarkGlobalStyles'></div>
                        <div className='textDarkGlobalStyles'>Sobre nós</div>
                    </div>
                </div>
                <div className='sectionColumLivingTheGospel'>
                    <AnimateVisionMissionAndValues />
                </div>
            </div>
        </section>
    );
}