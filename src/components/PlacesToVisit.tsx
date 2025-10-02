import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { MapPin, Clock, Users } from 'lucide-react';
// Use public placeholders if assets are missing
import japaneseCuisine from '@/assets/japanese-cuisine.jpg';
import limestoneCaving from '@/assets/limestone-caving.jpg';
import blueCaveSnorkeling from '@/assets/blue-cave-snorkeling.jpg';

const PlacesToVisit = () => {
  const places = [
    {
      id: 1,
      image: japaneseCuisine,
      title: 'Chibana Shokudo',
      subtitle: 'at the restaurant',
      description: 'Experience authentic Japanese cuisine with fresh local ingredients and traditional flavors.',
      duration: '2-3 hours',
      groupSize: '2-8 people',
      price: 'From $45',
    },
    {
      id: 2,
      image: limestoneCaving,
      title: 'Pumpkin limestone',
      subtitle: 'caving',
      description: 'Explore stunning underground formations and discover the hidden beauty of limestone caves.',
      duration: '4-5 hours',
      groupSize: '4-12 people',
      price: 'From $85',
    },
    {
      id: 3,
      image: blueCaveSnorkeling,
      title: 'Blue Cave',
      subtitle: 'Snorkeling Tour',
      description: 'Dive into crystal-clear waters and witness vibrant marine life in this underwater paradise.',
      duration: '3-4 hours',
      groupSize: '6-15 people',
      price: 'From $75',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-resort-sky">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Places to visit
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover unforgettable experiences and create memories that will last a lifetime
          </p>
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place) => (
            <Card key={place.id} className="card-gradient card-shadow smooth-transition hover:scale-105 overflow-hidden border-0">
              <div className="relative">
                {/* Image */}
                <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden bg-muted">
                  <img
                    src={place.image}
                    alt={place.title}
                    className="absolute inset-0 w-full h-full object-cover smooth-transition hover:scale-110"
                    loading="eager"
                  />
                </div>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {place.price}
                </div>
              </div>

              <CardContent className="p-6">
                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-1">
                  {place.title}
                </h3>
                <p className="text-primary font-medium mb-3">
                  {place.subtitle}
                </p>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {place.description}
                </p>

                {/* Details */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2 text-primary" />
                    {place.duration}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-2 text-primary" />
                    {place.groupSize}
                  </div>
                </div>

                {/* CTA Button */}
                <Button variant="coral" className="w-full">
                  <MapPin className="h-4 w-4 mr-2" />
                  Book Experience
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="ocean" size="lg" className="px-8">
            View All Experiences
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PlacesToVisit;