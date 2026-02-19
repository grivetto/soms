'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { Button } from './ui/Button'
import { cn } from '@/lib/utils'

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'La Storia', href: '#ambiance' },
        { name: 'Menu', href: '#menu' },
        { name: 'Attività', href: '#attivita' },
        { name: 'Eventi', href: '#eventi' },
        { name: 'Prenota', href: '#reservation' },
    ]

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
                isScrolled
                    ? 'bg-cream/95 backdrop-blur-md shadow-sm py-4'
                    : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex flex-col">
                        <span className={cn("font-serif text-xl md:text-2xl font-bold leading-none tracking-wide", isScrolled ? "text-wood" : "text-white")}>
                            CIRCOLO
                        </span>
                        <span className={cn("text-xs tracking-[0.2em] font-medium opacity-90", isScrolled ? "text-wood" : "text-white")}>
                            CAMPIDOGLIO
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                'text-sm font-medium transition-colors hover:text-gold uppercase tracking-wider',
                                isScrolled ? 'text-charcoal' : 'text-white/90'
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant={isScrolled ? 'default' : 'outline'} className={isScrolled ? '' : 'border-white text-white hover:bg-white hover:text-wood'}>
                        Prenota un Tavolo
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={cn("h-6 w-6", isScrolled ? "text-wood" : "text-white")} />
                    ) : (
                        <Menu className={cn("h-6 w-6", isScrolled ? "text-wood" : "text-white")} />
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 top-[70px] bg-cream/95 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center gap-8 p-8 animate-in fade-in slide-in-from-top-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-2xl font-serif font-medium text-wood hover:text-gold"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button className="w-full max-w-xs mt-4" size="lg">
                        Prenota Ora
                    </Button>

                    <div className="flex items-center gap-2 text-wood/80 mt-8">
                        <Phone className="h-5 w-5" />
                        <span>011 776 5742</span>
                    </div>
                </div>
            )}
        </header>
    )
}
