'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Utensils, Fish } from 'lucide-react'

type MenuItem = {
    name: string
    description: string
    price: string
    category: 'antipasti' | 'primi' | 'secondi' | 'dolci'
    theme: 'terra' | 'mare'
}

const menuItems: MenuItem[] = [
    // TERRA - Antipasti
    { name: 'Battuta di Fassona', description: 'Carne cruda di Fassona piemontese battuta al coltello, olio EVO, sale di Maldon.', price: '€14', category: 'antipasti', theme: 'terra' },
    { name: 'Vitello Tonnato', description: 'Girello di vitello cotto a bassa temperatura con salsa tonnata antica.', price: '€13', category: 'antipasti', theme: 'terra' },
    // MARE - Antipasti
    { name: 'Carpaccio di Gamberi Rossi', description: 'Gamberi rossi di Mazara, agrumi di Sicilia, pepe rosa.', price: '€18', category: 'antipasti', theme: 'mare' },
    { name: 'Insalata di Mare Tiepida', description: 'Molluschi e crostacei cotti al vapore con verdurine croccanti.', price: '€16', category: 'antipasti', theme: 'mare' },

    // TERRA - Primi
    { name: 'Agnolotti del Plin', description: 'Pasta fresca ripiena ai tre arrosti, servita nel tovagliolo o al sugo d\'arrosto.', price: '€15', category: 'primi', theme: 'terra' },
    { name: 'Tajarin al Tartufo Nero', description: 'Tagliolini ai 40 tuorli con burro d\'alpeggio e tartufo nero pregiato.', price: '€20', category: 'primi', theme: 'terra' },
    // MARE - Primi
    { name: 'Spaghetto alle Vongole Veraci', description: 'Spaghetti di Gragnano, vongole veraci, aglio, olio, peperoncino.', price: '€18', category: 'primi', theme: 'mare' },
    { name: 'Risotto ai Frutti di Mare', description: 'Riso Carnaroli riserva, calamari, gamberi, cozze, vongole.', price: '€19', category: 'primi', theme: 'mare' },

    // TERRA - Secondi
    { name: 'Brasato al Barolo', description: 'Sottopaletta di vitello brasata al Barolo DOCG, servita con polenta.', price: '€22', category: 'secondi', theme: 'terra' },
    { name: 'Tagliata di Fassona', description: 'Controfiletto di Fassona alla griglia, rucola e grana.', price: '€20', category: 'secondi', theme: 'terra' },
    // MARE - Secondi
    { name: 'Fritto Misto del Pescatore', description: 'Gamberi, calamari e paranza del giorno fritti in olio leggero.', price: '€24', category: 'secondi', theme: 'mare' },
    { name: 'Trancio di Ricciola', description: 'Ricciola scottata, crema di zucchine e menta.', price: '€25', category: 'secondi', theme: 'mare' },

    // DOLCI (Mixed)
    { name: 'Bonet Piemontese', description: 'Budino tradizionale con cacao e amaretti.', price: '€8', category: 'dolci', theme: 'terra' },
    { name: 'Tiramisù Classico', description: 'Savoiardi, mascarpone, caffè espresso.', price: '€8', category: 'dolci', theme: 'terra' },
    { name: 'Sorbetto al Limone', description: 'Fresco sorbetto al limone di Amalfi e salvia.', price: '€6', category: 'dolci', theme: 'mare' },
]

const categories = [
    { id: 'antipasti', label: 'Antipasti' },
    { id: 'primi', label: 'Primi Piatti' },
    { id: 'secondi', label: 'Secondi Piatti' },
    { id: 'dolci', label: 'Dolci' },
]

export function MenuSection() {
    const [activeTheme, setActiveTheme] = useState<'terra' | 'mare' | 'all'>('all')
    const [activeCategory, setActiveCategory] = useState<string>('antipasti')

    const filteredItems = menuItems.filter(item => {
        const themeMatch = activeTheme === 'all' || item.theme === activeTheme
        const catMatch = item.category === activeCategory
        return themeMatch && catMatch
    })

    return (
        <section id="menu" className="py-24 bg-cream relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-wood font-medium tracking-widest text-sm uppercase">Il Nostro Menu</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal mt-2 mb-8">
                        Gusto &amp; Tradizione
                    </h2>

                    <div className="flex justify-center gap-4 mb-12">
                        <button
                            onClick={() => setActiveTheme('terra')}
                            className={cn(
                                "flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300",
                                activeTheme === 'terra'
                                    ? "bg-wood text-cream border-wood shadow-lg scale-105"
                                    : "bg-transparent text-wood border-wood/30 hover:border-wood"
                            )}
                        >
                            <Utensils className="w-4 h-4" />
                            <span>Terra</span>
                        </button>
                        <button
                            onClick={() => setActiveTheme('all')}
                            className={cn(
                                "px-6 py-3 rounded-full border transition-all duration-300 font-medium",
                                activeTheme === 'all'
                                    ? "bg-charcoal text-cream border-charcoal shadow-lg scale-105"
                                    : "bg-transparent text-charcoal border-charcoal/30 hover:border-charcoal"
                            )}
                        >
                            Tutto
                        </button>
                        <button
                            onClick={() => setActiveTheme('mare')}
                            className={cn(
                                "flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300",
                                activeTheme === 'mare'
                                    ? "bg-ocean text-white border-ocean shadow-lg scale-105"
                                    : "bg-transparent text-ocean border-ocean/30 hover:border-ocean"
                            )}
                        >
                            <Fish className="w-4 h-4" />
                            <span>Mare</span>
                        </button>
                    </div>

                    <div className="flex justify-center gap-8 border-b border-wood/20 pb-4 max-w-3xl mx-auto overflow-x-auto">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={cn(
                                    "text-lg font-serif transition-colors relative pb-4 -mb-4 whitespace-nowrap px-2",
                                    activeCategory === cat.id ? "text-wood font-bold" : "text-charcoal/60 hover:text-wood"
                                )}
                            >
                                {cat.label}
                                {activeCategory === cat.id && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-wood"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="max-w-4xl mx-auto min-h-[400px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeCategory + activeTheme}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10"
                        >
                            {filteredItems.length > 0 ? (
                                filteredItems.map((item) => (
                                    <div key={item.name} className="group cursor-default">
                                        <div className="flex justify-between items-baseline mb-2 border-b border-dotted border-wood/30 pb-1">
                                            <h3 className="text-xl font-serif font-bold text-charcoal group-hover:text-wood transition-colors">
                                                {item.name}
                                            </h3>
                                            <span className="text-lg font-medium text-wood ml-4">{item.price}</span>
                                        </div>
                                        <p className="text-charcoal/70 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                        <div className="mt-2">
                                            {item.theme === 'terra' && <span className="text-[10px] uppercase tracking-wider text-wood bg-wood/10 px-2 py-0.5 rounded-full">Terra</span>}
                                            {item.theme === 'mare' && <span className="text-[10px] uppercase tracking-wider text-ocean bg-ocean/10 px-2 py-0.5 rounded-full">Mare</span>}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-span-full text-center py-10 text-charcoal/50 italic">
                                    Nessun piatto disponibile in questa categoria per il tema selezionato.
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    )
}
