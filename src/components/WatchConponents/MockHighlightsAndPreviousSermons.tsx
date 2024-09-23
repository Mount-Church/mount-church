/*===== SERMÃO =====*/
import sermaoCardImg from './assets/images/sermaoCard.jpg';
import sermaoBannerImgPage from './assets/images/sermaoBannerImgPage.jpg';

/*===== EVENTOS ESPECIAIS =====*/
import especialEventsCardImg from './assets/images/especialEventsCard.jpg';
import especialEventsBannerImgPage from './assets/images/especialEventsBannerImgPage.jpg';
import DanieldiasBannerYoutube25082024 from './assets/images/especialEventsDanieldiasBannerYoutube25-08-2024.jpg'

/*===== FULL SERVICES =====*/
import fullServicesCardImg from './assets/images/fullServiceCard.jpg';
import fullServicesBannerImgPage from './assets/images/fullServicesBannerImgPage.jpg';
import CultodeCeiaAldo15092024 from './assets/images/fullServicesCultodeCeiaAldo15-09-2024.jpg'

const HighlightsAndPreviousSermonsMock = [
    {
        id: 1,
        bannerName: 'Sermão',
        titleName: 'Sermões Inspiradores',
        subTitleName: 'Mensagens Transformadoras para o Seu Crescimento Espiritual',
        subTitleDescription: 'Aprofunde-se na Palavra de Deus com nossos <strong>sermões</strong> inspiradores. Aqui, você encontrará mensagens edificantes que fortalecerão sua fé e lhe trarão encorajamento para a jornada espiritual.',
        cardImage: sermaoCardImg,
        bannerImageHighlightsAndPreviousSermonsMock: sermaoBannerImgPage,
        aboutVideosTitle: 'O que você pode esperar',
        titleAboutVideosTitle: 'Mensagens Transformadoras para o Seu Crescimento Espiritual',
        aboutVideosDescription: 'Aprofunde-se na Palavra de Deus com nossos sermões inspiradores. Em nossa coleção de sermões, você encontrará uma <strong>variedade de mensagens</strong> edificantes que são cuidadosamente preparadas para fortalecer sua fé e lhe trazer encorajamento na sua jornada espiritual. Cada sermão é baseado em ensinamentos bíblicos sólidos, apresentados de maneira <strong>clara</strong> e <strong>relevante</strong> para o nosso tempo.',
        ourVisionFirstDescription: '<strong>Reflexões Profundas</strong>: Nossos sermões abordam temas espirituais profundos, oferecendo insights valiosos sobre a Bíblia e a vida cristã.',
        ourVisionSecondDescription: '<strong>Aplicação Prática</strong>: Além de enriquecer seu conhecimento bíblico, nossas mensagens proporcionam aplicações práticas para o seu dia a dia, ajudando você a viver conforme os princípios de Deus.',
        ourVisionThirdDescription: '<strong>Variedade de Temas</strong>: Desde estudos detalhados de passagens bíblicas específicas até reflexões sobre questões contemporâneas à luz da fé cristã, nossos sermões cobrem uma ampla gama de temas.',
        youtubeVideos: [
            {
                id: 1,
                youtubeVideosBanner: sermaoCardImg,
                youtubeVideosName: 'Sermão video 1',
                recordingDay: 'Domingo',
                recordingDate: '10/10/2024',
                linkFromYoutubeVideos: 'https://seu-site.com/flowing',
            },
            {
                id: 2,
                youtubeVideosBanner: sermaoCardImg,
                youtubeVideosName: 'Sermão video 2',
                recordingDay: 'Domingo',
                recordingDate: '10/11/2024',
                linkFromYoutubeVideos: 'https://seu-site.com/flowing',
            },
            {
                id: 3,
                youtubeVideosBanner: sermaoCardImg,
                youtubeVideosName: 'Sermão video 3',
                recordingDay: 'Domingo',
                recordingDate: '10/12/2024',
                linkFromYoutubeVideos: 'https://seu-site.com/flowing',
            },
            {
                id: 4,
                youtubeVideosBanner: sermaoCardImg,
                youtubeVideosName: 'Sermão video 4',
                recordingDate: '10/10/2024',
                linkFromYoutubeVideos: 'https://seu-site.com/flowing',
            },
        ],
    },
    {
        id: 2,
        bannerName: 'Eventos Especiais',
        titleName: 'Encontros Transformadores',
        subTitleName: 'Ministrando com Poder e Propósito',
        subTitleDescription: 'Assistam de nossos eventos especiais, onde pastores e <strong>convidados especiais</strong> compartilham mensagens poderosas e inspiradoras. Estes encontros são <strong>oportunidades únicas</strong> para aprofundar sua fé e receber ensinamentos valiosos que impactarão sua vida espiritual.',
        cardImage: especialEventsCardImg,
        bannerImageHighlightsAndPreviousSermonsMock: especialEventsBannerImgPage,
        aboutVideosTitle: 'O que você pode esperar',
        titleAboutVideosTitle: 'Encontros Transformadores',
        aboutVideosDescription: 'Nossos vídeos de eventos especiais apresentam ministrações de <strong>pastores</strong> e <strong>convidados renomados</strong>, trazendo mensagens que edificam e transformam. Cada evento é uma oportunidade de crescimento espiritual e renovação da fé.',
        ourVisionFirstDescription: '<strong>Mensagens Inspiradoras:</strong> Nossos sermões abordam temas espirituais profundos, oferecendo insights valiosos sobre a Bíblia e a vida cristã.',
        ourVisionSecondDescription: '<strong>Ensinamentos Profundos:</strong> Os convidados compartilham insights profundos sobre a Bíblia e a vida cristã, proporcionando uma compreensão mais rica da Palavra de Deus.',
        ourVisionThirdDescription: '<strong>Aplicação Prática</strong> Além de enriquecer seu conhecimento espiritual, as mensagens oferecem aplicações práticas para o seu dia a dia, ajudando você a viver conforme os princípios de Deus.',
        youtubeVideos: [
            {
                id: 1,
                youtubeVideosBanner: DanieldiasBannerYoutube25082024,
                youtubeVideosName: 'Pr. Daniel Diaz',
                recordingDay: 'Domingo',
                recordingDate: '25/08/2024',
                linkFromYoutubeVideos: 'https://www.youtube.com/watch?v=0tcrJEYKXaM',
            },
        ],
    },
    {
        id: 3,
        bannerName: 'Full Services',
        titleName: 'Cultos Variados',
        subTitleName: 'Experiências Espirituais Completas',
        subTitleDescription: 'Assista aos nossos cultos varidos, onde pastores e convidados especiais ministram em eventos como cultos de <strong>homens</strong>, cultos de <strong>mulheres</strong> e muito mais. Estes vídeos oferecem uma experiência espiritual rica e envolvente, trazendo ensinamentos profundos e momentos de adoração que fortalecerão sua fé.',
        cardImage: fullServicesCardImg,
        bannerImageHighlightsAndPreviousSermonsMock: fullServicesBannerImgPage,
        aboutVideosTitle: 'Cultos Variados',
        aboutVideosDescription: 'Nossos vídeos de <strong>Full Services</strong> apresentam cultos completos ministrados por <strong>pastores</strong> e <strong>convidados especiais</strong>. Cada culto é uma oportunidade de vivenciar a presença de <strong>Deus</strong> de maneira intensa e transformadora, com mensagens que edificam e inspiram.',
        ourVisionFirstDescription: '<strong>Adoração Profunda:</strong> Nossos sermões abordam temas espirituais profundos, oferecendo insights valiosos sobre a Bíblia e a vida cristã.',
        ourVisionSecondDescription: '<strong>Mensagens Inspiradoras:</strong> Os convidados compartilham insights profundos sobre a Bíblia e a vida cristã, proporcionando uma compreensão mais rica da Palavra de Deus.',
        ourVisionThirdDescription: '<strong>Diversidade de Temas:</strong> Cultos variados, incluindo eventos específicos para homens, mulheres e outros grupos, atendendo às necessidades de todos os membros da congregação.',
        youtubeVideos: [
            {
                id: 1,
                youtubeVideosBanner: CultodeCeiaAldo15092024,
                youtubeVideosName: 'Pr. Aldo',
                recordingDay: 'Culto de Ceia',
                recordingDate: '15/09/2024',
                linkFromYoutubeVideos: 'https://seu-site.com/flowing',
            },
            {
                id: 2,
                youtubeVideosBanner: fullServicesCardImg,
                youtubeVideosName: 'Full Services video 2',
                recordingDay: 'Domingo',
                recordingDate: '10/10/2024',
                linkFromYoutubeVideos: 'https://seu-site.com/flowing',
            },
            {
                id: 3,
                youtubeVideosBanner: fullServicesCardImg,
                youtubeVideosName: 'Full Services video 2',
                recordingDay: 'Domingo',
                recordingDate: '10/10/2024',
                linkFromYoutubeVideos: 'https://seu-site.com/flowing',
            },
            {
                id: 4,
                youtubeVideosBanner: fullServicesCardImg,
                youtubeVideosName: 'Full Services video 2',
                recordingDay: 'Domingo',
                recordingDate: '10/10/2024',
                linkFromYoutubeVideos: 'https://seu-site.com/flowing',
            },
        ],
    }
];

export default HighlightsAndPreviousSermonsMock;