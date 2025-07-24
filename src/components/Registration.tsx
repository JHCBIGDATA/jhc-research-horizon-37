import { Send, UserPlus, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Registration = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <section id="registration" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            📝 Registration & Submission
          </motion.div>
          <h2 className="text-4xl font-bold text-primary mb-4">Registration & Submission</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us at JHC 2025 and be part of the leading research conference in AI, Data Science, and Analytics
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Submit Your Abstract</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    Submit your research abstract and join the conversation on cutting-edge technologies
                  </p>
                  <Button 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={handleRegisterClick}
                  >
                    Submit Abstract
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <UserPlus className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">Register Now</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    Secure your spot at the premier research conference and network with industry leaders
                  </p>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full border-accent text-accent hover:bg-accent hover:text-white"
                    onClick={handleRegisterClick}
                  >
                    Register for Conference
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Important Dates</h3>
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Calendar className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium">Abstract Submission Opens</p>
                    <p className="text-sm text-muted-foreground">15th August 2025</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Clock className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium">Abstract Acceptance</p>
                    <p className="text-sm text-muted-foreground">25th August 2025</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Calendar className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium">Full Paper Submission</p>
                    <p className="text-sm text-muted-foreground">25th September 2025</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Clock className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium">Registration Deadline</p>
                    <p className="text-sm text-muted-foreground">25th October 2025</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-center space-x-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Calendar className="h-5 w-5 text-accent" />
                  <div>
                    <p className="font-medium">Conference Dates</p>
                    <p className="text-sm text-muted-foreground">21st-22nd November 2025</p>
                  </div>
                </motion.div>
              </div>
            </div>

            <motion.div 
              className="bg-primary/5 rounded-lg p-6 border border-primary/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 className="font-bold text-primary mb-2">Registration Status</h4>
              <p className="text-muted-foreground text-sm">
                Abstract submission and registration are now open! Click the buttons above to 
                secure your participation in this premier research conference.
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.img 
            src="/lovable-uploads/138790b0-7483-4f48-ae16-2db2f83b5253.png" 
            alt="Paper Presentation Sessions" 
            className="rounded-lg shadow-lg mx-auto max-w-4xl w-full hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.02 }}
          />
          <p className="mt-4 text-sm text-muted-foreground">Paper presentation sessions from previous conferences</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Registration;
