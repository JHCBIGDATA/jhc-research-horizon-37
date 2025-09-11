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
          question: "What are the participation/registration fees?",
          answer: "Students: Rs. 300/-. Faculty/Industry: Rs. 500/-. Paper Presentation (Student): Rs. 600/-. Paper Presentation (Faculty): Rs. 800/-. Paper Presentation (Industry): Rs. 2000/-."
        },
        {
          question: "Can I attend without presenting a paper?",
          answer: "Yes! You can register as an attendee to participate in all sessions, workshops, and networking events without presenting a paper."
        },
        {
          question: "How do I pay the fees?",
          answer: "Bank transfer to: Beneficiary: Sind Educationists Association. Bank: Union Bank of India. Bank Address: Union Bank of India, V.N Road, Mumbai - 400020. Account No: 319501010029167. Branch: Veer Nariman Road, Mumbai. IFSC: UBIN0531952. MICR: 400026021. PAN: AAATS1063P. Use reference: JHC2025-YourName. Upload proof in the registration form or email it to the conference team."
        },
        {
          question: "What format should I use for paper submission?",
          answer: "All papers must follow the conference template (IEEE-like). Submit in PDF. Plagiarism should be ≤ 15%."
        }
      ]
    },
    {
      category: "Conference Details",
      questions: [
        {
          question: "Will the conference be hybrid (online + offline)?",
          answer: "The conference is in-person at Jai Hind College, Mumbai. Select sessions may be recorded for internal archiving only and will not be publicly shared."
        },
        {
          question: "What networking opportunities are available?",
          answer: "We offer welcome reception, coffee breaks, lunch networking, industry panel discussions, and a dedicated networking session on Day 2."
        },
        {
          question: "Are workshop/presentation resources provided?",
          answer: "Presenters will have access to required resources and AV support. Attendees may receive select materials at the organizers' discretion."
        },
        {
          question: "Will session recordings be available?",
          answer: "Recordings might be taken for internal use and archival. They will not be distributed."
        }
      ]
    },
    {
      category: "Publication & Awards",
      questions: [
        {
          question: "How are papers selected?",
          answer: "Papers are evaluated by multiple judges on technical quality, novelty, clarity, and impact. Judges discuss collectively to decide the overall result."
        },
        {
          question: "When are awards announced?",
          answer: "Awards and recognitions are announced on Day 2 during the closing ceremony."
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
          answer: "We provide a list of recommended hotels near the venue. Participants make their own bookings."
        },
        {
          question: "How do I reach Jai Hind College from Mumbai Airport?",
          answer: "The college is ~45–60 minutes from the airport. Options: taxi, Uber/Ola, or local train (Churchgate station is the nearest)."
        },
        {
          question: "Will food be provided?",
          answer: "Food is generally provided during the conference (tea/coffee breaks and meals). Final details will be shared with registered participants."
        },
        {
          question: "Is parking available at the venue?",
          answer: "No official parking will be available on campus. Please use public transport or ride-sharing services."
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
          answer: "General WiFi will not be provided. Presenters will have required connectivity for their sessions."
        },
        {
          question: "Who can I contact for technical support during the event?",
          answer: "Our technical support team will be available at the registration desk and in each session room for immediate assistance."
        },
        {
          question: "Can I make changes to my submitted paper after the deadline?",
          answer: "Minor revisions may be allowed until the camera-ready deadline (November 5, 2025). Major changes require committee approval."
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
