
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ImageGallery from '@/components/ImageGallery';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const GalleryPage = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const brochurePath = '/Nationalconference_JHC_MSc_BDA.pdf';

  const handleBrochureDownload = async () => {
    if (isDownloading) return;

    try {
      setIsDownloading(true);
      const response = await fetch(brochurePath);
      if (!response.ok) {
        throw new Error('Unable to reach brochure');
      }

      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = downloadUrl;
      anchor.download = 'JHC-2026-Conference-Brochure.pdf';
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      window.URL.revokeObjectURL(downloadUrl);

      toast({
        title: 'Brochure download started',
        description: 'Check your downloads folder for the latest JHC 2026 conference brochure.',
      });
    } catch (error) {
      console.error('Brochure download failed', error);
      toast({
        title: 'Download failed',
        description: 'We could not start the brochure download. Please try again or contact us for assistance.',
        variant: 'destructive',
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
          {/* Hero Section */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block p-1 bg-gradient-to-r from-primary to-accent rounded-full mb-4">
              <div className="bg-background rounded-full px-6 py-2">
                <span className="text-sm font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Conference Gallery & Resources
                </span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              JHC 2024 Research Conference Gallery
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
              Explore our comprehensive collection of images from the successful JHC 2024 National Research Conference, 
              showcasing keynote sessions, research presentations, awards ceremonies, and memorable moments 
              from our academic community. You&apos;ll also find Gemini-generated concept visuals previewing our 2026 experience.
              Use the search and filter options to discover the stories that inspire our next chapter.
            </p>
            
            {/* Conference Materials Section */}
            <div className="mb-8">
              <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-semibold text-primary mb-1">JHC 2026 Conference Brochure</h3>
                      <p className="text-sm text-muted-foreground">Download the complete conference details, schedule, and guidelines</p>
                    </div>
                  </div>
                  <Button 
                    onClick={handleBrochureDownload}
                    className="w-full sm:w-auto bg-primary hover:bg-primary/90"
                    disabled={isDownloading}
                  >
                    {isDownloading ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Preparing download...
                      </>
                    ) : (
                      <>
                        <Download className="h-4 w-4 mr-2" />
                        Download Conference Brochure
                      </>
                    )}
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">
                    Contains call for papers, registration details, and conference schedule for JHC 2026
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Historical Context Note */}
          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-8 max-w-4xl mx-auto">
            <p className="text-sm text-center text-muted-foreground">
              <span className="font-medium text-accent">📸 Archive & Vision Gallery:</span> Highlights from our successful 
              JHC 2024 National Research Conference sit alongside Gemini-generated concept boards revealing our JHC 2026 vision. 
              These stories energize our planning for an even more impactful experience ahead.
            </p>
          </div>
          
          {/* Gallery Component */}
          <ImageGallery />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GalleryPage;
