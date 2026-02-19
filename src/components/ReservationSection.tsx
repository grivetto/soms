'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/Button'
import { Calendar, Clock, Users, Phone, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ReservationSection() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        notes: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false)
            setIsSuccess(true)
            setFormData({ name: '', phone: '', date: '', time: '', guests: '2', notes: '' })

            setTimeout(() => setIsSuccess(false), 5000)
        }, 1500)
    }

    return (
        <section id="reservation" className="py-24 bg-wood relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <path fill="#FDFBF7" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,80.7,-46.3C89.6,-33.5,94.4,-18.1,91.8,-3.4C89.2,11.3,79.2,25.3,69.5,38.5C59.8,51.7,50.3,64.1,38.3,72.4C26.3,80.7,11.8,84.9,-3.3,89.6C-18.4,94.3,-34.1,99.5,-46.5,92.5C-58.9,85.5,-68,66.3,-76.1,49.5C-84.2,32.7,-91.3,18.3,-92.1,3.5C-92.9,-11.3,-87.4,-26.5,-78.5,-39.4C-69.6,-52.3,-57.3,-62.9,-43.7,-70.4C-30.1,-77.9,-15.1,-82.3,0.3,-82.8C15.7,-83.3,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 bg-cream rounded-2xl overflow-hidden shadow-2xl">

                    {/* Info Side */}
                    <div className="flex-1 bg-charcoal text-cream p-10 flex flex-col justify-center">
                        <span className="text-gold font-medium tracking-widest text-sm uppercase mb-2">Prenotazioni</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                            Riserva il Tuo Tavolo
                        </h2>
                        <p className="text-cream/80 mb-8 leading-relaxed">
                            Per garantirvi la migliore esperienza, <strong className="text-gold">la prenotazione è raccomandata</strong>.
                            Siamo aperti a pranzo e a cena, dal martedì alla domenica.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-wood/20 flex items-center justify-center">
                                    <Phone className="w-5 h-5 text-gold" />
                                </div>
                                <div>
                                    <p className="text-sm text-cream/60">Chiamaci Subito</p>
                                    <p className="text-lg font-medium">011 776 5742</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-wood/20 flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-gold" />
                                </div>
                                <div>
                                    <p className="text-sm text-cream/60">Scrivici</p>
                                    <p className="text-lg font-medium">info@circolocampidoglio.it</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="flex-[1.5] p-10 bg-cream">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-charcoal">Nome e Cognome *</label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-white border border-wood/20 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-wood/50 transition-shadow"
                                        placeholder="Mario Rossi"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-charcoal">Telefono *</label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        className="w-full bg-white border border-wood/20 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-wood/50 transition-shadow"
                                        placeholder="333 1234567"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                <div className="space-y-2 relative">
                                    <label htmlFor="date" className="text-sm font-medium text-charcoal">Data *</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-wood/60" />
                                        <input
                                            id="date"
                                            type="date"
                                            required
                                            value={formData.date}
                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                            className="w-full bg-white border border-wood/20 rounded-md pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-wood/50 transition-shadow text-charcoal"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2 relative">
                                    <label htmlFor="time" className="text-sm font-medium text-charcoal">Ora *</label>
                                    <div className="relative">
                                        <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-wood/60" />
                                        <select
                                            id="time"
                                            required
                                            value={formData.time}
                                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                            className="w-full bg-white border border-wood/20 rounded-md pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-wood/50 transition-shadow text-charcoal appearance-none"
                                        >
                                            <option value="">Seleziona</option>
                                            <option value="12:30">12:30</option>
                                            <option value="13:00">13:00</option>
                                            <option value="13:30">13:30</option>
                                            <option value="19:30">19:30</option>
                                            <option value="20:00">20:00</option>
                                            <option value="20:30">20:30</option>
                                            <option value="21:00">21:00</option>
                                            <option value="21:30">21:30</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2 relative">
                                    <label htmlFor="guests" className="text-sm font-medium text-charcoal">Ospiti *</label>
                                    <div className="relative">
                                        <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-wood/60" />
                                        <select
                                            id="guests"
                                            required
                                            value={formData.guests}
                                            onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                                            className="w-full bg-white border border-wood/20 rounded-md pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-wood/50 transition-shadow text-charcoal appearance-none"
                                        >
                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                                                <option key={n} value={n}>{n} {n === 1 ? 'Persona' : 'Persone'}</option>
                                            ))}
                                            <option value="10+">Più di 10</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="notes" className="text-sm font-medium text-charcoal">Note Speciali (Opzionale)</label>
                                <textarea
                                    id="notes"
                                    rows={3}
                                    value={formData.notes}
                                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                    className="w-full bg-white border border-wood/20 rounded-md px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-wood/50 transition-shadow resize-none"
                                    placeholder="Allergie, intolleranze o richieste particolari..."
                                ></textarea>
                            </div>

                            <Button
                                type="submit"
                                size="lg"
                                className={cn("w-full transition-all duration-300", isSuccess ? "bg-green-600 hover:bg-green-700" : "")}
                                disabled={isSubmitting || isSuccess}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: 'linear' }} className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                                        Invio in corso...
                                    </span>
                                ) : isSuccess ? (
                                    'Richiesta Inviata!'
                                ) : (
                                    'Richiedi Prenotazione'
                                )}
                            </Button>

                            {isSuccess && (
                                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-green-600 text-sm text-center">
                                    Grazie! Ti contatteremo presto per confermare la tua prenotazione.
                                </motion.p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
