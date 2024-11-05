import 'assets/css/stylesGlobal.css';
import 'assets/css/stylesGlobalInfoGroup.css';
import './assets/css/stylesJoinOurMinistry.css';

import donationAssistenciaSocialImg from './assets/images/assistenciadonation.jpg';
import cardDonationAssistenciaSocialMT from './assets/images/assistenciaDonationAssistenciaSocialMT.png'
import sejaUmVoluntarioAssistenciaSocialImg from './assets/images/assistenciaSejaUmVoluntario.jpg';

const JoinOurMinistryMock = [
    {
        id: 1,
        mockType: 'Ministérios',
        title: 'Assistência Social',
        infoTitle: 'Ministério de Assistência Social',
        infoDescription: 'A igreja <strong>Mount Church</strong> está profundamente comprometida com a assistência social, entendendo que a caridade é uma porta para falar do <strong>amor de Jesus</strong>. Acreditamos que, através de atos de bondade e ajuda prática, podemos mostrar a compaixão e a graça de Deus para aqueles que mais necessitam. Nosso ministério de assistência social é dedicado a servir nossa <strong>comunidade</strong> , fornecendo apoio <strong>emocional</strong>, <strong>espiritual</strong> e <strong>material</strong> a indivíduos e famílias em situações de vulnerabilidade. Aceitamos doações de <strong>alimentos</strong>, <strong>roupas</strong>, <strong>móveis</strong> e também contribuições financeiras via <strong>PIX</strong>.',
        joinTheGroupTitle: 'Participe do Nosso Ministério',
        firstDescriptionjoinTheGroup: 'Você pode se voluntariar para fazer parte do nosso ministério de assistência social e ajudar diretamente aqueles que precisam. Junte-se a nós e faça a diferença!',
        secondDescriptionjoinTheGroup: 'Contribua com doações de alimentos, roupas, móveis ou financeiramente através do nosso PIX. Sua generosidade pode transformar vidas!',
        buttonNameTargeting: 'Saber mais',
        joinTheGroupLink: 'https://wa.me/554792722249',
        services: [
            {
                id: 1,
                title: 'Seja um Voluntário',
                description: 'Participe ativamente do nosso ministério de assistência social. Sua ajuda é essencial para levarmos apoio a quem mais precisa.',
                image: sejaUmVoluntarioAssistenciaSocialImg,
            },
            {
                id: 2,
                title: 'Doe e Ajude',
                description: 'Contribua com doações de alimentos, roupas, móveis ou financeiramente através do nosso PIX. Cada doação faz a diferença!',
                image: cardDonationAssistenciaSocialMT,
            },
            {
                id: 3,
                title: 'Unidos pela Solidariedade',
                description: 'Participe de nossas campanhas de arrecadação e eventos especiais para ajudar a comunidade. Juntos, podemos fazer mais!',
                image: donationAssistenciaSocialImg,
            },
        ],
    },
]

export function JoinOurMinistry() {
    return (
        <section className="lSectionJoinOurMinistry" id="sectionJoinOurMinistry">
            <div className="sectionJoinOurMinistry">
                <div className="sectionJoinOurMinistryData">
                    <div className="containerLineGlobalStyles">
                        <div className="lineWhiteGlobalStyles"></div>
                        <div className="textWhiteGlobalStyles">{JoinOurMinistryMock[0].title}</div>
                    </div>
                    <h2 className="globalSectionTitleTextWhite">
                        {JoinOurMinistryMock[0].joinTheGroupTitle}
                    </h2>
                    <p className="sectionTextWhiteJoinOurMinistry mt-5"
                        dangerouslySetInnerHTML={{ __html: JoinOurMinistryMock[0].firstDescriptionjoinTheGroup }}>
                    </p>
                    <p className="sectionTextWhiteJoinOurMinistry mt-5"
                        dangerouslySetInnerHTML={{ __html: JoinOurMinistryMock[0].secondDescriptionjoinTheGroup }}>
                    </p>
                    <div className='customButtonJoinOurMinistry'>
                        <button
                            className='py-2 px-4 text-sm buttonPrimary'
                            onClick={() => window.open(`${JoinOurMinistryMock[0].joinTheGroupLink}`, '_blank')}
                        >
                            {JoinOurMinistryMock[0].buttonNameTargeting}
                        </button>
                    </div>
                </div>
                <div className='columGlobalTheGroup'>
                    {JoinOurMinistryMock[0]?.services?.map((services, index) => (
                        <div className='divComponentGlobalGroup' key={index}>
                            {/* Image that appears when the screen is larger than 1350px */}
                            <div className='divImageJoinGlobalGroup imageShowAndHidelargerThan1350GlobalGroup' style={{ backgroundImage: `url(${services?.image})` }} />
                            <div className='divInfoGlobalGroup'>
                                <h3 className='titleInfoGlobalGroup'>{services?.title}</h3>
                                {/* Image that appears when the screen is less than or equal to 1350px */}
                                <div className='divImageJoinGlobalGroup imageShowAndHidelessThanOrEqualTo1350JoinGlobalGroup' style={{ backgroundImage: `url(${services?.image})` }} />
                                <p className="textJoinGlobalGroup"
                                    dangerouslySetInnerHTML={{ __html: services?.description }}>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}