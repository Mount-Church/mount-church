import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { LocationPage, AboutPage, MinistriesPage, HomePage, EventsPage, WatchPage, ErrorPage } from 'pages';
import { WatchHighlightsAndPreviousSermons } from 'components/SubPagesWatch/WatchHighlightsAndPreviousSermons';
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
        <Route path="/ministries" element={<MinistriesPage />} />
        <Route path='/events' element={<EventsPage />} />
        <Route path='/watch' element={<WatchPage />} />
        <Route path="/watchhighlightsandprevioussermons" element={<WatchHighlightsAndPreviousSermons />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
