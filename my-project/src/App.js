import Header from "./containers/Header";
import BannerSection from "./containers/BannerSection";
import SpecialSection from "./containers/SpecialSection";
import TrendingSection from "./containers/TrendingSection";
import RatingSection from "./containers/RatingSection";
import QuestionsSection from "./containers/QuestionsSection";
import TestimonialSection from "./containers/TestimonialSection";
import SponsorsSection from "./containers/SponsorsSection";
import Footer from "./containers/Footer";

function App() {
  return (
    <div className="bg-gray-100 max-w-screen-lg h-fit mx-auto font-king flex flex-col">
      <Header />
      <BannerSection />
      <SpecialSection />
      <TrendingSection />
      <RatingSection />
      <QuestionsSection />
      <TestimonialSection />
      <SponsorsSection />
      <Footer />
    </div>
  );
}

export default App;
