export default function DriverRegistration() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-[#141414] text-white py-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 tracking-tight">
            Drive with <span className="text-primary italic font-black">Smart Ride</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Take control of your earnings. Enjoy the lowest commission rates in Tunisia, flexible hours, and instant weekly payouts.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] border border-gray-100 p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-8 text-[#141414] border-b border-gray-100 pb-4">Driver Application Form</h2>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] font-bold uppercase text-gray-400 ml-2">First Name</label>
                <input type="text" className="w-full mt-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all text-sm font-medium" placeholder="Mohamed" />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase text-gray-400 ml-2">Last Name</label>
                <input type="text" className="w-full mt-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all text-sm font-medium" placeholder="Ben Ali" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] font-bold uppercase text-gray-400 ml-2">Phone Number</label>
                <input type="tel" className="w-full mt-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all text-sm font-medium" placeholder="+216 20 000 000" />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase text-gray-400 ml-2">City</label>
                <select className="w-full mt-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all text-sm font-medium text-gray-700">
                  <option>Tunis</option>
                  <option>Sousse</option>
                  <option>Sfax</option>
                  <option>Nabeul</option>
                </select>
              </div>
            </div>

            <h3 className="text-lg font-bold mt-8 mb-4 pt-4 border-t border-gray-100">Vehicle Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-[10px] font-bold uppercase text-gray-400 ml-2">Car Make & Model</label>
                <input type="text" className="w-full mt-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all text-sm font-medium" placeholder="e.g. Kia Rio" />
              </div>
              <div>
                <label className="text-[10px] font-bold uppercase text-gray-400 ml-2">Year</label>
                <input type="text" className="w-full mt-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all text-sm font-medium" placeholder="2019" />
              </div>
            </div>

            <div className="pt-6">
              <button className="w-full md:w-auto px-10 py-4 bg-primary text-[#141414] font-black uppercase tracking-widest rounded-2xl shadow-lg hover:bg-yellow-400 transition-colors">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-green-50 text-green-500 flex items-center justify-center font-bold">1</div>
          <div>
            <h4 className="font-bold text-sm">Apply Online</h4>
            <p className="text-xs text-gray-500 mt-1">Fill out the fast form above.</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-green-50 text-green-500 flex items-center justify-center font-bold">2</div>
          <div>
            <h4 className="font-bold text-sm">Get Approved</h4>
            <p className="text-xs text-gray-500 mt-1">We verify your license & car.</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 flex items-start gap-4">
          <div className="w-10 h-10 rounded-full bg-green-50 text-green-500 flex items-center justify-center font-bold">3</div>
          <div>
            <h4 className="font-bold text-sm">Start Earning</h4>
            <p className="text-xs text-gray-500 mt-1">Go online and take rides!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
