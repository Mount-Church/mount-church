
import { useState } from 'react';

import 'assets/css/stylesGlobal.css';
import './assets/css/stylesTheImportanceOfTithesAndOfferings.css';
import { ModalTithesAndOfferings } from './ModalTithesAndOfferings';
import OverviewAndImpactTabsHowYouCanContribute from './OverviewAndImpactTabsHowYouCanContribute';

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
                    <div className='containerDivTextTheImportanceOfTithesAndOfferings'>
                        <p className="globalSectionTextDark">
                            Você pode fazer sua contribuição de forma prática e segura através do <strong>PIX</strong>. Basta utilizar a chave <strong>PIX</strong>: <strong>56.108.287/0001-22</strong>. Cada doação, independentemente do valor, faz uma grande diferença e nos ajuda a continuar a nossa obra.
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
                <div className="">
                    <OverviewAndImpactTabsHowYouCanContribute />
                </div>
                {modaTheImportanceOfTithesAndOfferings && (
                    <ModalTithesAndOfferings
                        closeModalTheImportanceOfTithesAndOfferings={handleTheImportanceOfTithesAndOfferingsCloseModal} />
                )}
            </div>
        </section>
    );
}
