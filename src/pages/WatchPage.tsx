import { FooterGlobal, Nav } from 'components';
import { HighlightsAndPreviousSermons, WatchServicesAndEventsOnline } from 'components/WatchConponents';

export function WatchPage() {
  return (
    <>
      <Nav />
      <WatchServicesAndEventsOnline />
      <HighlightsAndPreviousSermons />
      <FooterGlobal />
    </>
  );
}
