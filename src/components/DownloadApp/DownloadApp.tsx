// import React, { useState } from 'react';
import { motion } from 'framer-motion';

// import { DarkModalComponent } from 'components/Modal/DarkModal';

import 'assets/css/stylesDownloadapp.css';
import 'assets/css/stylesGlobal.css';

export function DownloadApp() {
    // const [modaDownloadApplIsOpen, setModaDownloadApplIsOpen] = useState(false);

    // const handleDownloadAppOpenModal = () => {
    //     setModaDownloadApplIsOpen(true);
    //     console.log(modaDownloadApplIsOpen)
    // };

    // const handleDownloadAppCloseModal = () => {
    //     setModaDownloadApplIsOpen(false);
    //     console.log(modaDownloadApplIsOpen)
    // };

    return (
        <section className='lSectionDownloadApp' id='sectionDownloadApp'>
            <div className='sectionDownloadApp'>
                {/* Image that appears when the screen is larger than 1350px */}
                <div className='imageLargeShowAndHideDownloadApp sectionDownloadAppImg'>
                    <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
                </div>
                <div className='sectionDownloadAppData'>
                    <div className='alignDownloadAppText'>
                        <h2 className='globalSectionTitleTextDark '>
                            Baixe o aplicativo
                        </h2>
                    </div>
                    {/* Image that appears when the screen is less than or equal to 1350px */}
                    <div className='imageSmallShowAndHideDownloadApp sectionDownloadAppImg'>
                        <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
                    </div>

                    <p className='globalSectionTextDark'>
                        Leve a Bíblia no bolso, estude os planos de leitura da igreja e faça anotações.
                        Acompanhe a igreja de onde você estiver através de nossos vídeos, conteúdos e publicações. <strong>Baixe</strong> o conteúdo na seção de <strong>download</strong> e tenha tudo offline.
                        <br /><br />
                        Seja notificado sobre <strong>transmissões</strong> ao vivo e assista diretamente pelo app.
                        Acompanhe a agenda e fique por dentro das atividades da nossa igreja, inscreva-se nos eventos e tenha sempre seus ingressos com você.
                    </p>
                    <div className='customButtonDownloadApp'>
                        <div className='sectionDownloadAppAndroidImg'
                            onClick={() => window.open(`https://play.google.com/store/apps/details?id=br.com.inchurch.comunidadeevangmountchuch&pli=1`, '_blank')}
                        >
                            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
                        </div>

                        <div className='sectionDownloadAppIOSImg'
                            // onClick={handleDownloadAppOpenModal}
                            onClick={() => window.open('https://apps.apple.com/br/app/mount-church/id6692612010', '_blank')}
                        >
                            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} />
                        </div>
                    </div>
                    {/* {modaDownloadApplIsOpen && (
                        <DarkModalComponent closeDownloadAppModal={handleDownloadAppCloseModal} />
                    )} */}
                </div>
            </div>
        </section>
    );
}
