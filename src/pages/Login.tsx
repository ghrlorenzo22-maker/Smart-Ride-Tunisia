import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
        <h1 className="text-3xl font-heading font-extrabold mb-2 text-[#141414]">Welcome back</h1>
        <p className="text-gray-500 mb-8 text-sm">Enter your details to access your account.</p>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="text-[10px] font-bold uppercase text-gray-400 ml-2">Email or Phone</label>
            <input type="text" className="w-full mt-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all text-sm font-medium" placeholder="example@email.com" />
          </div>
          <div>
            <label className="text-[10px] font-bold uppercase text-gray-400 ml-2">Password</label>
            <input type="password" className="w-full mt-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-primary outline-none transition-all text-sm font-medium" placeholder="••••••••" />
          </div>
          <button className="w-full py-4 bg-[#141414] text-white font-bold rounded-2xl shadow-lg mt-6 hover:bg-black transition-colors">Log In</button>
        </form>
        <div className="mt-6 text-center text-sm font-medium text-gray-500">
          Don't have an account? <Link to="/signup" className="text-[#141414] hover:text-primary transition-colors font-bold">Sign up</Link>
        </div>
      </div>
    </div>
  );
}
