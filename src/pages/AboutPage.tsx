import { FooterGlobal, Nav } from 'components';
import {
  LivingTheGospel,
  // MissionAndValues,
  // BannerAboutUs,
  OurLeaders,
  TransformationStories,
  BannerBePartOfTheCommunity
} from 'components/AboutUsPage';

export function AboutPage() {
  return (
    <>
      <Nav />
      <OurLeaders />
      <LivingTheGospel />
      {/* <BannerAboutUs /> */}
      {/* <MissionAndValues /> */}
      <TransformationStories />
      <BannerBePartOfTheCommunity />
      <FooterGlobal />
    </>
  );
}
