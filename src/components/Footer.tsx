'use client'

import Link from 'next/link'
import { MapPin, Clock, Facebook, Instagram } from 'lucide-react'

export function Footer() {
    return (
        <footer className="bg-charcoal text-cream relative">
            <div className="container mx-auto px-4 md:px-6 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 border-b border-cream/10 pb-12">

                    {/* Brand & Intro */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <div className="flex flex-col">
                                <span className="font-serif text-2xl font-bold leading-none tracking-wide text-wood">
                                    CIRCOLO
                                </span>
                                <span className="text-xs tracking-[0.2em] font-medium opacity-90 text-cream">
                                    CAMPIDOGLIO
                                </span>
                            </div>
                        </Link>
                        <p className="text-sm text-cream/70 leading-relaxed max-w-sm">
                            SOMS - Un connubio perfetto tra la tradizione della cucina piemontese
                            e la freschezza del mare, nel cuore pulsante di Torino.
                        </p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-cream/5 flex items-center justify-center text-cream/80 hover:bg-wood hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-cream/5 flex items-center justify-center text-cream/80 hover:bg-wood hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-6">
                        <h4 className="font-serif text-xl font-bold text-cream">Contatti</h4>
                        <ul className="space-y-4 text-cream/80 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-wood shrink-0 mt-0.5" />
                                <span>
                                    Via Omegna 5, <br />
                                    10143 Torino (TO)
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Institutional Links */}
                    <div className="space-y-6">
                        <h4 className="font-serif text-xl font-bold text-cream">Società Operaia</h4>
                        <ul className="space-y-4 text-cream/80 text-sm">
                            <li><a href="https://www.somscampidoglio.it/chi-siamo/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Chi Siamo</a></li>
                            <li><a href="https://www.somscampidoglio.it/statuto-e-regolamento/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Statuto e Regolamento</a></li>
                            <li><a href="https://www.somscampidoglio.it/vantaggi-soci-soms-campidoglio/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Vantaggi per i Soci</a></li>
                            <li><a href="https://www.somscampidoglio.it/attivita-mutualistica-2/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Attività Mutualistica</a></li>
                            <li><a href="https://www.somscampidoglio.it/bocce/" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Bocciofila</a></li>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-cream/50 gap-4">
                    <p>&copy; {new Date().getFullYear()} Circolo Ristorante Campidoglio SOMS. Tutti i diritti riservati.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-cream transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
