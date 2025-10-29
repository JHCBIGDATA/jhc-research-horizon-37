import { motion } from 'framer-motion';
import { Send, CheckCircle, FileText, Award, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const EnhancedRegistration = () => {
  const registrationSteps = [
    {
      step: 1,
      title: "Call for Papers & Registration",
      description: "Opens on September 5, 2025",
      details: "Registration portal launches with submission guidelines",
      icon: Send,
      status: "current",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      step: 2,
      title: "Abstract Submission",
      description: "Max 300 words. Deadline: September 25, 2025",
      details: "Submit research abstract with keywords and author details",
      icon: FileText,
      status: "upcoming",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      step: 3,
      title: "Abstract Acceptance",
      description: "Notification by September 30, 2025",
      details: "Review results and acceptance notification via email",
      icon: CheckCircle,
      status: "upcoming", 
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50"
    },
    {
      step: 4,
      title: "Full Paper Submission",
      description: "6–8 pages. Deadline: October 15, 2025",
      details: "Complete paper following conference template",
      icon: Award,
      status: "upcoming",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50"
    }
  ];

  return (
    <section id="registration" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center bg-gradient-to-r from-primary/15 to-accent/15 text-primary px-6 py-3 rounded-full text-sm font-medium mb-6 border border-primary/20"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Clock className="w-4 h-4 mr-2" />
            Step-by-Step Process
          </motion.div>
          
          <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
            Registration Process
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow these simple steps to submit your research and join JHC 2025
          </p>
        </motion.div>

        {/* Enhanced Registration Steps */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white border border-gray-200 shadow-lg overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-accent p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-lg">
                  <Send className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold">Registration Timeline</h4>
                  <p className="text-white/90 text-sm">Important dates and deadlines</p>
                </div>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="grid gap-6">
                {registrationSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className={`relative p-4 rounded-lg border-2 transition-all duration-300 ${
                      step.status === 'current' 
                        ? 'border-green-200 bg-gradient-to-r from-green-50 to-emerald-50' 
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}>
                      {/* Status indicator */}
                      <div className={`absolute top-4 right-4 w-3 h-3 rounded-full ${
                        step.status === 'current' ? 'bg-green-500 animate-pulse' : 'bg-gray-300'
                      }`}></div>
                      
                      <div className="flex items-start gap-4">
                        {/* Step number and icon */}
                        <div className="flex-shrink-0">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-2 ${
                            step.status === 'current' 
                              ? `bg-gradient-to-r ${step.color} text-white` 
                              : 'bg-gray-100 text-gray-400'
                          }`}>
                            <step.icon className="h-6 w-6" />
                          </div>
                          <div className="text-center">
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                              step.status === 'current'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-gray-100 text-gray-600'
                            }`}>
                              Step {step.step}
                            </span>
                          </div>
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h5 className="text-lg font-semibold text-gray-800">{step.title}</h5>
                            {step.status === 'current' && (
                              <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full font-medium">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-sm font-medium text-primary mb-1">{step.description}</p>
                          <p className="text-xs text-muted-foreground">{step.details}</p>
                        </div>
                        
                        {/* Arrow for flow */}
                        {index < registrationSteps.length - 1 && (
                          <div className="hidden md:block absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                            <ArrowRight className="h-5 w-5 text-gray-300 rotate-90" />
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="mt-8 p-4 sm:p-6 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Send className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base sm:text-lg font-semibold text-primary">Ready to Get Started?</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">Begin your submission journey today</p>
                  </div>
                  <button
                    className="w-full sm:w-auto px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-primary to-accent text-white font-medium text-sm sm:text-base rounded-lg shadow hover:shadow-lg transition-all duration-200 group"
                    onClick={() => window.open('https://tinyurl.com/3p4s4zhj', '_blank', 'noopener,noreferrer')}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Start Registration
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default EnhancedRegistration;
