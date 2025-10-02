import { Waves, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-primary-foreground/10 rounded-lg">
                <Waves className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">RESORT VACATIONS</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Creating unforgettable vacation experiences in the world's most beautiful destinations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 smooth-transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 smooth-transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 smooth-transition">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Destinations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground smooth-transition">Japan</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground smooth-transition">Maldives</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground smooth-transition">Thailand</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground smooth-transition">Bali</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground smooth-transition">Hawaii</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground smooth-transition">Luxury Stays</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground smooth-transition">Spa Treatments</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground smooth-transition">Adventure Tours</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground smooth-transition">Cultural Experiences</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground smooth-transition">Private Transfers</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">info@resortvacations.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">123 Paradise Ave, Tropical City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Resort Vacations. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm smooth-transition">
              Privacy Policy
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm smooth-transition">
              Terms of Service
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm smooth-transition">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;