import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-[#FDFDFD] border-t border-gray-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-12 flex flex-col sm:flex-row items-center justify-between text-[10px] font-medium text-gray-400 uppercase tracking-widest gap-4 sm:gap-0 py-4 sm:py-0">
        <div className="flex-shrink-0">© {new Date().getFullYear()} Smart Ride Tunisia S.A.</div>
        
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link to="#" className="hover:text-[#141414] transition-colors">Terms of Service</Link>
          <Link to="#" className="hover:text-[#141414] transition-colors">Privacy Policy</Link>
          <Link to="/contact" className="hover:text-[#141414] transition-colors">Help Center</Link>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
          <span>System Status: Optimal</span>
        </div>
      </div>
    </footer>
  );
}
