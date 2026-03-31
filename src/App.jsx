import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import DetailedInfo from './components/DetailedInfo';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import ContactFooter from './components/ContactFooter';

function App() {
  // Inicializáljuk a Google Fontokat dinamikusan az oldalfejben a prémium kinézetért
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Outfit:wght@400;600;800&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 font-sans selection:bg-brand-500 selection:text-white">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <DetailedInfo />
        <FAQ />
        <Testimonials />
      </main>

      <ContactFooter />
    </div>
  );
}

export default App;
