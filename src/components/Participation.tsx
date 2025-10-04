
import { GraduationCap, Users } from 'lucide-react';
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
      </div>
    </section>
  );
};

export default Participation;
