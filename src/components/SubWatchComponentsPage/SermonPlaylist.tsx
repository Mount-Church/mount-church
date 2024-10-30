import { useEffect, useState } from "react";
import { ErrorPage } from "pages";

import 'assets/css/stylesGlobal.css';
import './css/stylesSermonPlaylist.css'

interface CollectionYoutubeVideosPlaylist {
    id: number,
    youtubeVideosBanner: string,
    youtubeVideosName: string,
    recordingDate: string,
    recordingDay: string,
    linkFromYoutubeVideos: string,
}

export function SermonPlaylist() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [collectionYoutubeVideosPlaylist, setCollectionYoutubeYoutubeVideosPlaylist] = useState<CollectionYoutubeVideosPlaylist[]>([]);

    useEffect(() => {
        const storedMinistry = localStorage.getItem('selectedwatchhighlightsandprevioussermons');
        if (storedMinistry) {
            const parsedData = JSON.parse(storedMinistry);
            console.log('[DEBUG]', parsedData);
            setCollectionYoutubeYoutubeVideosPlaylist(parsedData.youtubeVideos);
        }
    }, []);

    if (!collectionYoutubeVideosPlaylist.length) {
        return <ErrorPage />;
    }

    return (
        <section className="lSectionSermonPlaylist" id="sectionSermonPlaylist">
            <div className="sectionSermonPlaylist">
                <div className="sectionSermonPlaylistData sectionSermonPlaylistDataMarginsTop">
                    <div className="containerLineGlobalStyles ">
                        <div className="lineDarkGlobalStyles"></div>
                        <div className="textDarkGlobalStyles">Atividades</div>
                    </div>
                    <div className="sectionCardSermonPlaylist">
                        <div className="containerCardSermonPlaylist">
                            {collectionYoutubeVideosPlaylist.map((videoSermonPlaylist, index) => (
                                <div
                                    key={videoSermonPlaylist.id}
                                    className="cardSermonPlaylist"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <div className="imageWrapperCardSermonPlaylist">
                                        <div
                                            className={`imageCardSermonPlaylist ${hoveredIndex === index ? 'imageBlurCardSermonPlaylist' : ''}`}
                                            style={{ backgroundImage: `url(${videoSermonPlaylist.youtubeVideosBanner})` }}
                                        />
                                        <div className="carouselOverlayCardSermonPlaylist" style={{ backgroundColor: hoveredIndex === index ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.5)' }}>
                                            <h2 className="titleCardSermonPlaylist">{videoSermonPlaylist.youtubeVideosName}</h2>
                                            <button
                                                className={`buttonCardSermonPlaylist ${hoveredIndex === index ? 'buttonVisibleCardSermonPlaylist' : ''}`}
                                                onClick={() => window.open(`${videoSermonPlaylist.linkFromYoutubeVideos}`, '_blank')}
                                            >
                                                Assistir agora
                                            </button>
                                        </div>
                                    </div>
                                    <div className="divTextSermonPlaylist">
                                        {videoSermonPlaylist.recordingDay}  {videoSermonPlaylist.recordingDate}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
