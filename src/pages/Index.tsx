
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
import { Button } from '@/components/ui/button';

const Index = () => {
  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (e) {
      // noop
    }
  };
  return (
    <PageTransition>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative">
        <Header />
        <HeroSection />
        {/* Quick Registration/Brochure highlight */}
        <div className="container mx-auto px-4 mt-4">
          <div className="rounded-lg border border-accent/30 bg-accent/10 p-4 text-center text-sm md:text-base">
            <span className="font-semibold">Registration Form:</span> <a className="underline font-medium" href="https://tinyurl.com/3p4s4zhj" target="_blank" rel="noreferrer">Open external form</a>
            <span className="mx-2">|</span>
            <span className="font-semibold">Brochure (with bank details):</span> <a className="underline font-medium" href="https://www.canva.com/design/DAGslINhSs0/VzEkMwyPX5Seyf-O-W-aqw/edit?utm_content=DAGslINhSs0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton" target="_blank" rel="noreferrer">View brochure</a>
            <span className="mx-2">|</span>
            <a className="underline font-medium" href="#participation-payment">Jump to Payment Details</a>
          </div>
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
        
        {/* Participation & Payment section */}
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <span className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">💳 Participation & Payment</span>
          </div>
          <div id="participation-payment" className="grid md:grid-cols-2 gap-6">
            {/* Fees Card */}
            <div className="rounded-xl border border-primary/10 bg-gradient-to-br from-white to-primary/5 shadow-sm">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-1">Participation Fees</h3>
                <p className="text-sm text-muted-foreground mb-5">Choose your category and proceed to register</p>
                <ul className="divide-y divide-gray-100">
                  <li className="flex items-center justify-between py-3">
                    <div className="text-sm">Participation for students</div>
                    <div className="text-base font-semibold tracking-wide">Rs. 300/-</div>
                  </li>
                  <li className="flex items-center justify-between py-3">
                    <div className="text-sm">Participation for Faculty/Industry Delegates</div>
                    <div className="text-base font-semibold tracking-wide">Rs. 500/-</div>
                  </li>
                  <li className="flex items-center justify-between py-3">
                    <div className="text-sm">Paper Presentation for Student</div>
                    <div className="text-base font-semibold tracking-wide">Rs. 600/-</div>
                  </li>
                  <li className="flex items-center justify-between py-3">
                    <div className="text-sm">Paper Presentation for Faculty</div>
                    <div className="text-base font-semibold tracking-wide">Rs. 800/-</div>
                  </li>
                  <li className="flex items-center justify-between py-3">
                    <div className="text-sm">Paper Presentation for Industry Delegates</div>
                    <div className="text-base font-semibold tracking-wide">Rs. 2000/-</div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bank Card */}
            <div className="rounded-xl border border-accent/10 bg-gradient-to-br from-white to-accent/5 shadow-sm">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-1">Bank Details</h3>
                <p className="text-sm text-muted-foreground mb-5">Use bank transfer and upload proof during registration</p>
                <div className="grid grid-cols-1 gap-3 text-sm">
                  <div className="flex items-start justify-between">
                    <span className="text-muted-foreground">Beneficiary Name</span>
                    <span className="font-semibold text-right">Sind Educationists Association</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <span className="text-muted-foreground">Bank Name</span>
                    <span className="font-semibold">Union Bank of India</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <span className="text-muted-foreground">Bank Address</span>
                    <span className="font-semibold text-right">Union Bank of India, V.N Road, Mumbai - 400020</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-muted-foreground">Bank Account No</span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">319501010029167</span>
                      <Button size="xs" variant="outline" className="h-6 px-2" onClick={() => copy('319501010029167')}>Copy</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Branch Name</span>
                    <span className="font-semibold">Veer Nariman Road, Mumbai</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-muted-foreground">IFSC Code</span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">UBIN0531952</span>
                      <Button size="xs" variant="outline" className="h-6 px-2" onClick={() => copy('UBIN0531952')}>Copy</Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">MICR Code</span>
                    <span className="font-semibold">400026021</span>
                  </div>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-muted-foreground">PAN No</span>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">AAATS1063P</span>
                      <Button size="xs" variant="outline" className="h-6 px-2" onClick={() => copy('AAATS1063P')}>Copy</Button>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground pt-1">Payment reference: <span className="font-medium">JHC2025-YourName</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
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
