import Header from "./components/Header";
import TopBanner from "./components/TopBanner";
import Hero from "./components/Hero";
import SectionCategories from "./components/SectionCategories";
import SectionBest from "./components/SectionBest";
import SectionHot from "./components/SectionHot";
function App() {

  return (
    <>
      <TopBanner />
      <Header />
      <Hero />
      <SectionCategories />
      <SectionBest />
      <SectionHot />
    </>
  );
}

export default App;
