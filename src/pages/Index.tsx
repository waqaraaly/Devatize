
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
      <div className="container mx-auto px-4 py-20">
        <img 
          src="/lovable-uploads/ani.png"
          alt="Team collaboration illustration"
          className="max-w-2xl w-full mx-auto" // Changed from max-w-3xl to max-w-2xl
        />
      </div>
      <CustomDevelopment />
      <BusinessStats />
      <Footer />
    </div>
  );
};

export default Index;
