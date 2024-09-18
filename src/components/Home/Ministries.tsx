import 'assets/css/stylesMinistries.css';

import MinistriesFirst from '../../assets/images/MinistriesIMG1.jpg'
import MinistriesLast from '../../assets/images/MinistriesIMG2.jpg'

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
          <img src={MinistriesFirst} alt="Men Pray" className="sectionImgMinistriesFirst" />
          <img src={MinistriesLast} alt="Men Pray 2" className="sectionImgMinistriesLast" />
        </div>
      </div>
    </section>
  );
}