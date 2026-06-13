import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Star, Award, ShieldAlert, X, BookOpen } from 'lucide-react';
import { tips } from '../data/tips';

export default function About() {
  const [selectedTip, setSelectedTip] = useState(null);

  return (
    <div className="min-h-screen bg-bg-base transition-colors duration-300 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* 1. Main Brand Banner */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-serif text-gold text-lg tracking-wider font-semibold uppercase">Our Story</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-base">
            About Vee <span className="gold-gradient">Cosmetics</span>
          </h1>
          <div className="h-[2px] w-24 bg-gold mx-auto rounded-full"></div>
          <p className="text-text-muted text-sm md:text-base leading-relaxed">
            Sisi si duka la kawaida tu la vipodozi; sisi ni kituo chako cha urembo na mtindo wa maisha. Katika duka letu lililopo Banana, Dar es Salaam, tunasherehekea ujasiri, uzuri na nguvu ya mwanamke.
          </p>
        </section>

        {/* 2. Brand Story / Founder Bio split */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text panel */}
          <div className="space-y-6 text-left">
            <h2 className="font-serif text-3xl font-bold text-text-base">
              Kutoka Banana Hadi Kuwa <span className="gold-gradient">Premium Destination</span>
            </h2>
            <div className="h-[2px] w-16 bg-gold rounded-full"></div>
            
            <p className="text-sm md:text-base text-text-muted leading-relaxed">
              Vee Cosmetics ilianza na ndoto moja rahisi: **Kupambana na vipodozi feki vinavyoharibu ngozi za wanawake wa Tanzania.** Mwanzilishi wetu, Victoria (Vee), aligundua kuwa wanawake wengi wanakabiliwa na changamoto za ngozi kwa sababu ya kukosa maarifa sahihi na kutumia bidhaa zisizo salama.
            </p>
            <p className="text-sm md:text-base text-text-muted leading-relaxed">
              Kwa kuweka mkazo mkubwa kwenye bidhaa **100% Original** na kutoa ushauri wa kitaalamu kabla ya kuuza (Skin consultation), tuligeuza duka letu dogo huko Banana kuwa kituo kinachoaminika na wanawake kutoka pande zote za Dar es Salaam na mikoa mingine.
            </p>
            <p className="text-sm md:text-base text-text-muted leading-relaxed font-semibold text-gold">
              Leo, tunatoa huduma za skincare, bidhaa za nywele kama rasta za kiwango cha juu, mafuta ya kukuza nywele, na urembo wa accessories (cheni, shanga za kiuno).
            </p>
          </div>

          {/* Luxury Frame image */}
          <div className="flex justify-center">
            <div className="relative p-3 bg-card-bg border-4 border-gold rounded-3xl shadow-xl max-w-md overflow-hidden group">
              <div className="absolute -inset-2 bg-gradient-to-r from-rose-primary/20 to-gold/20 blur-xl opacity-75"></div>
              <img 
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=80" 
                alt="Vee Cosmetics Premium Boutique" 
                className="rounded-2xl object-cover w-full h-[350px] transform group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
            </div>
          </div>

        </section>

        {/* 3. Core Values Grid */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif text-3xl font-bold text-text-base">
              Core <span className="gold-gradient">Values</span>
            </h2>
            <div className="h-[2px] w-16 bg-gold mx-auto rounded-full"></div>
            <p className="text-text-muted text-sm">Nguzo nne zinazotufanya kuwa chaguo la kwanza la wateja wetu.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-6 w-6 text-gold" />,
                title: "Uaminifu Mkuu (Integrity)",
                desc: "Hatuuzi bidhaa feki au zenye kemikali hatari. Afya ya ngozi yako ndiyo kipaumbele chetu cha kwanza."
              },
              {
                icon: <Heart className="h-6 w-6 text-gold" />,
                title: "Ushauri wa Kitaalamu",
                desc: "Hatukuuzii bidhaa ili kupata faida tu. Tunakushauri bidhaa sahihi baada ya kusikiliza changamoto yako."
              },
              {
                icon: <Sparkles className="h-6 w-6 text-gold" />,
                title: "Ubora na Ustahimilivu",
                desc: "Kuanzia cheni zetu za dhahabu zisizopauka hadi rasta laini na sera za skincare zenye matokeo ya kudumu."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-card-bg p-8 rounded-2xl border border-border-base shadow-sm hover:border-gold/30 space-y-4 text-center transition-all duration-300 hover:shadow-md"
              >
                <div className="inline-flex p-3 rounded-full bg-rose-light dark:bg-rose-light/10 text-gold mb-1">
                  {value.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-text-base">{value.title}</h3>
                <p className="text-sm text-text-muted leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Interactive Beauty Tips Section */}
        <section className="space-y-12 bg-rose-light/20 dark:bg-rose-light/5 p-8 md:p-12 rounded-3xl border border-border-base/50">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif text-3xl font-bold text-text-base">
              Beauty Tips & <span className="gold-gradient">Routines</span>
            </h2>
            <div className="h-[2px] w-16 bg-gold mx-auto rounded-full"></div>
            <p className="text-text-muted text-sm leading-relaxed">
              Jifunze mbinu mbalimbali za kulinda urembo wako kwa kusoma makala zetu fupi za urembo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tips.map((tip) => (
              <div 
                key={tip.id}
                onClick={() => setSelectedTip(tip)}
                className="bg-card-bg rounded-2xl overflow-hidden border border-border-base shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer text-left flex flex-col justify-between h-full"
              >
                <div className="aspect-[16/10] overflow-hidden bg-rose-light/20">
                  <img 
                    src={tip.image} 
                    alt={tip.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-gold uppercase tracking-wider">{tip.category}</span>
                    <h3 className="font-serif text-lg font-bold text-text-base line-clamp-2 leading-snug">
                      {tip.title}
                    </h3>
                    <p className="text-xs text-text-muted leading-relaxed line-clamp-3">
                      {tip.summary}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border-base/50 flex items-center justify-between text-xs font-bold text-rose-primary uppercase tracking-wider">
                    <span>Read Article</span>
                    <BookOpen className="h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Tip Details Modal */}
      <AnimatePresence>
        {selectedTip && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="bg-card-bg max-w-2xl w-full rounded-3xl overflow-hidden border border-border-base shadow-2xl relative"
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedTip(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer z-10"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="aspect-[16/9] w-full overflow-hidden bg-rose-light/20 relative">
                <img 
                  src={selectedTip.image} 
                  alt={selectedTip.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <span className="bg-gold text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full border border-gold/30">
                    {selectedTip.category}
                  </span>
                </div>
              </div>

              <div className="p-8 text-left space-y-4">
                <span className="text-xs text-text-muted font-medium">{selectedTip.readTime}</span>
                <h3 className="font-serif text-2xl font-bold text-text-base leading-tight">
                  {selectedTip.title}
                </h3>
                <div className="h-[1px] w-full bg-border-base"></div>
                <p className="text-sm md:text-base text-text-muted leading-relaxed whitespace-pre-line">
                  {selectedTip.content}
                </p>
                <div className="pt-4 flex justify-end">
                  <button
                    onClick={() => setSelectedTip(null)}
                    className="px-6 py-2 rounded-full bg-gold text-white text-xs font-semibold uppercase tracking-wider cursor-pointer"
                  >
                    Funga Makala
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
