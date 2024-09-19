import { FooterGlobal, Nav } from 'components';
import { TransformationStories, LivingTheGospel, MissionAndValues, OurLeaders, BannerBePartOfTheCommunity, BannerAboutUs } from 'components/AboutUsPage';

export function AboutPage() {
  return (
    <>
      <Nav />
      <LivingTheGospel />
      <BannerAboutUs />
      <MissionAndValues />
      <OurLeaders />
      <TransformationStories />
      <BannerBePartOfTheCommunity />
      <FooterGlobal />
    </>
  );
}
