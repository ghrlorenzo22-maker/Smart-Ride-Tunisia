export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
      <div className="text-center mb-16">
        <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-[10px] font-bold uppercase tracking-tighter rounded mb-4">
          Our Story
        </div>
        <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 tracking-tight text-[#141414]">
          Redefining Mobility in <span className="text-primary bg-[#141414] px-2 inline-block -ml-2 mb-1">Tunisia</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Smart Ride Tunisia is more than just an app. It's a vision for the future of transportation, born from a desire to make travel safer, faster, and more accessible for everyone connecting our beautiful cities.
        </p>
      </div>

      <div className="bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] mb-16">
        <h2 className="text-2xl font-heading font-bold mb-4 text-[#141414]">The PFE Project</h2>
        <p className="text-gray-500 leading-relaxed mb-6">
          Smart Ride Tunisia was developed as an End of Studies Project (Projet de Fin d'Études - PFE) for our graduation. Our goal was to solve a real-world problem in the Tunisian tech ecosystem by building a scalable, high-converting taxi booking platform that rivals global competitors, specifically tailored to the Tunisian culture and economic landscape.
        </p>
        
        <div className="mt-8 border-t border-gray-100 pt-8">
          <h3 className="text-[10px] font-bold uppercase text-gray-400 tracking-widest mb-6">Developed By</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-gray-300 transition-colors">
              <div className="w-16 h-16 bg-[#141414] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">WG</div>
              <div>
                <h3 className="font-bold text-[#141414] text-lg">Wissem Ghariani</h3>
                <p className="text-[10px] font-bold uppercase text-gray-400 tracking-widest mt-1">Co-Founder & Developer</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-gray-300 transition-colors">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-[#141414] font-bold text-xl shadow-lg">MD</div>
              <div>
                <h3 className="font-bold text-[#141414] text-lg">Mahdi Daldoul</h3>
                <p className="text-[10px] font-bold uppercase text-gray-400 tracking-widest mt-1">Co-Founder & Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center shadow-sm">
          <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🛡️</div>
          <h3 className="font-bold mb-2">Safety First</h3>
          <p className="text-sm text-gray-500">Verified drivers, tracked rides, and secure payments.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center shadow-sm">
          <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">💫</div>
          <h3 className="font-bold mb-2">Loyalty Focused</h3>
          <p className="text-sm text-gray-500">Earn points on every ride. Ride more, pay less.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl border border-gray-100 text-center shadow-sm">
          <div className="w-12 h-12 bg-yellow-50 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">🌍</div>
          <h3 className="font-bold mb-2">Local Growth</h3>
          <p className="text-sm text-gray-500">Expanding across Tunis, Sousse, Sfax, and Nabeul.</p>
        </div>
      </div>
    </div>
  );
}
