import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Phone, Mail, MapPin, MessageCircle, ChevronDown } from "lucide-react";

// FAQ Data
const faqs = [
  {
    question: "Are your diamonds and gold certified?",
    answer: "Yes, absolute transparency is our promise. All our gold jewelry is 100% BIS Hallmarked, and our diamonds and precious gemstones come with internationally recognized certificates of authenticity."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Currently, we provide complimentary, 100% insured domestic shipping across India. For international inquiries, please contact our support team on WhatsApp to check custom delivery options."
  },
  {
    question: "Can I customize a jewelry piece?",
    answer: "Absolutely. Our master artisans specialize in bespoke jewelry. You can share your vision or reference designs with our team, and we will craft a personalized masterpiece just for you."
  },
  {
    question: "What is your return and exchange policy?",
    answer: "We accept returns and exchanges within 14 days of delivery, provided the jewelry is unworn, in its original pristine condition, and accompanied by the original invoice and certificates. Custom pieces are non-refundable."
  },
  {
    question: "How should I care for my Anny Jewels pieces?",
    answer: "We recommend storing your jewelry in the original velvet-lined box provided. Avoid direct contact with perfumes, harsh chemicals, and water. We also offer lifetime free maintenance and polishing for our patrons."
  }
];

// Contact Info Cards
const contactDetails = [
  {
    icon: Phone,
    title: "Call Us",
    detail: "+91 98765 43210",
    subDetail: "Mon-Sat, 10 AM - 7 PM"
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: "support@annyjewels.com",
    subDetail: "We reply within 24 hours"
  },
  {
    icon: MapPin,
    title: "Visit Store",
    detail: "Heritage Avenue, Zaveri Bazaar",
    subDetail: "Mumbai, Maharashtra, India"
  }
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function ContactPage() {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState<number | null>(0); // First FAQ open by default

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/919876543210?text=Hello%20Anny%20Jewels,%20I%20need%20some%20support.`, '_blank');
  };

  return (
    <section className="pt-24 md:pt-32 pb-28 md:pb-24 min-h-screen bg-gradient-to-b from-[#f8e8e8] to-[#fef5f5] relative overflow-hidden">
      
      {/* Background Decorators */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 md:w-96 h-64 md:h-96 bg-[#d4a373] rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 md:w-96 h-64 md:h-96 bg-[#e8b4b8] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 md:gap-2 mb-8 md:mb-10 text-sm md:text-base text-[#8b6f5e] hover:text-[#3d2422] transition-colors duration-300 font-medium cursor-pointer"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <ArrowLeft size={18} className="md:w-5 md:h-5" />
          Back
        </button>

        {/* Header Title */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 
            className="text-4xl md:text-6xl mb-3 md:mb-4 tracking-wide"
            style={{ fontFamily: "'Allura', cursive", color: '#8b6f5e' }}
          >
            Anny Jewels
          </h1>
          <h2 
            className="text-2xl md:text-4xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
          >
            Support & FAQs
          </h2>
          <div className="w-16 h-1 bg-[#d4a373] mx-auto rounded-full mb-4" />
          <p 
            className="text-sm md:text-base text-[#9e8a85] max-w-xl mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            We are here to assist you with any inquiries regarding our collections, your orders, or bespoke services.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-16 md:mb-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {contactDetails.map((info, idx) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white/60 backdrop-blur-md rounded-2xl p-6 md:p-8 flex flex-col items-center text-center shadow-sm border border-white/50 transition-all hover:shadow-md hover:-translate-y-1"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#fdf8f8] flex items-center justify-center mb-4 border border-[#f0ebe0]">
                  <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#d4a373]" />
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}>
                  {info.title}
                </h3>
                <p className="text-sm md:text-base font-medium mb-1" style={{ fontFamily: "'Poppins', sans-serif", color: '#5a4340' }}>
                  {info.detail}
                </p>
                <p className="text-xs md:text-sm" style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}>
                  {info.subDetail}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Form and FAQ Section (2 Columns on Desktop) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 md:p-10 shadow-lg border border-white"
          >
            <h3 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}>
              Send us a Message
            </h3>
            <p className="text-sm mb-8" style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}>
              Fill out the form below and our luxury concierge will get back to you shortly.
            </p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs md:text-sm font-medium text-[#5a4340]" style={{ fontFamily: "'Poppins', sans-serif" }}>Full Name</label>
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl border border-[#e8b4b8]/50 bg-[#faf8f3] focus:outline-none focus:border-[#d4a373] text-sm transition-colors" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs md:text-sm font-medium text-[#5a4340]" style={{ fontFamily: "'Poppins', sans-serif" }}>Email Address</label>
                  <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-xl border border-[#e8b4b8]/50 bg-[#faf8f3] focus:outline-none focus:border-[#d4a373] text-sm transition-colors" />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs md:text-sm font-medium text-[#5a4340]" style={{ fontFamily: "'Poppins', sans-serif" }}>Subject</label>
                <input type="text" placeholder="How can we help?" className="w-full px-4 py-3 rounded-xl border border-[#e8b4b8]/50 bg-[#faf8f3] focus:outline-none focus:border-[#d4a373] text-sm transition-colors" />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs md:text-sm font-medium text-[#5a4340]" style={{ fontFamily: "'Poppins', sans-serif" }}>Message</label>
                <textarea rows={4} placeholder="Type your message here..." className="w-full px-4 py-3 rounded-xl border border-[#e8b4b8]/50 bg-[#faf8f3] focus:outline-none focus:border-[#d4a373] text-sm resize-none transition-colors" />
              </div>
              
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <button 
                  type="submit"
                  className="flex-1 py-4 rounded-xl text-white shadow-md hover:shadow-lg transition-all text-sm md:text-base font-medium"
                  style={{ fontFamily: "'Poppins', sans-serif", background: 'linear-gradient(135deg, #8b6f5e 0%, #d4a373 100%)' }}
                >
                  Submit Inquiry
                </button>
                <button 
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full sm:w-auto px-6 py-4 rounded-xl text-white shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 text-sm md:text-base font-medium"
                  style={{ fontFamily: "'Poppins', sans-serif", background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)' }}
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </button>
              </div>
            </form>
          </motion.div>

          {/* FAQs Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="pt-2 md:pt-0"
          >
            <h3 className="text-2xl md:text-3xl mb-8" style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}>
              Frequently Asked Questions
            </h3>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white/60 backdrop-blur-sm border border-white/50 rounded-2xl overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span 
                      className="font-medium pr-4 text-sm md:text-base" 
                      style={{ fontFamily: "'Poppins', sans-serif", color: activeFaq === index ? '#8b6f5e' : '#3d2422' }}
                    >
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: activeFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 text-[#d4a373]"
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {activeFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div 
                          className="px-6 pb-5 pt-1 text-sm md:text-base leading-relaxed" 
                          style={{ fontFamily: "'Poppins', sans-serif", color: '#7a605d' }}
                        >
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}