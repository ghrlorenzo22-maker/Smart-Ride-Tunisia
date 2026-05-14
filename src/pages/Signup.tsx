import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
        <h1 className="text-3xl font-heading font-extrabold mb-2 text-[#141414]">Create an account</h1>
        <p className="text-gray-500 mb-8 text-sm">Join Smart Ride to book fast, safe taxis.</p>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-[10px] font-bold uppercase text-gray-400 ml-2">Full Name</label>
            <input type="text" className="w-full mt-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all text-sm font-medium" placeholder="John Doe" />
          </div>
          <div>
            <label className="text-[10px] font-bold uppercase text-gray-400 ml-2">Phone Number</label>
            <input type="tel" className="w-full mt-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all text-sm font-medium" placeholder="+216 20 000 000" />
          </div>
          <div>
            <label className="text-[10px] font-bold uppercase text-gray-400 ml-2">Password</label>
            <input type="password" className="w-full mt-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all text-sm font-medium" placeholder="••••••••" />
          </div>
          <button className="w-full py-4 bg-primary text-[#141414] font-bold rounded-2xl shadow-lg mt-6 hover:bg-yellow-400 transition-colors uppercase tracking-widest text-sm">Sign Up</button>
        </form>
        <div className="mt-6 text-center text-sm font-medium text-gray-500">
          Already have an account? <Link to="/login" className="text-[#141414] hover:text-primary transition-colors font-bold">Log in</Link>
        </div>
      </div>
    </div>
  );
}
