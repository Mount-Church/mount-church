import { useState } from "react";
import { useNavigate } from "react-router-dom";

import HighlightsAndPreviousSermonsMock from "components/WatchConponents/MockHighlightsAndPreviousSermons";

import 'assets/css/stylesGlobal.css';
import 'assets/css/stylesCardHighlightsAndPreviousSermons.css'

export function CardHighlightsAndPreviousSermons() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    let navigate = useNavigate();
    const handleClick = (HighlightsAndPreviousSermons: any) => {
        localStorage.setItem('selectedMinistry', JSON.stringify(HighlightsAndPreviousSermons))
        console.log('[DEBUG Pego Highlights And PreviousSermons]')
        navigate('/watchhighlightsandprevioussermons');
    }

    return (
        <section className="lSectionCardHighlightsAndPreviousSermons" id="sectionCardHighlightsAndPreviousSermons">
            <div className="sectionCardHighlightsAndPreviousSermons">
                <div className="CardContainerCardHighlightsAndPreviousSermons">
                    {HighlightsAndPreviousSermonsMock.map((HighlightsAndPreviousSermons, index) => (
                        <div
                            key={HighlightsAndPreviousSermons.id}
                            className="cardCardHighlightsAndPreviousSermons"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className="imageWrapperCardHighlightsAndPreviousSermons">
                                <div
                                    className={`imageCardHighlightsAndPreviousSermons ${hoveredIndex === index ? 'imageBlurCardHighlightsAndPreviousSermons' : ''}`}
                                    style={{ backgroundImage: `url(${HighlightsAndPreviousSermons.cardImage})` }}
                                />
                                <div className="carouselOverlayCardHighlightsAndPreviousSermons" style={{ backgroundColor: hoveredIndex === index ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.5)' }}>
                                    <h2 className="titleCardHighlightsAndPreviousSermons">{HighlightsAndPreviousSermons.bannerName}</h2>
                                    <button
                                        className={`buttonCardHighlightsAndPreviousSermons ${hoveredIndex === index ? 'buttonVisibleCardHighlightsAndPreviousSermons' : ''}`}
                                        // onClick={() => {
                                        //     localStorage.setItem('selectedwatchhighlightsandprevioussermons', JSON.stringify(HighlightsAndPreviousSermons));
                                        //     window.location.href = '/watchhighlightsandprevioussermons';
                                        // }}
                                        onClick={() => handleClick(HighlightsAndPreviousSermons)}
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