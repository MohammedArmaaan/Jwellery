import { useEffect } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ShieldCheck, Truck, RotateCcw, FileText } from "lucide-react";

const policySections = [
  {
    id: "privacy",
    icon: ShieldCheck,
    title: "Privacy Policy",
    content: `At Anny Jewels, protecting your personal information is our highest priority. We collect essential details solely to process your orders securely, enhance your luxury shopping experience, and keep you informed about our latest curated collections. 

All transactions are processed through highly secure, encrypted payment gateways. We strictly adhere to data protection laws and promise never to sell or share your personal data with unauthorized third parties.`
  },
  {
    id: "shipping",
    icon: Truck,
    title: "Shipping Policy",
    content: `We understand the anticipation of receiving a precious piece of jewelry. Anny Jewels offers complimentary, 100% insured shipping on all domestic orders. 

Every item is carefully placed in our signature tamper-proof packaging. Standard delivery generally takes 5-7 business days. Once your masterpiece is dispatched, a secure tracking link will be shared with you via email and WhatsApp.`
  },
  {
    id: "returns",
    icon: RotateCcw,
    title: "Returns & Exchanges",
    content: `Your absolute satisfaction is our commitment. If your purchase doesn't make your heart skip a beat, Anny Jewels accepts returns and exchanges within 14 days of delivery. 

To be eligible for a full refund, the jewelry must remain unworn, in its pristine original condition, and accompanied by the original invoice, tags, and authenticity certificates. Please note that custom-designed, engraved, or personalized items are final sale and non-refundable.`
  },
  {
    id: "terms",
    icon: FileText,
    title: "Terms of Service",
    content: `By accessing or purchasing from Anny Jewels, you agree to our terms of service. Our collections feature 100% BIS Hallmarked gold and certified authentic gemstones. 

Due to the dynamic nature of the precious metals market, prices are subject to change without prior notice based on live gold and diamond rates. Anny Jewels reserves the right to cancel orders in case of pricing errors or inventory discrepancies, with a full refund processed immediately.`
  }
];

// Motion variants for smooth staggered appearance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function PolicyPage() {
  const navigate = useNavigate();

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <section className="pt-24 md:pt-32 pb-24 min-h-screen bg-gradient-to-b from-[#f8e8e8] to-[#fef5f5] relative overflow-hidden">
      
      {/* Background Decorators */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 md:w-96 h-64 md:h-96 bg-[#d4a373] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 md:w-96 h-64 md:h-96 bg-[#e8b4b8] rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-1.5 md:gap-2 mb-8 md:mb-12 text-sm md:text-base text-[#8b6f5e] hover:text-[#3d2422] transition-colors duration-300 font-medium cursor-pointer"
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
            Legal & Policies
          </h2>
          <div className="w-16 h-1 bg-[#d4a373] mx-auto rounded-full mb-4" />
          <p 
            className="text-sm md:text-base text-[#9e8a85] max-w-xl mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Transparency, trust, and commitment to our beloved customers.
          </p>
        </motion.div>

        {/* Policy Sections */}
        <motion.div 
          className="space-y-8 md:space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {policySections.map((section) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                id={section.id}
                variants={itemVariants}
                className="bg-white/60 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-10 shadow-sm border border-white/50"
              >
                <div className="flex items-center gap-4 mb-4 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#fcf9f9] flex items-center justify-center shrink-0 border border-[#f0ebe0]">
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-[#d4a373]" />
                  </div>
                  <h3 
                    className="text-xl md:text-3xl font-semibold"
                    style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
                  >
                    {section.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {section.content.split('\n\n').map((paragraph, idx) => (
                    <p 
                      key={idx}
                      className="text-sm md:text-base leading-relaxed md:leading-loose text-justify md:text-left"
                      style={{ fontFamily: "'Poppins', sans-serif", color: '#7a605d' }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact Note */}
        <motion.div 
          className="mt-12 md:mt-20 text-center pb-28 md:pb-10" // Extra padding bottom for mobile nav bar
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p 
            className="text-sm md:text-base italic text-[#9e8a85]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Have more questions? Feel free to reach out to our support team at <br className="md:hidden"/> 
            <span className="font-semibold text-[#8b6f5e] cursor-pointer">support@annyjewels.com</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
}