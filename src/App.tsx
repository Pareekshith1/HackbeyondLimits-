import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Timeline } from "./components/Timeline";
import { Prizes } from "./components/Prizes";
import OrganizerPage from "./components/OrganizerPage";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";
import { Sponsors } from "./components/Sponsors";
import ReasonsSection from "./components/reasons";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-black text-white">
        <Header />
        <Hero />
        <About />
        <Timeline />
        <Prizes />
        <ReasonsSection />
        <Sponsors />
        <Location />
        <OrganizerPage />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
