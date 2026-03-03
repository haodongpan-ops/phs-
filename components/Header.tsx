import React, { useState, useEffect } from 'react';
import { NavLink as RouterNavLink, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NAV_LINKS } from '../constants';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

// Define NavLink component outside of Header to prevent re-creation on render.
const NavLink: React.FC<NavLinkProps> = ({ to, children, className, onClick }) => {
  return (
    <RouterNavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        `${className || ''} ${isActive ? 'text-blue-600 font-semibold' : 'text-slate-600 hover:text-blue-600'} transition-colors duration-300`
      }
    >
      {children}
    </RouterNavLink>
  );
};

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };
  
  useEffect(() => {
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <span>Power<span className="text-blue-600">Acuity</span></span>
          <span className="text-2xl font-bold text-slate-800">谱华森</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.nameKey} to={link.href}>
              {t(link.nameKey)}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-5 rounded-lg transition-transform duration-300 transform hover:-translate-y-1"
          >
            {t('header.contact')}
          </Link>
          <button onClick={toggleLanguage} className="text-sm font-medium text-slate-500 hover:text-blue-600 w-8">
            {i18n.language === 'en' ? '中' : 'EN'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
           <button onClick={toggleLanguage} className="text-sm font-medium text-slate-500 hover:text-blue-600">
            {i18n.language === 'en' ? '中' : 'EN'}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white px-6 pb-4 border-t border-slate-200">
          <div className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.nameKey}
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2"
              >
                {t(link.nameKey)}
              </NavLink>
            ))}
             <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white text-center font-semibold py-2 px-5 rounded-lg transition-transform duration-300 transform hover:-translate-y-1 mt-4"
            >
              {t('header.contact')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;