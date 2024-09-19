import { FooterGlobal, Nav } from 'components';
import { PlanYourVisit, AfterTheService, LocationMaps } from 'components/LocationPage';

export function LocationPage() {
  return (
    <>
      <Nav />
      <PlanYourVisit />
      <AfterTheService />
      <LocationMaps />
      <FooterGlobal />
    </>
  );
}
