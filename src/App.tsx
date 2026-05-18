import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import AppLayout from "./layouts/AppLayout";
import { NotFound } from "./pages/NotFound";

// Lazy Loaded Pages
const Home = lazy(() => import("./pages/Home"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Quote = lazy(() => import("./pages/Quote"));
const UndergraduateProjects = lazy(() => import("./pages/services/UndergraduateProjects"));
const AcademicPresentations = lazy(() => import("./pages/services/AcademicPresentations"));
const AcademicArticle = lazy(() => import("./pages/services/AcademicArticle"));
const ThesisDissertations = lazy(() => import("./pages/services/ThesisDissertations"));
const BusinessProposals = lazy(() => import("./pages/services/BusinessProposals"));
const CoverLetters = lazy(() => import("./pages/services/CoverLetters"));
const AssignmentEssay = lazy(() => import("./pages/services/AssignmentEssay"));
const DataAnalysis = lazy(() => import("./pages/services/DataAnalysis"));
const About = lazy(() => import("./pages/About"));
const Pricing = lazy(() => import("./pages/Pricing"));
const FAQ = lazy(() => import("./pages/FAQ"));

export default function App() {
  return (
    <HelmetProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <Router>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route
                path="/services/academic-articles"
                element={<AcademicArticle />}
              />
              <Route
                path="/services/undergraduate-projects"
                element={<UndergraduateProjects />}
              />
              <Route
                path="/services/thesis-dissertations"
                element={<ThesisDissertations />}
              />
              <Route
                path="/services/data-analysis"
                element={<DataAnalysis />}
              />
              <Route
                path="/services/assignments-essay"
                element={<AssignmentEssay />}
              />
              <Route
                path="/services/academic-presentations"
                element={<AcademicPresentations />}
              />
              <Route path="/services/cover-letter" element={<CoverLetters />} />
              <Route
                path="/services/business-proposals"
                element={<BusinessProposals />}
              />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/quotes" element={<Quote />} />
              <Route path="/quote" element={<Quote />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </HelmetProvider>
  );
}
