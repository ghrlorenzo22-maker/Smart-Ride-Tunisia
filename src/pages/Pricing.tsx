export default function Pricing() {
  const tiers = [
    {
      name: "Smart Economy",
      description: "Affordable daily rides for your normal commutes.",
      baseFare: "1.00 TND",
      perKm: "0.80 TND",
      minFare: "4.00 TND",
      icon: "🚕"
    },
    {
      name: "Smart Comfort",
      description: "Newer cars with more legroom and top-rated drivers.",
      baseFare: "2.00 TND",
      perKm: "1.20 TND",
      minFare: "7.00 TND",
      icon: "✨",
      popular: true
    },
    {
      name: "Smart XL",
      description: "Up to 6 seats. Perfect for groups and families.",
      baseFare: "3.50 TND",
      perKm: "1.60 TND",
      minFare: "10.00 TND",
      icon: "🚙"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-6 tracking-tight">Transparent Pricing</h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg">No hidden fees, no sudden surges that drain your wallet. Estimate your ride costs reliably before you book.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {tiers.map((tier) => (
          <div key={tier.name} className={`bg-white rounded-3xl border ${tier.popular ? 'border-primary shadow-xl relative' : 'border-gray-100 shadow-sm'} p-8 flex flex-col`}>
            {tier.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#141414] text-primary text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded">
                Most Popular
              </div>
            )}
            <div className="text-4xl mb-4">{tier.icon}</div>
            <h3 className="text-2xl font-bold mb-2 text-[#141414]">{tier.name}</h3>
            <p className="text-sm text-gray-500 mb-8 flex-grow">{tier.description}</p>
            
            <div className="space-y-4 pt-6 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase text-gray-400">Base Fare</span>
                <span className="font-bold text-[#141414]">{tier.baseFare}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase text-gray-400">Per Kilometer</span>
                <span className="font-bold text-[#141414]">{tier.perKm}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-bold uppercase text-gray-400">Minimum Fare</span>
                <span className="font-bold text-[#141414]">{tier.minFare}</span>
              </div>
            </div>
            
            <button className={`w-full mt-8 py-3 rounded-2xl font-bold uppercase tracking-widest text-sm transition-all ${tier.popular ? 'bg-primary text-[#141414] hover:bg-yellow-400' : 'bg-gray-50 text-[#141414] hover:bg-gray-100 border border-gray-200'}`}>
              Book {tier.name}
            </button>
          </div>
        ))}
      </div>

      <div className="bg-[#141414] text-white rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 mb-20 shadow-2xl">
        <div className="max-w-xl">
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Earn free rides with Smart points.</h2>
          <p className="text-gray-400">For every 1 TND you spend, you earn 1 Smart Point. Accumulate 100 points, and your next ride (up to 10 TND) is completely on us.</p>
        </div>
        <div className="min-w-[150px] w-32 h-32 bg-primary rounded-full flex flex-col items-center justify-center text-[#141414] flex-shrink-0 border-8 border-yellow-500 shadow-xl transform rotate-12">
          <span className="text-3xl font-black">100</span>
          <span className="text-[10px] font-bold uppercase tracking-widest">Points = Free</span>
        </div>
      </div>
    </div>
  );
}
