import { AllActivities, FooterGlobal, Nav } from 'components';
import { HighlightsAndPreviousSermons, WatchServicesAndEventsOnline } from 'components/WatchComponentsPage';

export function WatchPage() {
  return (
    <>
      <Nav />
      <WatchServicesAndEventsOnline />
      <HighlightsAndPreviousSermons />
      <AllActivities />
      <FooterGlobal />
    </>
  );
}
