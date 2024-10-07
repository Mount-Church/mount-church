import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import './assets/css/stylesModalDonate.css'

import pixBankDonationInfo from './assets/images/pixDoacao@mountchurch.com.br.png'
interface ModalDonateProps {
    closeModalDonate: () => void;
}

export const ModalDonate: React.FC<ModalDonateProps> = ({ closeModalDonate }) => {
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
            closeModalDonate();
        }
    };

    const handleCopyPIXDonation = () => {
        const codePixToCopy = 'doacao@mountchurch.com.br';
        navigator.clipboard.writeText(codePixToCopy)
            .then(() => {
                console.log('PIX copiado com sucesso!');
                closeModalDonate();
            })
            .catch((error) => {
                console.error('Erro ao copiar o PIX:', error);
            });
    };

    return (
        <>
            <AnimatePresence>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={overlayVariants}
                    className="modalDonateComponentOverlay"
                    onClick={handleOverlayClick}
                >
                    <motion.div
                        className="modalDivDonateMotion"
                        initial={{ y: "100vh" }}
                        animate={{ y: 0 }}
                        exit={{ y: "100vh" }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="modalDonateHeader">
                            <h5 className="modalDonateTitle">Doe e Espalhe Esperança</h5>
                            <div className="closeModalDonate" onClick={closeModalDonate} >
                                X
                            </div>
                        </div>
                        <div className="modalContentDonate">
                            <p><strong>2 Coríntios 9:11</strong>: “Vocês serão enriquecidos de todas as formas, para que possam ser generosos em qualquer ocasião e, por nosso intermédio, a sua generosidade resulte em ação de graças a Deus.”
                            </p>
                            <div className="modalBankDonationInfo">
                                <h2 className="infoTitleModalDonate">Informações Bancárias</h2>
                                <div className="divContainerBankDonationInfo">
                                    <p><strong>Nome do banco</strong>: BRADESCO - 237</p>
                                    <p><strong>Agência</strong>: 5201-9</p>
                                </div>
                                <div className="divContainerBankDonationInfo">
                                    <p><strong>Conta Corrente</strong>: 14416-9</p>
                                    <p className="textShowUnderTabletModeBankDonationInfo">
                                        <strong>PIX</strong>: doacao@mountchurch.com.br</p>
                                </div>

                                <div className="divContainerMobileModeBankDonationInfo">
                                    <p><strong>PIX</strong>: doacao@mountchurch.com.br</p>
                                </div>

                                <div className="divContainerQRCodeBankDonationInfo">
                                    <img className="imageConfigQRCodeBankDonationInfo"
                                        src={pixBankDonationInfo}
                                        alt="PIX doacao@mountchurch.com.br"
                                    />
                                </div>
                                <div className="divContainerButtonCopyQRCodeBankDonationInfo">
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

        </>
    );
}