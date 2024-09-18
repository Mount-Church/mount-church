import { FooterGlobal, Nav } from 'components';
import { JoinTheGroup, MinistriesInfoPage } from 'components/subPagesMinistries';

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