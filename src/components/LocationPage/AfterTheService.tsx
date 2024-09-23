import React from 'react';
import './css/stylesAfterTheService.css';
import 'assets/css/stylesGlobal.css';

import SimplesEProfundoImg from '../../assets/images/SimplesEProfundo.jpg';
import SímboloDeRedencaoImg from 'assets/images/redencaoSimbolo.jpg';
import MinistérioDeLutaImg from '../../assets/images/MinistérioDeLutaImg.jpg';

const AfterTheServiceInfoMock = [
    {
        id: 1,
        title: 'Simples e Profundo',
        subtitle: 'Faça parte da nossa comunidade',
        description: 'Nossa adoração é simples, mas profundamente significativa.',
        image: SimplesEProfundoImg,
    },
    {
        id: 2,
        title: 'Símbolo de Redenção',
        subtitle: 'Conheça nossas datas',
        description: 'O batismo: símbolo de redenção e transformação.',
        image: SímboloDeRedencaoImg,
    },
    {
        id: 3,
        title: 'Ministério de Luta',
        subtitle: 'Segunda e Quarta as 19h',
        description: 'Ministério de luta fortalece corpo e espírito.',
        image: MinistérioDeLutaImg,
    },
];

export function AfterTheService() {
    return (
        <section className="lSectionAfterTheService" id="sectionAfterTheService">
            <div className="sectionAfterTheService">
                <div className="sectionAfterTheServiceData">
                    <div className="containerLineGlobalStyles">
                        <div className="lineDarkGlobalStyles"></div>
                        <div className="textDarkGlobalStyles">Após o Culto</div>
                    </div>
                    <h2 className="globalSectionTitleTextDark">
                        Oportunidade de Conexão
                    </h2>
                    <p className="globalSectionTextDark">
                        Ao chegar, nossa equipe de <strong>boas-vindas</strong> estará pronta para recebê-lo e ajudar com qualquer <strong>dúvida</strong> que você possa ter. Temos um espaço <strong>confortável</strong> para você e sua <strong>família</strong>, e estaremos disponíveis para guiá-los pelo nosso espaço. Você será recebido por pessoas amigáveis e encontrará um ambiente vibrante e acolhedor.
                        <br /><br />
                        Nossos cultos são momentos de celebração, incluindo louvor ao vivo, uma mensagem inspiradora e oportunidades para oração e <strong>comunhão</strong>. Após o culto, fique à vontade para se juntar a nós para um café e uma conversa. Esta é uma ótima oportunidade para conhecer mais pessoas e se conectar ainda mais com nossa comunidade.
                    </p>
                    <div className='customButtonAfterTheService'>
                        <button
                            className='py-2 px-4 text-sm buttonPrimary'
                            onClick={() => window.open('https://wa.me/554792722249', '_blank')}
                        >
                            Saber Mais
                        </button>
                    </div>
                </div>
                <div className='columInfoAfterTheService'>
                    {AfterTheServiceInfoMock.map((services, index) => (
                        <div className='divComponentInfo'>
                            {/* Image that appears when the screen is larger than 1350px */}
                            <div className='divImageInfoAfterTheService imageShowAndHidelargerThan1350AfterTheService' style={{ backgroundImage: `url(${services.image})` }} />
                            <div className='divInfoAfterTheService'>
                                <h3 className='titleInfoAfterTheService'>{services.title}</h3>
                                {/* Image that appears when the screen is less than or equal to 1350px */}
                                <div className='divImageInfoAfterTheService imageShowAndHidelessThanOrEqualTo1350AfterTheService' style={{ backgroundImage: `url(${services.image})` }} />
                                <h4 className='subTitleInfoAfterTheService'>{services.subtitle}</h4>
                                <p className='textInfoAfterTheService'>{services.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
