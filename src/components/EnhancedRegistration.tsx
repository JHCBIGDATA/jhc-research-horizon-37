import { motion } from 'framer-motion';
import { Send, CheckCircle, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const EnhancedRegistration = () => {
  const registrationSteps = [
    {
      step: 1,
      title: "Call for Papers & Registration",
      description: "Opens on September 5, 2025",
      icon: Send,
      status: "current"
    },
    {
      step: 2,
      title: "Abstract Submission",
      description: "Max 300 words. Deadline: September 25, 2025",
      icon: CheckCircle,
      status: "upcoming"
    },
    {
      step: 3,
      title: "Abstract Acceptance",
      description: "Notification by September 30, 2025",
      icon: Calendar,
      status: "upcoming"
    },
    {
      step: 4,
      title: "Full Paper Submission",
      description: "6–8 pages. Deadline: October 15, 2025",
      icon: Calendar,
      status: "upcoming"
    }
  ];

  return (
    <section id="registration" className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Registration Steps */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-primary text-center mb-8 sm:mb-12">Registration Process</h3>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {registrationSteps.map((step) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: step.step * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`text-center ${step.status === 'current' ? 'bg-primary/5 border-primary/20' : 'bg-white'} hover:shadow-lg transition-all duration-300`}>
                  <CardHeader className="pb-4 p-4 sm:p-6">
                    <div className={`mx-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mb-3 sm:mb-4 ${
                      step.status === 'current' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'
                    }`}>
                      <step.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-muted-foreground mb-2">Step {step.step}</div>
                    <CardTitle className="text-base sm:text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Removed Conference Experience block as requested */}
      </div>
    </section>
  );
};

export default EnhancedRegistration;
