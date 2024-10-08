import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import './assets/css/stylesCummunityMission.css';
import 'assets/css/stylesGlobal.css';

import { ButtonPrimary } from 'components/Button/ButtonPrimary';

export function CommunityMission() {

  return (
    <section className='lSectionCommunityMission' id='sectionCommunityMission'>
      <div className='sectionCommunityMission'>
        <div className='sectionCommunityMissionData'>
          <div className='containerLineGlobalStyles'>
            <div className='lineDarkGlobalStyles'></div>
            <div className='textDarkGlobalStyles'>Sobre nós</div>
          </div>
          {/* <div className='divContainerCommunityMission'> */}
          <div className='containerDivCommunityMission'>
            <h2 className='globalSectionTitleTextDark45px'>
              Uma comunidade guiada pelo amor de Deus, dedicada a mudar o mundo através da fé e do serviço
            </h2>
            {/* Image that appears when the screen is less than or equal to 1350px */}
            <div className='flex justify-center'>
              <div className='imageSmallShowAndHideCommunityMission sectionCommunityMissionImg'>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
              </div>
            </div>
            <p className='globalSectionTextDark'>
              Acreditamos que cada pessoa foi criada para pertencer a uma <strong>comunidade</strong>,
              pois nunca foi o desejo de Deus que vivêssemos esta vida <strong>sozinhos</strong>.
              <br /><br />
              Somos uma congregação de adoradores de Jesus Cristo em Joinville, Santa Catarina, que anseiam
              ver corações transformados e vidas renovadas pelo poder de <strong>Deus</strong>. Estamos empenhados em
              experimentar e promover um avivamento que impacte não apenas nossa cidade, mas também o mundo
              inteiro.
            </p>
          </div>
          {/* </div> */}
          <div className='customButtonCommunityMission'>
            <Link to='/about' className=''>
              <ButtonPrimary>Saber mais</ButtonPrimary>
            </Link>
          </div>
        </div>
        {/* Image that appears when the screen is larger than 1350px */}
        <div className='imageLargeShowAndHideCommunityMission sectionCommunityMissionImg'>
          <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
        </div>
      </div>
    </section>
  );
}
