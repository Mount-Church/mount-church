import { useState } from "react";
import './assets/css/stylesToContributeProvidingABetterWorld.css'

import BannerToContributeProvidingABetterWorldImage from './assets/images/imageDonateFabio.jpg'

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

    return (
        <section className="lSectionCardHighlightsAndPreviousSermons" id="sectionCardHighlightsAndPreviousSermons">
            <div className="sectionCardHighlightsAndPreviousSermons">
                <div className="CardContainerCardHighlightsAndPreviousSermons">
                    {ToContributeProvidingABetterWorldMock.map((HighlightsAndPreviousSermons, index) => (
                        <div
                            key={HighlightsAndPreviousSermons.id}
                            className="cardCardHighlightsAndPreviousSermons"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="imageWrapperCardHighlightsAndPreviousSermons">
                                <div
                                    className={`imageCardHighlightsAndPreviousSermons ${hoveredIndex === index ? 'imageBlurCardHighlightsAndPreviousSermons' : ''}`}
                                    style={{ backgroundImage: `url(${HighlightsAndPreviousSermons.bannerImage})` }}
                                />
                                <div className="carouselOverlayCardHighlightsAndPreviousSermons" style={{ backgroundColor: hoveredIndex === index ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.5)' }}>
                                    <h2 className="titleCardHighlightsAndPreviousSermons">{HighlightsAndPreviousSermons.title}</h2>
                                    <button
                                        className={`buttonCardHighlightsAndPreviousSermons ${hoveredIndex === index ? 'buttonVisibleCardHighlightsAndPreviousSermons' : ''}`}
                                    // onClick={() => handleClick(HighlightsAndPreviousSermons)}
                                    >
                                        Saber Mais
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}