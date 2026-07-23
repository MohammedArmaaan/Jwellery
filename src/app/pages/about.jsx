import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Diamond, ShieldCheck, HeartHandshake, Sparkles, ArrowRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
}

// Global Section Wrapper for Perfect Width & Centering
function Section({ children, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      className={`w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 ${className}`}
    >
      {children}
    </motion.div>
  )
}

export default function AboutPage() {
  return (
    <div className="w-full overflow-hidden bg-[#faf8f3]">
      
      {/* Hero Section - Light & Ethereal */}
      <section className="relative w-full h-[70vh] min-h-[500px] flex items-center justify-center bg-white mt-16">
        <div className="absolute inset-0 w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=1920&h=1080&fit=crop&auto=format&q=80"
            alt="Jewellery Craftsmanship"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#faf8f3]/80 via-[#faf8f3]/60 to-[#faf8f3]" />
        </div>

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center mt-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
          >
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-[#c9a84c] mb-6 block">
              Our Heritage
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1410] leading-tight mb-8">
              Crafting Elegance, <br />
              <em className="text-gold-gradient not-italic font-medium">Defining Generations.</em>
            </h1>
            <p className="text-[#8b7d72] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
              For over three decades, we have dedicated ourselves to the pursuit of perfection, 
              transforming the world's most precious elements into timeless works of art.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Story - Zig-Zag Layout matching the reference image */}
      <section className="w-full py-20 md:py-32 bg-[#faf8f3]">
        <Section className="space-y-24 md:space-y-40">
          
          {/* Block 1: Left Image, Right Text */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <motion.div variants={fadeUp} className="w-full md:w-1/2 relative group">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] luxury-shadow-lg bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop&auto=format&q=80" 
                  alt="Vintage sketch and rings" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#f0ebe0] rounded-full -z-10 blur-2xl opacity-60"></div>
            </motion.div>
            
            <motion.div variants={fadeUp} className="w-full md:w-1/2">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a84c] mb-4 block">The Beginning</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1a1410] mb-6 leading-tight">
                A Legacy Forged <br/> in Passion.
              </h2>
              <div className="space-y-6 text-[#8b7d72] text-base md:text-lg font-light leading-relaxed">
                <p>
                  Founded in the heart of the historic jewelry district in 1987, our journey began with a singular vision: to create pieces that transcend mere adornment and become treasured family heirlooms. 
                </p>
                <p>
                  What started as a small atelier of three master artisans has blossomed into a globally recognized house of luxury. Yet, despite our growth, the soul of our craft remains unchanged. Every design starts with a hand-drawn sketch, honoring the traditional methods that define true high jewelry.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Block 2: Right Image, Left Text */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20">
            <motion.div variants={fadeUp} className="w-full md:w-1/2 relative group">
              <div className="relative rounded-[2rem] overflow-hidden aspect-[4/5] luxury-shadow-lg bg-[#1a1410]">
                <img 
                  src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=1000&fit=crop&auto=format&q=80" 
                  alt="Diamond detailing" 
                  className="w-full h-full object-cover opacity-90 transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-[#e8d5a3] rounded-full -z-10 blur-2xl opacity-40"></div>
            </motion.div>
            
            <motion.div variants={fadeUp} className="w-full md:w-1/2">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#c9a84c] mb-4 block">The Craft</span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#1a1410] mb-6 leading-tight">
                The Art of <br/> Uncompromising Detail.
              </h2>
              <div className="space-y-6 text-[#8b7d72] text-base md:text-lg font-light leading-relaxed">
                <p>
                  We believe that true luxury lies in the details that often go unseen. Our master setters and polishers dedicate hundreds of hours to a single creation, ensuring that every facet catches the light perfectly and every prong is flawlessly smooth.
                </p>
                <p>
                  We source only the top 1% of diamonds globally—selected not just for their exceptional cut, color, and clarity, but for their unique inner fire. Combined with 18k solid gold and platinum, our materials are as resilient as the memories they are meant to celebrate.
                </p>
              </div>
            </motion.div>
          </div>

        </Section>
      </section>

      {/* Core Values Section */}
      <section className="w-full py-20 md:py-28 bg-white border-y border-[#e8ddd0]/50">
        <Section>
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a1410] mb-4">Our Philosophy</h2>
            <p className="text-[#8b7d72] max-w-2xl mx-auto">The pillars that uphold every creation bearing our hallmark.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
            {[
              {
                icon: <Diamond size={32} className="text-[#c9a84c]" />,
                title: "Ethical Sourcing",
                desc: "We are committed to using 100% conflict-free diamonds and sustainably sourced precious metals, ensuring beauty without compromise."
              },
              {
                icon: <Sparkles size={32} className="text-[#c9a84c]" />,
                title: "Bespoke Artistry",
                desc: "Mass production has no place here. Each piece is meticulously hand-finished, making your jewelry as unique as your own fingerprint."
              },
              {
                icon: <ShieldCheck size={32} className="text-[#c9a84c]" />,
                title: "Lifetime Guarantee",
                desc: "We stand by our craftsmanship. Every purchase comes with lifetime cleaning, polishing, and a comprehensive purity guarantee."
              },
              {
                icon: <HeartHandshake size={32} className="text-[#c9a84c]" />,
                title: "Client Centricity",
                desc: "From the first consultation to the final unboxing, we provide an intimate, transparent, and exceptionally luxurious experience."
              }
            ].map((value, i) => (
              <motion.div key={i} variants={fadeUp} custom={i} className="text-center group">
                <div className="w-20 h-20 mx-auto rounded-full bg-[#faf8f3] border border-[#e8ddd0] flex items-center justify-center mb-6 group-hover:bg-[#c9a84c]/10 group-hover:border-[#c9a84c] transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="font-serif font-bold text-xl text-[#1a1410] mb-3">{value.title}</h3>
                <p className="text-[#8b7d72] text-sm leading-relaxed font-light">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>
      </section>

      {/* Large Banner Image */}
      <section className="w-full py-20 md:py-28 bg-[#faf8f3]">
        <Section>
          <motion.div variants={fadeUp} className="relative rounded-[2.5rem] overflow-hidden h-[400px] md:h-[600px] luxury-shadow-lg group">
            <img 
              src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=1600&h=900&fit=crop&auto=format&q=80" 
              alt="Bridal Jewellery Focus" 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[#1a1410]/40 group-hover:bg-[#1a1410]/50 transition-colors duration-500" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <span className="text-white text-5xl md:text-7xl font-serif mb-6 opacity-90">"</span>
              <p className="text-white font-serif text-2xl md:text-4xl lg:text-5xl leading-snug max-w-4xl italic font-medium drop-shadow-lg">
                Jewelry is not just an accessory; it is a profound expression of love, a marker of time, and a legacy passed through generations.
              </p>
            </div>
          </motion.div>
        </Section>
      </section>

      {/* CTA Section */}
      <section className="w-full pb-24 md:pb-32 bg-[#faf8f3]">
        <Section>
          <motion.div variants={fadeUp} className="max-w-3xl mx-auto text-center bg-white p-12 md:p-16 rounded-[2rem] border border-[#e8ddd0] luxury-shadow">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a1410] mb-6">Experience the Craft</h2>
            <p className="text-[#8b7d72] text-lg mb-10 font-light">
              We invite you to explore our magnificent collections and find the perfect piece that resonates with your unique story.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link to="/collections" className="btn-gold px-10 py-4 rounded-full text-sm font-bold tracking-widest uppercase transition-transform hover:-translate-y-1 w-full sm:w-auto">
                Explore Collections
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 text-[#c9a84c] font-bold text-sm uppercase tracking-widest hover:text-[#1a1410] transition-colors py-4 px-6">
                Contact an Advisor <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>
        </Section>
      </section>

    </div>
  )
}