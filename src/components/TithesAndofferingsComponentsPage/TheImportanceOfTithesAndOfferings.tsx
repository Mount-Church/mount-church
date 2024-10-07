
import { useState } from 'react';
import { motion } from 'framer-motion';

import 'assets/css/stylesGlobal.css';
import './assets/css/stylesTheImportanceOfTithesAndOfferings.css';
import { ModalTithesAndOfferings } from './ModalTithesAndOfferings';

export function TheImportanceOfTithesAndOfferings() {
    const [modaTheImportanceOfTithesAndOfferings, setModaTheImportanceOfTithesAndOfferings] = useState(false);

    const handleTheImportanceOfTithesAndOfferingsOpenModal = () => {
        setModaTheImportanceOfTithesAndOfferings(true);
        console.log('modal informação do banco', modaTheImportanceOfTithesAndOfferings)
    };

    const handleTheImportanceOfTithesAndOfferingsCloseModal = () => {
        setModaTheImportanceOfTithesAndOfferings(false);
        console.log('modal informação do banco', modaTheImportanceOfTithesAndOfferings)
    };

    return (
        <section className="lSectionTheImportanceOfTithesAndOfferings" id="sectionlSectionTheImportanceOfTithesAndOfferings">
            <div className="sectionTheImportanceOfTithesAndOfferings">
                <div className="sectionTheImportanceOfTithesAndOfferingsData">
                    <div className="containerLineGlobalStyles">
                        <div className="lineDarkGlobalStyles"></div>
                        <div className="textDarkGlobalStyles">Dízimos e Ofertas</div>
                    </div>
                    <div className='containerDivTheImportanceOfTithesAndOfferings'>
                        <h2 className="globalSectionTitleTextDark56px">
                            A Importância dos Dízimos e Ofertas
                        </h2>
                    </div>
                    {/* Image that appears when the screen is less than or equal to 1350px */}
                    <div className='flex justify-center'>
                        <div className="imageSmallShowAndHideTheImportanceOfTithesAndOfferings sectionTheImportanceOfTithesAndOfferingsImg">
                            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
                        </div>
                    </div>
                    <div className='containerDivTheImportanceOfTithesAndOfferings'>
                        <p className="globalSectionTextDark">
                            A <strong>contribuição</strong> através de <strong>dízimos</strong> e <strong>ofertas</strong> é fundamental para o <strong>mantimento</strong> da igreja, seus ministérios e projetos, incluindo assistência social. Sua <strong>generosidade</strong> permite que continuemos a servir a comunidade e a expandir nossas ações de caridade.
                        </p>
                    </div>
                    <div className='customButtonCommunityMission'>
                        <button
                            className='py-2 px-4 text-sm buttonbackgroundPageWhite'
                            onClick={handleTheImportanceOfTithesAndOfferingsOpenModal}
                        >
                            Contribuir Agora
                        </button>
                    </div>
                </div>
                {/* Image that appears when the screen is larger than 1350px */}
                <div className="imageLargeShowAndHideTheImportanceOfTithesAndOfferings sectionTheImportanceOfTithesAndOfferingsImg">
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
                </div>
                {modaTheImportanceOfTithesAndOfferings && (
                    <ModalTithesAndOfferings
                        closeModalTheImportanceOfTithesAndOfferings={handleTheImportanceOfTithesAndOfferingsCloseModal} />
                )}
            </div>
        </section>
    );
}
