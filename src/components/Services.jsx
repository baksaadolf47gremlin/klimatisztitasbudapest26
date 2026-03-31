import { motion } from 'framer-motion';
import { Wrench, ShieldCheck, Droplets, Fan, Settings, ArrowRight, Activity } from 'lucide-react';

// Teljesen felismerhető, letisztult ikonok (fő ikon + egy kis badge ikon sarkítva)
const CustomCleaningIcon = ({ className }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <Fan strokeWidth={1.5} className="w-full h-full opacity-90 transition-transform duration-[1500ms] group-hover:rotate-180" />
    <Droplets strokeWidth={2.5} className="w-[45%] h-[45%] absolute -bottom-2 -right-2 bg-cyan-50 rounded-full p-0.5 shadow-sm text-cyan-600 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110" />
  </div>
);

const CustomMaintenanceIcon = ({ className }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <ShieldCheck strokeWidth={1.5} className="w-full h-full opacity-90 transition-transform duration-500 group-hover:-translate-y-1" />
    <Settings strokeWidth={2.5} className="w-[45%] h-[45%] absolute -bottom-2 -right-2 bg-brand-50 rounded-full p-0.5 shadow-sm text-brand-600 transition-transform duration-1000 group-hover:rotate-180" />
  </div>
);

const CustomRepairIcon = ({ className }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    <Wrench strokeWidth={1.5} className="w-full h-full opacity-90 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-105 origin-center" />
    <Activity strokeWidth={2.5} className="w-[45%] h-[45%] absolute -bottom-2 -right-2 bg-indigo-50 rounded-full p-0.5 shadow-sm text-indigo-600 transition-colors duration-300 group-hover:text-indigo-400 group-hover:scale-110" />
  </div>
);

const services = [
  {
    id: 1,
    title: 'Klíma Karbantartás',
    description: 'Amennyiben nincs meg az időszakos, megelőző tudatos karbantartás, úgy ez a későbbiekben akár fődarabok meghibásodásához is vezethet.',
    icon: CustomMaintenanceIcon,
    color: 'text-brand-500',
    bg: 'bg-brand-50',
    href: '#karbantartas',
    popular: false
  },
  {
    id: 2,
    title: 'Klíma Tisztítás',
    description: 'Vállaljuk inverteres és „on/off"-os klímák teljes körű tisztítását. Egyaránt nagy hangsúlyt fektetünk a beltéri és a kültéri egység karbantartására is.',
    icon: CustomCleaningIcon,
    color: 'text-cyan-500',
    bg: 'bg-cyan-50',
    href: '#tisztitas',
    popular: true
  },
  {
    id: 3,
    title: 'Klíma Javítás',
    description: 'Egyaránt vállaljuk ON/OFF -os és inverteres klímák javítását Budapesten és vonzáskörzetében.',
    icon: CustomRepairIcon,
    color: 'text-indigo-500',
    bg: 'bg-indigo-50',
    href: '#javitas',
    popular: false
  }
];

const Services = () => {
  return (
    <section id="szolgaltatasok" className="pb-24 pt-12 md:pt-16 bg-white relative z-20 mt-12 md:mt-16">
      
      {/* TAB (Fülecske) */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-[calc(100%-1px)] bg-white px-6 md:px-12 pt-5 md:pt-6 pb-4 rounded-t-3xl w-[90%] md:w-auto min-w-[280px] max-w-[80%] text-center flex flex-col items-center">
        
        {/* Finomabb inverz kerekítési trükk */}
        <div className="absolute bottom-0 -left-4 w-4 h-4 pointer-events-none overflow-hidden">
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-transparent rounded-full shadow-[8px_8px_0_8px_white]"></div>
        </div>
        <div className="absolute bottom-0 -right-4 w-4 h-4 pointer-events-none overflow-hidden">
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-transparent rounded-full shadow-[-8px_8px_0_8px_white]"></div>
        </div>

        <h2 className="text-brand-500 font-bold uppercase tracking-[0.15em] text-[10px] md:text-xs mb-1.5 opacity-90">Szolgáltatásaink</h2>
        <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-800">
          Miben tudunk segíteni?
        </h3>
        {/* Elegáns elválasztó pötty */}
        <div className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-3 opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 md:pt-4">
        
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">

          <p className="text-lg text-slate-600">
            Daikin, Gree, Midea, Samsung és egyéb márkák profi karbantartása, tisztítása és szervizelése azonnal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-3xl p-8 border hover:-translate-y-2 transition-all duration-300 group
                  ${service.popular ? 'border-brand-200 shadow-xl ring-2 ring-brand-500/10' : 'border-slate-100 shadow-md hover:shadow-xl hover:border-slate-200'}
                `}
              >
                {service.popular && (
                  <div className="absolute top-0 right-8 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-brand-600 to-cyan-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full flex items-center shadow-lg">
                       Legnépszerűbb
                    </span>
                  </div>
                )}
                
                <div className={`w-20 h-20 rounded-2xl ${service.bg} flex items-center justify-center mb-6 shadow-sm border border-white/50`}>
                  <Icon className={`w-11 h-11 ${service.color}`} />
                </div>
                
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h4>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <a 
                  href={service.href} 
                  className={`inline-flex items-center gap-2 font-semibold transition-colors
                    ${service.popular ? 'text-brand-600 hover:text-brand-700' : 'text-slate-600 hover:text-slate-900'}
                  `}
                >
                  Részletek
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
