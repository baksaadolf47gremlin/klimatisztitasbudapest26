import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();

  // Görgetésfigyelő a zsugorodó ragadós fejléchez
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Automatikus görgetés a tetejére oldalváltáskor
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Klímatisztítás', href: '/', sectionId: 'szolgaltatasok' },
    { name: 'Klímajavítás', href: '/karbantartas' },
    { name: 'Karbantartás', href: '/karbantartas' },
    { name: 'Áraink', href: '/karbantartas' },
    { name: 'Galéria', href: '/', sectionId: 'galeria' },
    { name: 'Kapcsolat', href: '/', sectionId: 'kapcsolat' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3 border-slate-200' 
          : 'bg-slate-900/20 backdrop-blur-md py-5 border-white/5'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 xl:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo Szekció */}
          <Link to="/" className="flex items-center cursor-pointer">
            <Logo isScrolled={isScrolled} />
          </Link>

          {/* Asztali menü */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-8">
            <div className="flex gap-3 xl:gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className={`text-[14px] xl:text-base font-semibold transition-all duration-300 whitespace-nowrap ${
                    isScrolled 
                      ? 'text-slate-800 hover:text-brand-600' 
                      : 'text-white hover:text-lime-400 drop-shadow-[0_2px_2px_rgba(0,0,0,0.5)]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            
            <a 
              href="tel:+36307736439" 
              className="group flex items-center gap-2 bg-brand-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-brand-400 hover:scale-105 hover:shadow-md active:scale-95"
            >
              <Phone className="w-4 h-4 transition-transform group-hover:rotate-12" />
              <span>06 30 773 6439</span>
            </a>
          </div>

          {/* Mobil menü gomb */}
          <button 
            className="lg:hidden p-2 text-white bg-brand-500 rounded-lg hover:bg-brand-600 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menü megnyitása"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobil navigáció (legördülő) */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-3 py-4 text-base font-medium text-slate-800 hover:text-brand-600 hover:bg-slate-50 border-b border-slate-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="tel:+36307736439" 
              className="mt-4 flex justify-center items-center gap-2 bg-brand-500 text-white px-5 py-3 rounded-xl font-bold w-full"
            >
              <Phone className="w-5 h-5" />
              <span>Hívás: 06 30 773 6439</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
