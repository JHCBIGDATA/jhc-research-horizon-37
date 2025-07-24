import { motion } from 'framer-motion';
import { HelpCircle, Plus, Minus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useState } from 'react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      category: "Registration & Submission",
      questions: [
        {
          question: "What is the registration fee for the conference?",
          answer: "Registration fees are: Students - ₹2,500, Academics - ₹4,000, Industry - ₹6,000. Early bird discounts of 20% are available until 15th October 2025."
        },
        {
          question: "Can I attend without presenting a paper?",
          answer: "Yes! You can register as an attendee to participate in all sessions, workshops, and networking events without presenting a paper."
        },
        {
          question: "What format should I use for paper submission?",
          answer: "All papers must follow IEEE format. Templates are available for download on our website. Papers should be submitted in PDF format only."
        },
        {
          question: "Is there a limit on the number of papers I can submit?",
          answer: "You can submit multiple papers, but each submission will require separate registration fees if accepted."
        }
      ]
    },
    {
      category: "Conference Details",
      questions: [
        {
          question: "Will the conference be hybrid (online + offline)?",
          answer: "The conference will be primarily in-person at Jai Hind College, Mumbai. Selected sessions may be live-streamed for virtual participants."
        },
        {
          question: "What networking opportunities are available?",
          answer: "We offer welcome reception, coffee breaks, lunch networking, industry panel discussions, and a dedicated networking session on Day 2."
        },
        {
          question: "Are workshop materials provided?",
          answer: "Yes, all workshop participants receive materials including datasets, code samples, and reference guides. Digital copies will be shared via email."
        },
        {
          question: "Will session recordings be available?",
          answer: "Keynote sessions and selected presentations will be recorded and shared with registered participants within a week after the conference."
        }
      ]
    },
    {
      category: "Publication & Awards",
      questions: [
        {
          question: "How are papers selected for journal publication?",
          answer: "The top 15-20% of accepted papers will be recommended for fast-track review in partner UGC CARE listed and international journals."
        },
        {
          question: "What are the criteria for awards?",
          answer: "Awards are based on technical quality, novelty, presentation quality, and potential impact. All submitted papers are automatically considered for relevant awards."
        },
        {
          question: "When will award winners be announced?",
          answer: "Awards will be announced and presented during the closing ceremony on 22nd November 2025."
        },
        {
          question: "Do I need to be present to win an award?",
          answer: "Physical presence is required for award consideration as evaluation includes presentation quality and Q&A session performance."
        }
      ]
    },
    {
      category: "Travel & Accommodation",
      questions: [
        {
          question: "Is accommodation provided for outstation participants?",
          answer: "We provide a list of recommended hotels near the venue with special conference rates. Participants need to make their own bookings."
        },
        {
          question: "How do I reach Jai Hind College from Mumbai Airport?",
          answer: "The college is 45-60 minutes from the airport. You can take a taxi, Uber/Ola, or local train (Churchgate station is the nearest)."
        },
        {
          question: "Are meals included in the registration fee?",
          answer: "Yes, registration includes welcome breakfast, lunch on both days, tea/coffee breaks, and closing reception."
        },
        {
          question: "Is parking available at the venue?",
          answer: "Limited parking is available on campus. We recommend using public transport or ride-sharing services for convenient access."
        }
      ]
    },
    {
      category: "Technical & Support",
      questions: [
        {
          question: "What presentation equipment is provided?",
          answer: "All rooms have projectors, microphones, and laptop connectivity (HDMI/VGA). Presenters should bring their own laptops."
        },
        {
          question: "Is WiFi available throughout the venue?",
          answer: "Yes, high-speed WiFi is available throughout the campus. Login credentials will be provided during registration."
        },
        {
          question: "Who can I contact for technical support during the event?",
          answer: "Our technical support team will be available at the registration desk and in each session room for immediate assistance."
        },
        {
          question: "Can I make changes to my submitted paper after the deadline?",
          answer: "Minor revisions may be allowed until the camera-ready deadline (1st November 2025). Major changes require committee approval."
        }
      ]
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4"
            whileHover={{ scale: 1.05 }}
          >
            ❓ Frequently Asked Questions
          </motion.div>
          <h2 className="text-4xl font-bold text-primary mb-4">Got Questions?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about registration, submissions, venue, and conference logistics
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center">
                <HelpCircle className="h-6 w-6 mr-3" />
                {category.category}
              </h3>
              
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = categoryIndex * 10 + questionIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <Card key={questionIndex} className="overflow-hidden hover:shadow-md transition-all duration-300">
                      <Collapsible>
                        <CollapsibleTrigger 
                          className="w-full"
                          onClick={() => toggleItem(globalIndex)}
                        >
                          <CardContent className="p-6 hover:bg-gray-50 transition-colors duration-200">
                            <div className="flex items-center justify-between">
                              <h4 className="text-left font-medium text-primary pr-4">
                                {faq.question}
                              </h4>
                              <motion.div
                                animate={{ rotate: isOpen ? 180 : 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                {isOpen ? (
                                  <Minus className="h-5 w-5 text-accent flex-shrink-0" />
                                ) : (
                                  <Plus className="h-5 w-5 text-accent flex-shrink-0" />
                                )}
                              </motion.div>
                            </div>
                          </CardContent>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ 
                              opacity: isOpen ? 1 : 0, 
                              height: isOpen ? 'auto' : 0 
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-6 pt-0">
                              <div className="border-t border-gray-100 pt-4">
                                <p className="text-muted-foreground leading-relaxed">
                                  {faq.answer}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        </CollapsibleContent>
                      </Collapsible>
                    </Card>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
