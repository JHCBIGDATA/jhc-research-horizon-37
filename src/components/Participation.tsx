
import { GraduationCap, Users, Award, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Participation = () => {
  const participants = [
    {
      icon: GraduationCap,
      title: "Students & Academics",
      categories: [
        "B.Sc/M.Sc in IT, Computer Science, Data Science",
        "B.Voc Software Development",
        "M.Sc Big Data Analytics",
        "Engineering students from tech institutions"
      ]
    },
    {
      icon: Users,
      title: "Professionals & Researchers",
      categories: [
        "Industry professionals in AI/ML/Data Science",
        "Research scientists and Ph.D. scholars",
        "Data analysts and cybersecurity experts",
        "Cloud computing specialists"
      ]
    }
  ];

  const outcomes = [
    {
      icon: Users,
      title: "Network with Leaders",
      description: "Connect with top researchers, industry experts, and academic leaders in your field"
    },
    {
      icon: BookOpen,
      title: "Present & Publish",
      description: "Present your research and get published in UGC CARE or international journals"
    },
    {
      icon: Award,
      title: "Recognition & Awards",
      description: "Compete for best paper awards and receive recognition from expert panels"
    },
    {
      icon: GraduationCap,
      title: "Learn & Collaborate",
      description: "Explore new use cases, collaborate across domains, and gain peer-reviewed feedback"
    }
  ];

  return (
    <section id="participation" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Who Can Participate</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Open to students, professionals, researchers, and academicians from diverse backgrounds 
            in technology, science, and related fields
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {participants.map((participant, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <participant.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{participant.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {participant.categories.map((category, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{category}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-bold text-primary text-center mb-12">Key Outcomes</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((outcome, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <outcome.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{outcome.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{outcome.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Participation;
