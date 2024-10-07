import { FooterGlobal, Nav } from 'components';
import { AboutVideosAndOurVision, BannerFullServicesSermonsOrSpecialEvents, FullServicesSermonsOrSpecialEvents, SermonPlaylist } from 'components/SubWatchComponentsPage';

export function WatchHighlightsAndPreviousSermons() {
    return (
        <>
            <Nav />
            <FullServicesSermonsOrSpecialEvents />
            <BannerFullServicesSermonsOrSpecialEvents />
            <AboutVideosAndOurVision />
            <SermonPlaylist />
            <FooterGlobal />
        </>
    );
}