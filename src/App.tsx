import { useState } from "react";
import { MENU_ITEMS, OPENING_HOURS, REVIEWS, IMAGES } from "./data";
import { JasmineSprig, WheatStalk, PierogiArt, SteamWisps, LeafPair, WaveDivider } from "./components/JasmineSVG";

import { ReviewCard } from "./components/ReviewCard";

export default function App() {
  const [activeCategory, setActiveCategory] = useState<"wszystko" | "pierogi" | "obiady">("wszystko");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Filter menu items for standard menu list
  const filteredMenuItems = MENU_ITEMS.filter((item) => {
    if (activeCategory === "wszystko") return true;
    return item.category === activeCategory;
  });

  return (
    <div className="bg-bg min-h-screen text-text selection:bg-jasmine selection:text-navy">
      
      {/* 1. HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 bg-bg/95 backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            {/* Minimal line art icon */}
            <div className="relative">
              <JasmineSprig className="text-navy group-hover:rotate-12 transition-transform duration-500" size={36} />
              <div className="absolute inset-0 bg-jasmine-pale/25 rounded-full blur-xs scale-75 -z-10" />
            </div>
            <div>
              <span className="font-serif text-lg md:text-xl font-bold tracking-tight text-navy block">
                Jaśmin
              </span>
              <span className="font-sans text-[0.62rem] uppercase tracking-widest text-text-muted block">
                Pierogi & Obiady Domowe
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#o-nas" className="font-sans text-sm font-medium text-text-muted hover:text-navy transition-colors">
              O nas
            </a>
            <a href="#menu" className="font-sans text-sm font-medium text-text-muted hover:text-navy transition-colors">
              Menu
            </a>

            <a href="#opinie" className="font-sans text-sm font-medium text-text-muted hover:text-navy transition-colors font-serif italic">
              Opinie
            </a>
            <a href="#kontakt" className="font-sans text-sm font-medium text-text-muted hover:text-navy transition-colors">
              Kontakt
            </a>
          </nav>

          {/* Call CTA in Nav */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:886934215"
              className="font-mono text-sm font-medium text-navy hover:text-navy-mid border-b border-navy/30 hover:border-navy transition-all duration-300"
            >
              886 934 215
            </a>
            <a
              href="#kontakt"
              className="bg-navy hover:bg-navy-mid text-cream font-serif text-sm px-4.5 py-2.5 rounded-md shadow-sm hover:shadow transition-all duration-300"
            >
              Zamów telefonicznie
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-navy hover:text-navy-mid focus:outline-none"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-bg border-b border-border px-6 py-6 space-y-4 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a
                href="#o-nas"
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-base font-semibold text-text hover:text-navy"
              >
                O nas
              </a>
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-base font-semibold text-text hover:text-navy"
              >
                Menu
              </a>

              <a
                href="#opinie"
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif italic text-base text-text hover:text-navy text-gold"
              >
                Opinie gości
              </a>
              <a
                href="#kontakt"
                onClick={() => setMobileMenuOpen(false)}
                className="font-sans text-base font-semibold text-text hover:text-navy"
              >
                Kontakt & Godziny
              </a>
            </nav>
            <div className="pt-4 border-t border-border flex flex-col gap-3">
              <span className="text-xs text-text-muted">Zamówienia na wynos:</span>
              <a
                href="tel:886934215"
                className="font-mono text-lg font-bold text-navy flex items-center gap-2"
              >
                📞 886 934 215
              </a>
            </div>
          </div>
        )}

        {/* Faience Dot Pattern Border */}
        <div className="dotted-faience-border opacity-20" />
      </header>

      {/* 2. HERO SECTION (Asymmetric, Breathable, Pure Luxury of Space) */}
      <section className="relative pt-12 pb-20 md:py-32 overflow-hidden bg-linen">
        <div className="absolute top-1/4 right-5 opacity-40 animate-spin-slow pointer-events-none select-none">
          {/* Faint rotating signature Jasmine flower */}
          <JasmineSprig size={180} />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Title column: Left heavy, empty on the far right */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            
            <div className="flex items-center gap-2 mb-6 bg-cream-deep/40 border border-border px-3 py-1.5 rounded-full select-none">
              <LeafPair size={16} />
              <span className="font-serif italic text-navy text-xs tracking-widest uppercase">
                Domowa Kuchnia ze Szczecina
              </span>
            </div>

            <h1 className="font-serif font-semibold tracking-tight leading-none text-navy mb-6">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-tight">
                Pierogi i obiady
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] text-gold font-bold italic font-serif leading-none mt-1">
                domowe Jaśmin
              </span>
            </h1>

            <p className="font-sans text-text-muted text-base sm:text-lg md:text-xl max-w-xl leading-relaxed mb-8 md:mb-10 font-light">
              Nasze ciasto lepią zręczne, wrażliwe ręce. Nie dodajemy polepszaczy, nie uznajemy półśrodków. Codziennie wyrabiamy świeże farsze ruskie, mięsne i owocowe, rozlewamy gorący rosół i smażymy tradycyjne schabowe. Poczuj zapach domu o poranku.
            </p>

            {/* Asymmetric CTA group */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#menu"
                className="bg-navy hover:bg-navy-mid text-cream font-serif text-lg tracking-wide px-8 py-4.5 rounded-lg shadow-md transition-all duration-300 text-center relative group overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-cream/20" />
                Nasza Karta Dań
              </a>
              <a
                href="tel:886934215"
                className="bg-bg-warm/80 hover:bg-bg-warm text-navy border border-navy/20 font-sans font-medium text-base px-6 py-4 rounded-lg transition-all duration-300 text-center flex items-center justify-center gap-2.5"
              >
                <span className="text-lg">📞</span>
                Zadzwoń i zamów
              </a>
            </div>

            {/* Micro Details (Address & Phone highlighted) */}
            <div className="mt-12 pt-8 border-t border-navy/10 flex flex-wrap gap-x-8 gap-y-4 text-xs font-mono text-text-muted">
              <div>
                <span className="text-[10px] uppercase opacity-60 block tracking-wider mb-0.5">Lokalizacja</span>
                <span className="font-sans font-medium text-navy">Kolorowych Domów 73/2, Szczecin</span>
              </div>
              <div className="h-6 w-px bg-navy/15 hidden sm:block"></div>
              <div>
                <span className="text-[10px] uppercase opacity-60 block tracking-wider mb-0.5">Zadzwoń i zamów</span>
                <a href="tel:886934215" className="font-bold text-navy hover:underline">886 934 215</a>
              </div>
              <div className="h-6 w-px bg-navy/15 hidden sm:block"></div>
              <div>
                <span className="text-[10px] uppercase opacity-60 block tracking-wider mb-0.5">Status dzisiejszy</span>
                <span className="text-green-herb font-sans font-medium">Zapraszamy od 09:00</span>
              </div>
            </div>
          </div>

          {/* Right image banner: Overlapping editorial layouts instead of centered grid */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative z-10 aspect-[3/4] max-w-sm mx-auto rounded-lg overflow-hidden border-[6px] border-cream shadow-xl hover:rotate-[-1deg] transition-all duration-500">
              <img
                src={IMAGES.mainPierogi}
                alt="Świeżo ugotowane tradycyjne pierogi Jaśmin"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-cream p-2">
                <span className="font-hand text-xl text-jasmine">Domowe lśniące okrasą ruskie</span>
              </div>
            </div>

            {/* Asymmetric offset block backing */}
            <div className="absolute -bottom-6 -left-6 w-56 h-56 bg-bg-warm border border-gold/10 -z-10 rounded-lg opacity-80" />
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-faience -z-10 rounded-full opacity-30" />
          </div>

        </div>
      </section>

      {/* 3. ABOUT FILOSOFIA (Notebook margin visual, Left text heavy, Right image) */}
      <section id="o-nas" className="bg-bg-section/70 py-16 md:py-24 border-t border-b border-navy/10 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
            
            {/* Margined text area mimicking family cooking book */}
            <div className="lg:col-span-7 notebook-margin pl-12 pr-4 flex flex-col justify-center">
              <span className="font-serif italic text-navy text-xs tracking-widest uppercase mb-2 block">
                — Nasza Filozofia Kuchenna
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy pb-4 tracking-tight leading-tight">
                Prawdziwy, polski domowy posiłek
              </h2>
              
              <div className="space-y-6 font-sans text-text-muted text-base md:text-lg leading-relaxed font-light mt-4">
                <p>
                  Pragniemy, aby przekraczając próg naszej jadłodajni na szczecińskim osiedlu <strong className="font-normal text-navy">Kolorowych Domów</strong>, każdy mógł powrócić myślami do czasów dzieciństwa. Przechodzimy codzienną pracowitą drogę rzemieślniczą – od przesiewania mąki, przez ugniatanie sprężystego ciasta, aż po ręczne, dokładne falowanie brzegów.
                </p>
                <p>
                  Sercem naszej marki jest <strong className="font-serif italic text-navy font-semibold">Jaśmin</strong> – kwiat delikatny, kojarzący się z domowym ogrodem o zmierzchu, ciepłem i naturalnością. Taka właśnie jest nasza tradycyjna kuchnia. Nie znajdziesz tu sztucznych aromatów czy przemysłowych gotowców. Smak wydobywamy powolnym pyrkaniem bulionu oraz starannie dobranymi przyprawami.
                </p>

                {/* Single Pull Quote from Chef */}
                <div className="relative pl-6 py-2 my-8 border-l-[3px] border-gold transform translate-x-1">
                  <span className="font-hand text-navy text-2xl leading-snug block">
                    &ldquo;Ręczne lepienie pierogów to dla nas medytacja, a uśmiech najedzonego gościa to największa nagroda.&rdquo;
                  </span>
                  <span className="font-sans text-[10px] text-text-muted uppercase tracking-widest block mt-2">
                    — Zespół Kuchni Jaśmin
                  </span>
                </div>
              </div>
            </div>

            {/* Asymmetric collage right column */}
            <div className="lg:col-span-5 flex flex-col justify-center gap-6">
              <div className="aspect-video bg-cream rounded-lg overflow-hidden border border-border shadow-xs hover:scale-[1.01] transition duration-300">
                <img
                  src={IMAGES.kitchenCloseUp}
                  alt="Aromatyczna tradycyjna polska kuchnia"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-cream rounded-lg overflow-hidden border border-border shadow-xs hover:scale-[1.01] transition duration-300">
                  <img
                    src={IMAGES.packaging}
                    alt="Starannie spakowane domowe pierogi Jaśmin"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="bg-bg-warm border border-border-gold p-6 rounded-lg flex flex-col justify-between hover:rotate-[0.5deg] transition-all duration-300">
                  <div className="flex justify-between items-start">
                    <LeafPair className="text-green-herb" size={24} />
                    <span className="font-mono text-[10px] uppercase text-gold tracking-widest font-bold">100% RAW</span>
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-navy mb-1">Bez chemii</h4>
                    <p className="text-xs text-text-muted">Tylko mąka, woda, świeże sery, polskie mięsa i owoce.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. THE EDITORIAL MENU SECTION (Alternate section padding, non-uniform grid) */}
      <section id="menu" className="relative py-20 md:py-32 bg-bg overflow-hidden">
        
        {/* Massive pale backdrop typography representing the signature menu item */}
        <span className="absolute left-[3%] top-[10%] select-none pointer-events-none font-serif text-[12rem] md:text-[22rem] text-navy opacity-[0.02] leading-none tracking-tighter">
          Pierogi
        </span>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="font-serif italic text-navy text-xs tracking-widest uppercase block mb-2">
                Domowa Karta Dań
              </span>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy tracking-tight leading-none">
                Codzienne Menu Jaśminu
              </h2>
              <p className="font-sans text-text-muted text-base mt-2 max-w-md">
                Wypiekane i gotowane na bieżąco. Sprawdź nasze tutejsze wegetariańskie i mięsne specjały.
              </p>
            </div>

            {/* Custom Category Filter Buttons (Asymmetric styling) */}
            <div className="flex items-center gap-2 border-b border-navy/15 pb-1 w-fit">
              <button
                onClick={() => setActiveCategory("wszystko")}
                className={`px-4 py-2 font-serif text-sm transition-all duration-200 ${
                  activeCategory === "wszystko"
                    ? "text-navy font-bold border-b-2 border-navy"
                    : "text-text-muted hover:text-navy"
                }`}
              >
                Wszystko
              </button>
              <button
                onClick={() => setActiveCategory("pierogi")}
                className={`px-4 py-2 font-serif text-sm transition-all duration-200 ${
                  activeCategory === "pierogi"
                    ? "text-navy font-bold border-b-2 border-navy"
                    : "text-text-muted hover:text-navy"
                }`}
              >
                Pierogi Ręczne
              </button>
              <button
                onClick={() => setActiveCategory("obiady")}
                className={`px-4 py-2 font-serif text-sm transition-all duration-200 ${
                  activeCategory === "obiady"
                    ? "text-navy font-bold border-b-2 border-navy"
                    : "text-text-muted hover:text-navy"
                }`}
              >
                Obiady & Zupy
              </button>
            </div>
          </div>

          {/* Menu Non-Uniform Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
            
            {/* Map items to non-uniform sizes (e.g. Featured matches larger size, typical ones smaller) */}
            {filteredMenuItems.map((item, index) => {
              const isColSpanLarge = item.featured && index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className={`relative p-6 md:p-8 bg-bg-section/40 hover:bg-bg-section border-t-[3px] border-navy/30 hover:border-gold rounded-lg transition-all duration-300 shadow-sm flex flex-col justify-between group ${
                    isColSpanLarge ? "lg:col-span-8" : "lg:col-span-4"
                  }`}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-faience opacity-5 pointer-events-none select-none rounded-tr-lg" />

                  {/* Top content row */}
                  <div>
                    <div className="flex justify-between items-start gap-4 mb-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-navy group-hover:text-navy-mid transition-colors">
                          {item.name}
                        </h3>
                        {item.tag && (
                          <span className="bg-jasmine-pale border border-gold-light/20 text-[0.65rem] uppercase tracking-wider px-2 py-0.5 rounded text-navy font-semibold font-sans">
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="font-mono text-base md:text-lg font-bold text-navy whitespace-nowrap">
                          {item.price.toFixed(2)} zł
                        </span>
                        <span className="font-sans text-[0.62rem] text-text-muted uppercase tracking-widest mt-0.5">
                          {item.unit}
                        </span>
                      </div>
                    </div>

                    <p className="font-sans text-text-muted text-sm sm:text-base leading-relaxed mb-6 font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Fine decorative line & interactive trigger */}
                  <div className="border-t border-navy/5 pt-4 flex items-center justify-between mt-auto">
                    {item.category === "pierogi" ? (
                      <div className="flex items-center gap-1.5">
                        <PierogiArt size={20} className="text-gold/60" />
                        <span className="text-[11px] font-mono uppercase text-text-muted tracking-wider">
                          Własny wyrób owijany ręcznie
                        </span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5">
                        <SteamWisps className="text-gold-light" />
                        <span className="text-[11px] font-mono uppercase text-text-muted tracking-wider">
                          Gotowane na świeżym rosole
                        </span>
                      </div>
                    )}

                    <a
                      href="tel:886934215"
                      className="text-xs text-navy group-hover:text-gold font-serif italic flex items-center gap-1 transition-colors"
                    >
                      <span>Zadzwoń i zamów</span>
                      <span className="text-base group-hover:translate-x-0.5 transition-transform">→</span>
                    </a>
                  </div>
                </div>
              );
            })}

          </div>

          {/* Quick handwritten post-menu highlight */}
          <div className="mt-16 flex justify-center">
            <div className="relative max-w-lg text-center bg-bg-warm/5 w-full border border-dashed border-navy/20 p-6 rounded-lg">
              <p className="font-hand text-xl text-text-muted leading-relaxed">
                Napisz do nas lub zadzwoń, by zapytać o zupę dnia! Codziennie serwujemy inne specjały na bazie świeżych warzyw ogrodowych.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* 6. FACEBOOK REVIEWS / TESTIMONIALS SECTION */}
      <section id="opinie" className="relative py-20 bg-bg overflow-hidden">
        
        {/* Repeating tiny dots pattern banner representing old faience textures */}
        <div className="absolute top-0 left-0 right-0 h-4 bg-faience-medium opacity-20" />

        <div className="max-w-7xl mx-auto px-6">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-12 lg:mb-16 gap-6">
            <div className="max-w-xl">
              <span className="font-serif italic text-navy text-xs tracking-widest uppercase block mb-2">
                Opinie naszych gości z Szczecina
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy tracking-tight leading-tight">
                Co mówią o nas na Facebooku
              </h2>
              <p className="font-sans text-text-muted text-base mt-2">
                Nasza oficjalna strona na Facebooku zgromadziła wspaniałą społeczność miłośników domowego jedzenia. Przeczytaj szczere opinie naszych stałych klientów.
              </p>
            </div>

            {/* Solid Facebook Button to point to reviews as requested */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61587531082340&sk=reviews"
                target="_blank"
                rel="noreferrer"
                className="bg-bg hover:bg-bg-warm text-navy border border-navy/20 font-serif italic text-sm tracking-wide px-5 py-3 rounded-md flex items-center justify-center gap-2 transition"
              >
                <span>Wszystkie opinie na FB</span>
                <span className="text-xs">↗</span>
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61587531082340"
                target="_blank"
                rel="noreferrer"
                className="bg-navy hover:bg-navy-mid text-cream font-sans text-xs uppercase tracking-wider font-semibold px-6 py-3.5 rounded-md flex items-center justify-center gap-2 shadow-sm transition"
              >
                {/* Facebook logo icon inline SVG */}
                <svg className="w-4 h-4 text-cream fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Odwiedź nasz Facebook</span>
              </a>
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <div className="w-full max-w-2xl">
              {REVIEWS.map((review, i) => (
                <ReviewCard key={review.id} review={review} index={i} />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 7. GEOLOCATION, MAP, Opening Hours & Details SECTION */}
      <section id="kontakt" className="bg-bg-section py-20 md:py-28 border-t border-navy/10 relative overflow-hidden">
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-5 opacity-10 pointer-events-none select-none">
          <WheatStalk size={100} />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
            
            {/* Left Box: Opening Hours & Contact */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <span className="font-serif italic text-navy text-xs tracking-widest uppercase block mb-1">
                  Zapraszamy na Kolorowych Domów
                </span>
                <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy tracking-tight leading-none mb-6">
                  Godziny Otwarcia
                </h2>
                
                <p className="font-sans text-text-muted text-base mb-8 font-light">
                  Nasza kuchnia dba o to, by posiłki były świeże, dlatego gotujemy codziennie od wczesnego rana. Zapraszamy do odbiorów osobistych oraz kontaktu telefonicznego.
                </p>

                {/* Tactile list of hours */}
                <div className="space-y-3 max-w-sm">
                  {OPENING_HOURS.map((oh) => (
                    <div
                      key={oh.day}
                      className={`flex justify-between items-center py-2.5 border-b border-navy/10 ${
                        oh.closed ? "text-red-700/80 italic" : "text-text"
                      }`}
                    >
                      <span className="font-serif text-base capitalize font-medium">{oh.day}</span>
                      <span className="font-mono text-sm font-semibold">
                        {oh.closed ? "ZAMKNIĘTE" : oh.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Call & Address Box */}
              <div className="mt-12 bg-bg/80 border-t-2 border-navy p-6 md:p-8 rounded-lg shadow-xs relative">
                <h3 className="font-serif text-lg font-bold text-navy mb-4">Adres i Telefon</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="text-xl">📍</span>
                    <div>
                      <p className="font-serif font-bold text-text mb-0.5">Lokalizacja:</p>
                      <p className="font-sans text-sm text-text-muted leading-relaxed">
                        Kolorowych Domów 73/2 <br />
                        70-781 Szczecin
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="text-xl">📞</span>
                    <div>
                      <p className="font-serif font-bold text-text mb-0.5">Zamówienia / Kontakt:</p>
                      <a href="tel:886934215" className="font-mono text-base md:text-lg font-extrabold text-navy hover:underline">
                        886 934 215
                      </a>
                      <p className="text-[10px] text-text-muted/70 uppercase tracking-wider mt-0.5">
                        Zadzwoń bezpośrednio, by złożyć szybkie zamówienie
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute right-4 bottom-4 opacity-10">
                  <JasmineSprig size={80} />
                </div>
              </div>

            </div>

            {/* Right Box: Google Map Frame as requested */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="relative bg-bg border-[8px] border-cream shadow-xl rounded-lg overflow-hidden h-96 lg:h-[500px]">
                
                {/* Embed Google Maps exactly as requested */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2380.6547114485966!2d14.651171077156453!3d53.36733417315234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4700a7daacfce251%3A0x28baa12aede4a81d!2sKolorowych%20Dom%C3%B3w%2073%2F2%2C%2070-781%20Szczecin!5e0!3m2!1spl!2spl!4v1779349333710!5m2!1spl!2spl"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps - Pierogi Jaśmin"
                />

                {/* Overlapping small ribbon style aesthetic overlay */}
                <div className="absolute top-4 left-4 bg-navy text-cream py-1.5 px-4 rounded font-serif text-xs uppercase tracking-widest shadow">
                  Niedaleko Ronda Reagana / Prawobrzeże
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. FOOTER with delicate signature details */}
      <footer className="bg-bg-dark text-text-light py-16 px-6 relative overflow-hidden">
        
        {/* Soft noise background fabric texture on dark section */}
        <div className="absolute inset-0 bg-grain opacity-[0.03] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center md:items-stretch justify-between gap-12 border-b border-cream/10 pb-12">
          
          <div className="max-w-md text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5 mb-4">
              <JasmineSprig className="text-gold" size={28} />
              <span className="font-serif text-xl font-bold tracking-tight text-cream">
                Jaśmin
              </span>
            </div>
            <p className="font-sans text-xs text-cream/70 leading-relaxed font-light mb-6">
              Prawdziwe polskie jedzenie na wynos oraz na miejscu. Tradycyjne pierogi, zupy i obiady domowe sporządzane od podstaw w Szczecinie.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.facebook.com/profile.php?id=61587531082340"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-cream-deep/10 flex items-center justify-center hover:bg-gold hover:text-navy transition duration-300"
                aria-label="Facebook Profile"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="tel:886934215"
                className="w-8 h-8 rounded-full bg-cream-deep/10 flex items-center justify-center hover:bg-gold hover:text-navy transition duration-300 font-bold"
                aria-label="Phone Call"
              >
                📞
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-10 md:gap-16 text-center md:text-left">
            <div>
              <h4 className="font-serif text-sm font-semibold text-gold mb-3 uppercase tracking-wider">
                Adres lokalu
              </h4>
              <p className="font-sans text-xs text-cream/70 leading-relaxed font-light">
                Kolorowych Domów 73/2 <br />
                70-781 Szczecin, Polska <br />
                <span className="font-bold">Telefon:</span> 886 934 215
              </p>
            </div>
            <div>
              <h4 className="font-serif text-sm font-semibold text-gold mb-3 uppercase tracking-wider">
                Nawigacja
              </h4>
              <ul className="font-sans text-xs text-cream/70 leading-relaxed space-y-2">
                <li><a href="#o-nas" className="hover:text-gold transition">O naszej kuchni</a></li>
                <li><a href="#menu" className="hover:text-gold transition">Karta dań</a></li>
                <li><a href="#kontakt" className="hover:text-gold transition">Godziny i kontakt</a></li>
                <li><a href="#opinie" className="hover:text-gold transition">Recenzje Facebook</a></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-cream/50">
          <p>© {new Date().getFullYear()} Pierogi i obiady domowe Jaśmin. Wszelkie prawa zastrzeżone.</p>
          <div className="flex items-center gap-2">
            <span className="font-hand text-gold text-lg">Zrobione ręcznie dla Jaśminu</span>
            <div className="w-1.5 h-1.5 bg-gold rounded-full" />
            <a
              href="https://www.facebook.com/profile.php?id=61587531082340"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-gold transition"
            >
              Dołącz na Facebooku
            </a>
          </div>
        </div>

        {/* Imperfect rotated Jasmine brandmark floating on the footer boundary */}
        <div className="absolute bottom-4 right-4 opacity-15">
          <JasmineSprig size={100} className="text-cream" />
        </div>
      </footer>

    </div>
  );
}
