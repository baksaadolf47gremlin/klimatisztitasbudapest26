import { motion } from 'framer-motion';
import { Droplets, Settings2, Shield, Drill } from 'lucide-react';

const steps = [
  {
    title: 'Állapotfelmérés',
    description: 'Kipróbáljuk a klímát, megmérjük a kifújt levegő hőmérsékletét és ellenőrizzük az alapvető funkciókat.',
    icon: Settings2
  },
  {
    title: 'Magasnyomású mosás',
    description: 'Zárt mosózsákot helyezünk fel (nem lesz víz a falon!), majd magasnyomású mosóval és speciális oldószerrel áttisztítjuk a mókuskereket és a hőcserélőt.',
    icon: Droplets
  },
  {
    title: 'Vegyszeres gombátlanítás',
    description: 'A prevenció érdekében antibakteriális és gombaölő szerekkel kezeljük a fertőtlenített felületeket, elpusztítva a szagokat.',
    icon: Shield
  },
  {
    title: 'Kültéri egység tisztítása',
    description: 'Ellenőrizzük a kültéri egységet, kompresszoros fújással vagy mosással eltávolítjuk a hőcserélőbe ragadt faleveleket és koszt.',
    icon: Drill
  }
];

const Process = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Design háttér elemek */}
      <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 bg-brand-100 rounded-full blur-3xl opacity-50 z-0"></div>
      <div className="absolute bottom-0 left-0 -ml-48 -mb-48 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Szöveges rész */}
          <div className="max-w-2xl">
            <h2 className="text-cyan-600 font-bold uppercase tracking-wide text-sm mb-2">Miért válasszon minket?</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
              A spray nem elég.<br />Mi <span className="text-brand-600">tényleg</span> kitisztítjuk.
            </h3>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Sajnos sok „szakember” csak egy flakon bolti spray-vel fújja be a klímát, majd kiírja az 5000 Ft-os számlát. Ezzel csak a felszínt kezelik, a lényeg a mélyben marad. A mi folyamatunk igazi fizikai és kémiai mélytisztítás.
            </p>

            <div className="space-y-8">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="flex gap-4 relative"
                  >
                    {/* Vonal az ikonok között */}
                    {index !== steps.length - 1 && (
                      <div className="absolute left-6 top-14 bottom-[-32px] w-[2px] bg-slate-200"></div>
                    )}
                    
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center relative z-10">
                      <Icon className="w-5 h-5 text-brand-500" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                      <p className="text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            
            <div className="mt-12">
               <a 
                href="tel:+36307736439" 
                className="inline-flex items-center gap-2 bg-brand-900 hover:bg-brand-800 text-white px-6 py-3 rounded-full font-bold transition-colors"
               >
                 Akarom a tisztítást
               </a>
            </div>
          </div>

          {/* Képi illusztráció rész (Később valós "mosózsákos" képpel) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl"
          >
             <img 
               src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
               alt="Klímatisztítás folyamatban" 
               className="w-full h-full object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-transparent to-transparent"></div>
             
             {/* Lebegő "Trust" doboz a képen */}
             <div className="absolute bottom-8 left-8 right-8 glass rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex justify-center items-center">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-800">Garancia a tisztaságra</h5>
                    <p className="text-sm text-slate-600">Ha penészes marad, ingyen újrahúzzuk.</p>
                  </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Process;
