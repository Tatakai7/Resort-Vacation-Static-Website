import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import PlacesToVisit from '../components/PlacesToVisit';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PlacesToVisit />
      </main>
      <Footer />
    </div>
  );
};

export default Index;