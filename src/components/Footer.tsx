
import { Mail, MapPin, Calendar, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/af32fa1a-1e94-4f86-8bc6-cebde43ca497.png" 
                alt="Jai Hind College Logo" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-lg font-bold">JHC 2026</h3>
                <p className="text-sm text-white/80">National Research Conference</p>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Empowering Innovation through Generative AI, Data Science, and Analytics
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="https://www.instagram.com/jhc.research.bda/" target="_blank" rel="noreferrer" aria-label="Instagram" className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Instagram className="h-4 w-4 text-white" />
              </a>
              <a href="https://www.linkedin.com/in/department-of-msc-big-data-analytics-bsc-information-technology-bvoc-software-development-4058152b8/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Linkedin className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-white transition-colors">About Conference</Link></li>
              <li><Link to="/register" className="text-white/80 hover:text-white transition-colors">Registration</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <Calendar className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80">7th February 2026</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80">jhc.research@jaihindcollege.edu.in</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-white/80">Jai Hind College, Churchgate, Mumbai - 400020</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80 text-sm">
            © 2026 Jai Hind College (Empowered Autonomous). All rights reserved.
          </p>
          <p className="text-white/60 text-xs mt-2">
            Department of B.Sc. IT, B.Voc. Software Development & M.Sc. Big Data Analytics
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
