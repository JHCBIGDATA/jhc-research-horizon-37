
import { motion } from 'framer-motion';
import { Mail, Bell, CheckCircle, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // Here you would typically send the email to your backend
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const benefits = [
    "Early access to call for papers",
    "Speaker announcements and updates",
    "Workshop and session details",
    "Networking event invitations",
    "Publication opportunities",
    "Conference proceedings access"
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <motion.div
                    className="flex items-center space-x-2 mb-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <Mail className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary">Stay Updated</h3>
                      <p className="text-sm text-muted-foreground">Join our conference newsletter</p>
                    </div>
                  </motion.div>
                  
                  <motion.p 
                    className="text-muted-foreground mb-6 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    Get the latest updates about JHC 2025, including speaker announcements, 
                    workshop details, networking opportunities, and important deadlines delivered 
                    straight to your inbox.
                  </motion.p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <motion.div
                    className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-6"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {isSubscribed ? (
                      <motion.div
                        className="text-center py-8"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <motion.div
                          className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 0.6 }}
                        >
                          <CheckCircle className="h-8 w-8 text-green-600" />
                        </motion.div>
                        <h4 className="text-xl font-bold text-primary mb-2">Thank You!</h4>
                        <p className="text-muted-foreground">
                          You've successfully subscribed to our newsletter. 
                          Check your email for confirmation.
                        </p>
                      </motion.div>
                    ) : (
                      <>
                        <div className="text-center mb-6">
                          <Bell className="h-12 w-12 text-accent mx-auto mb-3" />
                          <h4 className="text-xl font-bold text-primary mb-2">
                            Never Miss an Update
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Join 500+ researchers already subscribed
                          </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div>
                            <Input
                              type="email"
                              placeholder="Enter your email address"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full"
                              required
                            />
                          </div>
                          <Button 
                            type="submit" 
                            className="w-full bg-accent hover:bg-accent/90 text-black font-medium"
                            disabled={!email}
                          >
                            <Send className="h-4 w-4 mr-2" />
                            Subscribe to Newsletter
                          </Button>
                        </form>

                        <p className="text-xs text-muted-foreground text-center mt-4">
                          No spam, unsubscribe anytime. We respect your privacy.
                        </p>
                      </>
                    )}
                  </motion.div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
