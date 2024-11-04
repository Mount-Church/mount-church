import './assets/css/stylesAllActivities.css';
import 'assets/css/stylesGlobal.css';

import Carousel from 'components/CarouselAllActivities/Carousel';

export function AllActivities() {
  return (
    <section className="lSectionAllActivities" id="lSectionAllActivities">
      <div className="sectionAllActivities">
        <div className="sectionAllActivitiesData">
          <div className="containerLineGlobalStyles">
            <div className="lineDarkGlobalStyles"></div>
            <div className="textDarkGlobalStyles">Atividades</div>
          </div>
          <h2 className="globalSectionTitleTextDark45px">
            Conecte-se com a Mount Church
          </h2>
          <p className="globalSectionTextDark">
            A <strong>Mount Church</strong> oferece várias maneiras para você se conectar e fazer parte de nossa comunidade. Seja participando dos nossos <strong>cultos</strong>, se envolvimento com nas nossas <strong>conexões</strong> ou trazendo seus filhos para o <strong>espaço Kids</strong>: temos algo para todos. Venha descobrir como você pode se envolver e crescer espiritualmente conosco.
          </p>
          <div className='customDivCarouselAllActivities'>
            <Carousel />
          </div>
        </div>
      </div>
    </section>
  );
}