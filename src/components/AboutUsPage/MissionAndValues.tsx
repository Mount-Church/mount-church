import 'assets/css/stylesGlobal.css';
import './assets/css/stylesMissionAndValues.css';
import AnimateVisionMissionAndValues from './AnimateVisionMissionAndValues';

export function MissionAndValues() {
    return (
        <section className='lSectionMissionAndValues' id='lSectionMissionAndValues'>
            <div className='containerLivingTheGospel'>
                <div className='sectionColumMissionAndValues'>
                    <AnimateVisionMissionAndValues />
                    {/* <div>
                        <h2 className="globalSectionMediumTextDark">
                            Nossa missão
                        </h2>
                        <h2 className="SubTitleAbountUs">
                            Compromisso com o Crescimento e Impacto na Comunidade.
                        </h2>
                        <p className="globalSectionTextDark">
                            Estamos comprometidos com o crescimento contínuo e o impacto positivo em nossa comunidade. Nossos planos incluem expandir nossos programas de <strong>assistência social</strong>, aumentar a participação em <strong>conexões</strong> e desenvolver novas iniciativas que alcancem mais pessoas com a mensagem do Evangelho.
                        </p>
                    </div> */}

                    {/* <div className=''> */}
                    {/* <h2 className="globalSectionMediumTextDark  MarginTopColumMissionAndValues">
                            Valores Fundamentais
                        </h2>
                        <h2 className="SubTitleAbountUs">
                            Amor, Serviço, Integridade, Comunhão e Missão
                        </h2>
                        <p className="globalSectionTextDark">
                            Amor, serviço, integridade, comunhão e missão são os valores centrais que nos guiam. Cada um desses princípios é vital para nosso <strong>ministério</strong> e define a forma como interagimos com nossa comunidade e além.
                        </p> */}
                    {/* </div> */}
                </div>
            </div>
        </section>
    );
}
