'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MdMenu, MdClose, MdEmail, MdPhone } from '@/components/icons';
import { NAV_LINKS, CONTACT_INFO } from '@/lib/constants';
import { VersionLink } from '@/components/VersionLink';

export function V1Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="fixed w-full z-50 transition-all duration-500">
            {/* Elegant Top Bar (DonnaJames Style) */}
            <div className={`bg-v1-primary text-white transition-all duration-500 overflow-hidden ${scrolled ? 'h-0 opacity-0' : 'h-10 opacity-100 border-b border-white/5'}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex justify-between items-center text-[10px] uppercase font-black tracking-[0.2em]">
                    <div className="hidden md:flex gap-8">
                        <span className="opacity-60">AI Strategie & Implementatie</span>
                        <span className="opacity-60">Veilig & Betrouwbaar</span>
                    </div>
                    <div className="flex gap-8 w-full md:w-auto justify-center md:justify-end">
                        <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-2 hover:text-v1-accent transition-colors">
                            <MdPhone size={12} className="text-v1-accent" /> {CONTACT_INFO.phone}
                        </a>
                        <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 hover:text-v1-accent transition-colors">
                            <MdEmail size={12} className="text-v1-accent" /> {CONTACT_INFO.email}
                        </a>
                    </div>
                </div>
            </div>

            <nav className={`transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className={`relative flex items-center justify-between bg-white px-8 h-20 rounded-full shadow-2xl border border-slate-100 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl' : 'bg-white'}`}>
                        {/* Logo */}
                        <VersionLink href="/" className="flex items-center gap-2 group cursor-pointer relative z-10">
                            <Image
                                src="/img/logo_full.png"
                                alt="FlowTIQ Logo"
                                width={140}
                                height={32}
                                className="h-8 w-auto transition-all group-hover:opacity-80 group-hover:scale-105"
                            />
                        </VersionLink>

                        {/* Desktop Menu - Centered Offset */}
                        <div className="hidden md:flex items-center space-x-12 absolute left-1/2 -translate-x-1/2">
                            {NAV_LINKS.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <VersionLink
                                        key={link.href}
                                        href={link.href}
                                        className={`text-xs font-black uppercase tracking-[0.3em] transition-all hover:text-v1-accent relative group py-2 ${isActive ? 'text-v1-accent' : 'text-v1-primary'}`}
                                    >
                                        {link.label}
                                        <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-v1-accent transition-transform duration-500 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                                    </VersionLink>
                                );
                            })}
                        </div>

                        {/* CTA - Boutique Button */}
                        <div className="relative z-10 flex items-center gap-4">
                            <VersionLink
                                href="/contact"
                                className="hidden md:inline-flex items-center justify-center bg-v1-primary text-white text-[10px] font-black uppercase tracking-[0.2em] px-8 py-4 rounded-full hover:bg-v1-accent hover:text-v1-primary transition-all shadow-xl hover:shadow-v1-accent/20 active:scale-95"
                            >
                                Contact opnemen
                            </VersionLink>

                            {/* Mobile Toggle */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="md:hidden w-12 h-12 flex items-center justify-center text-v1-primary hover:text-v1-accent transition-colors rounded-full bg-slate-50"
                                aria-label={isOpen ? "Sluit menu" : "Open menu"}
                            >
                                {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu - Boutique Slide Down */}
                    <div className={`md:hidden absolute top-full left-6 right-6 transition-all duration-500 ${isOpen ? 'translate-y-4 opacity-100 pointer-events-auto' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
                        <div className="bg-white rounded-[40px] p-10 shadow-3xl border border-slate-100 space-y-8">
                            {NAV_LINKS.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <VersionLink
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`block text-xl font-bold transition-all ${isActive ? 'text-v1-accent' : 'text-v1-primary hover:pl-4'}`}
                                    >
                                        {link.label}
                                    </VersionLink>
                                );
                            })}
                            <div className="pt-8 border-t border-slate-100">
                                <VersionLink
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center bg-v1-accent text-v1-primary font-black uppercase tracking-widest text-xs py-5 rounded-3xl"
                                >
                                    Contact opnemen
                                </VersionLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
