import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import './assets/css/stylesModalTithesAndOfferings.css'

import pixDizimosEOfertasImg from './assets/images/pixDizimosEOfertas.jpg'

interface ModalDonateProps {
    closeModalTheImportanceOfTithesAndOfferings: () => void;
}

export const ModalTithesAndOfferings: React.FC<ModalDonateProps> = ({ closeModalTheImportanceOfTithesAndOfferings }) => {
    const overlayVariants = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                duration: 0.3,
                delayChildren: 0.4
            }
        },
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
                duration: 0.3,
                delay: 0.4
            }
        }
    };

    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            closeModalTheImportanceOfTithesAndOfferings();
        }
    };

    const handleCopyPIXDonation = () => {
        const codePixToCopy = '56108287000122';
        navigator.clipboard.writeText(codePixToCopy)
            .then(() => {
                console.log('PIX copiado com sucesso!');
                closeModalTheImportanceOfTithesAndOfferings();
            })
            .catch((error) => {
                console.error('Erro ao copiar o PIX:', error);
            });
    };

    return (
        <AnimatePresence>
            <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={overlayVariants}
                className="modalTithesAndOfferingsComponentOverlay"
                onClick={handleOverlayClick}
            >
                <motion.div
                    className="modalDivTithesAndOfferingsMotion"
                    initial={{ y: "100vh" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100vh" }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="modalTithesAndOfferingsHeader">
                        <h5 className="modalTithesAndOfferingsTitle">Contribuir Agora</h5>
                        <div className="closeTithesAndOfferingsDonate" onClick={closeModalTheImportanceOfTithesAndOfferings} >
                            X
                        </div>
                    </div>
                    <div className="modalContentTithesAndOfferings">
                        <p><strong>2 Coríntios 9:7</strong>: “Cada um dê conforme determinou em seu coração, não com pesar ou por obrigação, pois Deus ama quem dá com alegria.”
                        </p>
                        <div className="modalBankTithesAndOfferingsInfo">
                            <h2 className="infoTitleModalTithesAndOfferings">Informações Bancárias</h2>
                            <div className="divContainerBankTithesAndOfferingsInfo">
                                <p><strong>Nome do banco</strong>: COOP SICRED NORTE SC </p>
                                <p><strong>Agência</strong>: 5201-9</p>
                            </div>
                            <div className="divContainerBankTithesAndOfferingsInfo">
                                <p><strong>Agência</strong>: 5201-9</p>
                                <p className="textShowUnderTabletModeBankTithesAndOfferingsInfo">
                                    <strong>PIX</strong>: 56.108.287/0001-22</p>
                            </div>

                            <div className="divContainerMobileModeBankTithesAndOfferingsInfo">
                                <p><strong>PIX</strong>: 56.108.287/0001-22</p>
                            </div>

                            <div className="divContainerQRCodeBankTithesAndOfferingsInfo">
                                <img className="imageConfigQRCodeBankTithesAndOfferingsInfo"
                                    src={pixDizimosEOfertasImg}
                                    alt="PIX 56.108.287/0001-22"
                                />
                            </div>
                            <div className="divContainerButtonCopyQRCodeBankTithesAndOfferingsInfo">
                                <button
                                    className='py-2 px-4 text-sm buttonbackgroundPageWhite'
                                    onClick={handleCopyPIXDonation}
                                >
                                    Copiar Pix
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}