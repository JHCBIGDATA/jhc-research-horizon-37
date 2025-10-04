
import { FileText, Mail, Calendar, CheckCircle, Star, Award, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Guidelines = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  
  const steps = [
    {
      icon: FileText,
      title: "Abstract Preparation",
      description: "Prepare your abstract (250-300 words) in PDF format using Times New Roman, Size 12, 1.15 spacing, justified text",
      gradient: "from-blue-500 to-purple-600",
      bgGradient: "from-blue-50 to-purple-50"
    },
    {
      icon: Mail,
      title: "Include Details",
      description: "Include title, author(s), affiliations, email IDs, and contact numbers on the cover page",
      gradient: "from-emerald-500 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    {
      icon: CheckCircle,
      title: "Review Process",
      description: "All submissions will undergo a rigorous peer-review process by expert panels",
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-50 to-orange-50"
    },
    {
      icon: Calendar,
      title: "Presentation",
      description: "Approved submissions will be invited for oral presentation at the conference",
      gradient: "from-pink-500 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50"
    }
  ];

  return (
    <section id="guidelines" className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-white to-primary/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-primary/5 to-accent/5 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            left: '10%',
            top: '20%',
          }}
        />
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-l from-accent/5 to-primary/5 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            right: '10%',
            bottom: '20%',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 px-4 py-2 rounded-full mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Star className="w-4 h-4 text-primary mr-2" />
            <span className="text-primary text-sm font-medium">Submission Excellence</span>
          </motion.div>
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Submission Guidelines
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Follow these comprehensive guidelines to ensure your research submission meets our conference 
            standards and maximizes your chances of acceptance
          </motion.p>
        </motion.div>

        {/* Enhanced Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
              className="group"
            >
              <Card className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group-hover:shadow-primary/10">
                {/* Gradient overlay */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${step.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
                
                {/* Decorative corner */}
                <motion.div 
                  className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${step.gradient} opacity-10 rounded-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-700`}
                />
                
                <CardHeader className="text-center pb-4 relative z-10">
                  <motion.div 
                    className={`mx-auto w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                    animate={{ 
                      scale: hoveredStep === index ? 1.1 : 1,
                      rotate: hoveredStep === index ? 360 : 0
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <step.icon className="h-7 w-7 text-white" />
                  </motion.div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Detailed Requirements */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-2xl overflow-hidden">
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-primary to-accent p-6 sm:p-8 text-white relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent"
                animate={{ x: ['100%', '-100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <div className="relative z-10 flex items-center gap-4">
                <motion.div
                  className="p-3 bg-white/20 rounded-full backdrop-blur-sm"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award className="h-8 w-8 text-white" />
                </motion.div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold">Detailed Requirements</h3>
                  <p className="text-white/90 text-sm sm:text-base mt-1">Professional standards for research excellence</p>
                </div>
              </div>
            </div>

            <CardContent className="p-6 sm:p-8">
              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
                {/* Format Specifications */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <motion.div 
                      className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <h4 className="text-xl sm:text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      Format Specifications
                    </h4>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      "Abstract length: 250-300 words",
                      "Font: Times New Roman, Size 12",
                      "Line spacing: 1.15",
                      "Text alignment: Justified",
                      "File format: PDF only"
                    ].map((spec, index) => (
                      <motion.div
                        key={spec}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 border border-transparent hover:border-blue-100">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          </motion.div>
                          <span className="text-gray-700 group-hover:text-blue-700 transition-colors duration-300 font-medium">
                            {spec}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                {/* Required Information */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="relative">
                    <motion.div 
                      className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                    <h4 className="text-xl sm:text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                      <div className="p-2 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-lg">
                        <Mail className="h-6 w-6 text-emerald-600" />
                      </div>
                      Required Information
                    </h4>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      "Research paper title",
                      "Author name(s) and credentials",
                      "Institutional affiliations",
                      "Contact email addresses",
                      "Phone numbers"
                    ].map((info, index) => (
                      <motion.div
                        key={info}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <div className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 transition-all duration-300 border border-transparent hover:border-emerald-100">
                          <motion.div
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.3 }}
                          >
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          </motion.div>
                          <span className="text-gray-700 group-hover:text-emerald-700 transition-colors duration-300 font-medium">
                            {info}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Enhanced CTA Section */}
              <motion.div 
                className="mt-8 sm:mt-12 p-6 sm:p-8 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl border border-primary/10 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent" />
                <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Download className="h-8 w-8 text-primary" />
                  </motion.div>
                  <div className="text-center sm:text-left flex-1">
                    <h4 className="text-lg sm:text-xl font-bold text-primary mb-2">Ready to Submit?</h4>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      Download our submission template and follow these guidelines for the best results
                    </p>
                  </div>
                  <motion.button
                    className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.open('https://tinyurl.com/3p4s4zhj', '_blank', 'noopener,noreferrer')}
                  >
                    Start Submission
                  </motion.button>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Guidelines;
