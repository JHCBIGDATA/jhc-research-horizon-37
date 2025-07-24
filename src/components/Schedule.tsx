
import { Clock, Users, Award, Presentation } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Schedule = () => {
  const day1Schedule = [
    {
      time: "9:00 AM - 10:00 AM",
      event: "Registration & Welcome",
      icon: Users,
      description: "Participant registration and conference inauguration"
    },
    {
      time: "10:00 AM - 11:30 AM",
      event: "Keynote Session",
      icon: Presentation,
      description: "Opening keynote by industry leaders"
    },
    {
      time: "12:00 PM - 1:30 PM",
      event: "Technical Sessions",
      icon: Clock,
      description: "Paper presentations and panel discussions"
    },
    {
      time: "2:30 PM - 4:00 PM",
      event: "Research Presentations",
      icon: Award,
      description: "Selected research paper presentations"
    }
  ];

  const day2Schedule = [
    {
      time: "9:00 AM - 10:30 AM",
      event: "Workshop Sessions",
      icon: Users,
      description: "Hands-on workshops and interactive sessions"
    },
    {
      time: "11:00 AM - 12:30 PM",
      event: "Industry Panel",
      icon: Presentation,
      description: "Industry experts sharing insights and trends"
    },
    {
      time: "1:30 PM - 3:00 PM",
      event: "Networking Session",
      icon: Clock,
      description: "Networking opportunities and collaboration discussions"
    },
    {
      time: "3:30 PM - 4:30 PM",
      event: "Awards & Closing",
      icon: Award,
      description: "Best paper awards and conference conclusion"
    }
  ];

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Conference Schedule</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Two days of intensive learning, networking, and knowledge sharing
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Day 1 - 21st November 2025</h3>
            <div className="space-y-4">
              {day1Schedule.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{item.event}</CardTitle>
                        <p className="text-sm text-accent font-medium">{item.time}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Day 2 - 22nd November 2025</h3>
            <div className="space-y-4">
              {day2Schedule.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                        <item.icon className="h-5 w-5 text-accent" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{item.event}</CardTitle>
                        <p className="text-sm text-primary font-medium">{item.time}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            * Schedule is tentative and subject to change. Final schedule will be shared closer to the conference date.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
