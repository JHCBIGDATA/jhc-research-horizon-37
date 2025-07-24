
import Header from '@/components/Header';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

const FAQPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <FAQSection />
      </div>
      <Footer />
    </div>
  );
};

export default FAQPage;
