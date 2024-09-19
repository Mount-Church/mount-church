import React from "react";

import { motion, AnimatePresence } from "framer-motion";
import 'assets/css/stylesDarkModal.css'
interface DarkModalProps {
    closeDownloadAppModal: () => void;
}

export const DarkModalComponent: React.FC<DarkModalProps> = ({ closeDownloadAppModal }) => {

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
                        <h5 className="darkModalTitle">Em breve no iOS!</h5>
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
