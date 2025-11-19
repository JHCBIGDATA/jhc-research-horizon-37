
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, CalendarCheck, Phone, MapPin as Map, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';

const EnhancedNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'AI & Games', href: '/ai-games' },
    { name: 'Contact', href: '/contact' },
    { name: 'Team', href: '/team' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Sponsors', href: '/sponsors' },
  ];

  const handleNavigation = (href: string) => {
    navigate(href);
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-lg shadow-lg border-b border-border/50' 
          : 'bg-white/95 backdrop-blur-md border-b border-border'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavigation('/')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img 
              src="/lovable-uploads/4bbac82d-c957-4b3e-a551-6b7dc16575df.png" 
              alt="Jai Hind College Logo" 
              className="h-10 w-auto"
            />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-primary">JHC 2026</h1>
              <p className="text-xs text-muted-foreground">Research Conference</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className={`text-sm font-medium transition-colors duration-200 relative ${
                  location.pathname === item.href 
                    ? 'text-primary' 
                    : 'text-foreground hover:text-primary'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
                {location.pathname === item.href && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => window.open('https://tinyurl.com/3p4s4zhj', '_blank', 'noopener,noreferrer')}
                className="bg-accent hover:bg-accent/90 text-black relative overflow-hidden group"
              >
                <span className="relative z-10">Register Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Navigation Sheet */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.div>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="border-l border-white/10 bg-gradient-to-b from-background via-background/95 to-muted/60 px-0 text-foreground"
            >
              <div className="flex h-full flex-col">
                <SheetHeader className="px-6 pt-4 pb-2 text-left">
                  <SheetTitle className="text-lg font-semibold">Navigate JHC 2026</SheetTitle>
                  <SheetDescription className="text-sm">
                    Quick access to event details, resources, and registrations.
                  </SheetDescription>
                </SheetHeader>

                <div className="px-2">
                  <nav className="flex flex-col gap-2 py-2">
                    {menuItems.map((item, index) => (
                      <SheetClose asChild key={item.name}>
                        <motion.button
                          onClick={() => handleNavigation(item.href)}
                          className={`flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium transition-all duration-200 ${
                            location.pathname === item.href
                              ? 'bg-primary text-primary-foreground shadow'
                              : 'text-foreground hover:bg-muted/60'
                          }`}
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                        >
                          <span>{item.name}</span>
                          <ArrowRight className="h-4 w-4 opacity-60" />
                        </motion.button>
                      </SheetClose>
                    ))}
                  </nav>
                </div>

                <div className="px-6 pt-4 pb-6 space-y-4 border-t border-white/10 mt-auto">
                  <div className="grid gap-3 text-sm">
                    <div className="flex items-center gap-3 rounded-lg border border-primary/20 bg-primary/5 px-3 py-2">
                      <CalendarCheck className="h-4 w-4 text-primary" />
                      <span>Conference: January 7, 2026</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg border border-accent/20 bg-accent/10 px-3 py-2">
                      <Map className="h-4 w-4 text-accent" />
                      <span>Jai Hind College, Mumbai</span>
                    </div>
                    <a
                      href="tel:+912228763333"
                      className="flex items-center gap-3 rounded-lg border border-secondary/30 bg-secondary/10 px-3 py-2 text-secondary-foreground transition-colors hover:bg-secondary/20"
                    >
                      <Phone className="h-4 w-4" />
                      <span>Need help? +91 22 2876 3333</span>
                    </a>
                  </div>

                  <div className="flex flex-col gap-3">
                    <SheetClose asChild>
                      <Button
                        onClick={() => window.open('https://tinyurl.com/3p4s4zhj', '_blank', 'noopener,noreferrer')}
                        className="w-full bg-accent text-black hover:bg-accent/90"
                      >
                        Register Now
                      </Button>
                    </SheetClose>
                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => {
                        window.open('/Nationalconference_JHC_MSc_BDA.pdf', '_blank', 'noopener,noreferrer');
                        setIsMenuOpen(false);
                      }}
                    >
                      View Brochure
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
};

export default EnhancedNavbar;
