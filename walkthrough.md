# Klímatisztítás Budapest – Főoldal Elkészült! 🚀

A weboldal főoldala a közösen megálmodott "ez az én oldalam, csak sokkal jobb" elv alapján sikeresen, nulláról felépült. Használtuk a legmodernebb technológiákat (Vite, React 19, TailwindCSS v3, Framer Motion), hogy villámgyors és konverzió-optimalizált élményt nyújtsunk.

## Megvalósított Komponensek

A projektet logikai blokkokra (React komponensekre) bontottuk a könnyű karbantarthatóság érdekében:

### 1. `Navbar.jsx` (Fejléc)
- **Funkció:** "Ragadós" (sticky) navigáció, ami lefelé görgetéskor is a képernyő tetején marad.
- **Dizájn:** Elegáns *glassmorphism* (üveghatás) és a brand színei (kék/fehér).
- **Konverzió:** Mindig elérhető a "Hívás: 06 30 773 6439" gomb, mobilon is azonnal kattintható.

### 2. `Hero.jsx` (Hajtás feletti fő rész)
- **Cél:** Lenyűgöző első benyomás és azonnali akcióra ösztönzés.
- **Tartalom:** Sötétített háttérkép a "munkában lévő technikusról" (jelenleg generált helykitöltő kép). Beépítettünk egy vizuális bizalomépítőt is (Trustindex értékelés badge) a bal alsó sarokba, ami tudattalanul is hitelességet sugároz.

### 3. `Services.jsx` (Szolgáltatások)
- **Funkció:** A 3 fő szolgáltatási ág (Tisztítás, Karbantartás, Javítás) bemutatása modern kártyákon.
- **Extrák:** Az ikonok `lucide-react`-ből jönnek, a "Klíma Tisztítás" pedig megkapta a "Legnépszerűbb" vizuális kiemelést gödrögetéskor finom lebegő animációkkal.

### 4. `Process.jsx` (Munkafolyamat / Miért mi?)
- **Probléma:** A piacon sok az olcsó, de felületes "fújkálós" klímás.
- **Megoldásunk:** Egy nagyon letisztult, vertikális lépésről-lépésre (step-by-step) folyamatábrát építettünk, ami bizonyítja az ügyfél alapos munkavégzését (zsákos mosás, bontás).

### 5. `BeforeAfter.jsx` (Előtte-Utána Csúszka)
- **A legnagyobb WOW faktor:** Elkészítettünk egy interaktív csúszkát (slider). A látogató az egérrel vagy az ujjával (mobilon) húzogathatja a vonalat egy koszos és egy tiszta klíma között. *Jelenleg Stock képekkel működik, később cseréljük.*

### 6. `Testimonials.jsx` (Vélemények)
- A Trustindex véleményeket egy modern rácsos (grid) elrendezésbe raktuk, vizuális csillagokkal és idézőjelekkel, ami rendkívül építi a bizalmat.

### 7. `ContactFooter.jsx` (Kapcsolat és Űrlap)
- Az oldal alján egy nagy blokkba integráltuk az összes elérhetőséget és egy azonnal kitölthető, letisztult árajánlatkérő űrlapot.

---

## 📸 Mozgóképes Bemutató az Agenttől
Az alábbi videón láthatod, hogy az Agentünk miként nézte át a felépűlt lokális weblapot (amennyiben generált róla felvételt):

![Localhost Teszt](/C:/Users/Asus/.gemini/antigravity/brain/e551b5bd-292e-4a9b-92b4-962a31052997/localhost_check_1774899137480.webp)

---

## Hogyan nézd meg Te is?

Ahhoz, hogy a saját gépeden is megcsodáld a munkát tiszta valójában, kövesd az alábbi lépéseket:

> [!TIP]
> 1.  Mielőtt bármit tennél, ellenőrizd, hogy fut-e a szerver: `npm run dev`
> 2.  Ha nem nyílt meg magától, nyiss egy új lapot a böngészőben!
> 3.  Gépeld be ezt: **`http://localhost:5173`**
> 4.  Görgess, kattints, húzogasd a csúszkát, és teszteld mobilos nézeten (F12) is!

## Következő lépések (Rajad a sor!)
1. Nézd át a weblapot lokálisan.
2. Ha minden tetszik, **pusholom a változásokat a `dev` ágra**, amit aztán a Vercel automatikusan ki is lő az internetre (Preview link formájában).
3. Ezt követően jöhetnek a **valós képek, az ügyfél szövegei** és a **Web3Forms bekötése**!
