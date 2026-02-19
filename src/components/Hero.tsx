'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/Button'
import { cn } from '@/lib/utils'

export function Hero() {
    const [activeTheme, setActiveTheme] = useState<'terra' | 'mare'>('terra')

    const toggleTheme = () => {
        setActiveTheme(prev => prev === 'terra' ? 'mare' : 'terra')
    }

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Images */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTheme}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    {activeTheme === 'terra' ? (
                        <div className="relative w-full h-full bg-wood">
                            {/* Placeholder for Terra Image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                            <Image
                                src="/images/terra.png"
                                alt="Terra - Cucina Piemontese"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    ) : (
                        <div className="relative w-full h-full bg-ocean">
                            {/* Placeholder for Mare Image */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                            <Image
                                src="/images/mare.png"
                                alt="Mare - Pesce Fresco"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Content Overlay */}
            <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
                <motion.div
                    key={activeTheme + "-text"}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight drop-shadow-lg">
                        {activeTheme === 'terra' ? 'La Tradizione della Terra' : 'Il Profumo del Mare'}
                    </h1>
                    <p className="text-lg md:text-2xl font-light mb-8 max-w-2xl mx-auto drop-shadow-md text-balance text-cream/90">
                        {activeTheme === 'terra'
                            ? 'Sapori autentici del Piemonte, dove la storia incontra il gusto.'
                            : 'Pescato fresco di giornata, cucinato con maestria e passione.'}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button size="lg" className={cn("text-lg px-8", activeTheme === 'terra' ? 'bg-wood hover:bg-wood/90' : 'bg-ocean hover:bg-ocean/90')}>
                            Scopri il Menu
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="text-lg px-8 border-white text-white hover:bg-white hover:text-wood"
                            onClick={toggleTheme}
                        >
                            Scopri {activeTheme === 'terra' ? 'il Mare' : 'la Terra'}
                        </Button>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                <button
                    onClick={() => setActiveTheme('terra')}
                    className={cn("w-3 h-3 rounded-full transition-all duration-300", activeTheme === 'terra' ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80")}
                    aria-label="Switch to Terra theme"
                />
                <button
                    onClick={() => setActiveTheme('mare')}
                    className={cn("w-3 h-3 rounded-full transition-all duration-300", activeTheme === 'mare' ? "bg-white scale-125" : "bg-white/50 hover:bg-white/80")}
                    aria-label="Switch to Mare theme"
                />
            </div>
        </section>
    )
}
