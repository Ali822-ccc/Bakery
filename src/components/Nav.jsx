// Nav.jsx - Fixed responsive nav with React Router links and mobile hamburger

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/menu', label: 'Menu' },
    { to: '/products', label: 'Products' },
    { to: '/reviews', label: 'Reviews' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[color:var(--cream)] bg-opacity-95 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img src="/images/hero.png" alt="Al Janaat Sweets" className="h-10 md:h-12 w-auto rounded-lg shadow-md" />
              <span className="text-xl md:text-2xl font-bold text-[color:var(--brown)] hidden sm:inline">Al Janaat Sweets</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`py-2 px-3 text-lg font-medium transition-all duration-300 ${location.pathname === item.to
                    ? 'text-[color:var(--gold)] border-b-2 border-[color:var(--gold)]'
                    : 'text-[color:var(--brown)] hover:text-[color:var(--gold)]'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 rounded-md text-[color:var(--brown)] hover:text-[color:var(--gold)] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-[color:var(--cream)] border-t border-[rgba(107,68,35,0.2)]"
        >
          <div className="px-4 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`block py-2 px-3 text-lg font-medium transition-colors ${location.pathname === item.to
                    ? 'text-[color:var(--gold)] bg-[color:var(--gold)]/10'
                    : 'text-[color:var(--brown)] hover:text-[color:var(--gold)] hover:bg-[color:var(--brown)]/5'
                  }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Nav;
