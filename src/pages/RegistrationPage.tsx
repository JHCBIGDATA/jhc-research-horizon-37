
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check, Upload, User, Mail, Phone, Building, BookOpen, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const RegistrationPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    designation: '',
    
    // Institution Information
    institution: '',
    department: '',
    city: '',
    state: '',
    
    // Paper Information
    paperTitle: '',
    abstract: '',
    keywords: '',
    category: '',
    
    // File Upload
    abstractFile: null as File | null
  });

  const totalSteps = 4;

  const steps = [
    { number: 1, title: 'Personal Info', icon: User },
    { number: 2, title: 'Institution', icon: Building },
    { number: 3, title: 'Paper Details', icon: BookOpen },
    { number: 4, title: 'Final Review', icon: FileText }
  ];

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (file: File | null) => {
    setFormData(prev => ({ ...prev, abstractFile: file }));
  };

  const handleSubmit = () => {
    // Handle form submission - will be connected to Firebase later
    console.log('Form submitted:', formData);
    alert('Registration submitted successfully! You will receive a confirmation email shortly.');
  };

  const pageVariants = {
    initial: { opacity: 0, x: 50 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -50 }
  };

  const pageTransition = {
    duration: 0.4
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5">
      <Header />
      
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-primary mb-4">Conference Registration</h1>
          <p className="text-xl text-muted-foreground">Join JHC 2025 National Research Conference</p>
        </motion.div>

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between px-2">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <motion.div
                  className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 ${
                    currentStep >= step.number
                      ? 'bg-primary border-primary text-white'
                      : 'bg-white border-gray-300 text-gray-400'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {currentStep > step.number ? (
                    <Check className="h-4 w-4 sm:h-5 sm:w-5" />
                  ) : (
                    <step.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                  )}
                </motion.div>
                {index < steps.length - 1 && (
                  <div className={`h-1 w-8 sm:w-12 md:w-20 mx-2 sm:mx-4 ${
                    currentStep > step.number ? 'bg-primary' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 px-2">
            {steps.map((step) => (
              <span key={step.number} className="text-xs sm:text-sm font-medium text-muted-foreground text-center">
                <span className="hidden sm:inline">{step.title}</span>
                <span className="sm:hidden">{step.number}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Form Steps */}
        <div className="max-w-2xl mx-auto px-4">
          <Card className="shadow-xl">
            <CardHeader className="px-4 sm:px-6 py-4 sm:py-6">
              <CardTitle className="text-xl sm:text-2xl text-center">
                Step {currentStep}: {steps[currentStep - 1].title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 md:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  {/* Step 1: Personal Information */}
                  {currentStep === 1 && (
                      <div className="space-y-4 sm:space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="Enter your email address"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div>
                        <Label htmlFor="designation">Designation *</Label>
                        <Select onValueChange={(value) => handleInputChange('designation', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your designation" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="student">Student</SelectItem>
                            <SelectItem value="faculty">Faculty</SelectItem>
                            <SelectItem value="researcher">Researcher</SelectItem>
                            <SelectItem value="professional">Industry Professional</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Institution Information */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="institution">Institution Name *</Label>
                        <Input
                          id="institution"
                          value={formData.institution}
                          onChange={(e) => handleInputChange('institution', e.target.value)}
                          placeholder="Enter your institution name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="department">Department *</Label>
                        <Input
                          id="department"
                          value={formData.department}
                          onChange={(e) => handleInputChange('department', e.target.value)}
                          placeholder="Enter your department"
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="city">City *</Label>
                          <Input
                            id="city"
                            value={formData.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                            placeholder="Enter your city"
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State *</Label>
                          <Input
                            id="state"
                            value={formData.state}
                            onChange={(e) => handleInputChange('state', e.target.value)}
                            placeholder="Enter your state"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Paper Details */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <div>
                        <Label htmlFor="paperTitle">Paper Title *</Label>
                        <Input
                          id="paperTitle"
                          value={formData.paperTitle}
                          onChange={(e) => handleInputChange('paperTitle', e.target.value)}
                          placeholder="Enter your paper title"
                        />
                      </div>
                      <div>
                        <Label htmlFor="category">Research Category *</Label>
                        <Select onValueChange={(value) => handleInputChange('category', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select research category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ai-ml">Artificial Intelligence & Machine Learning</SelectItem>
                            <SelectItem value="data-science">Data Science & Analytics</SelectItem>
                            <SelectItem value="generative-ai">Generative AI</SelectItem>
                            <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                            <SelectItem value="cloud-computing">Cloud Computing</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="abstract">Abstract (250-300 words) *</Label>
                        <Textarea
                          id="abstract"
                          value={formData.abstract}
                          onChange={(e) => handleInputChange('abstract', e.target.value)}
                          placeholder="Enter your research abstract"
                          className="min-h-32"
                        />
                      </div>
                      <div>
                        <Label htmlFor="keywords">Keywords (comma-separated) *</Label>
                        <Input
                          id="keywords"
                          value={formData.keywords}
                          onChange={(e) => handleInputChange('keywords', e.target.value)}
                          placeholder="Enter keywords separated by commas"
                        />
                      </div>
                      <div>
                        <Label htmlFor="abstractFile">Upload Abstract PDF</Label>
                        <div className="mt-2 flex items-center justify-center w-full">
                          <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                              <Upload className="w-8 h-8 mb-4 text-gray-500" />
                              <p className="mb-2 text-sm text-gray-500">
                                <span className="font-semibold">Click to upload</span> your abstract PDF
                              </p>
                              <p className="text-xs text-gray-500">PDF (MAX. 5MB)</p>
                            </div>
                            <input
                              type="file"
                              className="hidden"
                              accept=".pdf"
                              onChange={(e) => handleFileUpload(e.target.files?.[0] || null)}
                            />
                          </label>
                        </div>
                        {formData.abstractFile && (
                          <p className="mt-2 text-sm text-green-600">
                            File uploaded: {formData.abstractFile.name}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Step 4: Review */}
                  {currentStep === 4 && (
                    <div className="space-y-6">
                      <h3 className="text-lg font-semibold mb-4">Review Your Information</h3>
                      <div className="space-y-4 text-sm">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="break-words">
                            <span className="font-medium">Name:</span> {formData.firstName} {formData.lastName}
                          </div>
                          <div>
                            <span className="font-medium">Email:</span> {formData.email}
                          </div>
                          <div>
                            <span className="font-medium">Phone:</span> {formData.phone}
                          </div>
                          <div>
                            <span className="font-medium">Designation:</span> {formData.designation}
                          </div>
                          <div>
                            <span className="font-medium">Institution:</span> {formData.institution}
                          </div>
                          <div>
                            <span className="font-medium">Department:</span> {formData.department}
                          </div>
                        </div>
                        <div>
                          <span className="font-medium">Paper Title:</span> {formData.paperTitle}
                        </div>
                        <div>
                          <span className="font-medium">Category:</span> {formData.category}
                        </div>
                        <div>
                          <span className="font-medium">Abstract:</span>
                          <p className="mt-1 text-muted-foreground">{formData.abstract}</p>
                        </div>
                      </div>
                      <div className="bg-primary/5 p-4 rounded-lg">
                        <p className="text-sm text-primary">
                          By submitting this registration, you agree to the conference terms and conditions. 
                          You will receive a confirmation email with further instructions.
                        </p>
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8 px-4">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center justify-center gap-2 w-full sm:w-auto min-h-[44px]"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>

            {currentStep < totalSteps ? (
              <Button onClick={nextStep} className="flex items-center justify-center gap-2 w-full sm:w-auto min-h-[44px]">
                Next
                <ChevronRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} className="bg-accent hover:bg-accent/90 text-black w-full sm:w-auto min-h-[44px]">
                Submit Registration
              </Button>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RegistrationPage;
