import { Button } from './ui/button';
import heroBeach from '@/assets/hero-beach.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBeach})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 py-20">
        <div className="max-w-4xl">
          {/* Subtitle */}
          <p className="text-white/80 text-sm md:text-base font-medium mb-4 tracking-wide">
            Sunset Beach, Ishigaki-jima
          </p>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Seven Amazing
            <br />
            Days in <span className="text-white drop-shadow-lg">Japan</span>
          </h1>

          {/* Description */}
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            Sunset Beach is at the northwest end of Ishigaki-jima in the Yaeyama Islands. 
            Big selling points include appealing golden sand, clear turquoise water, 
            and a netted swimming area to protect bathers from box jellyfish, which gather 
            in the waters off Okinawa from May to October.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="w-full sm:w-auto text-lg px-8 py-4 shadow-lg shadow-black/20">
              Explore Destinations
            </Button>
            <Button variant="hero" size="lg" className="w-full sm:w-auto text-lg px-8 py-4 shadow-lg shadow-black/20">
              Book Your Stay
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;