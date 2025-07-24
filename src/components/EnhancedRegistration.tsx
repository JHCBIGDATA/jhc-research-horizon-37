import { motion } from 'framer-motion';
import { Send, UserPlus, Clock, Calendar, CheckCircle, Download, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const EnhancedRegistration = () => {
  const navigate = useNavigate();
  const [registrationCount, setRegistrationCount] = useState(247);

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const progressPercentage = (registrationCount / 500) * 100;

  const registrationSteps = [
    {
      step: 1,
      title: "Submit Abstract",
      description: "Upload your research abstract by August 25th",
      icon: Send,
      status: "current"
    },
    {
      step: 2,
      title: "Review Process",
      description: "Expert panel reviews your submission",
      icon: CheckCircle,
      status: "upcoming"
    },
    {
      step: 3,
      title: "Full Paper",
      description: "Submit complete paper by September 25th",
      icon: Calendar,
      status: "upcoming"
    },
    {
      step: 4,
      title: "Final Registration",
      description: "Complete registration by October 25th",
      icon: UserPlus,
      status: "upcoming"
    }
  ];

  const importantDates = [
    {
      date: "15th August 2025",
      event: "Abstract Submission Opens",
      icon: Calendar,
      urgent: false
    },
    {
      date: "25th August 2025",
      event: "Abstract Acceptance",
      icon: CheckCircle,
      urgent: true
    },
    {
      date: "25th September 2025",
      event: "Full Paper Submission",
      icon: UserPlus,
      urgent: false
    },
    {
      date: "12th October 2025",
      event: "Acceptance & Feedback",
      icon: Clock,
      urgent: false
    },
    {
      date: "25th October 2025",
      event: "Registration Deadline",
      icon: Calendar,
      urgent: false
    },
    {
      date: "21st-22nd November 2025",
      event: "Conference Dates",
      icon: Calendar,
      urgent: false
    }
  ];

  const benefits = [
    "Publication in UGC CARE or International Journals",
    "Certificate of Participation",
    "Networking with Industry Leaders",
    "Access to Workshop Materials",
    "Best Paper Awards",
    "Conference Proceedings"
  ];

  return (
    <section id="registration" className="py-20 bg-white">
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
            📝 Registration Hub
          </motion.div>
          <h2 className="text-4xl font-bold text-primary mb-4">Join JHC 2025</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Secure your spot at the premier research conference and be part of the innovation revolution
          </p>
        </motion.div>

        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-0">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-primary mb-2">Registration Progress</h3>
                <p className="text-muted-foreground">Join hundreds of researchers and professionals</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-primary" />
                    <span className="font-medium">Current Registrations</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">{registrationCount}/500</span>
                </div>
                <Progress value={progressPercentage} className="h-3" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{Math.round(progressPercentage)}% filled</span>
                  <span>{500 - registrationCount} spots remaining</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Registration Steps */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-primary text-center mb-12">Registration Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {registrationSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`text-center ${step.status === 'current' ? 'bg-primary/5 border-primary/20' : 'bg-white'} hover:shadow-lg transition-all duration-300`}>
                  <CardHeader className="pb-4">
                    <div className={`mx-auto w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                      step.status === 'current' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'
                    }`}>
                      <step.icon className="h-6 w-6" />
                    </div>
                    <div className="text-sm font-medium text-muted-foreground mb-2">Step {step.step}</div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-start mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
              <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Submit Your Abstract</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    Share your groundbreaking research with the academic community and industry experts
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <Download className="h-4 w-4 text-primary" />
                      <span className="text-sm text-primary">Download Abstract Template</span>
                    </div>
                  </div>
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
              <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                    <UserPlus className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-2xl">Register for Conference</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground">
                    Join as an attendee to learn from leading researchers and network with professionals
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">
                      Early Bird Discount Available
                    </div>
                  </div>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full border-accent text-accent hover:bg-accent hover:text-white"
                    onClick={handleRegisterClick}
                  >
                    Register Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="space-y-6">
            {/* Important Dates */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-primary">Important Dates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {importantDates.map((date, index) => (
                  <motion.div 
                    key={index}
                    className={`flex items-center space-x-3 p-3 rounded-lg ${
                      date.urgent ? 'bg-red-50 border border-red-200' : 'bg-gray-50'
                    }`}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <date.icon className={`h-5 w-5 ${date.urgent ? 'text-red-500' : 'text-primary'}`} />
                    <div>
                      <p className="font-medium">{date.event}</p>
                      <p className="text-sm text-muted-foreground">{date.date}</p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-primary">What You Get</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-primary mb-8">Conference Experience</h3>
          <motion.img 
            src="/lovable-uploads/138790b0-7483-4f48-ae16-2db2f83b5253.png" 
            alt="Conference Experience" 
            className="rounded-lg shadow-xl mx-auto max-w-4xl w-full"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
          <p className="mt-4 text-sm text-muted-foreground">
            Join researchers and professionals from around the world in sharing knowledge and innovation
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedRegistration;
