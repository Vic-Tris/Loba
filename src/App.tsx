import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import AppLayout from "./layouts/AppLayout";
import { NotFound } from "./pages/NotFound";

// Lazy Loaded Base Pages
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Quote = lazy(() => import("./pages/Quote"));
const About = lazy(() => import("./pages/About"));
const Pricing = lazy(() => import("./pages/Pricing"));
const FAQ = lazy(() => import("./pages/FAQ"));

// Lazy Loaded Dynamic Service Pages (Aligned with ALL_SERVICES)
const DataAnalysis = lazy(() => import("./pages/services/DataAnalysis"));
const BusinessProposals = lazy(() => import("./pages/services/BusinessProposals"));
const AcademicPresentations = lazy(() => import("./pages/services/AcademicPresentations"));
const UndergraduateProjects = lazy(() => import("./pages/services/UndergraduateProjects"));
const CoverLetters = lazy(() => import("./pages/services/CoverLetters"));

export default function App() {
  return (
    <HelmetProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route element={<AppLayout />}>
              {/* Core Layout Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/quote" element={<Quote />} />
              <Route path="/quotes" element={<Quote />} /> {/* Fallback route for plural */}
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />

              {/* Verified Service Specific Routes */}
              <Route path="/services/data-analysis" element={<DataAnalysis />} />
              <Route path="/services/business" element={<BusinessProposals />} />
              <Route path="/services/academic-presentations" element={<AcademicPresentations />} />
              <Route path="/services/undergrad" element={<UndergraduateProjects />} />
              <Route path="/services/cover-letter" element={<CoverLetters />} />

              {/* Missing Route Fallbacks (Redirecting them safely to avoid 404s until pages are built) */}
              <Route path="/services/academic-article" element={<Services />} />
              <Route path="/services/thesis" element={<Services />} />
              <Route path="/services/assignments-essay" element={<Services />} />

              {/* Catch-All 404 Routing */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </HelmetProvider>
  );
}