
import { Mail, MapPin, Phone, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Contact = () => {
  return (
    <section id="contact" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Contact Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with us for any queries regarding the conference, submissions, or registration
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <CardTitle>Email</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">jhc.research@jaihindcollege.edu.in</p>
                <p className="text-sm text-muted-foreground mt-2">
                  For all conference-related inquiries, abstract submissions, and registration queries
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <CardTitle>Address</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Jai Hind College (Empowered Autonomous)<br />
                  'A' Road, Churchgate<br />
                  Mumbai - 400020<br />
                  Maharashtra, India
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Globe className="h-6 w-6 text-primary" />
                  <CardTitle>Conference Organizer</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <strong>Mr. Wilson Rao</strong><br />
                  Convenor & HOD<br />
                  Department of B.Sc. IT, B.Voc. SD & M.Sc. Big Data Analytics
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-bold text-primary mb-6">Location Map</h3>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Interactive map will be available<br />
                  Jai Hind College, Churchgate, Mumbai
                </p>
              </div>
            </div>
            
            <div className="mt-6 space-y-4">
              <h4 className="font-semibold text-primary">Quick Contact</h4>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <strong>Conference Email:</strong> jhc.research@jaihindcollege.edu.in
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Institution:</strong> Jai Hind College (Empowered Autonomous)
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>Department:</strong> Big Data Analytics, B.Sc. IT, B.Voc. SD
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
