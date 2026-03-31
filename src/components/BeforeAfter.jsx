import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight } from 'lucide-react';

const BeforeAfter = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);

  const handleMove = (event) => {
    if (!containerRef.current) return;
    
    // Kezeljük úgy az egeret, mint a touch-ot
    const box = containerRef.current.getBoundingClientRect();
    const x = event.touches ? event.touches[0].clientX : event.clientX;
    
    // Százalék kiszámítása a dobozon belül
    let position = ((x - box.left) / box.width) * 100;
    
    // Határok biztosítása (0-100%)
    position = Math.max(0, Math.min(100, position));
    setSliderPosition(position);
  };

  // Képek cseréje majd élesben az ügyfél valós fotóira! 
  // Jelenleg szimulált szürke "koszos" és tiszta kék tintás képek a szemléletetéshez.
  const afterImage = "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"; // "Tiszta" fehér szoba/klíma placeholder
  const beforeImage = "https://images.unsplash.com/photo-1621252178225-8e36746823ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80&grayscale=true&brightness=0.7"; // "Koszos" szürkébb placeholder
  
  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-brand-600 font-bold uppercase tracking-wide text-sm mb-2">Vizuális különbség</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Lássa a különbséget
          </h3>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A legtöbb penész és baktérium a lamellák között bújik meg. Húzza a csúszkát, hogy lássa az "Előtte" és "Utána" állapotot!
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl cursor-ew-resize select-none bg-slate-200"
          ref={containerRef}
          onMouseMove={handleMove}
          onTouchMove={handleMove}
          onTouchStart={handleMove}
          onClick={handleMove} // allow click to jump
        >
          {/* Alul a "Tiszta" kép (After) */}
          <img 
            src={afterImage} 
            alt="Tiszta, karbantartott klíma" 
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            draggable="false"
          />
          <div className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg font-bold text-white uppercase text-sm border border-white/30 hidden sm:block">
            Tiszta
          </div>

          {/* Fölötte a "Koszos" kép, amit Clip-path vág el (Before) */}
          <div 
            className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src={beforeImage} 
              alt="Eltömődött, koszos klíma" 
              className="absolute inset-0 w-full h-full object-cover"
              draggable="false"
            />
            <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg font-bold text-white uppercase text-sm border border-white/20 hidden sm:block">
              Koszos
            </div>
          </div>

          {/* A Húzó vonal és Gomb */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.5)]"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
              <ArrowLeftRight className="text-white w-6 h-6" />
            </div>
          </div>
          
        </motion.div>
        
        <p className="text-center mt-6 text-slate-500 text-sm italic">
          Mutatóba szánt illusztráció. Élesben a konkrét szerelési munkák képeivel fogjuk kicserélni!
        </p>

      </div>
    </section>
  );
};

export default BeforeAfter;
