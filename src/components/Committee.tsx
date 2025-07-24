
import { User, Crown, Users, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Committee = () => {
  const leadership = [
    {
      name: "Prof. (Dr.) Vijay Dabholkar",
      role: "Patron & Principal",
      icon: Crown,
      description: "Leading the institution with vision and academic excellence"
    },
    {
      name: "Mr. Wilson Rao",
      role: "Convenor, HOD & Coordinator",
      icon: Award,
      description: "Head of Department and Conference Coordinator"
    }
  ];

  const coreCommittee = [
    "Ms. Sunita Jena",
    "Ms. Tejashree Parab", 
    "Ms. Fatima Shaikh",
    "Ms. Shraddhadevi Singh",
    "Ms. Rohana Deshpande"
  ];

  return (
    <section id="committee" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Organizing Committee</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dedicated faculty and staff members ensuring the success of JHC 2025 National Research Conference
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {leadership.map((leader, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <leader.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{leader.name}</CardTitle>
                <p className="text-accent font-medium">{leader.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{leader.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary mb-8">Core Committee Members</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
            {coreCommittee.map((member, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                    <User className="h-6 w-6 text-accent" />
                  </div>
                  <p className="font-medium text-foreground">{member}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <img 
            src="/lovable-uploads/1d3f69d9-45ec-45a7-a1fd-2b2c47667a56.png" 
            alt="Organizing Team" 
            className="rounded-lg shadow-lg mx-auto max-w-4xl w-full"
          />
          <p className="mt-4 text-sm text-muted-foreground">The dedicated organizing team behind JHC 2025</p>
        </div>
      </div>
    </section>
  );
};

export default Committee;
