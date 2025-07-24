
import { useState } from 'react';
import { Mail, MapPin, Phone, Globe, Clock, Navigation, Car, Bus, Send, MessageSquare, User } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <Header />
      
      {/* Enhanced Hero Section */}
      <section className="pt-20 pb-20 hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl font-bold mb-6 leading-tight">
              Get In <span className="text-accent">Touch</span>
            </h1>
            <p className="text-xl mb-8 leading-relaxed opacity-90">
              Have questions about JHC 2025? We're here to help with all your conference-related inquiries, 
              submissions, and registration queries.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Mail className="h-4 w-4" />
                <span>Quick Response</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <Phone className="h-4 w-4" />
                <span>Direct Support</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                <MessageSquare className="h-4 w-4" />
                <span>24/7 Available</span>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </section>

      {/* Enhanced Contact Information & Form Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Enhanced Contact Information */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-center lg:text-left mb-12">
                <h2 className="text-4xl font-bold text-primary mb-4">Let's Connect</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Reach out to us through any of the channels below. Our team is ready to assist you 
                  with conference details, technical support, and academic inquiries.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Email Support</CardTitle>
                        <p className="text-sm text-muted-foreground">Primary communication channel</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold text-primary mb-2">jhc.research@jaihindcollege.edu.in</p>
                    <p className="text-sm text-muted-foreground">
                      For conference inquiries, abstract submissions, registration queries, and technical support
                    </p>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-accent bg-gradient-to-r from-accent/5 to-transparent">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Phone Support</CardTitle>
                        <p className="text-sm text-muted-foreground">Direct assistance available</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg font-semibold text-accent mb-2">+91 22 2266 0570</p>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>Monday to Friday, 9:00 AM - 5:00 PM</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary bg-gradient-to-r from-primary/5 to-transparent">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                        <User className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">Conference Organizer</CardTitle>
                        <p className="text-sm text-muted-foreground">Head of Department</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-semibold text-primary text-lg">Mr. Wilson Rao</p>
                      <p className="text-muted-foreground">Convenor & HOD</p>
                      <p className="text-sm text-muted-foreground">
                        Department of B.Sc. IT, B.Voc. SD & M.Sc. Big Data Analytics
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Enhanced Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="bg-gradient-to-r from-primary to-accent text-white rounded-t-lg">
                  <div className="flex items-center space-x-3">
                    <Send className="h-6 w-6" />
                    <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  </div>
                  <p className="text-primary-foreground/90">We'll get back to you within 24 hours</p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">Full Name</label>
                        <Input
                          placeholder="Enter your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="h-12 border-2 focus:border-primary"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">Email Address</label>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="h-12 border-2 focus:border-primary"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">Phone Number</label>
                        <Input
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="h-12 border-2 focus:border-primary"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-primary">Query Category</label>
                        <Select onValueChange={(value) => handleInputChange('category', value)}>
                          <SelectTrigger className="h-12 border-2 focus:border-primary">
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="registration">Registration</SelectItem>
                            <SelectItem value="abstract">Abstract Submission</SelectItem>
                            <SelectItem value="accommodation">Accommodation</SelectItem>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-primary">Your Message</label>
                      <Textarea
                        placeholder="Please describe your inquiry in detail..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={6}
                        className="border-2 focus:border-primary resize-none"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full h-12 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Location & Map Section */}
      <section className="py-24 section-gradient">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold text-primary mb-6">Visit Our Campus</h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Located in the heart of Mumbai, Jai Hind College is easily accessible by all modes of transport. 
              Our historic campus in Churchgate offers the perfect setting for academic excellence.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-t-4 border-t-primary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Campus Address</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="font-medium">Jai Hind College (Empowered Autonomous)</p>
                    <p>'A' Road, Churchgate</p>
                    <p>Mumbai - 400020</p>
                    <p>Maharashtra, India</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-t-4 border-t-accent">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors duration-300">
                      <Navigation className="h-6 w-6 text-accent" />
                    </div>
                    <CardTitle className="text-xl">By Train</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-muted-foreground">
                    <div className="flex justify-between">
                      <span className="font-medium">Churchgate Station:</span>
                      <span className="text-accent font-semibold">2 min walk</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Marine Lines:</span>
                      <span className="text-accent font-semibold">8 min walk</span>
                    </div>
                    <p className="text-sm pt-2">Well connected to Western & Central Railway lines</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group border-t-4 border-t-primary">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      <Bus className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">By Bus</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-muted-foreground">
                    <div>
                      <p className="font-medium mb-1">Bus Routes:</p>
                      <p className="text-sm">1, 3, 11, 21, 22, 103, 106, 123</p>
                    </div>
                    <div>
                      <p className="font-medium">Nearest Stop:</p>
                      <p className="text-primary font-semibold">Churchgate Station</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Enhanced Map Section */}
          <motion.div 
            className="bg-white rounded-2xl p-8 shadow-2xl border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-primary mb-4">Find Us on the Map</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Jai Hind College is strategically located in Churchgate, one of Mumbai's most accessible and prestigious areas
              </p>
            </div>
            
            <div className="relative overflow-hidden rounded-xl shadow-xl border-4 border-primary/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.9295847867265!2d72.82263557513244!3d18.934510682241157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1e71c2b104b%3A0x2b32a4be81621938!2sJai%20Hind%20College!5e0!3m2!1sen!2sin!4v1752218936295!5m2!1sen!2sin" 
                width="100%" 
                height="500" 
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                title="Jai Hind College Location"
              />
            </div>
            
            <div className="mt-12 grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="font-bold text-primary mb-6 text-xl flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Nearby Landmarks
                </h4>
                <ul className="space-y-4">
                  {[
                    { name: "Oval Maidan", time: "3 minutes walk" },
                    { name: "Rajabai Clock Tower", time: "5 minutes walk" },
                    { name: "University of Mumbai", time: "5 minutes walk" },
                    { name: "Horniman Circle Garden", time: "10 minutes walk" }
                  ].map((landmark, index) => (
                    <li key={index} className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                      <span className="font-medium text-primary">{landmark.name}</span>
                      <span className="text-sm text-muted-foreground">{landmark.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-primary mb-6 text-xl flex items-center">
                  <Car className="h-5 w-5 mr-2" />
                  Parking & Transport
                </h4>
                <ul className="space-y-4">
                  {[
                    { icon: Car, text: "Limited on-campus parking available" },
                    { icon: Car, text: "Paid parking at Churchgate Station" },
                    { icon: Bus, text: "Excellent public transport connectivity" },
                    { icon: Navigation, text: "GPS: 18.9345°N, 72.8274°E" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3 p-3 bg-accent/5 rounded-lg">
                      <item.icon className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
