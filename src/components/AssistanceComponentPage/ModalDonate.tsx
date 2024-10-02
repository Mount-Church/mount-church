import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import './assets/css/stylesModalDonate.css'

interface ModalDonateProps {
    closeDownloadAppModal: () => void;
}

export const ModalDonate: React.FC<ModalDonateProps> = ({ closeDownloadAppModal }) => {

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
            closeDownloadAppModal();
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={overlayVariants}
                className="darkModalComponentOverlay"
                onClick={handleOverlayClick}
            >
                <motion.div
                    className="darkModal"
                    initial={{ y: "100vh" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100vh" }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="darkModalHeader">
                        <h5 className="darkModalTitle">Doe e Espalhe Esperança</h5>
                        <div className="closeModalDonate" onClick={closeDownloadAppModal} >
                            X
                        </div>
                    </div>
                    <div className="darkModalContent">
                        Infelizmente, ainda não temos o aplicativo para iOS, mas estamos ansiosos para lançá-lo em breve.
                    </div>
                    <div className="darkModalFooter">
                        <button
                            className="darkModalButton"
                            onClick={closeDownloadAppModal}
                        >
                            Fechar
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}