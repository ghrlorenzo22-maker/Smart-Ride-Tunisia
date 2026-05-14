import { Link } from 'react-router-dom';
import { Menu, X, Car } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Book a Ride', path: '/book' },
    { name: 'Drive with Us', path: '/driver' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FDFDFD] border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-black italic text-2xl text-primary-foreground">
              S
            </div>
            <span className="text-xl font-bold tracking-tight text-zinc-950">
              Smart Ride<span className="text-primary ml-1">Tunisia</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-semibold uppercase tracking-widest text-zinc-400 hover:text-zinc-950 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 ml-4">
              <Link to="/login" className="px-6 py-2.5 text-sm font-bold border-2 border-zinc-950 text-zinc-950 rounded-full hover:bg-zinc-50 transition-colors">
                Log In
              </Link>
              <Link
                to="/signup"
                className="px-6 py-2.5 text-sm font-bold bg-zinc-950 text-white rounded-full shadow-lg shadow-zinc-200 hover:shadow-xl transition-all"
              >
                Sign Up
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-zinc-600 hover:text-zinc-950"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-zinc-100 py-4 shadow-xl">
          <div className="flex flex-col space-y-4 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-lg font-medium text-zinc-600 hover:text-zinc-950 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-zinc-100">
              <Link to="/login" onClick={() => setIsOpen(false)} className="w-full flex justify-center text-base font-bold text-zinc-950 px-4 py-3 border-2 border-zinc-950 rounded-xl">
                Log In
              </Link>
              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="w-full text-center text-base font-bold bg-zinc-950 text-white px-4 py-3 rounded-xl shadow-lg"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
