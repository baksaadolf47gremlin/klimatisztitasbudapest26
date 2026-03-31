import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: "Milyen időközönként kell karbantartani a klímát?",
    a: "Éves szinten egyszeri karbantartást írnak elő, viszont állandó téli-nyári üzemeltetés esetén a kétszeri, hűtési és fűtési szezon előtt ajánlott a karbantartást és a tisztítást elvégezni. A nyári üzemben a fák virágzása miatt érdemes ellenőriznünk a kültéri egység hőcserélőjét. Ennek szennyeződése, eldugulása esetén a kompresszor hiába dolgozik, a készülék teljesítménye csökken, hiszen a hőt nem tudja leadni. Ez a villanyszámlán is többletfogyasztásként jelentkezik."
  },
  {
    q: "Mennyi időt vesz igénybe a klíma tisztítása?",
    a: "Ha eddig beszélgetéssel együtt 10 perc alatt végeztek, akkor tényleges karbantartás nem történt. Egy szakszerű és mindent átfogó karbantartás és tisztítás hossza ha más egyéb probléma nem merül fel 30-40 perc. Mivel a beltéri egység burkolatának és szűrőbetétjeinek tisztítása és fertőtlenítése után az egyéb részegységek, mint mókuskerék ventilátor, terelőlapátok, légcsatorna, kondenzvíztálca, illetve maga a kondenzvíz elvezetése, esetleges dugulás megszüntetése. A csatlakozók, szigetelések, elektromos bekötések ellenőrzése, majd a fertőtlenített részegységek összeszerelése után a kültéri egységre is kiemelt figyelmet fordítunk."
  },
  {
    q: "Karbantartás alkalmával szükséges-e a gáztöltés?",
    a: "Alapjába véve a klímagáz zárt rendszerben üzemel. Amennyiben a szívó és nyomóoldali kötésekkel nincsen probléma, illetve a kompresszorhoz vezető csövek, illetve maga a kompresszor nem lyukadt ki, akkor a gáz töltet állandó. Akkor van szükség gáztöltésre, ha a fent felsoroltak közül valamely hiba fennáll."
  },
  {
    q: "Honnan tudhatom, hogy gázhiányos a klímám?",
    a: "Minden klímaberendezés a gyártó által meghatározott és az adattáblán feltüntetett gáztöltettel rendelkezik. Abban az esetben, ha valamelyik oldalon elszökik a gáz, onnantól kezdve a készülék nem működik megfelelő hatásfokkal. Nyomáspróbát követően a hiányzó gázmennyiséget a szakember pótolja."
  },
  {
    q: "Langyos levegőt fúj a klímám, mi lehet az oka?",
    a: "Ha langyos levegőt fúj a klíma, akkor több mint valószínű, hogy a hibát az indítókondenzátor meghibásodása okozza. Ennek cseréje függ a klíma típusától és a kondenzátor kapacitásától."
  },
  {
    q: "Csöpög a beltéri egység",
    a: "Vagy kivitelezéskor elkövetett hiba okozza, vagy a kivitelezés utáni külső behatás által a kondenzvíz elvezetése meghiúsul. Ebben az esetben szakember tudja megállapítja a hiba pontos okát."
  },
  {
    q: "Miért nem a távirányítón beállított hőmérsékletet fújja a klíma?",
    a: "A klímaberendezés hűtéskor típustól függően egy állandó hőmérsékletű levegőt fúj. A távirányítón beállított hőmérséklet csak egy célhőmérséklet, amit a helyiségben szeretnénk elérni. Ha nem akar 16 C°-ot a lakásban, akkor ne állítsa 16 C°-ra a távirányítót. A távirányítón azt a hőmérsékleti értéket adja meg, amit szeretne elérni."
  },
  {
    q: "Panelprogram esetén csak szakember szerelheti le a készüléket?",
    a: "Több esetben is találkoztunk olyan esettel, amikor az állványokon dolgozó homlokzati hőszigetelést végző szakmunkások barbár módon eltépik, eltörik, vagy jobb esetben elcsípik a hűtőköri rézcsöveket, amit csak költséges munkafolyamat árán hozható helyre. Némely estben előfordul, hogy a teljes hűtőkört cserélni kell a szakszerűtlen leszerelés miatt. Leszereléskor feltétlenül ügyelni kell arra, hogy a kondenzcső, illetve a hűtőköri csövek megfelelő hosszúsággal rendelkezzenek, hogy a későbbiekben a hőszigetelő lapok felhelyezése után is könnyedén visszaszerelhető legyen a kültéri egység."
  },
  {
    q: "Lehet házilag tisztítani a klímát?",
    a: "Lehet, de nem ajánlott! Miért? Mert a klíma részegységeit roncsolás mentesen csak szakember tudja szétszerelni. Ez pedig elengedhetetlen a megfelelő minőségű tisztítás és fertőtlenítés elvégzéséhez. A pollenszűrők elmosása nem egyenértékű a klíma teljes körű tisztításával és fertőtlenítésével. Egyszerűbben a baktériumok, amelyek a betegséget okozzák a pollenszűrő elmosása után ugyanúgy megtalálhatóak a klíma belső részegységein."
  },
  {
    q: "Büdös levegőt fúj a klímám",
    a: "Rendszeres használat mellet a klíma belső részére a kikapcsolás után pára csapódik le. Ez nem szárad meg rendesen, és a porral együtt egy réteget képez a ventilátorra és a belső részekre is. Egy kis idő után penészgomba telepszik meg rajta amit a ventilátor a bekapcsolást követően spóraként fúj ki a légtérbe, ezáltal szennyezve a levegőt amit belélegzünk. Kifejezetten káros hatást gyakorol ránk, környezetünkre és az ott tartózkodókra. Ha büdös levegőt fúj a klíma akkor több mint valószínű, hogy a penészgomba már megtelepedett mielőbb szükség van szakember segítségére. Egy alapos karbantartást és tisztítást követően a belső részegységek teljes fertőtlenítésen esnek át, melynek következtében a penészgomba 99,9 százalékban megszüntethető. Mindenképpen bízza szakemberre klímája tisztítását és fertőtlenítését, ha kézzel fogható eredményt szeretne elérni. Hívja kollégánkat ahol készséggel állnak a rendelkezésére akár karbantartásról, vagy régebbi gépe felélesztéséről van szó."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-slate-50 relative border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-100 text-brand-600 mb-6">
            <HelpCircle className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Gyakran Ismételt Kérdések
          </h2>
          <p className="text-lg text-slate-600">
            Minden, amit a klímatisztítással és karbantartással kapcsolatban tudni érdemes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-brand-300 shadow-md ring-1 ring-brand-500/20' : 'border-slate-200 hover:border-brand-200 hover:shadow-sm'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                >
                  <span className={`font-bold text-lg pr-8 transition-colors ${isOpen ? 'text-brand-600' : 'text-slate-800 group-hover:text-brand-600'}`}>
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? 'bg-brand-500 text-white rotate-180 shadow-md shadow-brand-500/20' : 'bg-brand-50 text-brand-500 group-hover:bg-brand-100 group-hover:text-brand-600'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-50 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
