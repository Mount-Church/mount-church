import React from 'react';
import {
  AllActivities,
  CommunityMission,
  DownloadApp,
  // EventsAndParties,
  FooterGlobal,
  Ministries,
  Nav
} from 'components';
import { SubMenuVideo } from 'components/Home/SubMenu';

export function HomePage() {
  return (
    <>
      <Nav />
      <SubMenuVideo />
      <CommunityMission />
      <Ministries />
      <AllActivities />
      <DownloadApp />
      {/* <EventsAndParties /> */}
      <FooterGlobal />
    </>
  );
}