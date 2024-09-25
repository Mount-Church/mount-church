/*===== CONEXÃO =====*/
import ConexaoImg from './assets/images/conexão.jpg';
import ConexaoBairroImg from './assets/images/conexaoNasCasas.jpg';
import ConexaoLocaisImg from './assets/images/conexaomapa.png';
import ConexaoAppInfoImg from './assets/images/conexaoPppMountChurch.jpg';


/*===== HOMENS =====*/
import HomensImg from './assets/images/homens.jpg';
import HomensCultosEspecificosImg from './assets/images/homensCultosEspecificos.jpg';
import HomensConexaoeCrescimentoImg from './assets/images/homensConexaoeCrescimento.jpg';
import HomensAtividadesRecreativasImg from './assets/images/homensAtividadesRecreativas.jpg';

/*===== BATISMO =====*/
import BatismoImg from './assets/images/batismo.jpg';
import BatismoCelebraçãoComunitariaImg from './assets/images/batismoCelebracaoComunitaria.jpg';
import BatismoUmaCelebraçãoDeFeImg from './assets/images/batismoUmaCelebracaoDeFe.jpg';
import BatismoTestemunhosEInspiracaoImg from './assets/images/batismoTestemunhosEInspiracao.jpg';

/*===== ONFIRE =====*/
import JovensCardImg from './assets/images/onFirejovens.jpg';
import TeensBanner from './assets/images/onFireBanner.jpg';
import OnfireCulto from './assets/images/onFireculto.jpg';
import TennsEventos from './assets/images/onFiretennsEventos.jpg';
import picnicTennsIMG from './assets/images/onFirePicnic.jpg';

/*===== FLOWING =====*/
import FlowingImg from './assets/images/flowing.jpg';
import FlowingBannerImg from './assets/images/flowingbanner.jpg';
import CultoFlowing from './assets/images/flowngCulto.jpg';
import ComidaFlowing from './assets/images/flowingLanche.jpg';
import ConexaoFlowing from './assets/images/flowingConexao.jpg';

/*===== MDL LUTAS =====*/
import LutaCarImg from './assets/images/mdlCard.jpg';
import BannerJiuMDL from './assets/images/mldBannerJiu.jpg'
import LutaJiuMulheres from './assets/images/mldJiuMulheres.jpg';
import LutasMuayThai from './assets/images/mdlLutasMuayThai.jpg';
import JiuKids from './assets/images/mdlJiuKids.jpg';

/*===== ASSISTÊNCIA SOCIAL =====*/
import AssistenciaSocialCardImg from './assets/images/assistenciaSocialCardImg.png';
import AssistenciaSocialBannerImg from './assets/images/assistenciaSocialBanner.jpg';
import donationAssistenciaSocialImg from './assets/images/assistenciadonation.jpg';
import cardDonationAssistenciaSocialMT from './assets/images/assistenciaDonationAssistenciaSocialMT.png'
import sejaUmVoluntarioAssistenciaSocialImg from './assets/images/assistenciaSejaUmVoluntario.jpg';

/*===== MULHERES  =====*/
import MulheresCardImg from './assets/images/elasCard.jpg';
import MulheresImg from './assets/images/elasMesa.jpg';
import mulheresSubCardImg from './assets/images/elasTextoLucas22-27.jpg'
import mulheresSubCardOracaoImg from './assets/images/elasOrandoJuntas.jpg'
import mulheresSubCardLancheImg from './assets/images/elasLanche.jpg'

/*===== DANÇA  =====*/
import DancaCardImg from './assets/images/dancaCard.jpg';
import dancaBannerImg from './assets/images/dancaBanner.jpg';
import dancaCardcoracaoImg from './assets/images/dancaCardcoracao.jpg';
import dancaCardInfantilImg from './assets/images/dancaCardInfantil.jpg';
import dancaCardHomenImg from './assets/images/dancaCardHomen.jpg';

/*===== ESPAÇO KIDS =====*/
import espacoKidsCardImg from './assets/images/espacoKidsCard.png';
import espacoKidsBannerImg from './assets/images/espacoKidsBanner.jpg';
import espacoKidsCardDesenhandoImg from './assets/images/espacoKidsCardDesenhando.jpg';
import espacoKidsdLancheImg from './assets/images/espacoKidsdLanche.jpg';
import espacoKidsbrincandoImg from './assets/images/espacoKidsbrincando.jpg';

/*===== CASAIS =====*/
import casaisCardImg from './assets/images/casais.jpg';
import casaisBannerImg from './assets/images/casaisBanner.jpg';
import casaisCardLideresImg from './assets/images/casaisCardLideres.jpg';
import casaisCardAmorImg from './assets/images/casaisCardAmor.jpg';
import casaisCardRefericaoImg from './assets/images/casaisCardRefericao.jpg';

