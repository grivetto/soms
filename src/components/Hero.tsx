'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/Button'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/context/LanguageContext'

import terraImg from '../../public/images/terra.png'
import mareImg from '../../public/images/mare.png'

export function Hero() {
    const [activeTheme, setActiveTheme] = useState<'terra' | 'mare'>('terra')
    const { t, language } = useLanguage()

    const toggleTheme = () => {
        setActiveTheme(prev => prev === 'terra' ? 'mare' : 'terra')
    }

    const titleText = activeTheme === 'terra'
        ? (language === 'es' ? 'La Tradición de la Tierra' : language === 'en' ? 'Heritage & Land' : language === 'th' ? 'รสชาติดั้งเดิมแห่งแผ่นดิน' : 'La Tradizione della Terra')
        : (language === 'es' ? 'El Aroma del Mar' : language === 'en' ? 'Flavors of the Sea' : language === 'th' ? 'กลิ่นอายแห่งท้องทะเล' : 'Il Profumo del Mare')

    const subtitleText = activeTheme === 'terra'
        ? (language === 'es' ? 'Sabores auténticos del Piamonte donde la historia se une a la gastronomía.' : language === 'en' ? 'Authentic flavors of Piedmont, where heritage meets fine dining.' : language === 'th' ? 'รสชาติแท้แห่งปีเอมอนเต ที่ซึ่งประวัติศาสตร์มาบรรจบกับความอร่อย' : 'Sapori autentici del Piemonte, dove la storia incontra il gusto.')
        : (language === 'es' ? 'Pescado fresco del día preparado con maestría y pasión.' : language === 'en' ? 'Catch of the day, prepared with artistry and genuine passion.' : language === 'th' ? 'อาหารทะเลสดใหม่ประจำวัน ปรุงด้วยความพิถีพิถันและใจรัก' : 'Pescato fresco di giornata, cucinato con maestria e passione.')

    const switchLabel = activeTheme === 'terra'
        ? (language === 'es' ? 'Descubre el Mar' : language === 'en' ? 'Discover Sea' : language === 'th' ? 'เมนูทะเล' : 'Scopri il Mare')
        : (language === 'es' ? 'Descubre la Tierra' : language === 'en' ? 'Discover Land' : language === 'th' ? 'เมนูเนื้อ' : 'Scopri la Terra')

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
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                            <Image
                                src={terraImg}
                                alt="Terra - Cucina Piemontese"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    ) : (
                        <div className="relative w-full h-full bg-ocean">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                            <Image
                                src={mareImg}
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
                    key={activeTheme + "-text-" + language}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="max-w-3xl"
                >
                    <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 tracking-tight drop-shadow-lg">
                        {titleText}
                    </h1>
                    <p className="text-lg md:text-2xl font-light mb-8 max-w-2xl mx-auto drop-shadow-md text-balance text-cream/90">
                        {subtitleText}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button size="lg" className={cn("text-lg px-8", activeTheme === 'terra' ? 'bg-wood hover:bg-wood/90' : 'bg-ocean hover:bg-ocean/90')}>
                            {t.hero.btnMenu}
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="text-lg px-8 border-white text-white hover:bg-white hover:text-wood"
                            onClick={toggleTheme}
                        >
                            {switchLabel}
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
