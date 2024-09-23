import './assets/css/stylesMinistries.css';

import MinistriesFirstImg from './assets/images/menPray1.jpg'
import MinistriesLastImg from './assets/images/menPray2.jpg'

export function Ministries() {
  return (
    <section className="lSectionMinistries" id="section">
      <div className="sectionMinistries">
        <div className="textContentMinistries">
          <h2 className="sectionTitleMinistries">
            Ministérios
          </h2>
          <p className="sectionTextMinistries">
            Há um Lugar para você nos Ministérios da Mount Church
          </p>
        </div>
        <div className="imageContainerMinistries">
          <img src={MinistriesFirstImg} alt="Men Pray" className="sectionImgMinistriesFirst" />
          <img src={MinistriesLastImg} alt="Men Pray 2" className="sectionImgMinistriesLast" />
        </div>
      </div>
    </section>
  );
}