
import { Clock, Users, Award, Presentation, MapPin } from 'lucide-react';
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

  const getEventBg = (type: string) => {
    switch (type) {
      case 'Keynote': return 'from-purple-50 to-purple-100';
      case 'Technical': return 'from-blue-50 to-blue-100';
      case 'Workshop': return 'from-green-50 to-green-100';
      case 'Panel': return 'from-orange-50 to-orange-100';
      case 'Research': return 'from-red-50 to-red-100';
      case 'Poster': return 'from-yellow-50 to-yellow-100';
      case 'Opening': return 'from-indigo-50 to-indigo-100';
      case 'Closing': return 'from-pink-50 to-pink-100';
      default: return 'from-gray-50 to-gray-100';
    }
  };

  const getEventIconColor = (type: string) => {
    switch (type) {
      case 'Keynote': return 'from-purple-500 to-purple-600';
      case 'Technical': return 'from-blue-500 to-blue-600';
      case 'Workshop': return 'from-green-500 to-green-600';
      case 'Panel': return 'from-orange-500 to-orange-600';
      case 'Research': return 'from-red-500 to-red-600';
      case 'Poster': return 'from-yellow-500 to-yellow-600';
      case 'Opening': return 'from-indigo-500 to-indigo-600';
      case 'Closing': return 'from-pink-500 to-pink-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="schedule" className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            📅 Conference Schedule
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Interactive Schedule</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Two days of intensive learning, networking, and knowledge sharing with industry experts
          </p>
        </div>

        {/* Enhanced Day Selector */}
        <div className="flex justify-center mb-8 sm:mb-12 px-4">
          <div className="bg-gradient-to-r from-white via-primary/5 to-white rounded-full p-1 sm:p-2 shadow-xl backdrop-blur-sm border border-primary/10 w-full max-w-2xl">
            <div className="flex space-x-1 sm:space-x-2">
              {[1, 2].map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDay(day as 1 | 2)}
                  className={`flex-1 px-3 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 relative overflow-hidden ${
                    selectedDay === day
                      ? 'bg-gradient-to-r from-primary via-accent to-primary text-white shadow-2xl'
                      : 'text-primary hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-primary/80'
                  }`}
                >
                  <span className="relative z-10 whitespace-nowrap">
                    <span className="hidden sm:inline">Day {day} - {day === 1 ? '01st December' : '02nd December'}</span>
                    <span className="sm:hidden">Day {day}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Schedule Timeline */}
        <div className="relative">
          {/* Gradient timeline */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-primary/20 rounded-full shadow-sm"></div>
          <div className="space-y-6 sm:space-y-8">
            {schedule[selectedDay].map((item, index) => (
              <div key={`${selectedDay}-${index}`} className="relative group">
                {/* Timeline dot */}
                <div className={`absolute left-4 sm:left-6 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-3 sm:border-4 border-white shadow-xl flex items-center justify-center z-10 bg-gradient-to-r ${getEventIconColor(item.type)}`}>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                </div>
                <div className="ml-12 sm:ml-16 md:ml-20">
                  <Card className={`group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br ${getEventBg(item.type)} backdrop-blur-sm relative overflow-hidden`}>
                    {/* Gradient overlay on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${getEventIconColor(item.type)} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                    <CardHeader className="pb-4 relative z-10 p-4 sm:p-6">
                      <div className="flex items-start justify-between flex-col sm:flex-row gap-3 sm:gap-0">
                        <div className="flex items-center space-x-3 sm:space-x-4">
                          <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${getEventIconColor(item.type)} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                            <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className={`text-lg sm:text-xl font-bold text-gray-800 group-hover:scale-105 transition-transform`}>
                              {item.event}
                            </CardTitle>
                            <p className="text-sm font-medium flex items-center gap-2">
                              <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-accent" />
                              <span className="text-accent text-xs sm:text-sm">{item.time}</span>
                            </p>
                          </div>
                        </div>
                        <div className="self-start">
                          <Badge className={`${getEventColor(item.type)} border-0 px-2 sm:px-3 py-1 text-xs font-semibold shadow-lg`}>
                            {item.type}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4 sm:space-y-6 relative z-10 p-4 sm:p-6 pt-0">
                      <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                        {item.description}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-blue-200">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                            <MapPin className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-sm font-medium text-gray-700">{item.venue}</span>
                        </div>
                        {item.speakers.length > 0 && (
                          <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/50 backdrop-blur-sm border border-purple-200">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center">
                              <Users className="h-4 w-4 text-white" />
                            </div>
                            <span className="text-sm font-medium text-gray-700 truncate">
                              {item.speakers.join(', ')}
                            </span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule Note */}
        <div className="mt-12 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-muted-foreground text-sm">
              * Schedule is tentative and subject to change. Final schedule with speaker details 
              will be shared closer to the conference date. All timings are in Indian Standard Time (IST).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSchedule;
