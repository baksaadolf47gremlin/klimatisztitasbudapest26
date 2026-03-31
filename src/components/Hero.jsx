import { motion } from 'framer-motion';
import { Phone, ShieldCheck, Star } from 'lucide-react';
import heroImg from '../assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="relative flex items-center overflow-hidden bg-slate-900">
      
      {/* Háttérkép */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Professzionális klímatisztítás Budapest" 
          className="w-full h-full object-cover object-[center_45%] opacity-95"
        />
        {/* Gradient CSAK a jobb oldalon – bal oldal szabad, ott látszik a szerelő arca */}
        <div className="absolute inset-0 bg-gradient-to-l from-brand-950/95 via-brand-900/75 to-transparent" style={{ left: '35%', right: 0, width: 'auto' }}></div>
        {/* Felső+alsó enyhe sötétítés */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-slate-900/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 w-full pt-20 pb-20 lg:pt-28 lg:pb-32">
        {/* Tartalom a JOBB oldalon – bal oldal (szerelő arca) szabad */}
        <div className="max-w-xl ml-auto">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-5">
              Klímatisztítás<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-cyan-300">
                Budapesten
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-300 mb-8 leading-relaxed">
              Teljes, szétszereléses mélytisztítás. Egészséges levegő, hosszabb élettartam – profi szakemberektől.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a 
                href="tel:+36307736439" 
                className="flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-7 py-3.5 rounded-full font-bold text-base transition-all hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                <span>06 30 773 6439</span>
              </a>
              <a 
                href="#kapcsolat" 
                className="flex items-center justify-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/25 text-white px-7 py-3.5 rounded-full font-semibold text-base transition-all"
              >
                Ajánlatot kérek
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-6 border-t border-white/10">
              <div className="flex -space-x-3">
                {[
                  "https://lh3.googleusercontent.com/a-/ALV-UjUzLvkQPVbzlc2DShebd945-SSY3PRZpbdljg8rdHWxECDIISMc=s100-c-rp-mo-ba2-br100",
                  "https://lh3.googleusercontent.com/a-/ALV-UjVtSt3TJYMrd0IdoggJKCdGxf6_qPy6oVmp-eKuirryMzkVgl3K=s100-c-rp-mo-br100",
                  "https://lh3.googleusercontent.com/a-/ALV-UjUafv7Hmp1G0gDa2_mUNMGYzEk772py4OiS0SF5upoQWvm9vDHf=s100-c-rp-mo-br100",
                  "https://lh3.googleusercontent.com/a-/ALV-UjVfaBEkTt49ynHqUcgQO58obQ1RsemCAsvUCTmv2fN6Ws4DKyr6=s100-c-rp-mo-br100"
                ].map((img, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-slate-300 border-2 border-brand-900 flex items-center justify-center overflow-hidden shadow-md">
                    <img src={img} alt="Valós ügyfél értékelés" referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-brand-500 border-2 border-brand-900 flex items-center justify-center text-xs font-bold text-white">
                  +1.1k
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 text-yellow-400 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                </div>
                <div className="text-sm font-medium text-slate-300">
                  <span className="text-white font-bold">4.9/5</span> értékelés Trustindexen
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