const ministriesOrActivitiesMock = [
    {
        id: 1,
        mockType: 'Atividades',
        title: 'Conexão',
        description: 'Possuímos <strong>conexão</strong> nos principais bairros da cidade, proporcionando um ambiente íntimo para estudo bíblico e comunhão.',
        image: ConexaoImg,
        link: 'https://seu-site.com/conexao',
        infoTitle: 'Conexão nas Casas',
        infoDescription: 'Realizamos encontros nas casas das pessoas <strong>uma vez por semana</strong>, sempre às <strong>terças-feiras às 19:00</strong>. Nossos anfitriões nos principais bairros da cidade compartilham a Palavra de Deus e promovem um ambiente acolhedor para o crescimento espiritual. ',
        infoImage: ConexaoImg,
        joinTheGroupTitle: 'Fortalecendo Laços na Palavra de Deus',
        firstDescriptionjoinTheGroup: 'A Conexão é um ministério vital na nossa igreja, onde nos reunimos <strong>semanalmente</strong> para compartilhar a Palavra de Deus e fortalecer nossos laços espirituais. É um espaço onde os membros se conectam uns com os outros, encontrando apoio, amizade e crescimento espiritual. Nossos anfitriões, localizados em <strong>diferentes bairros</strong>, abrem suas casas para receber os irmãos e irmãs em Cristo, proporcionando um ambiente acolhedor e íntimo.',
        secondDescriptionjoinTheGroup: 'A Conexão é mais do que um encontro; é uma oportunidade de compartilhar a vida, orar juntos e estudar a Bíblia em comunhão.',
        buttonNameTargeting: 'Encontrar uma conexão',
        joinTheGroupLink: 'https://www.google.com/maps/d/viewer?mid=1HPKIAjFpAPC56jmyCfJWD4Pwnh58PE8&g_ep=CAISDTYuMTI3LjIuNzgxOTAYACDdYipaLDk0MjI0ODI1LDk0MjI3MjQ3LDk0MjI3MjQ4LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjAzMDE5LDQ3MDg0MzA0LDk0MjA4NDU4LDk0MjA4NDQ3QgJCUg%3D%3D&g_st=iw&ll=-26.31599058420039%2C-48.838387699999984&z=13',
        services: [
            {
                id: 1,
                title: 'Descubra Conexões em Seu Bairro',
                description: 'Temos grupos de Conexão em vários <strong>bairros da cidade</strong>. Encontre um próximo a você e participe de momentos significativos de comunhão e crescimento espiritual. ',
                image: ConexaoBairroImg,
            },
            {
                id: 2,
                title: 'Comunhão em Diversos Locais',
                description: 'Nossos grupos de <strong>Conexão</strong> se reúnem em diferentes pontos da cidade. Seja parte de uma comunidade que se encontra para estudar a Palavra, orar e compartilhar a vida.',
                image: ConexaoLocaisImg,
            },
            {
                id: 3,
                title: 'Conectados em Cristo',
                description: 'Receba notificações e esteja sempre <strong>conectado</strong> à vida da igreja através do nosso App via celular. Mantemos todos informados sobre eventos, estudos bíblicos.',
                image: ConexaoAppInfoImg,
            },
        ],
    },
    {
        id: 2,
        mockType: 'Ministérios',
        title: 'Flowing',
        description: 'Overflowing é o grupo dos <b>jovens da igreja</b>. Realizamos diversas atividades e temos um culto separado aos <b>sábados.</b>',
        image: FlowingImg,
        link: 'https://seu-site.com/flowing',
        infoTitle: 'Convite para o Grupo de Jovens',
        infoDescription: 'Gostaríamos de convidar você para participar do nosso grupo <strong>Flowing</strong>!!🔥</p><p>Aqui é um espaço de amizade, crescimento espiritual e muita alegria. Juntos, buscamos fortalecer nossa fé, compartilhar experiências e caminhar com Deus em cada etapa de nossas vidas.</p><br><p><strong>Nossos encontros são:</strong></p><ul><li>📅 <strong>Sexta-feira</strong></li><li>⏰ <strong>21h00</strong></li></ul><br><p>Venha e traga sua energia e coração aberto para viver momentos de comunhão, diversão e aprendizado. E claro, não deixe de convidar seus amigos também!</p><p>Esperamos por você!<strong> Deus te abençoe!</strong>',
        infoImage: FlowingBannerImg,
        joinTheGroupTitle: 'Conexão flowing e Culto de Jovens',
        firstDescriptionjoinTheGroup: 'A conexão de jovens é um grupo menor dentro da igreja, formado por amigos que se reúnem semanalmente para compartilhar a palavra de Deus, orar juntos e fortalecer laços de <strong>amizade</strong>. É um ambiente onde cada pessoa pode expressar suas dúvidas, testemunhos e desafios, contando com o apoio dos líderes e demais membros . É lugar de crescimento espiritual e pessoal, além de ser uma ótima oportunidade para novos integrantes conhecerem mais sobre a <strong>fé cristã</strong> em um ambiente acolhedor e descontraído.',
        secondDescriptionjoinTheGroup: 'O culto de jovens é um momento <strong>especial</strong> de <strong>celebração</strong> voltado para esse público. Com uma abordagem atual e dinâmica, é uma oportunidade de louvar a Deus, ouvir mensagens inspiradoras e se conectar àqueles que também estão buscando uma vida nos caminhos de Cristo. Durante o culto, há espaço para <strong>música</strong>, momentos de <strong>oração</strong>, <strong>reflexões bíblicas</strong> e, muitas vezes, atividades <strong>interativas</strong>. É um espaço vibrante e acolhedor, onde os jovens podem encontrar direção espiritual e renovar suas forças para o dia a dia.',
        buttonNameTargeting: 'Mais informações',
        joinTheGroupLink: 'https://wa.me/5547992397946',
        services: [
            {
                id: 1,
                title: 'Comunhão e Fé',
                description: 'Um culto de jovens é um momento vibrante,cheio de alegria… Louvores contagiante e palavras inspiradoras que se unem para tocar <strong>corações</strong>!',
                image: CultoFlowing,
            },
            {
                id: 2,
                title: 'Conversas à Mesa',
                description: 'Nesse ambiente acolhedor, amigos se reúnem entre <strong>refeições</strong> para conversar sobre <strong>Deus</strong>, compartilhar experiências, incluindo alegria, amizade e, é claro, boa comida! 🍽️🗣️🙏',
                image: ComidaFlowing,
            },
            {
                id: 3,
                title: 'Eclesiastes 12:1 NTLH',
                description: 'Lembre do seu Criador enquanto você ainda é jovem, antes que venham os dias maus e cheguem os anos em que você dirá: “Não tenho mais prazer na vida.”',
                image: ConexaoFlowing,
            },
        ],
    },
    {
        id: 3,
        mockType: 'Ministérios',
        title: 'Homens',
        description: 'Reuniões e atividades voltadas para o <strong>crescimento espiritual</strong> e comunitário dos homens.',
        image: HomensImg,
        link: 'https://seu-site.com/homens',
        infoTitle: 'Encontros de Homens',
        infoDescription: 'Junte-se aos nossos encontros de <strong>homens</strong> e seja inspirado por mensagens que abordam os desafios e as vitórias da vida cristã masculina. Um espaço para <strong>crescimento</strong>, <strong>apoio</strong> e <strong>camaradagem</strong>.',
        infoImage: HomensImg,
        joinTheGroupTitle: 'Eventos para Homens',
        firstDescriptionjoinTheGroup: 'No Ministério dos Homens da <strong>Mount Church</strong>, proporcionamos um ambiente de conexão e crescimento espiritual onde os homens podem compartilhar suas <strong>vidas</strong> e <strong>experiências</strong>, discutindo abertamente sobre o amor de Deus e sua atuação em suas jornadas. Este é um espaço dedicado ao fortalecimento da fé e ao apoio mútuo, ajudando cada homem a seguir firme em sua caminhada cristã.',
        secondDescriptionjoinTheGroup: 'Convidamos você a fazer parte do Ministério dos Homens da <strong>Mount Church</strong>. Junte-se a nós e experimente a transformação que ocorre quando homens se reúnem para buscar a <strong>Deus</strong>, apoiar uns aos outros e compartilhar suas vidas de maneira autêntica e significativa.',
        joinTheGroupLink: 'https://chat.whatsapp.com/K8vsPk0ouivCX5jboFjmOi',
        buttonNameTargeting: 'Entrar no grupo',
        services: [
            {
                id: 1,
                title: 'Cultos Específicos',
                description: 'Além dos encontros mensais, também temos cultos destinados <strong>exclusivamente</strong> para os homens.',
                image: HomensCultosEspecificosImg,
            },
            {
                id: 2,
                title: 'Conexão e Crescimento',
                description: 'Nosso ministério oferece um lugar seguro e acolhedor para os homens se <strong>conectarem</strong> uns com os outros.',
                image: HomensConexaoeCrescimentoImg,
            },
            {
                id: 3,
                title: 'Atividades Recreativas',
                description: 'O Ministério dos Homens também promove <strong>atividades recreativas</strong> que fortalecem a união e a camaradagem entre os participantes.',
                image: HomensAtividadesRecreativasImg,
            },
        ],
    },
    {
        id: 4,
        mockType: 'Ministérios',
        title: 'Mulheres',
        description: 'Encontro <strong>mensal</strong> de <strong>Mulheres</strong> para temas relevantes.',
        image: MulheresCardImg,
        link: 'https://seu-site.com/mulheres',
        infoTitle: 'Por Elas na Mesa',
        infoDescription: 'Por toda a cidade de <strong>Joinville</strong> uma mesa com o <strong>Senhor</strong> será montada para contemplar aquilo que <strong>Jesus</strong> é e aquilo que ele faz nas vidas, esse é o objetivo do ministério de mulheres. Um momento para dividir <strong>experiências</strong>,<strong> testemunhos</strong> e criar<strong> laços</strong>! Café, mulheres e palavra de <strong>Deus</strong>, uma perfeita combinação.</br> Um momento de aproximação afim de que outras mulheres possam ser <strong>amigas</strong> de Jesus e uma das outras.</br></br> Veja uma mais <strong>próxima</strong> de você!',
        infoImage: MulheresImg,
        joinTheGroupTitle: 'A Força da Oração Feminina',
        firstDescriptionjoinTheGroup: 'A oração é uma das maiores dádivas que Deus nos deu, e a oração de uma mulher tem um poder especial. Em nossos cultos de mulheres, você encontrará um ambiente acolhedor e inspirador, onde cada mulher é incentivada a buscar a Deus com todo o seu coração. Estes cultos são momentos de renovação espiritual, onde compartilhamos testemunhos, aprendemos juntas e fortalecemos nossa fé.',
        secondDescriptionjoinTheGroup: 'Venha participar do por elas na mesa e experimente a transformação que a oração pode trazer para sua vida. Junte-se a um grupo de mulheres dedicadas e apaixonadas por Deus, que se apoiam mutuamente e buscam crescer na fé. “Clama a mim, e responder-te-ei, e anunciar-te-ei coisas grandes e firmes que não sabes” (Jeremias 33:3). </br></br> Além disso, temos o prazer de divulgar o curso <strong>Mulher Única (M.U)</strong>, oferecido pela <strong>Universidade da Família</strong>. Este curso <strong>não</strong> é vinculado a nenhuma igreja específica, mas é uma excelente oportunidade para mulheres que desejam aprofundar sua autoestima, valor, feminilidade e responsabilidade. Nosso desejo é que Deus a liberte e dê vida abundante em toda a sua plenitude, causando grande impacto na família e na sociedade, através de sua originalidade, identidade e singularidade.',
        buttonNameTargeting: 'Mais informações',
        joinTheGroupLink: 'https://wa.me/554792722229',
        services: [
            {
                id: 1,
                title: 'Servindo com Amor',
                description: 'Em nossos cultos, aprendemos a servir com amor e sabedoria, seguindo o exemplo de Jesus. Cada encontro é uma oportunidade de crescer em fé e serviço, edificando nossas casas e comunidades.',
                image: mulheresSubCardImg,
            },
            {
                id: 2,
                title: 'Intercessão e Apoio',
                description: 'A oração intercessora é uma das maiores forças que uma mulher pode exercer. Incentivamos as mulheres a orarem umas pelas outras, criando uma rede de apoio e fortalecimento espiritual.',
                image: mulheresSubCardOracaoImg,
            },
            {
                id: 3,
                title: 'CMN - Mulher Única',
                description: 'O curso é para mulheres e aborda autoestima, valor, feminilidade e responsabilidade. Nosso desejo é que Deus a liberte e dê vida abundante, impactando a família e a sociedade.',
                image: mulheresSubCardLancheImg,
            },
        ],
    },
    {
        id: 5,
        mockType: 'Atividades',
        title: 'Batismo',
        description: 'Preparação e cerimônia de <strong>batismo</strong> para novos membros da igreja.',
        image: BatismoImg,
        link: 'https://seu-site.com/batismo',
        infoTitle: 'Símbolo de Redenção',
        infoDescription: 'O Batismo da <strong>Mount Church</strong> é um dos momentos mais significativos e emocionantes na jornada cristã. O <strong>batismo</strong> é um passo de obediência que simboliza a fé em Jesus Cristo e a <strong>transformação</strong> de vida através da graça de <strong>Deus</strong>. Nossa igreja está dedicada a preparar e acompanhar cada pessoa nessa importante decisão. “Jesus respondeu: Digo-lhe a verdade: Ninguém pode entrar no <strong>Reino de Deus</strong>, se não nascer da água e do Espírito” (<strong>João 3:5, NVI</strong>). Nossa igreja está dedicada a preparar e acompanhar cada pessoa nessa importante decisão.',
        infoImage: BatismoImg,
        joinTheGroupTitle: 'Significado e Transformação',
        firstDescriptionjoinTheGroup: 'O batismo é muito mais do que um simples ritual; é um mergulho <strong>profundo na fé</strong>, uma experiência de renovação e uma conexão com a história da Igreja. “Quem crer e for batizado <strong>será salvo</strong>, mas quem não crer será condenado” (<strong>Marcos 16:16, NVI</strong>). Que cada batismo seja um lembrete constante da <strong>graça divina</strong> e da transformação que <strong>Deus</strong> opera em nossas vidas. 🌊🙏',
        secondDescriptionjoinTheGroup: 'Se você está <strong>sentindo o chamado</strong> para ser batizado, convidamos você a se <strong>realizar</strong> o seu batismo na <strong>Mount Church</strong>. Estamos aqui para caminhar ao seu lado, oferecendo orientação, apoio e celebração enquanto você dá esse passo transformador em sua jornada de fé. “Então Jesus veio da Galileia ao Jordão para ser <strong>batizado</strong> por João” (<strong>Mateus 3:13, NVI</strong>).',
        joinTheGroupLink: 'https://wa.me/554792722229',
        buttonNameTargeting: 'Mais informações',
        services: [
            {
                id: 1,
                title: 'Celebração Comunitária',
                description: 'Os <strong>batismos</strong> são realizados em cultos especiais que reúnem a comunidade da igreja para celebrar juntos essa decisão de fé.',
                image: BatismoCelebraçãoComunitariaImg,
            },
            {
                id: 2,
                title: 'Uma Celebração de Fé',
                description: 'Ver um amigo tomar a decisão de ser batizado é um <strong>testemunho</strong> poderoso do amor e da graça de Deus em ação.',
                image: BatismoUmaCelebraçãoDeFeImg,
            },
            {
                id: 3,
                title: 'Testemunhos e Inspiração',
                description: 'Durante os cultos de batismo, os candidatos têm a oportunidade de <strong>compartilhar</strong> seus testemunhos, contando como Jesus transformou suas vidas.',
                image: BatismoTestemunhosEInspiracaoImg,
            },
        ],
    },
    {
        id: 6,
        mockType: 'Ministérios',
        title: 'OnFire',
        description: 'Grupo de <strong>adolescentes</strong> com atividades e encontros semanais para estudo e comunhão.',
        image: JovensCardImg,
        link: 'https://seu-site.com/jovens',
        infoTitle: 'Teens On Fire',
        infoDescription: 'Ei, galera! Bem-vindos ao Teens On Fire!!🔥 Aqui é o lugar para quem quer viver intensamente o propósito de <strong>Deus</strong> e fazer amigos que compartilham a mesma fé. Sabemos que a adolescência é uma fase cheia de desafios e descobertas, e queremos caminhar juntos com vocês nessa jornada!<br><br> Nosso objetivo é ser um espaço onde possamos crescer espiritualmente, aprender mais sobre a <strong>Bíblia</strong>, e, claro, nos divertir muito! Temos encontros cheios de louvor, dinâmicas e bate-papos sobre temas que fazem parte do nosso dia a dia e momentos de reflexão sobre como aplicar os ensinamentos de <strong>Jesus</strong> em nossas vidas.<br><br> Venha como você é! Não importa se você já está firme na fé ou se ainda está descobrindo sua caminhada com <strong>Deus</strong>, aqui todos são bem-vindos. Vamos nos apoiar, orar uns pelos outros e viver experiências incríveis juntos.<br><br>Fiquem ligados nas nossas redes sociais para não perderem nenhum evento e nos nossos encontros semanais. Contamos com vocês para fazer desse grupo um lugar <strong>especial</strong>!🔥',
        infoImage: TeensBanner,
        joinTheGroupTitle: 'Amizade, Propósito e Fé',
        firstDescriptionjoinTheGroup: 'O ministério de <strong>adolescentes</strong> tem um espaço só para eles, com cultos e atividades na linguagem que eles curtem. Além disso, rolam várias programações especiais! É um lugar onde você pode fazer novas amizades e ter bons momentos juntos. Esse trabalho é focado em ajudar a galera a entender o propósito de vida e seguir firme na caminhada cristã. Se você tem entre <strong>12</strong> e <strong>17</strong> anos, vem com a gente para trocar experiências com Deus e com os amigos!',
        secondDescriptionjoinTheGroup: 'Para mais informações clique em "<strong>Saber mais</strong>"!',
        joinTheGroupLink: 'https://wa.me/5547992397946',
        buttonNameTargeting: 'Saber mais',
        services: [
            {
                id: 1,
                title: 'Recreação ou "Rolês"',
                description: 'São oportunidades de descontração e convivência que ocorrem ocasionalmente para fortalecer a união do grupo.',
                image: OnfireCulto,
            },
            {
                id: 2,
                title: 'Cultos Temáticos',
                description: 'São ocasiões especiais. Durante esses eventos, abordamos diversos temas de forma criativa, incluindo caracterizações relacionadas ao tema.',
                image: TennsEventos,
            },
            {
                id: 3,
                title: 'Conexão para Adolescentes',
                description: 'Nesse ambiente, promovemos discussões sobre temas bíblicos, criando uma oportunidade para amizade, aprendizado e crescimento espiritual.',
                image: picnicTennsIMG,
            },
        ],
    },
    {
        id: 7,
        mockType: 'Ministérios',
        title: 'Esportes',
        description: 'Aulas de <strong>Jiujitsu</strong>, <strong>Muay Thai</strong> e <strong>futebol</strong>, unindo esporte e espiritualidade. Fortaleça seu corpo e sua fé',
        image: LutaCarImg,
        link: 'https://seu-site.com/luta',
        infoTitle: 'Grupo de Lutas e Esportes MDL',
        infoDescription: 'Na <strong>Mount Church</strong>, acreditamos que todos são bem-vindos, independentemente de sua experiência ou habilidades. Por isso, oferecemos um grupo especial: o Ministério de Lutas e Esportes (<strong>MDL</strong>). Aqui, não se trata apenas de técnicas de combate ou habilidades no futebol, é sobre comunidade, crescimento e fé. Dentro do <strong>MDL</strong>, temos <strong>trabalhos sociais</strong> de <strong>Jiu Jitsu</strong> e <strong>Muay Thai</strong>, que visam promover a inclusão, disciplina e desenvolvimento pessoal através do esporte.',
        infoImage: BannerJiuMDL,
        joinTheGroupTitle: 'Esportes para Todas as Idades',
        firstDescriptionjoinTheGroup: 'Como oportunidade de compartilhar o amor de Cristo nas mais diversas áreas enquanto cuida da mente e do templo do espírito santo, nosso próprio corpo! Oferecemos atividades semanais gratuitas e para todas as idades:',
        secondDescriptionjoinTheGroup: '<strong>Jiu-Jitsu</strong>: Segundas e Quartas-feiras, kids 9 a 12 anos as 19h, adultos a partir de 13 anos as 20h;<br><strong>Muay Thai</strong>: Quartas-feiras, às 19h30, a partir dos 13 anos;<br><strong>Futebol</strong>: Segundas-feiras, das 21h às 22h.',
        joinTheGroupLink: 'https://wa.me/554192585013',
        buttonNameTargeting: 'Mais informações',
        services: [
            {
                id: 1,
                title: 'Aulas Especiais para Mulheres',
                description: 'Treinos exclusivos para mulheres em datas especiais. Foco em confiança, autodefesa e conexão. Junte-se a nós!',
                image: LutaJiuMulheres,
            },
            {
                id: 2,
                title: 'Muay Thai com Propósito',
                description: 'Muay Thai transcende o físico no nosso Ministério de Lutas (MDL). Nas quartas-feiras às 19h30, venha encontrar equilíbrio, força interior e conexão com Deus.',
                image: LutasMuayThai,
            },
            {
                id: 3,
                title: 'Faixa Branca, Coração Puro',
                description: 'O treinamento no Jiu-Jitsu pode moldar o caráter das crianças, fortalecendo sua fé e disciplina.',
                image: JiuKids,
            },
        ],
    },
    {
        id: 8,
        mockType: 'Ministérios',
        title: 'Assistência Social',
        description: 'Nosso <b>Ministério de Assistência Social</b> está comprometido em ajudar aqueles que mais precisam, oferecendo suporte emocional, espiritual e material.',
        image: AssistenciaSocialCardImg,
        link: 'https://seu-site.com/assistencia-social',
        infoTitle: 'Ministério de Assistência Social',
        infoDescription: 'A igreja <strong>Mount Church</strong> está profundamente comprometida com a assistência social, entendendo que a caridade é uma porta para falar do <strong>amor de Jesus</strong>. Acreditamos que, através de atos de bondade e ajuda prática, podemos mostrar a compaixão e a graça de Deus para aqueles que mais necessitam. Nosso ministério de assistência social é dedicado a servir nossa <strong>comunidade</strong> , fornecendo apoio <strong>emocional</strong>, <strong>espiritual</strong> e <strong>material</strong> a indivíduos e famílias em situações de vulnerabilidade. Aceitamos doações de <strong>alimentos</strong>, <strong>roupas</strong>, <strong>móveis</strong> e também contribuições financeiras via <strong>PIX</strong>.',
        infoImage: AssistenciaSocialBannerImg,
        joinTheGroupTitle: 'Participe do Nosso Ministério',
        firstDescriptionjoinTheGroup: 'Você pode se voluntariar para fazer parte do nosso ministério de assistência social e ajudar diretamente aqueles que precisam. Junte-se a nós e faça a diferença!',
        secondDescriptionjoinTheGroup: 'Contribua com doações de alimentos, roupas, móveis ou financeiramente através do nosso PIX. Sua generosidade pode transformar vidas!',
        buttonNameTargeting: 'Saber mais',
        joinTheGroupLink: 'https://wa.me/554792722229',
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
    {
        id: 9,
        mockType: 'Ministérios',
        title: 'Dança',
        description: 'Ministério de dança que <strong>adora a Deus</strong> através da <strong>expressão corporal</strong>.',
        image: DancaCardImg,
        link: 'https://seu-site.com/danca',
        infoTitle: 'Movimentos de Adoração',
        infoDescription: 'No <strong>Ministério de Dança</strong>, acreditamos que “Tudo é movimento.” Seja um andar, saltar, levantar de braços, girar… Tudo que se move, é movimento. E nós, nos movemos pela voz do <strong>Espírito Santo</strong>. Isso é o que nos diferencia do mundo! É Ele quem direciona os nossos passos e traz vida a cada movimento. Por Ele, existimos! Por Ele, nos movemos! Por Ele, dançamos! Por Ele e para Ele, são a nossa Adoração!.',
        infoImage: dancaBannerImg,
        joinTheGroupTitle: 'O Poder da Dança na Adoração',
        firstDescriptionjoinTheGroup: 'A dança é uma forma poderosa de <strong>adoração a Deus</strong>, expressando nossa fé e devoção através de movimentos inspirados pelo <strong>Espírito Santo</strong>. No Ministério de Dança, cada passo é uma oração, cada movimento é um ato de louvor. Convidamos você a se juntar a nós e experimentar<strong> a alegria</strong> de adorar a Deus com todo o seu ser. “Louvem o seu nome com danças; cantem-lhe o seu louvor com tamborim e harpa” (Salmos 149:3).',
        secondDescriptionjoinTheGroup: 'Clique em "<strong>Mais informações</strong>" para se juntar a nós!',
        joinTheGroupLink: 'https://wa.me/5515991901689',
        buttonNameTargeting: 'Mais informações',
        services: [
            {
                id: 1,
                title: 'Dança de Dedicação',
                description: 'A dança é uma forma de expressar nossa devoção e dedicação a Deus. Cada movimento é uma oferta de louvor, cada passo é guiado pelo Espírito Santo.',
                image: dancaCardcoracaoImg,
            },
            {
                id: 2,
                title: 'Graça em Movimento',
                description: 'A dança é uma expressão de graça e beleza, refletindo a glória de Deus. Nossos dançarinos são guiados pelo Espírito Santo para transmitir a mensagem de amor e esperança.',
                image: dancaCardInfantilImg,
            },
            {
                id: 3,
                title: 'Autoridade em Adoração',
                description: 'A dança também é uma expressão de autoridade e poder espiritual. Nossos dançarinos homens trazem força e vigor à adoração, proclamando a grandeza de Deus através de seus movimentos.',
                image: dancaCardHomenImg,
            },
        ],
    },
    {
        id: 8,
        mockType: 'Ministérios',
        title: 'Ministério Infantil',
        description: 'Nosso <b>ministério Infantil</b> é um lugar seguro e divertido onde as crianças podem brincar e aprender enquanto os pais participam do culto.',
        image: espacoKidsCardImg,
        link: 'https://seu-site.com/espaco-kids',
        infoTitle: 'Crescendo em Fé',
        infoDescription: 'O Ministério Infantil é um espaço acolhedor e seguro onde as crianças podem crescer em fé e conhecimento de Deus. <strong>Durante os cultos</strong>, as crianças são separadas por idade e recebem ensinamentos adequados ao seu desenvolvimento. Além disso, oferecemos um lanche e um espaço de parque com brinquedos e jogos para tornar a experiência ainda mais agradável. Também temos uma equipe dedicada para cuidar das nossas <strong>crianças especiais</strong>, garantindo que todas se sintam <strong>incluídas</strong> e <strong>amadas</strong>.',
        infoImage: espacoKidsBannerImg,
        joinTheGroupTitle: 'A Pureza da Criança',
        firstDescriptionjoinTheGroup: 'As crianças são uma bênção de Deus e trazem alegria e vida para nossas casas. Em nossos cultos infantis, celebramos a pureza e a inocência das crianças, ensinando-as sobre o amor de Deus de maneira lúdica e envolvente. “Deixem vir a mim as crianças, não as impeçam; pois o Reino dos céus pertence aos que se tornam semelhantes a elas” (Mateus 19:14). Venha e traga seus filhos para participar deste ministério, onde cada criança é valorizada e encorajada a crescer em fé.',
        secondDescriptionjoinTheGroup: 'A alegria de uma criança é um reflexo do amor de Deus em nossas vidas. No Ministério Infantil, acreditamos que cada criança é preciosa e merece ser cuidada com amor e dedicação. Convidamos você a trazer seus filhos para nossos cultos infantis, onde eles aprenderão sobre Deus de maneira divertida e significativa. “Os filhos são herança do Senhor, uma recompensa que ele dá” (Salmos 127:3). Venha e permita que seus filhos experimentem a alegria de crescer em um ambiente de fé e amor.',
        buttonNameTargeting: 'Mais informações',
        joinTheGroupLink: 'https://wa.me/554788876613',
        services: [
            {
                id: 1,
                title: 'Criatividade e Expressão',
                description: 'Nossos cultos infantis incentivam a criatividade e a expressão das crianças, proporcionando atividades como desenho e pintura que ajudam no desenvolvimento de suas habilidades.',
                image: espacoKidsCardDesenhandoImg,
            },
            {
                id: 2,
                title: 'Alimentação e Confraternização',
                description: 'Durante os cultos, servimos um lanche para as crianças, promovendo momentos de confraternização e alegria, onde elas podem se sentir acolhidas e amadas.',
                image: espacoKidsdLancheImg,
            },
            {
                id: 3,
                title: 'Diversão e Aprendizado',
                description: 'Nosso espaço de parque com brinquedos e jogos oferece um ambiente seguro e divertido para as crianças, onde elas podem brincar e aprender sobre Deus de maneira lúdica.',
                image: espacoKidsbrincandoImg,
            },
        ],
    },
    {
        id: 9,
        mockType: 'Ministérios',
        title: 'Casais',
        description: 'Encontros e programas especiais para o <strong>fortalecimento</strong> dos <strong>casais na fé</strong> e no relacionamento.',
        image: casaisCardImg,
        link: 'https://seu-site.com/casais',
        infoTitle: 'Fortalecendo Laços',
        infoDescription: 'O Ministério de Casais tem como missão fortalecer os <strong>laços matrimoniais</strong> sob a <strong>orientação divina</strong>. Através de <strong>encontros semanais</strong>, <strong>cultos especiais</strong> e <strong>cursos</strong>, oferecemos suporte e orientação para casais em todas as fases da vida. Participe e descubra como a união sob a bênção de Deus pode transformar o seu casamento.',
        infoImage: casaisBannerImg,
        joinTheGroupTitle: 'A União Sob o Olhar de Deus',
        firstDescriptionjoinTheGroup: 'A união de um casal é um reflexo do amor de Deus. Em nossos encontros, celebramos a importância do homem como sacerdote do lar e da mulher sábia que edifica a casa. “Maridos, amem suas esposas, assim como Cristo amou a igreja e entregou-se por ela” (Efésios 5:25). Venha fortalecer seu casamento e crescer espiritualmente conosco.',
        secondDescriptionjoinTheGroup: 'A união de um casal é uma bênção divina, e no Ministério de Casais, acreditamos que um casamento forte é construído sobre a fé e o amor. Convidamos você a participar de nossos encontros e cultos, onde compartilhamos ensinamentos bíblicos e experiências que fortalecem a relação conjugal. “A mulher sábia edifica a sua casa, mas com as próprias mãos a insensata derruba a sua” (Provérbios 14:1). Junte-se a nós e descubra como a união sob o olhar de Deus pode transformar sua vida e seu casamento. Venha e faça parte desta comunidade de fé e amor, onde cada casal é valorizado e encorajado a crescer juntos.',
        joinTheGroupLink: 'https://wa.me/5547984281670',
        buttonNameTargeting: 'Mais informações',
        services: [
            {
                id: 1,
                title: 'Nossos Líderes',
                description: 'Eric Larry e Zania Azevedo são os dedicados líderes do Ministério de Casais, guiando com sabedoria e amor cada encontro e evento.',
                image: casaisCardLideresImg,
            },
            {
                id: 2,
                title: 'União e Amor',
                description: 'Nossos encontros são momentos de união e amor, onde casais se apoiam mutuamente e compartilham experiências que fortalecem seus relacionamentos.',
                image: casaisCardAmorImg,
            },
            {
                id: 3,
                title: 'Encontros Semanais de Casais',
                description: 'Nossos <strong>encontros semanais</strong> de casais acontecem todas as <strong>sextas-feiras às 20h</strong>. Estes momentos são dedicados ao fortalecimento dos laços matrimoniais e à edificação espiritual dos casais.',
                image: casaisCardRefericaoImg,
            },
        ],
    },
    // Adicione mais ministérios conforme necessário
];

export default ministriesOrActivitiesMock;