
import { motion } from 'framer-motion';
import { Clock, Users, Award, Presentation, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const InteractiveSchedule = () => {
  const [selectedDay, setSelectedDay] = useState<1 | 2>(1);

  const schedule = {
    1: [
      {
        time: "9:00 AM - 10:00 AM",
        event: "Registration & Welcome",
        icon: Users,
        description: "Participant registration and conference inauguration ceremony",
        venue: "Main Auditorium",
        type: "Opening",
        speakers: ["Dr. Ajit Kelkar", "Prof. Meeta Vyas"]
      },
      {
        time: "10:00 AM - 11:30 AM",
        event: "Keynote Session",
        icon: Presentation,
        description: "Opening keynote by leading AI researchers and industry experts",
        venue: "Main Auditorium",
        type: "Keynote",
        speakers: ["Dr. Rajeev Rastogi", "Prof. Sunita Sarawagi"]
      },
      {
        time: "11:30 AM - 12:00 PM",
        event: "Networking Break",
        icon: Clock,
        description: "Coffee break and networking session",
        venue: "Lobby Area",
        type: "Break",
        speakers: []
      },
      {
        time: "12:00 PM - 1:30 PM",
        event: "Technical Sessions - Track A",
        icon: Clock,
        description: "Parallel technical sessions on AI and Machine Learning",
        venue: "Seminar Hall A",
        type: "Technical",
        speakers: ["Dr. Amit Kumar", "Prof. Priya Sharma"]
      },
      {
        time: "12:00 PM - 1:30 PM",
        event: "Technical Sessions - Track B",
        icon: Clock,
        description: "Parallel technical sessions on Data Science and Analytics",
        venue: "Seminar Hall B",
        type: "Technical",
        speakers: ["Dr. Neha Gupta", "Prof. Rajesh Patel"]
      },
      {
        time: "1:30 PM - 2:30 PM",
        event: "Lunch Break",
        icon: Clock,
        description: "Lunch and informal networking",
        venue: "Cafeteria",
        type: "Break",
        speakers: []
      },
      {
        time: "2:30 PM - 4:00 PM",
        event: "Research Presentations",
        icon: Award,
        description: "Selected research paper presentations by participants",
        venue: "Main Auditorium",
        type: "Research",
        speakers: ["Various Participants"]
      },
      {
        time: "4:00 PM - 4:30 PM",
        event: "Tea Break",
        icon: Clock,
        description: "Evening tea and discussions",
        venue: "Lobby Area",
        type: "Break",
        speakers: []
      },
      {
        time: "4:30 PM - 5:30 PM",
        event: "Panel Discussion",
        icon: Users,
        description: "Industry panel on future trends in AI and Data Science",
        venue: "Main Auditorium",
        type: "Panel",
        speakers: ["Industry Experts Panel"]
      }
    ],
    2: [
      {
        time: "9:00 AM - 10:30 AM",
        event: "Workshop Sessions - Track A",
        icon: Users,
        description: "Hands-on workshop on Generative AI applications",
        venue: "Computer Lab 1",
        type: "Workshop",
        speakers: ["Dr. Anand Desai", "Prof. Kavitha Rao"]
      },
      {
        time: "9:00 AM - 10:30 AM",
        event: "Workshop Sessions - Track B",
        icon: Users,
        description: "Hands-on workshop on Big Data Analytics",
        venue: "Computer Lab 2",
        type: "Workshop",
        speakers: ["Dr. Sanjay Mehta", "Prof. Ritu Singh"]
      },
      {
        time: "10:30 AM - 11:00 AM",
        event: "Coffee Break",
        icon: Clock,
        description: "Morning refreshments and networking",
        venue: "Lobby Area",
        type: "Break",
        speakers: []
      },
      {
        time: "11:00 AM - 12:30 PM",
        event: "Industry Panel",
        icon: Presentation,
        description: "Industry experts sharing insights on emerging trends",
        venue: "Main Auditorium",
        type: "Panel",
        speakers: ["Industry Leaders Panel"]
      },
      {
        time: "12:30 PM - 1:30 PM",
        event: "Lunch Break",
        icon: Clock,
        description: "Lunch and networking opportunities",
        venue: "Cafeteria",
        type: "Break",
        speakers: []
      },
      {
        time: "1:30 PM - 3:00 PM",
        event: "Poster Session",
        icon: Clock,
        description: "Poster presentations and interactive discussions",
        venue: "Exhibition Hall",
        type: "Poster",
        speakers: ["Research Participants"]
      },
      {
        time: "3:00 PM - 3:30 PM",
        event: "Tea Break",
        icon: Clock,
        description: "Afternoon tea and final networking",
        venue: "Lobby Area",
        type: "Break",
        speakers: []
      },
      {
        time: "3:30 PM - 4:30 PM",
        event: "Awards & Closing Ceremony",
        icon: Award,
        description: "Best paper awards and conference conclusion",
        venue: "Main Auditorium",
        type: "Closing",
        speakers: ["Conference Committee", "Chief Guest"]
      }
    ]
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'Keynote': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'Technical': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Workshop': return 'bg-green-100 text-green-800 border-green-200';
      case 'Panel': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Research': return 'bg-red-100 text-red-800 border-red-200';
      case 'Poster': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Opening': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'Closing': return 'bg-pink-100 text-pink-800 border-pink-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="schedule" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            📅 Conference Schedule
          </motion.div>
          <h2 className="text-4xl font-bold text-primary mb-4">Interactive Schedule</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Two days of intensive learning, networking, and knowledge sharing with industry experts
          </p>
        </motion.div>

        {/* Day Selector */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-full p-2 shadow-lg">
            <div className="flex space-x-2">
              {[1, 2].map((day) => (
                <motion.button
                  key={day}
                  onClick={() => setSelectedDay(day as 1 | 2)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedDay === day
                      ? 'bg-primary text-white shadow-lg'
                      : 'text-primary hover:bg-primary/10'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Day {day} - {day === 1 ? '21st November' : '22nd November'}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Schedule Timeline */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
          <div className="space-y-6">
            {schedule[selectedDay].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg"></div>
                <div className="ml-16">
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <item.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <CardTitle className="text-lg group-hover:text-primary transition-colors">
                              {item.event}
                            </CardTitle>
                            <p className="text-sm text-accent font-medium">{item.time}</p>
                          </div>
                        </div>
                        <Badge className={`${getEventColor(item.type)} border`}>
                          {item.type}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">{item.venue}</span>
                        </div>
                        {item.speakers.length > 0 && (
                          <div className="flex items-center space-x-2">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">
                              {item.speakers.join(', ')}
                            </span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Schedule Note */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-muted-foreground text-sm">
              * Schedule is tentative and subject to change. Final schedule with speaker details 
              will be shared closer to the conference date. All timings are in Indian Standard Time (IST).
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveSchedule;
