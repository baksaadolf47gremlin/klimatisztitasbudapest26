import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Sándorné Czoma',
    text: 'Szakszerű karbantartás,kedves és pontos fiatalemberek. A karbantartás óta a légzésem is sokkal könnyebb, mindenkinek ajánlom az urakat :)',
    date: 'Google értékelés',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocKL6z9d5vB1JvkNdiJFEHIAQhGhFnq0Zkdmb4M4TFhYmXe_EA=w40-h40-c-rp-mo-br100'
  },
  {
    id: 2,
    name: 'Krisztina Czoma',
    text: 'Nagyon kedves 2 fiatalember szerelte be nekünk a klìmát. Megbìzhatòak, pontosak, precìzek. Ezùton is köszönöm a munkájukat, és nagyon ajánlom őket.',
    date: 'Google értékelés',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocLqRAOnHr1nRRLdvasCmVV8NyRko9f55G4SjvY-tfLCuXF4oA=w40-h40-c-rp-mo-br100'
  },
  {
    id: 3,
    name: 'Adrián Kollár',
    text: 'Alapos munkát végzett, korrekt áron, pedig lett volna lehetősége az átverésre. Nagyon kedves és segítőkész.',
    date: 'Google értékelés',
    image: 'https://lh3.googleusercontent.com/a/ACg8ocJ8VGBzzFeZYugV8RJmvEXSTi9HPMzDzeFsSFCXd9k-YXftkA=w40-h40-c-rp-mo-br100'
  },
  {
    id: 4,
    name: 'poccermoccer',
    text: 'Szuper volt a klimatelepítés és a karbantartás is. Köszönjük!',
    date: 'Google értékelés',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjUzLvkQPVbzlc2DShebd945-SSY3PRZpbdljg8rdHWxECDIISMc=w40-h40-c-rp-mo-ba2-br100'
  },
  {
    id: 5,
    name: 'Juhász Viktória',
    text: 'Poros klima tisztitas utan, mintha uj lenne. Ajanlom!!',
    date: 'Google értékelés',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjVtSt3TJYMrd0IdoggJKCdGxf6_qPy6oVmp-eKuirryMzkVgl3K=w40-h40-c-rp-mo-br100'
  },
  {
    id: 6,
    name: 'Gábor Máté',
    text: 'A klímám nem fűtött. Átvizsgálták, kitisztították, most meleg van. Precíz, megbízható csapat. Köszönöm! Mindenkinek ajánlom!',
    date: 'Google értékelés',
    image: 'https://lh3.googleusercontent.com/a-/ALV-UjUafv7Hmp1G0gDa2_mUNMGYzEk772py4OiS0SF5upoQWvm9vDHf=w40-h40-c-rp-mo-br100'
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-brand-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500 to-transparent opacity-50"></div>
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <div className="bg-green-500 text-white text-xs font-bold px-2 py-0.5 rounded">Trustindex</div>
            <span className="text-sm font-semibold">Kiváló - 4.9/5 (1100+ értékelés)</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Mit mondanak rólunk?</h2>
          <p className="text-lg text-brand-200">Valós vélemények elégedett ügyfeleinktől Budapesten.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white/5 backdrop-blur-2xl rounded-2xl p-8 border border-white/10 shadow-xl relative group hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-white/10 group-hover:text-white/20 transition-colors" strokeWidth={1} />
              
              <div className="flex items-center gap-1.5 text-amber-400 mb-6 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-current" strokeWidth={1.5} />
                ))}
              </div>
              
              <p className="text-slate-300 text-lg mb-8 leading-relaxed italic relative z-10">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4 border-t border-white/10 pt-4 mt-auto">
                {review.image ? (
                  <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover border border-white/20 bg-brand-900" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center font-bold text-lg border border-brand-400">
                    {review.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h4 className="font-bold text-white">{review.name}</h4>
                  <p className="text-xs text-brand-200">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <a href="https://trustindex.io" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-300 hover:text-white font-medium transition-colors border-b border-brand-500/50 hover:border-white pb-1">
              Összes vélemény megtekintése &rarr;
            </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
