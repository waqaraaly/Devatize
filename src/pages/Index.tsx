
import Navigation from "../components/Navigation";
import Hero from "../components/home/Hero";
import BusinessAttributes from "../components/home/BusinessAttributes";
import BusinessStats from "../components/home/BusinessStats";
import CustomDevelopment from "../components/home/CustomDevelopment";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <BusinessAttributes />

      <CustomDevelopment />
      <BusinessStats />
      <Footer />
    </div>
  );
};

export default Index;
