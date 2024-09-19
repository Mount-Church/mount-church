import React from 'react';
import { AllActivities, CommunityMission, FooterGlobal, Ministries, Nav } from 'components';
import { SubMenuParallax } from 'components/Home/SubMenu';
import { DownloadApp } from 'components/DownloadApp/DownloadApp';

export function HomePage() {
  return (
    <>
      <Nav />
      <SubMenuParallax />
      <CommunityMission />
      <Ministries />
      <AllActivities />
      <DownloadApp />
      <FooterGlobal />
    </>
  );
}