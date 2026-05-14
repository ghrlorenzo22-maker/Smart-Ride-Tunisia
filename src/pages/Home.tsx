import { ArrowRight, MapPin, Navigation, Map as MapIcon, Star, ShieldCheck, Clock, CheckCircle2, ChevronRight, Gift, CreditCard, Smartphones } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

function HeroSection() {
  return (
    <section className="relative pt-16 pb-32 overflow-hidden bg-white">
      {/* Decorative background grid/pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-[10px] font-bold uppercase tracking-tighter rounded mb-4">
              Tunisia's #1 Most Trusted Ride App
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-heading font-extrabold tracking-tight text-[#141414] leading-[1.1] mb-6">
              Book Safe & Fast <br/>
              <span className="text-primary bg-[#141414] px-2 inline-block -ml-2 mb-1">Taxi Rides</span><br/>
              Anywhere in Tunisia.
            </h1>
            
            <p className="text-lg text-gray-500 mb-8 max-w-lg leading-relaxed">
              Get an affordable ride in minutes. Transparent pricing, verified drivers, and loyalty rewards every time you ride in Tunis, Sousse, Sfax, and Nabeul.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#141414] bg-white px-4 py-2 rounded border border-gray-200 shadow-sm">
                <ShieldCheck className="h-4 w-4 text-green-500" /> Verified Drivers
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-[#141414] bg-white px-4 py-2 rounded border border-gray-200 shadow-sm">
                <CreditCard className="h-4 w-4 text-blue-500" /> Secure Payments
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-gray-200 rounded-3xl p-6 shadow-2xl shadow-gray-100 relative"
          >
            <div className="absolute -top-4 -right-4 bg-[#141414] text-[#F9D523] px-3 py-1 rounded shadow-lg transform rotate-6 z-20 text-[10px] font-bold uppercase tracking-tighter">
              🎉 20% off first ride
            </div>

            <h2 className="text-xl font-heading font-bold mb-4">Request a Ride</h2>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-gray-400 ml-2">Pickup Location</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-green-500"></div>
                  <input 
                    type="text" 
                    placeholder="Enter pickup location" 
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary outline-none text-sm font-medium transition-all text-zinc-900 placeholder:text-zinc-400"
                  />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-gray-400 ml-2">Destination</label>
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-red-500"></div>
                  <input 
                    type="text" 
                    placeholder="Enter destination" 
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-primary outline-none text-sm font-medium transition-all text-zinc-900 placeholder:text-zinc-400"
                  />
                </div>
              </div>

              <div className="pt-4">
                <Link to="/book" className="w-full py-4 bg-primary text-[#141414] font-black uppercase tracking-widest rounded-2xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group">
                  See Prices & Book
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </form>
            
            <div className="mt-6 text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              Also available on <span className="text-[#141414]">iOS</span> & <span className="text-[#141414]">Android</span>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  const steps = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Set Location",
      desc: "Enter your pickup point and where you want to go.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Choose Ride",
      desc: "See price estimates and pick the car that suits you.",
    },
    {
      icon: <Navigation className="h-6 w-6" />,
      title: "Track Live",
      desc: "Watch your driver arrive in real-time on the map.",
    }
  ]

  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">How Smart Ride Works</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg">Your journey begins with three simple taps.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg border border-zinc-100 text-zinc-900 mb-6 relative z-10">
                {step.icon}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center font-bold text-sm ring-4 ring-zinc-50">
                  {idx + 1}
                </div>
              </div>
              <h3 className="text-xl font-heading font-bold mb-3">{step.title}</h3>
              <p className="text-zinc-600 leading-relaxed">{step.desc}</p>
              
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-full h-[2px] bg-zinc-200 border-dashed z-0"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyChooseUsSection() {
  const features = [
    {
      title: "Lowest Prices & No Surprises",
      desc: "We show you the exact fare before you book. No hidden charges or unexpected surges that drain your wallet."
    },
    {
      title: "Loyalty Points on Every Ride",
      desc: "Earn Smart Points every time you ride. Example: collect 100 points and get your next ride completely free!"
    },
    {
      title: "Local Payment Methods",
      desc: "Pay easily with Cash, D17, Flouci, Tunisian bank cards, or top up your Smart Wallet inside the app."
    },
    {
      title: "Extensively Vetted Drivers",
      desc: "Your safety is our priority. All drivers undergo deep background checks, regular reviews, and car inspections."
    }
  ]

  return (
    <section className="py-24 bg-zinc-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-zinc-800 rounded-full text-sm font-semibold text-zinc-300 mb-6">
              The Smart Difference
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Why Tunisians choose Smart Ride.</h2>
            <p className="text-zinc-400 text-lg mb-10">
              We built our platform specifically for the needs of Tunisia. Reliable tech, fast service, and a focus on local accessibility.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-2 mb-3 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                    <h4 className="font-bold text-white text-lg">{feature.title}</h4>
                  </div>
                  <p className="text-zinc-500 text-sm leading-relaxed pl-7">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            {/* Abstract UI representation instead of generic image */}
            <div className="aspect-[4/5] bg-zinc-900 rounded-[2.5rem] border border-zinc-800 p-8 shadow-2xl relative overflow-hidden flex flex-col pt-16">
              
              {/* Fake Map background */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,204,0,0.15)_0%,transparent_70%)]"></div>
              </div>

              {/* Mock App UI Elements */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white text-zinc-950 p-6 rounded-3xl w-4/5 self-end mb-6 shadow-xl z-10"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="font-bold">Driver Arriving</div>
                  <div className="text-primary font-bold">2 min</div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-200 rounded-full"></div>
                  <div>
                    <div className="font-bold text-sm">Ahmed B.</div>
                    <div className="flex items-center text-xs text-zinc-500"><Star className="w-3 h-3 text-yellow-500 fill-yellow-500 mr-1" /> 4.9 Rating</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-primary text-zinc-950 p-6 rounded-3xl w-[85%] mb-6 shadow-xl z-10"
              >
                <div className="flex items-center gap-3 mb-2">
                  <Gift className="w-6 h-6" />
                  <span className="font-bold">Smart Rewards</span>
                </div>
                <h4 className="font-heading font-extrabold text-2xl mb-1">10 Points Earned!</h4>
                <p className="text-zinc-800 text-sm font-medium">90 points away from a FREE ride.</p>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DriverRecruitmentSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-[3rem] p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden relative">
          
          {/* Decorative graphic */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-black/5 slant-left z-0 hidden lg:block"></div>

          <div className="relative z-10 max-w-xl">
            <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-zinc-950 mb-6">Drive when you want, make what you need.</h2>
            <p className="text-zinc-900/80 font-medium text-lg mb-8 leading-relaxed">
              Join Smart Ride as a driver and enjoy the lowest commission rates in Tunisia, flexible hours, and instant earnings withdrawal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/driver" className="bg-zinc-950 text-white hover:bg-zinc-800 px-8 py-4 rounded-xl font-bold transition-colors flex justify-center items-center">
                Sign Up to Drive
              </Link>
              <Link to="/about" className="bg-transparent text-zinc-950 hover:bg-black/5 border-2 border-zinc-950 px-8 py-4 rounded-xl font-bold transition-colors flex justify-center items-center">
                Learn More
              </Link>
            </div>
          </div>

          {/* Simple driver earnings stats mock */}
          <div className="relative z-10 w-full md:w-auto flex-shrink-0">
             <div className="bg-white p-8 rounded-3xl shadow-2xl border border-zinc-100 max-w-sm w-full transform rotate-3">
               <div className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-2">Weekly Earnings</div>
               <div className="text-5xl font-heading font-extrabold tracking-tighter text-zinc-950 mb-4">
                 850 <span className="text-2xl text-zinc-400 font-sans">TND</span>
               </div>
               <div className="space-y-3">
                 <div className="flex justify-between items-center text-sm font-medium border-b border-zinc-100 pb-3">
                   <span className="text-zinc-500">Trips Completed</span>
                   <span className="text-zinc-900">42</span>
                 </div>
                 <div className="flex justify-between items-center text-sm font-medium pb-2">
                   <span className="text-zinc-500">Online Hours</span>
                   <span className="text-zinc-900">30h</span>
                 </div>
               </div>
               <div className="mt-6 bg-green-50 text-green-700 text-xs font-bold px-3 py-2 rounded-lg inline-flex items-center">
                 +15% higher than average
               </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <DriverRecruitmentSection />
    </div>
  )
}
