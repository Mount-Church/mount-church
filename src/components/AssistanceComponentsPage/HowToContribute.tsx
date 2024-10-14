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
                            <p className="sectionTextDarkHowToContribute">
                                <strong>Doação de Roupas e Alimentos</strong>: Aceitamos doações de roupas, alimentos não perecíveis e cestas básicas. Essas doações são essenciais para apoiar famílias e indivíduos em situação de vulnerabilidade. Cada peça de roupa e cada alimento doado ajudam a proporcionar dignidade e esperança para aqueles que enfrentam dificuldades.
                                <br></br>
                                <br></br>
                                <strong>Apoio Financeiro</strong>: Contribua financeiramente através do nosso PIX. Sua doação monetária é fundamental para manter e expandir nossos projetos sociais. Com o apoio financeiro, podemos comprar alimentos, roupas, medicamentos e outros itens essenciais para distribuir às comunidades carentes.
                                <br></br>
                                <br></br>
                                <strong>Voluntariado</strong>: Junte-se ao nosso ministério de assistência social como voluntário e faça parte de uma equipe dedicada a fazer a diferença. Como voluntário, você pode ajudar na preparação e distribuição de marmitas, na organização de doações, no apoio a eventos comunitários e muito mais.

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
