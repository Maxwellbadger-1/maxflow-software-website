"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface ModernMockupsProps {
  className?: string;
}

// Modern UI Mockup Designs (rendered as SVG/Components)
const mockupDesigns = [
  // Design 1: Hotel-Buchungssoftware Dashboard
  {
    name: "Hotel Dashboard",
    desktop: (
      <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 text-[0.5rem] overflow-hidden">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-[0.6rem] font-bold">H</div>
            <div className="text-white/90 font-semibold text-[0.6rem]">Hotel Manager Pro</div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-white/60 text-[0.5rem]">Max Mustermann</div>
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-500" />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-2 mb-3">
          <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 backdrop-blur-sm rounded-lg p-2 border border-white/10">
            <div className="text-white/50 text-[0.45rem] mb-0.5">Belegte Zimmer</div>
            <div className="text-white font-bold text-[0.8rem]">24/30</div>
            <div className="text-green-400 text-[0.4rem]">↑ 80%</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-lg p-2 border border-white/10">
            <div className="text-white/50 text-[0.45rem] mb-0.5">Check-ins</div>
            <div className="text-white font-bold text-[0.8rem]">8</div>
            <div className="text-white/60 text-[0.4rem]">Heute</div>
          </div>
          <div className="bg-gradient-to-br from-pink-500/20 to-rose-500/20 backdrop-blur-sm rounded-lg p-2 border border-white/10">
            <div className="text-white/50 text-[0.45rem] mb-0.5">Umsatz</div>
            <div className="text-white font-bold text-[0.8rem]">€4,280</div>
            <div className="text-green-400 text-[0.4rem]">↑ 12%</div>
          </div>
          <div className="bg-gradient-to-br from-rose-500/20 to-orange-500/20 backdrop-blur-sm rounded-lg p-2 border border-white/10">
            <div className="text-white/50 text-[0.45rem] mb-0.5">Bewertung</div>
            <div className="text-white font-bold text-[0.8rem]">4.8⭐</div>
            <div className="text-white/60 text-[0.4rem]">142 Reviews</div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-3 gap-2">
          {/* Calendar */}
          <div className="col-span-2 bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
            <div className="flex items-center justify-between mb-2">
              <div className="text-white font-semibold text-[0.6rem]">Buchungskalender</div>
              <div className="flex gap-1">
                <div className="px-2 py-0.5 bg-white/10 rounded text-white/70 text-[0.45rem]">← Dez</div>
                <div className="px-2 py-0.5 bg-white/10 rounded text-white/70 text-[0.45rem]">→</div>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1">
              {['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'].map((day, i) => (
                <div key={i} className="text-white/40 text-center text-[0.4rem] pb-1">{day}</div>
              ))}
              {[...Array(28)].map((_, i) => (
                <div key={i} className={`aspect-square rounded flex items-center justify-center text-[0.45rem] ${
                  i % 5 === 0 ? 'bg-gradient-to-br from-indigo-500 to-purple-500 text-white font-semibold' :
                  i % 3 === 0 ? 'bg-purple-500/30 text-white/80' :
                  'bg-white/5 text-white/60'
                }`}>
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-white/10">
            <div className="text-white font-semibold text-[0.6rem] mb-2">Neue Buchungen</div>
            <div className="space-y-2">
              {[
                { name: 'Schmidt', room: '201', nights: '3 Nächte' },
                { name: 'Weber', room: '104', nights: '5 Nächte' },
                { name: 'Müller', room: '305', nights: '2 Nächte' },
              ].map((booking, i) => (
                <div key={i} className="bg-white/5 rounded p-1.5 border border-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <div className="text-white text-[0.5rem] font-medium">{booking.name}</div>
                    <div className="text-indigo-400 text-[0.45rem] font-semibold">{booking.room}</div>
                  </div>
                  <div className="text-white/50 text-[0.4rem]">{booking.nights}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
    mobile: (
      <div className="w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-3 text-[0.5rem] overflow-hidden">
        <div className="flex items-center justify-between mb-3">
          <div className="w-5 h-5 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-[0.5rem] font-bold">H</div>
          <div className="text-white/90 font-semibold text-[0.55rem]">Hotel Manager</div>
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-400 to-pink-500" />
        </div>
        <div className="space-y-2">
          <div className="bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg p-2 border border-white/10">
            <div className="text-white/50 text-[0.4rem] mb-0.5">Belegte Zimmer</div>
            <div className="text-white font-bold text-[0.7rem]">24/30</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-2 border border-white/10">
            <div className="text-white/50 text-[0.4rem] mb-0.5">Umsatz Heute</div>
            <div className="text-white font-bold text-[0.7rem]">€4,280</div>
          </div>
        </div>
      </div>
    ),
  },

  // Design 2: Corporate Website
  {
    name: "Corporate Website",
    desktop: (
      <div className="w-full h-full bg-white text-[0.5rem] overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-white rounded flex items-center justify-center text-indigo-600 font-bold text-[0.6rem]">M</div>
              <div className="text-white font-bold text-[0.6rem]">Muster GmbH</div>
            </div>
            <div className="flex gap-3 items-center">
              <div className="text-white/90 text-[0.5rem] hover:text-white cursor-pointer">Startseite</div>
              <div className="text-white/90 text-[0.5rem] hover:text-white cursor-pointer">Leistungen</div>
              <div className="text-white/90 text-[0.5rem] hover:text-white cursor-pointer">Über uns</div>
              <div className="px-3 py-1 bg-white text-indigo-600 rounded-full text-[0.5rem] font-semibold">Kontakt</div>
            </div>
          </div>
        </div>

        {/* Hero */}
        <div className="grid grid-cols-2 gap-4 p-6">
          <div className="flex flex-col justify-center">
            <div className="inline-block px-2 py-1 bg-indigo-100 text-indigo-600 rounded-full text-[0.45rem] font-medium mb-2 w-fit">Ihr Partner seit 2010</div>
            <div className="text-slate-900 font-bold text-[0.9rem] mb-2 leading-tight">
              Professionelle Lösungen<br/>für Ihr Unternehmen
            </div>
            <div className="text-slate-600 text-[0.5rem] mb-3 leading-relaxed">
              Wir helfen Ihnen, Ihre Ziele zu erreichen - mit Erfahrung,<br/>
              Kompetenz und persönlichem Service.
            </div>
            <div className="flex gap-2">
              <div className="px-3 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-[0.5rem] font-semibold">Jetzt starten</div>
              <div className="px-3 py-1.5 border-2 border-slate-200 text-slate-700 rounded-lg text-[0.5rem] font-semibold">Mehr erfahren</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 rounded-xl p-6 flex items-center justify-center">
            <div className="text-indigo-400 text-[2rem] opacity-20">📊</div>
          </div>
        </div>

        {/* Features */}
        <div className="px-6 pb-4">
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-3 border border-indigo-100">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white mb-2 text-[0.7rem]">⚡</div>
              <div className="text-slate-900 font-semibold text-[0.55rem] mb-1">Schnell</div>
              <div className="text-slate-600 text-[0.45rem] leading-relaxed">Effiziente Prozesse und kurze Reaktionszeiten</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-3 border border-purple-100">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white mb-2 text-[0.7rem]">✓</div>
              <div className="text-slate-900 font-semibold text-[0.55rem] mb-1">Zuverlässig</div>
              <div className="text-slate-600 text-[0.45rem] leading-relaxed">Über 500 zufriedene Kunden vertrauen uns</div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-3 border border-pink-100">
              <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center text-white mb-2 text-[0.7rem]">♥</div>
              <div className="text-slate-900 font-semibold text-[0.55rem] mb-1">Persönlich</div>
              <div className="text-slate-600 text-[0.45rem] leading-relaxed">Individuelle Beratung für Ihre Bedürfnisse</div>
            </div>
          </div>
        </div>
      </div>
    ),
    mobile: (
      <div className="w-full h-full bg-white text-[0.5rem] overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 bg-white rounded flex items-center justify-center text-indigo-600 font-bold text-[0.5rem]">M</div>
            <div className="text-white font-bold text-[0.5rem]">Muster GmbH</div>
          </div>
          <div className="text-white text-[0.6rem]">☰</div>
        </div>
        <div className="p-4 space-y-3">
          <div className="inline-block px-2 py-0.5 bg-indigo-100 text-indigo-600 rounded-full text-[0.4rem] font-medium">Ihr Partner seit 2010</div>
          <div className="text-slate-900 font-bold text-[0.75rem] leading-tight">
            Professionelle Lösungen<br/>für Ihr Unternehmen
          </div>
          <div className="text-slate-600 text-[0.45rem] leading-relaxed">
            Wir helfen Ihnen, Ihre Ziele zu erreichen - mit Erfahrung und Service.
          </div>
          <div className="px-3 py-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg text-[0.5rem] font-semibold text-center">Jetzt starten</div>
        </div>
      </div>
    ),
  },

  // Design 3: E-Commerce Shop
  {
    name: "Online-Shop",
    desktop: (
      <div className="w-full h-full bg-slate-50 text-[0.5rem] overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-slate-200 px-4 py-2.5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-[0.6rem] font-bold">S</div>
              <div className="text-slate-900 font-bold text-[0.6rem]">StyleShop</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-full">
                <div className="text-slate-400 text-[0.5rem]">🔍</div>
                <div className="text-slate-400 text-[0.45rem]">Produkte suchen...</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 bg-slate-100 rounded-full flex items-center justify-center text-[0.5rem]">♥</div>
                <div className="w-7 h-7 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-[0.5rem] relative">
                  🛒
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-500 rounded-full text-white text-[0.35rem] flex items-center justify-center font-bold">3</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="bg-white border-b border-slate-200 px-4 py-2">
          <div className="flex gap-4">
            {['Neu', 'Damen', 'Herren', 'Kinder', 'Sale'].map((cat, i) => (
              <div key={i} className={`text-[0.5rem] ${i === 0 ? 'text-indigo-600 font-semibold' : 'text-slate-600'}`}>{cat}</div>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="p-4">
          <div className="text-slate-900 font-bold text-[0.65rem] mb-3">Neue Kollektion</div>
          <div className="grid grid-cols-4 gap-3">
            {[
              { name: 'Premium T-Shirt', price: '29,99€', color: 'from-indigo-200 to-purple-200' },
              { name: 'Designer Jeans', price: '89,99€', color: 'from-purple-200 to-pink-200' },
              { name: 'Sneaker Pro', price: '119,99€', color: 'from-pink-200 to-rose-200' },
              { name: 'Hoodie Classic', price: '59,99€', color: 'from-rose-200 to-orange-200' },
            ].map((product, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className={`h-24 bg-gradient-to-br ${product.color} relative flex items-center justify-center`}>
                  <div className="text-[1.2rem] opacity-50">👕</div>
                  <div className="absolute top-2 right-2 w-5 h-5 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[0.5rem] opacity-0 group-hover:opacity-100 transition-opacity">♥</div>
                </div>
                <div className="p-2">
                  <div className="text-slate-900 text-[0.5rem] font-semibold mb-0.5">{product.name}</div>
                  <div className="flex items-center justify-between">
                    <div className="text-indigo-600 text-[0.55rem] font-bold">{product.price}</div>
                    <div className="flex gap-0.5">
                      <div className="w-2 h-2 bg-slate-900 rounded-full border border-slate-200" />
                      <div className="w-2 h-2 bg-slate-400 rounded-full border border-slate-200" />
                      <div className="w-2 h-2 bg-blue-500 rounded-full border border-slate-200" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    mobile: (
      <div className="w-full h-full bg-slate-50 text-[0.5rem] overflow-hidden">
        <div className="bg-white border-b border-slate-200 px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="h-5 h-5 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-[0.5rem] font-bold">S</div>
            <div className="text-slate-900 font-bold text-[0.5rem]">StyleShop</div>
          </div>
          <div className="flex gap-2">
            <div className="text-[0.6rem]">🔍</div>
            <div className="relative text-[0.6rem]">
              🛒
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-pink-500 rounded-full text-white text-[0.3rem] flex items-center justify-center font-bold">3</div>
            </div>
          </div>
        </div>
        <div className="p-3 space-y-2">
          {[
            { name: 'Premium T-Shirt', price: '29,99€' },
            { name: 'Designer Jeans', price: '89,99€' },
            { name: 'Sneaker Pro', price: '119,99€' },
          ].map((product, i) => (
            <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm flex gap-2">
              <div className={`w-16 h-16 bg-gradient-to-br ${
                i % 3 === 0 ? 'from-indigo-200 to-purple-200' :
                i % 3 === 1 ? 'from-purple-200 to-pink-200' :
                'from-pink-200 to-rose-200'
              } flex items-center justify-center text-[0.9rem]`}>
                👕
              </div>
              <div className="flex-1 py-2 pr-2">
                <div className="text-slate-900 text-[0.5rem] font-semibold mb-0.5">{product.name}</div>
                <div className="text-indigo-600 text-[0.5rem] font-bold">{product.price}</div>
                <div className="flex gap-0.5 mt-1">
                  <div className="w-2 h-2 bg-slate-900 rounded-full" />
                  <div className="w-2 h-2 bg-slate-400 rounded-full" />
                  <div className="w-2 h-2 bg-blue-500 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export function ModernMockups({ className = "" }: ModernMockupsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-rotate mockups every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockupDesigns.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentDesign = mockupDesigns[currentIndex];

  return (
    <div className={`relative w-full ${className}`}>
      {/* Laptop Mockup (Main) */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Laptop Frame */}
        <div className="relative">
          {/* Screen */}
          <div className="relative bg-gradient-to-b from-slate-800 to-slate-900 rounded-t-2xl border-[6px] border-slate-800 shadow-2xl overflow-hidden">
            {/* Notch/Camera */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-2 bg-slate-950 rounded-b-xl z-10" />

            {/* Content Display */}
            <motion.div
              key={`desktop-${currentIndex}`}
              className="relative aspect-[16/10] bg-white overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {currentDesign.desktop}
            </motion.div>
          </div>

          {/* Laptop Base */}
          <div className="h-2 bg-gradient-to-b from-slate-700 to-slate-800 rounded-b-sm" />
          <div className="h-5 bg-gradient-to-b from-slate-600 to-slate-500 rounded-b-2xl shadow-xl"
               style={{
                 clipPath: "polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)",
               }}
          />

          {/* Glow Effect */}
          <div className="absolute inset-0 -z-10 blur-3xl opacity-60">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/50 via-purple-500/40 to-pink-500/50 rounded-2xl" />
          </div>
        </div>
      </motion.div>

      {/* Mobile Mockup (Floating, overlapping) */}
      <motion.div
        className="absolute -right-8 -bottom-8 md:-right-16 md:-bottom-16 z-20 w-36 md:w-48"
        initial={{ opacity: 0, x: 30, y: 30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        whileHover={{ y: -10, rotate: 3, scale: 1.05 }}
      >
        {/* Phone Frame */}
        <div className="relative">
          {/* Screen */}
          <div className="relative bg-slate-900 rounded-[2.5rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden">
            {/* Dynamic Island / Notch */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-7 bg-slate-950 rounded-full z-10 flex items-center justify-center">
              <div className="w-2 h-2 bg-slate-800 rounded-full" />
            </div>

            {/* Content Display */}
            <motion.div
              key={`mobile-${currentIndex}`}
              className="relative aspect-[9/19.5] bg-white overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {currentDesign.mobile}
            </motion.div>

            {/* Home Indicator */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1.5 bg-white/30 rounded-full" />
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 -z-10 blur-2xl opacity-70">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/60 to-pink-500/60 rounded-[3rem]" />
          </div>
        </div>
      </motion.div>

      {/* Navigation Dots */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 flex gap-2">
        {mockupDesigns.map((design, index) => (
          <button
            key={design.name}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-primary"
                : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Show ${design.name} mockup`}
          />
        ))}
      </div>
    </div>
  );
}
