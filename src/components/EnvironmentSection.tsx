'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export function EnvironmentSection() {
    const images = [
        { src: 'https://placehold.co/800x600/8B5A2B/FDFBF7?text=Sala+Interna', alt: 'Sala Interna del Circolo', title: 'Atmosfera Storica' },
        { src: 'https://placehold.co/800x1000/1A3A5A/FDFBF7?text=Dehors+Estivo', alt: 'Dehors Estivo', title: 'Il Dehors Estivo', className: 'md:row-span-2' },
        { src: 'https://placehold.co/800x600/2D2D2D/FDFBF7?text=Dettagli', alt: 'Dettagli', title: 'Cura dei Dettagli' },
    ]

    return (
        <section id="ambiance" className="py-24 bg-white relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row gap-12 items-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1"
                    >
                        <span className="text-wood font-medium tracking-widest text-sm uppercase">La Nostra Storia</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mt-2 mb-6">
                            Oltre un secolo di <br /> Mutuo Soccorso.
                        </h2>
                        <p className="text-lg text-charcoal/80 leading-relaxed mb-6">
                            Fondata nel cuore di Borgo Campidoglio, la nostra Società Operaia di Mutuo Soccorso (SOMS)
                            non è solo un ristorante, ma un pezzo di storia viva e pulsante di Torino.
                        </p>
                        <p className="text-lg text-charcoal/80 leading-relaxed">
                            Dall&apos;intento originario di solidarietà e aggregazione, conserviamo intatto lo spirito
                            conviviale. L&apos;antica sala sociale e il nostro rigoglioso dehors estivo vi accolgono
                            oggi come in passato, in un&apos;atmosfera dove il tempo sembra rallentare e la tradizione si rinnova.
                        </p>
                    </motion.div>

                    <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-[250px]">
                        {images.map((img, i) => (
                            <motion.div
                                key={img.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                className={cn("relative rounded-xl overflow-hidden group cursor-pointer", img.className)}
                            >
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="text-white font-serif text-xl">{img.title}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
