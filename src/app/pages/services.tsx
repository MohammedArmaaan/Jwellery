import { motion } from "motion/react";
import { Gem, Wrench, Sparkles, ClipboardList } from "lucide-react";

const services = [
  {
    icon: Gem,
    title: "Custom Jewelry Design",
    description: "Bring your dream piece to life. Our master artisans work closely with you to design and craft bespoke jewelry that perfectly captures your personal story and style."
  },
  {
    icon: Wrench,
    title: "Restoration & Repair",
    description: "Preserve your family heirlooms. We offer meticulous restoration services, ring resizing, stone replacement, and structural repairs to ensure your pieces last generations."
  },
  {
    icon: Sparkles,
    title: "Cleaning & Polishing",
    description: "Restore the original brilliance of your jewelry. Our professional sonic cleaning and hand-polishing services safely remove tarnish and bring back the radiant shine."
  },
  {
    icon: ClipboardList,
    title: "Expert Appraisals",
    description: "Receive accurate, certified valuations for your precious items. Our certified gemologists provide detailed documentation for insurance, estate, or resale purposes."
  }
];

export function Services() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-gradient-to-b from-[#fef5f5] to-[#f8e8e8]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 
            className="text-5xl md:text-6xl mb-6"
            style={{ fontFamily: "'Allura', cursive", color: '#8b6f5e' }}
          >
            Bespoke Services
          </h1>
          <h2
            className="text-3xl md:text-4xl mb-6"
            style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
          >
            Excellence Beyond the Collection
          </h2>
          <p 
            className="text-lg max-w-2xl mx-auto"
            style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}
          >
            Our commitment to you extends far beyond our curated pieces. Explore our range of professional services designed to protect, restore, and create your most cherished treasures.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Decorative background accent */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-[#fef5f5] to-[#f8e8e8] rounded-full opacity-50 group-hover:scale-150 transition-transform duration-500" />
                
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8b6f5e] to-[#d4a373] flex items-center justify-center mb-6 shadow-md text-white">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 
                    className="text-2xl mb-4"
                    style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
                  >
                    {service.title}
                  </h3>
                  <p 
                    className="text-base leading-relaxed"
                    style={{ fontFamily: "'Poppins', sans-serif", color: '#9e8a85' }}
                  >
                    {service.description}
                  </p>
                  
                  <button className="mt-8 text-[#8b6f5e] font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300">
                    Learn More <span>→</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="mt-24 text-center bg-white p-12 rounded-3xl shadow-lg border border-[#f5e5e5]"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 
            className="text-3xl mb-4"
            style={{ fontFamily: "'Playfair Display', serif", color: '#3d2422' }}
          >
            Need a specific service?
          </h3>
          <p className="text-lg text-[#9e8a85] mb-8 max-w-xl mx-auto">
            Book a private consultation with our master jewelers to discuss your unique requirements.
          </p>
          <button 
            className="px-10 py-4 rounded-full text-white shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #8b6f5e 0%, #d4a373 100%)' }}
          >
            Schedule Consultation
          </button>
        </motion.div>
      </div>
    </div>
  );
}
