
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

        {/* Simplified Detailed Requirements */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white border border-gray-200 shadow-lg overflow-hidden">
            {/* Compact Header */}
            <div className="bg-gradient-to-r from-primary to-accent p-4 text-white">
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-white" />
                <div>
                  <h3 className="text-xl font-bold">Detailed Requirements</h3>
                  <p className="text-white/90 text-sm">Professional standards for research excellence</p>
                </div>
              </div>
            </div>

            <CardContent className="p-4">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Format Specifications */}
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    Format Specifications
                  </h4>
                  
                  <div className="space-y-2">
                    {[
                      "Abstract length: 250-300 words",
                      "Font: Times New Roman, Size 12",
                      "Line spacing: 1.15",
                      "Text alignment: Justified",
                      "File format: PDF only"
                    ].map((spec) => (
                      <div key={spec} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Required Information */}
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                    <Mail className="h-5 w-5 text-emerald-600" />
                    Required Information
                  </h4>
                  
                                    <div className="space-y-2">
                    {[
                      "Research paper title",
                      "Author name(s) and credentials",
                      "Institutional affiliations",
                      "Contact email addresses",
                      "5-7 relevant keywords",
                      "Abstract (250-300 words)"
                    ].map((info) => (
                      <div key={info} className="flex items-start space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{info}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Compact CTA Section */}
              <div className="mt-6 p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-primary/10">
                <div className="flex items-center gap-4">
                  <Download className="h-6 w-6 text-primary" />
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-primary">Ready to Submit?</h4>
                    <p className="text-sm text-muted-foreground">Download template and follow guidelines</p>
                  </div>
                  <button
                    className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white font-medium rounded-lg shadow hover:shadow-lg transition-all duration-200"
                    onClick={() => window.open('https://tinyurl.com/3p4s4zhj', '_blank', 'noopener,noreferrer')}
                  >
                    Start Submission
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

export default Guidelines;
