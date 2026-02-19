'use client'

import { motion } from 'framer-motion'
import { HeartHandshake, Users, Award, Info } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ActivitiesSection() {
    const activities = [
        {
            title: 'Mutualismo',
            icon: <HeartHandshake className="w-6 h-6 text-cream" />,
            description: 'Fedeli ai nostri valori fondativi, supportiamo i nostri soci e la comunità di quartiere promuovendo solidarietà e assistenza reciproca.',
            className: 'md:col-span-2 bg-charcoal text-cream',
            iconBg: 'bg-wood/20',
            titleColor: 'text-cream'
        },
        {
            title: 'Vantaggi Soci',
            icon: <Award className="w-6 h-6 text-wood" />,
            description: 'I tesserati godono di sconti riservati, accesso prioritario agli eventi culturali e tariffe agevolate.',
            className: 'bg-white border border-wood/20 text-charcoal',
            iconBg: 'bg-wood/10',
            titleColor: 'text-wood'
        },
        {
            title: 'Palajuve Bocce',
            icon: <Users className="w-6 h-6 text-ocean" />,
            description: 'Il nostro storico impianto bocciofilo è da decenni un punto di ritrovo per sport, amicizia e genuina competizione sportiva.',
            className: 'bg-white border border-ocean/20 text-charcoal',
            iconBg: 'bg-ocean/10',
            titleColor: 'text-ocean'
        },
        {
            title: 'Diventa Socio',
            icon: <Info className="w-6 h-6 text-cream" />,
            description: 'L\'iscrizione è aperta a tutti. Entra a far parte della nostra famiglia: ti aspettiamo in Segreteria per tutte le informazioni.',
            className: 'md:col-span-2 bg-wood text-cream',
            iconBg: 'bg-charcoal/20',
            titleColor: 'text-cream'
        }
    ]

    return (
        <section id="attivita" className="py-24 bg-cream relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-wood font-medium tracking-widest text-sm uppercase">Il Cuore della S.O.M.S.</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mt-2 mb-6">
                        Molto più di un Circolo.
                    </h2>
                    <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
                        Da decenni, la Società Operaia di Mutuo Soccorso Campidoglio è un punto di riferimento
                        per lo sport, la cultura e l&apos;aiuto reciproco nel quartiere.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {activities.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className={cn("p-8 rounded-2xl flex flex-col justify-between group hover:-translate-y-1 transition-transform duration-300", item.className)}
                        >
                            <div>
                                <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", item.iconBg)}>
                                    {item.icon}
                                </div>
                                <h3 className={cn("font-serif text-2xl font-bold mb-4", item.titleColor)}>{item.title}</h3>
                                <p className="opacity-80 leading-relaxed text-sm">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
