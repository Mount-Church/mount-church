import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {
  LocationPage,
  AboutPage,
  MinistriesPage,
  HomePage,
  WatchPage,
  ErrorPage,
  AssistancePage,
  TithesOfferings,
  EventsAndPartiesPage
} from 'pages';

import { WatchHighlightsAndPreviousSermons } from 'components/SubWatchComponentsPage/WatchHighlightsAndPreviousSermons';
import ScrollToTop from 'components/ScrollFuncion/ScrollToTop';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/tithesandofferings" element={<TithesOfferings />} />
        <Route path="/ministries" element={<MinistriesPage />} />
        <Route path='/events' element={<EventsAndPartiesPage />} />
        <Route path='/assistance' element={<AssistancePage />} />
        <Route path='/watch' element={<WatchPage />} />
        <Route path="/watchhighlightsandprevioussermons" element={<WatchHighlightsAndPreviousSermons />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
