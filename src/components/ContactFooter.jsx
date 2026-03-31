import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const ContactFooter = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const getInputStyle = (fieldName, extraClasses = '') => {
    const isFilled = formData[fieldName].trim().length > 0;
    const base = `w-full shadow-inner rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-500/50 transition-all backdrop-blur-md ${extraClasses}`;
    if (isFilled) {
      return `${base} bg-brand-900/30 border border-brand-400 text-brand-300 shadow-[0_0_15px_rgba(14,165,233,0.15)]`;
    }
    return `${base} bg-slate-950/60 border border-white/20 text-white placeholder:text-slate-500`;
  };
  return (
    <footer id="kapcsolat" className="bg-slate-900 text-slate-300 border-t border-slate-800">
      
      {/* Űrlap és Info Szekció */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Kapcsolati infók */}
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-6">Vegye fel velünk a kapcsolatot</h2>
            <p className="text-lg text-slate-400 mb-10">
              Kérdése van, vagy azonnali klímatisztításra / szervizre van szüksége Budapesten? Hívjon minket azonnal, vagy írjon üzenetet!
            </p>
            
            <div className="space-y-6">
              <a href="tel:+36307736439" className="flex items-center gap-4 group p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-white/10">
                <div className="w-12 h-12 rounded-full bg-brand-600/20 flex items-center justify-center group-hover:bg-brand-600 transition-colors">
                  <Phone className="w-6 h-6 text-brand-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Hívjon minket mobilról</p>
                  <p className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors">06 30 773 6439</p>
                </div>
              </a>
              
              <div className="flex items-center gap-4 p-4">
                <div className="w-12 h-12 rounded-full bg-brand-600/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Vagy írjon e-mailt</p>
                  <p className="text-lg font-bold text-white">info@klimatisztitasbudapest.hu</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-4">
                <div className="w-12 h-12 rounded-full bg-brand-600/20 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-brand-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 mb-1">Munkaidő</p>
                  <p className="text-lg font-bold text-white">H-P: 08:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Email Űrlap */}
          <div className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-2xl relative overflow-hidden">
            {/* Soft Glows behind form */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-brand-500/30 rounded-full blur-[80px] pointer-events-none mix-blend-screen"></div>
            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] pointer-events-none mix-blend-screen"></div>
            
            <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Kérjen Ajánlatot Vagy Időpontot</h3>
            
            <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Név *</label>
                  <input 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    type="text" 
                    className={getInputStyle('name')} 
                    placeholder="Kovács Géza" 
                    spellCheck="false"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Mobil *</label>
                  <input 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    type="tel" 
                    className={getInputStyle('phone')} 
                    placeholder="+36 30 123 4567" 
                    spellCheck="false"
                    required 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">E-mail *</label>
                  <input 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    type="email" 
                    className={getInputStyle('email')} 
                    placeholder="pelda@email.hu" 
                    spellCheck="false"
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Cím *</label>
                  <input 
                    name="address" 
                    value={formData.address} 
                    onChange={handleChange} 
                    type="text" 
                    className={getInputStyle('address')} 
                    placeholder="Budapest, XI. kerület" 
                    required 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Szolgáltatás típusa *</label>
                <div className="relative">
                  <select 
                    name="service" 
                    value={formData.service} 
                    onChange={handleChange} 
                    className={getInputStyle('service', 'appearance-none pr-12')} 
                    required
                  >
                    <option value="" disabled hidden className="bg-slate-900 text-slate-400">Kérem válasszon...</option>
                    <option value="Klímatisztítás" className="bg-slate-900 text-white">Klímatisztítás</option>
                    <option value="Klíma karbantartás" className="bg-slate-900 text-white">Klíma karbantartás</option>
                    <option value="Klímajavítás" className="bg-slate-900 text-white">Klímajavítás</option>
                  </select>
                  <div className={`pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 transition-colors ${formData.service ? 'text-brand-300' : 'text-slate-400'}`}>
                    <ChevronDown className="w-5 h-5 drop-shadow-sm" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Üzenet *</label>
                <textarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows="4" 
                  className={getInputStyle('message', 'resize-none')} 
                  placeholder="Klímatisztításra lenne szükségem a nappaliban..." 
                  required
                ></textarea>
              </div>
              
              <button className="w-full bg-gradient-to-r from-brand-600 to-brand-400 hover:from-brand-500 hover:to-brand-300 text-white font-bold py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] active:scale-[0.98] mt-2">
                Ajánlatot Kérek
              </button>
            </form>
          </div>
          
        </div>
      </div>

      {/* Designos Lábléc */}
      <div className="bg-slate-950 border-t border-slate-800/50 pt-16 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Glow behind footer */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[300px] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Logo & About */}
            <div className="md:col-span-2">
              <Logo isScrolled={false} showIcon={false} className="mb-6 scale-110 origin-left" />
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-8">
                Professzionális klímatisztítás, karbantartás és javítás Budapesten és környékén. Precíz munkavégzés, garancia, és tiszta otthon minden beavatkozás után.
              </p>
              
              {/* Social Linkek */}
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-brand-400 hover:border-brand-500/50 hover:bg-brand-500/10 hover:shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-pink-400 hover:border-pink-500/50 hover:bg-pink-500/10 hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>
            
            {/* Gyorslinkek */}
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Navigáció</h4>
              <ul className="space-y-4">
                <li><a href="#velemenyek" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-brand-500 transition-colors"></div>Értékelések</a></li>
                <li><a href="#gyik" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-brand-500 transition-colors"></div>Gyakori Kérdések</a></li>
                <li><a href="#kapcsolat" className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-2 group"><div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-brand-500 transition-colors"></div>Kapcsolat</a></li>
              </ul>
            </div>
            
            {/* Szolgáltatások */}
            <div>
              <h4 className="text-white font-bold mb-6 tracking-wide">Kínálatunk</h4>
              <ul className="space-y-4">
                <li className="text-slate-400 text-sm flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></div>Klímatisztítás</li>
                <li className="text-slate-400 text-sm flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></div>Klíma karbantartás</li>
                <li className="text-slate-400 text-sm flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></div>Klímajavítás</li>
              </ul>
            </div>
            
          </div>
          
          {/* Alsó sor */}
          <div className="pt-8 border-t border-slate-800/60 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Klímatisztítás Budapest. Minden jog fenntartva.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors border-b border-transparent hover:border-white">Adatvédelmi tájékoztató</a>
              <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors border-b border-transparent hover:border-white">ÁSZF</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
