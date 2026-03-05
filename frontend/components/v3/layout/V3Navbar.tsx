'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MdMenu, MdClose, MdArrowForward } from '@/components/icons';
import { VersionLink } from '@/components/VersionLink';

const V3_NAV_LINKS = [
    { href: '/', label: 'Home' },
    { href: '/producten', label: 'Producten' },
    { href: '/veiligheid', label: 'Veiligheid' },
    { href: '/over-ons', label: 'Over ons' },
];

export function V3Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 font-sans ${scrolled ? 'py-4' : 'py-8'}`}>
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className={`flex items-center justify-between transition-all duration-700 rounded-full px-10 py-3 transform ${scrolled
                    ? 'glass-panel shadow-[0_12px_40px_rgba(0,0,0,0.06)] scale-[0.98]'
                    : 'bg-transparent border-transparent scale-100'
                    }`}>
                    {/* Logo */}
                    <VersionLink href="/" className="flex items-center gap-2 group relative">
                        <Image
                            src="/img/logo_full.png"
                            alt="FlowTIQ Logo"
                            width={120}
                            height={32}
                            className="h-7 w-auto transition-all duration-300"
                        />
                        <div className="absolute -top-1 -right-4 w-2 h-2 bg-v3-accent rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
                    </VersionLink>

                    {/* Desktop Menu - Centered Style */}
                    <div className="hidden md:flex items-center bg-v3-bg-alt/50 rounded-full px-2 py-1 border border-v3-border/30">
                        {V3_NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <VersionLink
                                    key={link.href}
                                    href={link.href}
                                    className={`px-6 py-2 rounded-full text-sm font-bold tracking-tight transition-all duration-300 ${isActive
                                        ? 'text-v3-primary bg-white shadow-sm'
                                        : 'text-v3-text-secondary hover:text-v3-primary'
                                        }`}
                                >
                                    {link.label}
                                </VersionLink>
                            );
                        })}
                    </div>

                    {/* CTAs */}
                    <div className="flex items-center gap-4">
                        <VersionLink
                            href="/contact"
                            className="hidden lg:flex items-center justify-center text-sm font-black text-white bg-v3-primary rounded-full px-8 py-3 transition-all duration-300 hover:shadow-2xl hover:shadow-v3-primary/30 hover:translate-y-[-2px] active:scale-95 group"
                        >
                            Get Started <MdArrowForward size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </VersionLink>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-3 text-v3-text bg-v3-bg-alt rounded-full transition-all hover:bg-v3-primary/5 active:scale-90"
                            aria-label={isOpen ? "Sluit menu" : "Open menu"}
                        >
                            {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu - Minimalist Cards Style */}
                <div className={`md:hidden overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isOpen ? 'max-h-screen opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-white/95 backdrop-blur-xl border border-v3-border rounded-[2.5rem] p-8 shadow-2xl space-y-8">
                        <div className="flex flex-col space-y-4">
                            {V3_NAV_LINKS.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <VersionLink
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-2xl font-black tracking-tighter transition-all ${isActive
                                            ? 'text-v3-primary pl-4'
                                            : 'text-v3-text-secondary'
                                            }`}
                                    >
                                        {link.label}
                                    </VersionLink>
                                );
                            })}
                        </div>
                        <div className="pt-8 border-t border-v3-border">
                            <VersionLink
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="w-full flex items-center justify-center py-5 bg-v3-primary text-white font-black text-lg rounded-2xl shadow-xl shadow-v3-primary/20"
                            >
                                Contact Ons
                            </VersionLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
