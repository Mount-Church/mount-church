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
                    {/* <AnimateVisionMissionAndValues /> */}
                    {/* <AnimateVisionMissionAndValues /> */}
                    {/* <h2 className="globalSectionTitleTextDark">
                        Vivendo o Evangelho
                    </h2>
                    <div>
                        <h2 className="globalSectionMediumTextDark">
                            Vivendo o Evangelho na Mount Church: Amor, Comunidade e Serviço em Cristo.
                        </h2>
                        <p className="globalSectionTextDark">
                            Na Mount Church, acreditamos na mensagem transformadora do Evangelho de Jesus Cristo. Nossa <strong>missão</strong> é compartilhar o amor de Deus, construir uma comunidade acolhedora e servir às necessidades espirituais e práticas das pessoas. Ensinamos e vivemos os <strong>princípios bíblicos</strong>, buscando ser um reflexo do <strong>amor de Cristo</strong> em tudo o que fazemos. Acreditamos na importância da oração, do estudo bíblico, e do envolvimento ativo na vida da igreja e na comunidade ao nosso redor.
                        </p>
                    </div> */}
                </div>
            </div>
        </section>
    );
}