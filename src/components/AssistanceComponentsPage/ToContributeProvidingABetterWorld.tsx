import { useState } from "react";
import { ModalDonate } from "./ModalDonate";

import './assets/css/stylesToContributeProvidingABetterWorld.css'
import BannerToContributeProvidingABetterWorldImage from './assets/images/imageBannerToContributeProvidingABetterWorld.jpg'

const ToContributeProvidingABetterWorldMock = [
    {
        id: 1,
        title: "Você pode contribuir para proporcionar um mundo melhor!",
        bannerImage: BannerToContributeProvidingABetterWorldImage,
        buttonBeAVolunteerName: "Ser um voluntário",
        buttonDonateName: "Doar",
    }
]

export function ToContributeProvidingABetterWorld() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const [modaDownloadApplIsOpen, setModaDownloadApplIsOpen] = useState(false);

    const handleDownloadAppOpenModal = () => {
        setModaDownloadApplIsOpen(true);
        console.log(modaDownloadApplIsOpen)
    };

    const handleDownloadAppCloseModal = () => {
        setModaDownloadApplIsOpen(false);
        console.log(modaDownloadApplIsOpen)
    };

    return (
        <section className="lSectionCardToContributeProvidingABetterWorld" id="sectionCardlSectionCardToContributeProvidingABetterWorld">
            <div className="sectionCardToContributeProvidingABetterWorld">
                <div className="CardContainerCardToContributeProvidingABetterWorld">
                    {ToContributeProvidingABetterWorldMock.map((HighlightsAndPreviousSermons, index) => (
                        <div
                            key={HighlightsAndPreviousSermons.id}
                            className="cardCardToContributeProvidingABetterWorld"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="imageWrapperCardToContributeProvidingABetterWorld">
                                <div
                                    className={`imageCardToContributeProvidingABetterWorld ${hoveredIndex === index ? 'imageBlurCardToContributeProvidingABetterWorld' : ''}`}
                                    style={{ backgroundImage: `url(${HighlightsAndPreviousSermons.bannerImage})` }}
                                />
                                <div className="cardOverlayCardToContributeProvidingABetterWorld" style={{ backgroundColor: hoveredIndex === index ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.5)' }}>
                                    <h2 className="globalSectionTitleTextWhite45px">
                                        {HighlightsAndPreviousSermons.title}
                                    </h2>
                                    <div className="divContainerButtonsToContributeProvidingABetterWorld">
                                        <button
                                            className={'buttonCardToContributeProvidingABetterWorld buttonVisibleCardToContributeProvidingABetterWorld'}
                                            onClick={() => window.open(`https://wa.me/554792722249`, '_blank')}
                                        >
                                            {HighlightsAndPreviousSermons.buttonBeAVolunteerName}
                                        </button>

                                        <button
                                            className={'buttonCardToContributeProvidingABetterWorld buttonVisibleCardToContributeProvidingABetterWorld'}
                                            onClick={handleDownloadAppOpenModal}
                                        >
                                            {HighlightsAndPreviousSermons.buttonDonateName}
                                        </button>

                                        {modaDownloadApplIsOpen && (
                                            <ModalDonate closeModalDonate={handleDownloadAppCloseModal} />
                                        )}

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}