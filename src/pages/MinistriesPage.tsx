import { FooterGlobal, Nav } from 'components';
import { JoinTheGroup, MinistriesInfoPage } from 'components/MinistriesSubComponentsPage';

export function MinistriesPage() {
  return (
    <>
      <Nav />
      <MinistriesInfoPage />
      <JoinTheGroup />
      <FooterGlobal />
    </>
  );
}