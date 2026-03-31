import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, Construction } from 'lucide-react';

const MaintenancePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white p-6 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl mb-8">
            <Construction className="w-12 h-12 text-brand-400" />
          </div>
          
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-[1.3] tracking-tight">
            <span className="text-white block mb-2 opacity-90">Ez a tartalom</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-cyan-300 to-brand-300 font-extrabold">
              csak a teljes weboldal elkészültekor érhető el
            </span>
          </h1>
          
          <p className="text-slate-400 text-lg mb-12">
            Zajlik a tartalom feltöltése és a funkciók véglegesítése. Kérjük nézzen vissza később!
          </p>

          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-brand-500/20 group"
            >
              <Home className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Vissza a főoldalra</span>
            </motion.div>
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-12 text-slate-500 text-sm font-medium tracking-widest uppercase opacity-50">
        Klímatisztítás Budapest • 2026
      </div>
    </div>
  );
};

export default MaintenancePage;
