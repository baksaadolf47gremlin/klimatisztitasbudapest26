const Logo = ({ className = '', isScrolled = true, showIcon = true, pureWhite = false }) => {
  // Brand színek, melyek fehérek a sötét hero felett vagy pureWhite módban
  const darkBlue = (isScrolled && !pureWhite) ? '#1e3a8a' : '#ffffff';
  // Világos kék: Görgetve erősebb (#0284c7 = sky-600) a jobb kontrasztért, Hero-n marad világos
  const lightBlue = (isScrolled && !pureWhite) ? '#0284c7' : '#e0f2fe';

  // Zöld: Görgetve sötétebb (lime-600/700) kell a fehér (üveg) háttéren a kontraszthoz
  const greenDark = (isScrolled && !pureWhite) ? '#4d7c0f' : '#ffffff'; // pureWhite esetén fehér
  const greenLight = (isScrolled && !pureWhite) ? '#65a30d' : '#ffffff'; // pureWhite esetén fehér

  // Jobb olvashatóság érdekében erősebb színek és árnyékok
  const textColorBlue = (isScrolled && !pureWhite) ? 'text-brand-900' : 'text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.85)]';
  // Fehér/világos háttéren (görgetve) sötétebb zöld (lime-700) kell a kontraszthoz
  const textColorGreen = (isScrolled && !pureWhite) ? 'text-lime-700 font-black tracking-tight' : 'text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.85)] font-black tracking-tight';
  const textColorGray = (isScrolled && !pureWhite) ? 'text-brand-800 font-bold' : 'text-slate-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] font-bold';

  // Egy "origami" vagy turbina lapát, ami egy 5-ágú csillagot ad ki
  const StarBlade = ({ rotation, colorDark, colorLight }) => (
    <g transform={`rotate(${rotation} 50 50)`}>
      {/* Jobb / Sötétebb (vagy telítettebb) oldal */}
      <path d="M 50,5 L 62,38 L 50,46 Z" fill={colorDark} className="transition-colors duration-300" />
      {/* Bal / Világosabb (árnyék/fény) oldal */}
      <path d="M 50,5 L 50,46 L 38,38 Z" fill={colorLight} className="transition-colors duration-300" />
    </g>
  );

  return (
    <div className={`flex items-center gap-3 select-none ${className} group`}>

      {/* Gyönyörű, absztrakt matematikai 3D csillag / turbina (Aerodynamic Star) */}
      {showIcon && (
        <svg
          width="52"
          height="52"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex-shrink-0 group-hover:scale-105 transition-transform duration-500"
        >
        <g strokeWidth="2" strokeLinejoin="round">
          {/* Felső: Sötétkék */}
          <StarBlade rotation={0} colorDark={darkBlue} colorLight={pureWhite ? '#ffffff' : (isScrolled ? '#3b82f6' : '#bfdbfe')} />
          {/* Jobb felső: Világoskék (Légörvény / Frissesség utalás) */}
          <StarBlade rotation={72} colorDark={lightBlue} colorLight={pureWhite ? '#ffffff' : (isScrolled ? '#38bdf8' : '#e0f2fe')} />
          {/* Jobb alsó: Sötétkék */}
          <StarBlade rotation={144} colorDark={darkBlue} colorLight={pureWhite ? '#ffffff' : (isScrolled ? '#3b82f6' : '#bfdbfe')} />
          {/* Bal alsó: Zöld */}
          <StarBlade rotation={216} colorDark={greenDark} colorLight={pureWhite ? '#ffffff' : greenLight} />
          {/* Bal felső: Zöld */}
          <StarBlade rotation={288} colorDark={greenDark} colorLight={pureWhite ? '#ffffff' : greenLight} />
        </g>

        {/* Középső tisztaság-mag (aperture hole vagy pötty) */}
        <circle cx="50" cy="50" r="4" fill={pureWhite ? "#ffffff" : (isScrolled ? "#ffffff" : "#1e3a8a")} className="transition-colors duration-300" />
      </svg>
      )}

      {/* Hiper-prémium Szöveges Rész */}
      <div className="flex flex-col justify-center translate-y-0.5">
        <div className="flex tracking-tight font-display font-black text-[22px] md:text-[26px] leading-[0.9] uppercase overflow-visible">
          <span className={`${textColorBlue} transition-all duration-500`}>KLÍMA</span>
          <span className={`${textColorGreen} transition-all duration-500 ml-0.5 relative`}>
            TISZTÍTÁS
            {/* Opcionális mikrovonal, ami összeköti a modernséget - pureWhite esetén nem kell */}
            {isScrolled && !pureWhite && <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-lime-500 to-transparent rounded-full opacity-50"></span>}
          </span>
        </div>

        {/* Következetes, elegáns 'BUDAPEST' alcím megnövelt betűközzel */}
        <span className={`text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase pl-0.5 mt-1.5 ${textColorGray} transition-all duration-500 flex items-center gap-2`}>
          <span className="w-4 h-[1px] bg-current opacity-40"></span>
          BUDAPEST
          <span className="w-4 h-[1px] bg-current opacity-40"></span>
        </span>
      </div>

    </div>
  );
};

export default Logo;
