import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WebinarPage from "./pages/WebinarPage";
import WebinarConfirmationPage from "./pages/WebinarConfirmationPage";
import ContactPage from "./pages/ContactPage";
import FrameworksPage from "./pages/FrameworksPage";
import ProgramsPage from "./pages/ProgramsPage";
import VeilPage from "./pages/VeilPage";
import InsightsPage from "./pages/InsightsPage";
import SamplePage from "./pages/SamplePage";
import NewPage from "./pages/NewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/webinar" element={<WebinarPage />} />
        <Route
          path="/webinar/confirmation"
          element={<WebinarConfirmationPage />}
        />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/frameworks" element={<FrameworksPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/veil" element={<VeilPage />} />
        <Route path="/insights" element={<InsightsPage />} />
        <Route path="/sample" element={<SamplePage />} />
        <Route path="/new" element={<NewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
