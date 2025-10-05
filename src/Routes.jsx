import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/ui/BackToTop";
import ErrorBoundary from "./components/ErrorBoundary";
import NotFound from "./pages/NotFound";
import AdmissionsPage from "./pages/admissions";
import Programs from "./pages/programs";
import Alumni from "./pages/alumni";
import Faculty from "./pages/faculty";
import About from "./pages/about";
import Homepage from "./pages/homepage";
import NewsAndEventsPage from "./pages/news-and-events";
import NewsDetail from "./pages/news-and-events/NewsDetail";
import EventDetail from "./pages/news-and-events/EventDetail";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          {/* Define your route here */}
          <Route path="/" element={<Homepage />} />
          <Route path="/admissions" element={<AdmissionsPage />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/about" element={<About />} />
          <Route path="/news-and-events" element={<NewsAndEventsPage />} />
          <Route path="/news/:id" element={<NewsDetail />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
        <BackToTop />
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
