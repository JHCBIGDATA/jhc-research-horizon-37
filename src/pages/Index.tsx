
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutConference from '@/components/AboutConference';
import SpeakersSection from '@/components/SpeakersSection';
import CallForPapers from '@/components/CallForPapers';
import Participation from '@/components/Participation';
import EnhancedRegistration from '@/components/EnhancedRegistration';
import Guidelines from '@/components/Guidelines';
import InteractiveSchedule from '@/components/InteractiveSchedule';
import VisualSeparator from '@/components/VisualSeparator';
import Footer from '@/components/Footer';
import FloatingActionButton from '@/components/FloatingActionButton';
import { PageTransition } from '@/components/LoadingStates';
import { motion } from 'framer-motion';

const Index = () => {
  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.warn('Failed to copy text:', error);
    }
  };
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative">
        <Header />
        <HeroSection />
        {/* Enhanced Quick Registration/Brochure highlight */}
        <div className="container mx-auto px-4 py-6">
          <motion.div 
            className="rounded-xl border border-gradient-to-r from-accent/40 to-primary/40 bg-gradient-to-r from-accent/15 via-primary/10 to-accent/15 p-4 sm:p-6 text-center backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -2 }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm md:text-base">
              <motion.div 
                className="flex items-center gap-1.5 sm:gap-2 w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <span className="inline-flex items-center bg-primary/20 text-primary px-2 sm:px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                  📝 Registration
                </span>
                <a className="underline font-medium hover:text-primary transition-colors text-xs sm:text-sm truncate" href="https://tinyurl.com/3p4s4zhj" target="_blank" rel="noopener noreferrer">Open form</a>
              </motion.div>
              
              <div className="hidden sm:block w-px h-6 bg-gradient-to-b from-transparent via-accent/50 to-transparent"></div>
              
              <motion.div 
                className="flex items-center gap-1.5 sm:gap-2 w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <span className="inline-flex items-center bg-accent/20 text-accent px-2 sm:px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                  📄 Brochure
                </span>
                <a className="underline font-medium hover:text-accent transition-colors text-xs sm:text-sm truncate" href="https://www.canva.com/design/DAGslINhSs0/VzEkMwyPX5Seyf-O-W-aqw/edit?utm_content=DAGslINhSs0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noopener noreferrer">View details</a>
              </motion.div>
              
              <div className="hidden sm:block w-px h-6 bg-gradient-to-b from-transparent via-primary/50 to-transparent"></div>
              
              <motion.div 
                className="flex items-center gap-1.5 sm:gap-2 w-full sm:w-auto justify-center"
                whileHover={{ scale: 1.05 }}
              >
                <span className="inline-flex items-center bg-green-500/20 text-green-600 px-2 sm:px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap">
                  💳 Payment
                </span>
                <a className="underline font-medium hover:text-green-600 transition-colors text-xs sm:text-sm truncate" href="#participation-payment">Jump to details</a>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Enhanced visual separators with subtle animations */}
        <div className="relative overflow-hidden">
          <VisualSeparator variant="wave" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-50"></div>
        </div>
        
        <AboutConference />
        
        <div className="relative overflow-hidden">
          <VisualSeparator variant="lines" />
          <div className="absolute inset-0 bg-gradient-to-l from-accent/5 to-primary/5 opacity-30"></div>
        </div>
        
        <SpeakersSection />
        
        <div className="relative overflow-hidden">
          <VisualSeparator variant="dots" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/3 to-accent/3 opacity-40"></div>
        </div>
        
        <CallForPapers />
        
        {/* Enhanced Participation & Payment section - Optimized */}
        <motion.div 
          className="container mx-auto px-4 py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="inline-flex items-center bg-gradient-to-r from-primary/15 to-accent/15 text-primary px-6 py-3 rounded-full text-sm font-medium border border-primary/20">
              <span className="mr-2">💳</span>
              Participation & Payment
            </span>
          </motion.div>
          <div id="participation-payment" className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {/* Optimized Fees Card */}
            <motion.div 
              className="rounded-xl border border-primary/20 bg-gradient-to-br from-white via-primary/5 to-primary/10 shadow-lg hover:shadow-xl transition-shadow duration-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-1">
                  Participation Fees
                </h3>
                <p className="text-sm text-muted-foreground mb-5">Choose your category and proceed to register</p>
                <div className="divide-y divide-gray-100 space-y-2">
                  {[
                    { label: "Participation for students", price: "Rs. 300/-" },
                    { label: "Participation for Faculty/Industry Delegates", price: "Rs. 500/-" },
                    { label: "Paper Presentation for Student", price: "Rs. 600/-" },
                    { label: "Paper Presentation for Faculty", price: "Rs. 800/-" },
                    { label: "Paper Presentation for Industry Delegates", price: "Rs. 2000/-" }
                  ].map((item, index) => (
                    <div 
                      key={item.label}
                      className="flex items-center justify-between py-3 px-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all duration-200 border border-transparent hover:border-primary/10"
                    >
                      <div className="text-sm font-medium text-gray-700">{item.label}</div>
                      <div className="text-lg font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Optimized Bank Card */}
            <motion.div 
              className="rounded-xl border border-accent/20 bg-gradient-to-br from-white via-accent/5 to-accent/10 shadow-lg hover:shadow-xl transition-shadow duration-200"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent mb-1">
                  Bank Details
                </h3>
                <p className="text-sm text-muted-foreground mb-5">Use bank transfer and upload proof during registration</p>
                <div className="grid grid-cols-1 gap-3 text-sm">
                  {[
                    { label: "Beneficiary Name", value: "Sind Educationists Association", copyable: false },
                    { label: "Bank Name", value: "Union Bank of India", copyable: false },
                    { label: "Bank Address", value: "Union Bank of India, V.N Road, Mumbai - 400020", copyable: false },
                    { label: "Bank Account No", value: "319501010029167", copyable: true },
                    { label: "Branch Name", value: "Veer Nariman Road, Mumbai", copyable: false },
                    { label: "IFSC Code", value: "UBIN0531952", copyable: true },
                    { label: "MICR Code", value: "400026021", copyable: false },
                    { label: "PAN No", value: "AAATS1063P", copyable: true }
                  ].map((item, index) => (
                    <div 
                      key={item.label}
                      className="flex items-center justify-between gap-3 p-2 rounded-lg hover:bg-gradient-to-r hover:from-gray-50 hover:to-accent/5 transition-all duration-200"
                    >
                      <span className="text-muted-foreground font-medium">{item.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-right">{item.value}</span>
                        {item.copyable && (
                          <button 
                            className="h-6 px-2 text-xs border border-gray-300 rounded hover:bg-gray-50 transition-colors duration-200 font-medium"
                            onClick={() => copy(item.value)}
                          >
                            Copy
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                  <div className="text-xs text-muted-foreground pt-2 text-center">
                    Payment reference: <span className="font-medium bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">JHC2025-YourName</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        <Participation />
        
        <div className="relative overflow-hidden">
          <VisualSeparator variant="dots" />
          <div className="absolute inset-0 bg-gradient-to-l from-accent/3 to-primary/3 opacity-40"></div>
        </div>
        
        <EnhancedRegistration />
        
        
        
        <Guidelines />
        
        <div className="relative overflow-hidden">
          <VisualSeparator variant="dots" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/3 to-accent/3 opacity-40"></div>
        </div>
        
        <InteractiveSchedule />
        
        <Footer />
        
        <FloatingActionButton />
      </div>
    </PageTransition>
  );
};

export default Index;
