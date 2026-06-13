import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowRight, ShieldCheck, Heart, Sparkles, Award, Star } from 'lucide-react';
import { tips } from '../data/tips';

export default function Home({ setActivePage, setCategoryFilter }) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const handleCategoryClick = (category) => {
    setCategoryFilter(category);
    setActivePage('collections');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const categories = [
    {
      name: 'Skincare',
      label: 'Skincare Products',
      desc: 'Sera, creams, and toners for radiant, glowing skin.',
      image: '/product1.webp',
    },
    {
      name: 'Accessories',
      label: 'Beauty Accessories',
      desc: 'Layered gold chains, waist beads, and elegant urembo.',
      image: '/product2.webp',
    },
    {
      name: 'Body Care',
      label: 'Body Care',
      desc: 'Nourishing shea body lotions and rose shower gels.',
      image: '/product3.webp',
    },
    {
      name: 'Hair & Beauty',
      label: 'Hair & Beauty Products',
      desc: 'Premium rasta hair braiding and organic growth oils.',
      image: '/product4.webp',
    }
  ];

  return (
    <div className="overflow-hidden bg-bg-base transition-colors duration-300">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-4 md:px-8 border-b border-border-base/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Hero Content */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="space-y-6 text-left"
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-rose-primary/10 border border-rose-primary/25 text-rose-primary dark:text-rose-hover text-sm font-medium">
              <Sparkles className="h-4 w-4 text-gold animate-spin-slow" />
              <span>Premium Beauty Destination</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl font-bold tracking-tight leading-none text-text-base">
              VEE <br />
              <span className="gold-gradient">COSMETICS</span>
            </h1>
            
            <p className="font-serif text-xl md:text-2xl text-gold font-medium italic">
              “Your Complete Beauty Destination”
            </p>
            
            <p className="text-base md:text-lg text-text-muted leading-relaxed max-w-xl">
              Karibu Vee Cosmetics, Banana, Dar es Salaam. Sisi ni kituo chako bora cha bidhaa halisi (original) za urembo, skincare, nywele, na urembo wa mwili. Tunakusaidia kukuza ujasiri wako kupitia bidhaa za kifahari na ushauri wa kitaalamu.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => handleCategoryClick('All')}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-rose-primary text-white font-medium hover:bg-rose-hover transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer text-center uppercase tracking-wider text-sm border border-transparent"
              >
                <span>Explore Collection</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              
              <a
                href="https://wa.me/255659130030?text=Hello%20Vee%20Cosmetics,%20I%20am%20visiting%20your%20website%20and%20would%20like%20to%20inquire%20about%20your%20beauty%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-card-bg text-text-base font-medium border border-gold/40 hover:border-gold hover:bg-rose-light/20 transition-all duration-300 shadow-sm cursor-pointer uppercase tracking-wider text-sm"
              >
                <MessageSquare className="mr-2 h-4 w-4 text-green-500" />
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </motion.div>

          {/* Hero Image / Premium Collage */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Elegant Background Glow */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-rose-primary/20 to-gold/15 blur-3xl opacity-75 dark:opacity-40"></div>
            
            {/* Main Picture Frame with Gold Highlights */}
            <div className="relative p-3 bg-card-bg border-4 border-gold rounded-2xl shadow-2xl overflow-hidden max-w-md md:max-w-lg transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&auto=format&fit=crop&q=80" 
                alt="Vee Cosmetics Beauty Lifestyle" 
                width="500"
                height="450"
                loading="eager"
                fetchpriority="high"
                className="rounded-lg object-cover w-full h-[300px] sm:h-[400px] md:h-[450px] aspect-[10/9]"
              />
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg glass border border-gold/20 text-center">
                <p className="font-serif text-lg font-bold text-text-base">Embrace Your Glow</p>
                <p className="text-xs text-text-muted mt-1">Banana, Dar es Salaam</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 2. Featured Categories Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-b border-border-base/40">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-base">
            Featured <span className="gold-gradient">Categories</span>
          </h2>
          <div className="h-[2px] w-24 bg-gold mx-auto rounded-full"></div>
          <p className="text-text-muted text-sm md:text-base">
            Chagua kundi la bidhaa unazotafuta na uanze safari yako ya urembo.
          </p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8"
        >
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              onClick={() => handleCategoryClick(cat.name)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-card-bg border border-border-base hover:border-gold/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative aspect-square overflow-hidden bg-rose-light/20">
                <img 
                  src={cat.image} 
                  alt={cat.label} 
                  width="300"
                  height="300"
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white text-xs sm:text-sm font-semibold uppercase tracking-wider bg-gold/90 px-4 py-2 rounded-full flex items-center gap-1.5 shadow-md">
                    <span>View More</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
              <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between text-left">
                <div className="space-y-2">
                  <h3 className="font-serif text-base sm:text-lg font-bold text-text-base group-hover:text-gold transition-colors duration-200">
                    {cat.label}
                  </h3>
                  <p className="text-xs sm:text-sm text-text-muted leading-relaxed line-clamp-3">
                    {cat.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-border-base/40 text-[10px] sm:text-xs font-semibold text-rose-primary uppercase tracking-wider flex items-center gap-1 group-hover:text-rose-hover">
                  <span>Shop Category</span>
                  <ArrowRight className="h-3 w-3 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. Why Choose Us Section */}
      <section className="py-24 px-4 md:px-8 bg-rose-light/20 dark:bg-rose-light/5 border-b border-border-base/40">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-base">
              Why Choose <span className="gold-gradient">Vee Cosmetics</span>
            </h2>
            <div className="h-[2px] w-24 bg-gold mx-auto rounded-full"></div>
            <p className="text-text-muted text-sm md:text-base">
              Tunajivunia kutoa huduma bora na bidhaa zilizo salama kwa afya yako.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {[
              {
                icon: <ShieldCheck className="h-6 w-6 sm:h-8 sm:w-8 text-gold" />,
                title: "100% Original Products",
                desc: "Bidhaa zetu zote zinaagizwa kutoka kwa wasambazaji waaminifu. Hatuna bidhaa feki."
              },
              {
                icon: <Award className="h-6 w-6 sm:h-8 sm:w-8 text-gold" />,
                title: "Trusted Beauty Brand",
                desc: "Tunajenga uaminifu wa kudumu na wateja wetu kupitia ushauri sahihi na uaminifu mkuu."
              },
              {
                icon: <Star className="h-6 w-6 sm:h-8 sm:w-8 text-gold" />,
                title: "Affordable Pricing",
                desc: "Urembo wa kifahari hauhitaji gharama kubwa. Bei zetu ni rafiki na zenye ushindani sokoni."
              },
              {
                icon: <Heart className="h-6 w-6 sm:h-8 sm:w-8 text-gold" />,
                title: "Excellent Service",
                desc: "Tupo tayari kukusikiliza na kukushauri bidhaa sahihi zinazoendana na ngozi au nywele zako."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-card-bg p-4 sm:p-8 rounded-2xl border border-border-base hover:border-gold/30 shadow-sm text-center space-y-3 sm:space-y-4 hover:shadow-md transition-all duration-300"
              >
                <div className="inline-flex p-2.5 sm:p-3 rounded-full bg-rose-light dark:bg-rose-light/10 text-gold mb-1 sm:mb-2">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-sm sm:text-lg font-bold text-text-base">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-text-muted leading-relaxed line-clamp-4">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Meet the Founder Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-b border-border-base/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Portrait Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-2 bg-card-bg border-2 border-gold rounded-2xl shadow-xl overflow-hidden max-w-sm">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=450&auto=format&fit=crop&q=80" 
                alt="Founder of Vee Cosmetics" 
                width="400"
                height="400"
                loading="lazy"
                className="rounded-xl object-cover w-full h-[300px] sm:h-[350px] md:h-[400px] aspect-square"
              />
              <div className="absolute top-4 right-4 bg-gold text-white text-xs uppercase tracking-wider font-semibold px-3 py-1.5 rounded-full shadow-md">
                Meet the Founder
              </div>
            </div>
          </div>

          {/* Bio text */}
          <div className="lg:col-span-7 text-left space-y-6">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-base">
              The Heart Behind <span className="gold-gradient">Vee Cosmetics</span>
            </h2>
            <div className="h-[2px] w-20 bg-gold rounded-full"></div>
            
            <p className="text-lg text-text-muted italic leading-relaxed font-serif">
              “Urembo si tu muonekano, bali ni kujiamini na amani ya moyoni. Lengo langu ni kumfanya kila mwanamke anayekanyaga Vee Cosmetics ajisikie kama malkia.”
            </p>
            
            <p className="text-sm md:text-base text-text-muted leading-relaxed">
              Vee Cosmetics ilianzishwa kutokana na mapenzi makubwa ya kusaidia wanawake wa Tanzania kupata bidhaa halisi za skincare na urembo zinazoleta matokeo chanya. Tangu kuanzishwa kwetu Banana, Dar es Salaam, tumekuwa tukisaidia mamia ya wateja kutatua matatizo ya ngozi, nywele na kuwaongezea urembo wao wa asili.
            </p>

            <div className="space-y-1">
              <h4 className="font-serif text-lg font-bold text-text-base">Victoria (Vee)</h4>
              <p className="text-xs font-semibold text-gold uppercase tracking-wider">Founder & Lead Beauty Advisor</p>
            </div>

            <button
              onClick={() => {
                setActivePage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center text-sm font-semibold text-gold hover:text-gold-hover border-b border-gold hover:border-gold-hover pb-1 transition-colors duration-200"
            >
              <span>Soma Historia Yetu Kamili</span>
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 5. Beauty Tips Section */}
      <section className="py-24 px-4 md:px-8 bg-rose-light/10 dark:bg-rose-light/5 border-b border-border-base/40">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
            <div className="text-left space-y-3">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-base">
                Beauty Tips & <span className="gold-gradient">Secrets</span>
              </h2>
              <p className="text-text-muted text-sm md:text-base">
                Soma dondoo na ushauri wa kitaalamu kuhusu jinsi ya kulea ngozi na nywele zako.
              </p>
            </div>
            
            <button
              onClick={() => {
                setActivePage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center px-6 py-2.5 rounded-full border border-gold/40 hover:border-gold text-gold font-medium hover:bg-rose-light/20 transition-all duration-300 text-sm cursor-pointer"
            >
              <span>See All Articles</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {tips.map((tip) => (
              <div 
                key={tip.id}
                className="bg-card-bg rounded-2xl overflow-hidden border border-border-base shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full text-left"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-rose-light/20">
                  <img 
                    src={tip.image} 
                    alt={tip.title} 
                    width="400"
                    height="250"
                    loading="lazy"
                    className="w-full h-full object-cover aspect-[16/10]"
                  />
                  <span className="absolute top-4 left-4 bg-gold/90 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    {tip.category}
                  </span>
                </div>
                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-xs text-text-muted font-medium">{tip.readTime}</span>
                    <h3 className="font-serif text-lg font-bold text-text-base leading-snug line-clamp-2">
                      {tip.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed line-clamp-3">
                      {tip.summary}
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setActivePage('about');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-xs font-bold text-rose-primary hover:text-rose-hover uppercase tracking-wider flex items-center gap-1 cursor-pointer pt-3 border-t border-border-base/40"
                  >
                    <span>Soma Zaidi</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Call to Action & Contact Preview */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-rose-primary/20 via-gold/10 to-rose-primary/25 border border-gold/30 p-8 md:p-16 text-center space-y-6">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-rose-primary/15 to-gold/10 blur-3xl -z-10"></div>
          
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-text-base">
            Visit Our Shop In <span className="gold-gradient">Banana, Dar es Salaam</span>
          </h2>
          
          <p className="text-base md:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            Tutembelee leo upate nafasi ya kuona bidhaa zote kwa macho na kupata ushauri wa bure wa ngozi yako. Kama huwezi kufika, tunatuma mzigo popote Tanzania kwa uaminifu mkubwa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button
              onClick={() => {
                setActivePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 rounded-full bg-gold text-white font-medium hover:bg-gold-hover transition-all duration-300 shadow-md cursor-pointer uppercase tracking-wider text-sm"
            >
              Get Directions & Contact Info
            </button>
            
            <a
              href="https://wa.me/255659130030?text=Hello%20Vee%20Cosmetics,%20I%20would%20like%20to%20order%20some%20products%20seen%20on%20your%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-card-bg text-text-base font-medium border border-gold/30 hover:border-gold hover:bg-rose-light/20 transition-all duration-300 shadow-sm cursor-pointer uppercase tracking-wider text-sm flex items-center justify-center gap-2"
            >
              <MessageSquare className="h-4 w-4 text-green-500" />
              <span>Order via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
