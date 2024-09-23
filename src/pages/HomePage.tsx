import React from 'react';
import { AllActivities, CommunityMission, FooterGlobal, Ministries, Nav } from 'components';
import { SubMenuVideo } from 'components/Home/SubMenu';
import { DownloadApp } from 'components/DownloadApp/DownloadApp';

export function HomePage() {
  return (
    <>
      <Nav />
      <SubMenuVideo />
      <CommunityMission />
      <Ministries />
      <AllActivities />
      <DownloadApp />
      <FooterGlobal />
    </>
  );
}