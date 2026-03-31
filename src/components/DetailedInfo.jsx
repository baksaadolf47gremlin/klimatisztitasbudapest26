import { motion } from 'framer-motion';
import { CheckCircle2, ShieldAlert, Wrench, SearchX } from 'lucide-react';

const DetailedInfo = () => {
  const belteriEsyseg = [
    "beltéri egység burkolatának teljes tisztítása",
    "beltéri egység szűrőbetétjeinek fertőtlenítése, szükség esetén pótlása",
    "belső levegőjáratok, légterelők és mókuskerék ventilátor teljes tisztítása, fertőtlenítése",
    "csőszigetelés ellenőrzése, pótlása",
    "elektromos csatlakozók ellenőrzése, utánhúzása",
    "gázszivárgás ellenőrzés",
    "működés közbeni esetleges zajok megszűntetése",
    "leadott hűtésteljesítmény szakszerű mérése"
  ];

  const kulteriEsyseg = [
    "kültéri egység hőcserélőjének légkompresszorral történő tisztítása",
    "kültéri egység burkolatán található szennyeződések eltávolítása",
    "külső konzol rögzítésének ellenőrzése",
    "esetleges rezonancia megszüntetése",
    "hűtőkör nyomáspróba",
    "kondenzvíz elvezetés javítása, dugulás megszüntetése",
    "hanyag kivitelezés általi hiánypótlások, hibák kijavítása",
    "csövek szigetelésének pótlása, javítása a hőveszteség elkerülése érdekében",
    "kültéri egység kötéseinek ellenőrzése, szükség esetén hollanderek cseréje"
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Középre zárt főcím a szekció elején */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
              Sajnos már tapasztalatból tudjuk...
            </h2>
            <div className="w-24 h-1.5 bg-brand-500 rounded-full mx-auto"></div>
          </motion.div>
        </div>

        {/* 2 Hasáb: Vertikális Timeline + Kártya */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-32">
          
          {/* VERTICAL STORYLINE (Bal oldali hasáb) */}
          <div className="relative pl-6 md:pl-0">
            {/* Központi Vonal */}
            <div className="absolute left-0 md:left-[27px] top-6 bottom-6 w-px bg-gradient-to-b from-slate-200 via-brand-200 to-orange-200"></div>
            
            <div className="space-y-8">
              
              {/* Phase 1: Probléma */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative md:pl-20"
              >
                {/* Desktop Ikon Kártya */}
                <div className="absolute -left-8 md:left-0 top-0 w-14 h-14 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center z-10 hidden md:flex transition-transform duration-300">
                  <SearchX className="w-6 h-6 text-slate-400" strokeWidth={1.5} />
                </div>
                {/* Mobil Ikon Pont */}
                <div className="absolute -left-[11px] md:hidden top-1 w-6 h-6 rounded-full bg-slate-50 border-[3px] border-white flex items-center justify-center z-10 shadow-sm">
                   <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div>
                </div>
                
                <h3 className="text-lg font-bold font-display text-slate-800 mb-2 pt-0.5 md:pt-1">A látszatmegoldás</h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  ...hogy egyes klímatisztító "szakemberek" csak azokat a tisztítási folyamatokat végzik el, amit Ön is könnyedén elvégezhetne.
                </p>
              </motion.div>

              {/* Phase 2: Megoldás */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="relative md:pl-20"
              >
                {/* Desktop Ikon Kártya */}
                <div className="absolute -left-8 md:left-0 top-0 w-14 h-14 bg-brand-50/80 rounded-xl shadow-sm border border-brand-200 flex items-center justify-center z-10 hidden md:flex text-brand-500 transition-all duration-300">
                  <Wrench className="w-6 h-6" strokeWidth={1.5} />
                </div>
                {/* Mobil Ikon Pont */}
                <div className="absolute -left-[11px] md:hidden top-3 w-6 h-6 rounded-full bg-brand-50 border-[3px] border-white flex items-center justify-center z-10 shadow-sm">
                   <div className="w-1.5 h-1.5 bg-brand-500 rounded-full"></div>
                </div>

                {/* Kiemelt Blokkom - Finomítva */}
                <div className="bg-white p-5 md:p-6 rounded-2xl border border-brand-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand-50/50 rounded-full blur-xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                  <h3 className="text-lg font-bold font-display text-brand-900 mb-2 relative z-10">A mi megoldásunk</h3>
                  <p className="text-base text-slate-600 leading-relaxed relative z-10">
                    Szemben ezzel <strong className="text-slate-900 font-semibold border-b border-brand-200 pb-0.5">mi a klíma teljes szerkezetét megbontjuk</strong>, majd alkotóelemenként és részegységenként végezzük el külön-külön a tisztítást. Egyaránt nagy hangsúlyt fektetünk a kültéri és a beltéri egység tisztítására.
                  </p>
                </div>
              </motion.div>

              {/* Phase 3: Veszély */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="relative md:pl-20"
              >
                {/* Desktop Ikon Kártya */}
                <div className="absolute -left-8 md:left-0 top-0 w-14 h-14 bg-orange-50/80 rounded-xl shadow-sm border border-orange-200 flex items-center justify-center z-10 hidden md:flex text-orange-500 transition-all duration-300">
                  <ShieldAlert className="w-6 h-6" strokeWidth={1.5} />
                </div>
                {/* Mobil Ikon Pont */}
                <div className="absolute -left-[11px] md:hidden top-1 w-6 h-6 rounded-full bg-orange-50 border-[3px] border-white flex items-center justify-center z-10 shadow-sm">
                   <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                </div>
                
                <h3 className="text-lg font-bold font-display text-orange-900 mb-2 pt-0.5 md:pt-1">A kritikus veszély</h3>
                <p className="text-base text-slate-600 leading-relaxed font-medium">
                  Amennyiben ennek karbantartása nincs elvégezve, úgy a klímakompresszor és egyéb fődarabok idő előtti meghibásodását eredményezi.
                </p>
              </motion.div>

            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-brand-50/80 rounded-[2.5rem] p-8 md:p-12 border border-brand-100 flex flex-col justify-center shadow-xl relative overflow-hidden backdrop-blur-sm group"
          >
            {/* Technikai háttérminta (absztrakt klíma lamellák/hűtőborda) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] overflow-hidden">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0,10 L100,10 M0,20 L100,20 M0,30 L100,30 M0,40 L100,40 M0,50 L100,50 M0,60 L100,60 M0,70 L100,70 M0,80 L100,80 M0,90 L100,90" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-brand-900" />
                <path d="M10,0 L10,100 M20,0 L20,100 M30,0 L30,100 M40,0 L40,100 M50,0 L50,100 M60,0 L60,100 M70,0 L70,100 M80,0 L80,100 M90,0 L90,100" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-brand-900" />
              </svg>
            </div>

            {/* Glowing Accent */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-brand-200/40 rounded-full blur-[80px] pointer-events-none group-hover:bg-brand-300/40 transition-colors duration-700"></div>
            
            {/* Floating Badge */}
            <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-white/90 backdrop-blur-md border border-brand-200 px-4 py-1.5 rounded-full shadow-sm flex items-center gap-2 animate-bounce-slow">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-700">Szakértői vélemény</span>
            </div>

            {/* Quote Icon */}
            <div className="mb-6 opacity-20">
              <svg width="40" height="32" viewBox="0 0 40 32" fill="currentColor" className="text-brand-600">
                <path d="M11.4286 0C5.11607 0 0 5.11607 0 11.4286C0 17.7411 5.11607 22.8571 11.4286 22.8571H14.2857C14.2857 27.5848 10.4286 31.442 5.71429 31.442H4.28571V32H5.71429C13.5937 32 20 25.5937 20 17.7143V11.4286C20 5.11607 14.8839 0 11.4286 0ZM31.4286 0C25.1161 0 20 5.11607 20 11.4286C20 17.7411 25.1161 22.8571 31.4286 22.8571H34.2857C34.2857 27.5848 30.4286 31.442 25.7143 31.442H24.2857V32H25.7143C33.5937 32 40 25.5937 40 17.7143V11.4286C40 5.11607 34.8839 0 31.4286 0Z" />
              </svg>
            </div>

            <p className="text-xl md:text-2xl font-display font-bold text-brand-950 leading-[1.4] relative z-10 italic">
              "Aki az otthonában, az irodában, vagy az autójában klímát használ már tudja, hogy a klíma rendszeres karbantartása és tisztítása elkerülhetetlen. A klímatisztítás elhanyagolása számos egészségügyi veszélyt rejt magában."
            </p>
            
            <div className="mt-10 relative z-10">
              <p className="font-bold text-brand-600 uppercase tracking-widest text-xs mb-2">
                Fontos Emlékeztető
              </p>
              <p className="text-brand-900/80 font-medium leading-relaxed">
                Ezért fontos, hogy a klíma időszakos karbantartása és tisztítása szakszerűen megtörténjen. <span className="text-brand-600">Egy tiszta rendszer nemcsak energiát takarít meg, hanem az Ön egészségét is védi.</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Listák */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Mit tartalmaz a teljes körű tisztítás?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Beltéri */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100"
          >
            <h3 className="text-2xl font-bold font-display text-slate-800 mb-8 flex items-center gap-3">
              <div className="px-4 h-12 min-w-[48px] rounded-xl bg-cyan-100 flex items-center justify-center text-cyan-600">IN</div>
              Beltéri egység tisztítása
            </h3>
            <ul className="space-y-4">
              {belteriEsyseg.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Kültéri */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100"
          >
            <h3 className="text-2xl font-bold font-display text-slate-800 mb-8 flex items-center gap-3">
              <div className="px-4 h-12 min-w-[48px] rounded-xl bg-brand-100 flex items-center justify-center text-brand-600">OUT</div>
              Kültéri egység tisztítása
            </h3>
            <ul className="space-y-4">
              {kulteriEsyseg.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default DetailedInfo;
