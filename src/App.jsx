import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import LandingPage from "./LandingPage";
import LegalPrivacy from "./LegalPrivacy";
import TermsOfService from "./TermsOfService";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<LegalPrivacy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
