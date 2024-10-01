
import { motion } from 'framer-motion';
import 'assets/css/stylesGlobal.css';
import './assets/css/stylesAssistanceDonateOverView.css';

export function AssistanceDonateOverView() {

    return (
        <section className="lSectionAssistanceDonateOverView" id="sectionAssistanceDonateOverView">
            <div className="sectionAssistanceDonateOverView">
                <div className="sectionAssistanceDonateOverViewData">
                    <div className="containerLineGlobalStyles">
                        <div className="lineDarkGlobalStyles"></div>
                        <div className="textDarkGlobalStyles">Assistência</div>
                    </div>
                    <h2 className="globalSectionTitleTextDark56px">
                        Fazendo uma doação para nossa assistência.
                    </h2>
                    {/* Image that appears when the screen is less than or equal to 1350px */}
                    <div className='flex justify-center'>
                        <div className="imageSmallShowAndHideAssistanceDonateOverView sectionAssistanceDonateOverViewImg">
                            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
                        </div>
                    </div>
                    <div className='containerDivAssistanceDonateOverView'>
                        <p className="globalSectionTextDark">
                            Ao <strong>doar</strong>, você apoia cuidados eficazes para todos com necessidades especiais.
                            A <strong>Mount Church</strong> vai além de oferecer suporte espiritual, nosso papel na sociedade é também prestar auxílio e apoio às pessoas em <strong>necessidade</strong>. Acreditamos que a igreja deve ser um farol de esperança, <strong>alcançando</strong> aqueles que passam fome, estão desabrigados, e ajudando a restaurar <strong>famílias</strong> e <strong>casamentos.</strong> Este é o papel social que a igreja deve desempenhar!
                        </p>
                    </div>
                    <div className='customButtonCommunityMission'>
                        <button
                            className='py-2 px-4 text-sm buttonbackgroundPageWhite'
                            onClick={() => window.open('https://wa.me/554792722249', '_blank')}
                        >
                            Doar Agora
                        </button>
                    </div>
                </div>
                {/* Image that appears when the screen is larger than 1350px */}
                <div className="imageLargeShowAndHideAssistanceDonateOverView sectionAssistanceDonateOverViewImg">
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
                </div>
            </div>
        </section>
    );
}
