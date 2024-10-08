import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./assets/css/stylesModalPIXCopied.css";

interface ModalPIXCopiedProps {
  closeModalPIXCopied: () => void;
}

export const ModalPIXCopied: React.FC<ModalPIXCopiedProps> = ({ closeModalPIXCopied }) => {
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

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={overlayVariants}
        className="modal-overlay"
      >
        <motion.div
          className="modal"
          initial={{ y: "100vh" }}
          animate={{ y: 0 }}
          exit={{ y: "100vh" }}
          transition={{ duration: 0.5 }}
        >
          <div className="modal-header">
            <h5 className="modal-title">Modal Title</h5>
          </div>
          <div className="modal-content">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur
            et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
            dolor auctor. Aenean lacinia bibendum nulla sed consectetur.
            Praesent commodo cursus magna, vel scelerisque nisl consectetur
            et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor
            fringilla.
          </div>
          <div className="modal-footer">
            <button
              className="modal-button"
              onClick={closeModalPIXCopied}
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
