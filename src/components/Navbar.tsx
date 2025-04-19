import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Shield, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClass = ({ isActive }: { isActive: boolean }) => 
    `px-4 py-2 rounded-md transition-colors ${
      isActive ? 'text-blue-600 font-semibold' : 'hover:text-blue-600'
    }`;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Shield className="w-8 h-8 text-blue-800" />
          <span className="text-xl font-bold text-blue-800">FaceGuard AI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/live-demo" className={navLinkClass}>Live Demo</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/technical" className={navLinkClass}>Technical Details</NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 bg-white border-t border-gray-100">
          <div className="flex flex-col space-y-2">
            <NavLink 
              to="/" 
              className={navLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink 
              to="/live-demo" 
              className={navLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Live Demo
            </NavLink>
            <NavLink 
              to="/about" 
              className={navLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </NavLink>
            <NavLink 
              to="/technical" 
              className={navLinkClass}
              onClick={() => setIsMenuOpen(false)}
            >
              Technical Details
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;