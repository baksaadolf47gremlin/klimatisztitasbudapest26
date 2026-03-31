import { motion } from 'framer-motion';
import { CheckCircle2, ShieldAlert } from 'lucide-react';

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
        
        {/* Intro szöveg kibontva */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 item-start mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
              Sajnos már tapasztalatból tudjuk...
            </h2>
            <div className="w-20 h-1.5 bg-brand-500 rounded-full mb-8"></div>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              ...hogy egyes klímatisztító "szakemberek" csak azokat a tisztítási folyamatokat végzik el, amit Ön is könnyedén elvégezhetne.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Szemben ezzel <strong>mi a klíma teljes szerkezetét megbontjuk</strong>, majd alkotóelemenként és részegységenként végezzük el külön-külön a tisztítást. Egyaránt nagy hangsúlyt fektetünk a kültéri és a beltéri egységnek tisztítására, biztonságos további üzemelésének feltételeit megteremtve.
            </p>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-2xl mt-8 flex items-start gap-4">
              <ShieldAlert className="w-8 h-8 text-orange-500 shrink-0 mt-1" />
              <p className="text-orange-900 font-medium">
                Amennyiben ennek karbantartása nincs elvégezve, úgy a klímakompresszor és egyéb fődarabok idő előtti meghibásodását eredményezi.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-brand-50 rounded-3xl p-8 md:p-10 border border-brand-100 flex flex-col justify-center shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-brand-200/50 rounded-full blur-3xl"></div>
            <p className="text-xl md:text-2xl font-display font-bold text-brand-900 leading-relaxed relative z-10 italic">
              "Aki az otthonában, az irodában, vagy az autójában klímát használ már tudja, hogy a klíma rendszeres karbantartása és tisztítása elkerülhetetlen. A klímatisztítás elhanyagolása számos egészségügyi veszélyt rejt magában."
            </p>
            <p className="font-bold text-brand-600 mt-6 relative z-10 uppercase tracking-wide text-sm">
              Ezért fontos, hogy a klíma időszakos karbantartása és tisztítása szakszerűen megtörténjen.
            </p>
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
