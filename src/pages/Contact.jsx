import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
//import React, { useState } from 'react';
//import { motion, AnimatePresence } from 'framer-motion';
//import { MessageSquare, Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.message) return;

    try {

      await emailjs.send(
        "service_cgxxb8c",
        "template_jgva1uf",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        "LcWg4fG45_BPZvdg-"
      );

      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 4000);

    }
    catch (error) {
      console.error("EMAILJS ERROR:", error);

      alert(
        `Failed to send message: ${error?.text || error?.message || "Unknown error"
        }`
      );
    }
  };


  // //handle submit function ya zamani ya gelesha
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!formData.name || !formData.message) return;

  //   // Simulate successful API submission
  //   setIsSubmitted(true);
  //   setTimeout(() => {
  //     setIsSubmitted(false);
  //     setFormData({ name: '', email: '', subject: '', message: '' });
  //   }, 4000);
  // };

  const contactMethods = [
    {
      icon: <MessageSquare className="h-6 w-6 text-green-500" />,
      title: "Chat via WhatsApp",
      value: "+255 659 130 030",
      link: "https://wa.me/255659130030?text=Hello%20Vee%20Cosmetics!",
      actionText: "Anza Chat Sasa"
    },
    {
      icon: <Phone className="h-6 w-6 text-gold" />,
      title: "Direct Call",
      value: "+255 659 130 030",
      link: "tel:+255659130030",
      actionText: "Piga Simu Direct"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-pink-500">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
      title: "Follow Instagram",
      value: "@vee_cosmetics_tz",
      link: "https://instagram.com",
      actionText: "Tufuate Instagram"
    },
    {
      icon: <Mail className="h-6 w-6 text-blue-500" />,
      title: "Email Address",
      value: "veecosmetics@gmail.com",
      link: "mailto:veecosmetics@gmail.com",
      actionText: "Tuma Barua Pepe"
    }
  ];


  return (
    <div className="min-h-screen bg-bg-base transition-colors duration-300 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="font-serif text-gold text-lg tracking-wider font-semibold uppercase">Get In Touch</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-base">
            Contact <span className="gold-gradient">Vee Cosmetics</span>
          </h1>
          <div className="h-[2px] w-24 bg-gold mx-auto rounded-full"></div>
          <p className="text-text-muted text-sm md:text-base">
            Una maswali, maoni au ungependa kuagiza mzigo maalum? Wasiliana nasi kupitia njia yoyote hapa chini au utume ujumbe, tutakujibu haraka iwezekanavyo.
          </p>
        </div>

        {/* Contact Info Cards + Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Panel: Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card-bg p-6 rounded-2xl border border-border-base hover:border-gold/40 shadow-sm hover:shadow-md transition-all duration-300 flex items-start space-x-4 text-left group"
                >
                  <div className="p-3 rounded-full bg-rose-light dark:bg-rose-light/10 group-hover:scale-105 transition-transform duration-200">
                    {method.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-base font-bold text-text-base">{method.title}</h3>
                    <p className="text-sm text-text-base font-medium">{method.value}</p>
                    <span className="text-xs font-semibold text-gold group-hover:text-gold-hover flex items-center gap-1 mt-1">
                      <span>{method.actionText}</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </span>
                  </div>
                </a>
              ))}
            </div>

            {/* Shop Address Card */}
            <div className="bg-card-bg p-6 rounded-2xl border border-border-base text-left flex items-start space-x-4">
              <div className="p-3 rounded-full bg-rose-light dark:bg-rose-light/10 text-gold">
                <MapPin className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-base font-bold text-text-base">Visit Our Boutique</h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Banana, Gongo la Mboto, Dar es Salaam (Barabara kuu ya kwenda uwanja wa ndege).
                </p>
                <p className="text-xs text-gold font-semibold pt-1">Fungua: Jumaatatu - Jumamosi (08:30 AM - 10:30 PM)</p>
              </div>
            </div>
          </div>

          {/* Right Panel: Styled Contact Form */}
          <div className="lg:col-span-7 bg-card-bg p-8 rounded-3xl border border-border-base shadow-sm relative">
            <h2 className="font-serif text-2xl font-bold text-text-base text-left mb-6">Tuma Ujumbe wa Haraka</h2>

            <form onSubmit={handleSubmit} className="space-y-5 text-left">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-text-base">Jina Lako *</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border-base focus:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold bg-bg-base/50 text-text-base text-sm transition-all"
                    placeholder="Victoria Leonard"
                    autoComplete="name"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-text-base">Email (Optional)</label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border-base focus:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold bg-bg-base/50 text-text-base text-sm transition-all"
                    placeholder="customer@email.com"
                    autoComplete="email"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-text-base">Mada (Subject)</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border-base focus:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold bg-bg-base/50 text-text-base text-sm transition-all"
                  placeholder="Inquiry about waist beads"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-text-base">Ujumbe Wako *</label>
                <textarea
                  id="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-border-base focus:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold bg-bg-base/50 text-text-base text-sm transition-all resize-none"
                  placeholder="Andika ujumbe wako hapa..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-gold text-white font-medium hover:bg-gold-hover transition-colors shadow-md hover:shadow-lg cursor-pointer uppercase tracking-wider text-xs flex items-center justify-center gap-2"
              >
                <Send className="h-4 w-4" />
                <span>Tuma Ujumbe Sasa</span>
              </button>

            </form>

            {/* Success Toast / Notification Card */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 bg-card-bg/95 backdrop-blur-md rounded-3xl flex flex-col items-center justify-center p-8 text-center border border-gold/30 z-10"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                  </motion.div>
                  <h3 className="font-serif text-2xl font-bold text-text-base mb-2">Ujumbe Umewasilishwa!</h3>
                  <p className="text-sm text-text-muted max-w-sm">
                    Asante sana, {formData.name}. Ujumbe wako umepokewa na kitengo cha huduma kwa wateja Vee Cosmetics. Tutakujibu kupitia barua pepe au namba yako ya simu.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

        {/* Live Google Map Container */}
        <section className="space-y-6">
          <div className="text-left space-y-2">
            <h2 className="font-serif text-2xl font-bold text-text-base">Find Us on the Map</h2>
            <p className="text-sm text-text-muted">Tumia ramani iliyo hapa chini kupata maelekezo ya moja kwa moja ya kufika duka letu Banana, Dar es Salaam.</p>
          </div>
          <div className="rounded-3xl overflow-hidden border-2 border-gold shadow-md h-[400px] bg-rose-light/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.757041189438!2d39.18342416342898!3d-6.867905189736852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c490802c6b453%3A0x67394e1d1f0cd547!2sBanana%2C%20Dar%20es%20Salaam!5e0!3m2!1sen!2stz!4v1718115689123!5m2!1sen!2stz"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vee Cosmetics Google Maps Location"
            ></iframe>
          </div>
        </section>

      </div>
    </div>
  );
}
