'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CalendarDays, ExternalLink } from 'lucide-react'

export function EventsSection() {
    const events = [
        {
            date: '25 Nov',
            title: 'Serata Gran Bollito Misto',
            category: 'Cucina & Tradizione',
            description: 'Torna il tradizionale appuntamento con il gran bollito piemontese. Sette tagli, sette bagnetti, contorni della tradizione.'
        },
        {
            date: '02 Dic',
            title: 'Torneo Sociale di Bocce',
            category: 'Sport & Comunità',
            description: 'Iscrizioni aperte per il torneo invernale a coppie. Premiazione e cena sociale a seguire presso il salone.'
        },
        {
            date: '15 Dic',
            title: 'Incontro Culturale: Storia del Borgo',
            category: 'Cultura',
            description: 'Una serata dedicata alla storia di Borgo Campidoglio con ospiti speciali, aneddoti storici e rinfresco offerto dalla Società.'
        }
    ]

    return (
        <section id="eventi" className="py-24 bg-wood relative text-cream">
            {/* Subtle Pattern Background */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-gold font-medium tracking-widest text-sm uppercase">Cosa Succede in S.O.M.S.</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mt-2 mb-4">
                            Vivi il Circolo.
                        </h2>
                        <p className="text-cream/80 text-lg">
                            Eventi gastronomici speciali, tornei sportivi, serate culturali.
                            Scopri i prossimi appuntamenti e rimani aggiornato sulla vita associativa.
                        </p>
                    </div>

                    <a
                        href="https://www.somscampidoglio.it/category/eventi-in-soms/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 text-gold hover:text-white transition-colors"
                    >
                        <span className="font-serif text-lg border-b border-transparent group-hover:border-white pb-0.5 transition-colors">Vedi tutti gli eventi sul portale</span>
                        <ExternalLink className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {events.map((event, i) => (
                        <motion.div
                            key={event.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                            className="bg-charcoal/40 border border-cream/10 rounded-2xl p-8 hover:bg-charcoal/60 hover:border-cream/20 transition-all group"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-wood text-white px-4 py-2 rounded-lg font-bold font-serif text-lg tracking-wide border border-gold/30">
                                    {event.date}
                                </div>
                                <span className="text-gold/80 text-sm uppercase tracking-wider">{event.category}</span>
                            </div>

                            <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-gold transition-colors">{event.title}</h3>
                            <p className="text-cream/70 leading-relaxed mb-8 text-sm">
                                {event.description}
                            </p>

                            <div className="mt-auto">
                                <button className="flex items-center gap-2 text-sm font-medium text-cream hover:text-gold transition-colors">
                                    Scopri di più
                                    <ArrowRight className="w-4 h-4 translate-x-0 group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
