# Klímatisztítás Budapest Főoldal - Implementációs Terv

Ez a dokumentum részletezi a https://klimatisztitasbudapest.hu/ főoldalának teljes újraépítését Vite, React 19, TailwindCSS v3 és Framer Motion technológiákkal. A cél a jelenlegi brand ("ez az én oldalam, csak jobb") megtartása modern, magas konverziójú, prémium megjelenéssel.

## User Review Required

> [!IMPORTANT]
> A fejlesztés megkezdése előtt kérlek hagyd jóvá ezt a technikai tervet. Amint rábólintasz, elkezdem kódolni a komponenseket!
> **Kérdésem:** Szeretnéd, ha a projekt (mint a Szécsiklímánál) első körben helykitöltő - de nagyon szép - stock képeket használna, amiket később az ügyfél valós fotóira cserélünk a Vercel élesítés előtt?

## Proposed Changes

A fejlesztés során az alábbi komponens-struktúrát hozzuk létre a `src/` mappán belül.

### Alapok & Stílusok

Itt állítjuk be a globális stílusokat és a Tailwind konfigurációhoz illeszkedő CSS változókat.
*Cél: zökkenőmentes görgetés, alapszínek érvényesítése.*

#### [MODIFY] [index.css](file:///c:/Users/Asus/Desktop/klimatisztitasbeudapest26/src/index.css)
Teljes törlés és újjáépítés. Bekerülnek a Tailwind direktívák, egyedi `@layer utilities` a blur/glassmorphism effektekhez, és finomhangolt görgetősáv design.

#### [MODIFY] [App.jsx](file:///c:/Users/Asus/Desktop/klimatisztitasbeudapest26/src/App.jsx)
Az alapértelmezett Vite sablon eltávolítása. A React Router (Bár egyoldalas egyelőre, de a jövőre felkészülve javasolt) vagy sima komponens fa felállítása, ami összefogja a főoldal szekcióit.

---

### UI Komponensek (Components Mappa)

Új komponens struktúra kialakítása a `src/components/` nevű új mappában a tiszta, karbantartható kód érdekében.

#### [NEW] [Navbar.jsx](file:///c:/Users/Asus/Desktop/klimatisztitasbeudapest26/src/components/Navbar.jsx)
Rögzített (sticky) fejléc. Asztalin logó balra, menü és CTA (Hívás gomb) jobbra. Mobilon hamburger menü, és egy folyamatosan látható "Hívás" gomb.

#### [NEW] [Hero.jsx](file:///c:/Users/Asus/Desktop/klimatisztitasbeudapest26/src/components/Hero.jsx)
A lenyűgöző vizuális kezdés. Sötétített háttérkép a "munkában lévő technikusról", rajta a fő címsor: "Prémium Klímatisztítás Budapesten", és a hatalmas másodlagos konverziós telefonszám, alatta egy "Árajánlatkérés" gomb.

#### [NEW] [Services.jsx](file:///c:/Users/Asus/Desktop/klimatisztitasbeudapest26/src/components/Services.jsx)
A 3 fő szolgáltatás (Tisztítás, Karbantartás, Javítás) modern, finom árnyékú kártyákon. `framer-motion`-nel animált belépés (slide up) görgetéskor. `lucide-react` ikonokkal vizualizálva.

#### [NEW] [Process.jsx](file:///c:/Users/Asus/Desktop/klimatisztitasbeudapest26/src/components/Process.jsx)
A "Miért mi?" / "Munkafolyamat" szekció (ami a régi oldalon is nagy súlyt kap). Egy vertikális, számozott folyamatábra, ami megmutatja a teljes szétszerelést és takarítást.

#### [NEW] [Testimonials.jsx](file:///c:/Users/Asus/Desktop/klimatisztitasbeudapest26/src/components/Testimonials.jsx)
A Trustindex véleményeket szimuláló gyönyörű, görgethető carousel (slider). Masszív bizalomépítő elem az 1100+ vélemény kiemelésével.

#### [NEW] [ContactFooter.jsx](file:///c:/Users/Asus/Desktop/klimatisztitasbeudapest26/src/components/ContactFooter.jsx)
A lábléc előtt integrált, modern kapcsolati/időpontkérő űrlap, mellette a pontos elérhetőségi adatokkal. Cél, hogy a felhasználó 3 másodperc alatt le tudja adni az adatait.

---

## Open Questions

> [!WARNING]
> Mielőtt a kódolásba kezdek, kérlek válaszold meg:
> 1. Elkezdhetem az építést az általam kreált, de magas minőségű (és témába vágó) helykitöltő fotókkal, amíg megkapjuk az ügyfél sajátjait?
> 2. Kérsz a főoldalra egy "Előtte-Utána" (Before/After) képpáros, csúszkával működő komponenst a Galéria helyett/mellé? (Szerintem óriásit dobna rajta!)

## Verification Plan

### Automated Tests
* Lokális szerver futtatása: `npm run dev` beállítása után manuális vizuális teszt a `localhost:5173` címen.
* A böngészőből lekérem a felépült DOM-ot, hogy ellenőrizzem a komponensek rendes megjelenését.

### Manual Verification
* Kérni fogom az indítás után, hogy Te is nyisd meg a localhostot, és nézd meg az animációkat és az új, "ugyanaz csak sokkal jobb" design-t, hogy egyezik-e az elképzeléseiddel!
