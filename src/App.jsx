import Header from "./components/Header";
import TopBanner from "./components/TopBanner";
import Hero from "./components/Hero";
import SectionCategories from "./components/SectionCategories";
import SectionBest from "./components/SectionBest";
import SectionHot from "./components/SectionHot";
import SectionDeals from "./components/SectionDeals";
import SectionTestimonials from "./components/SectionTestimonials";
import Footer from "./components/Footer";


function App() {

  return (
    <>
      <TopBanner />
      <Header />
      <Hero />
      <SectionCategories />
      <SectionBest />
      <SectionHot />
      <SectionDeals />
      <SectionTestimonials />
      <Footer />
    </>
  );
}

export default App;
