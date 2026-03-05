'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MdMenu, MdClose, MdFiberManualRecord, MdTerminal } from '@/components/icons';
import { VersionLink } from '@/components/VersionLink';

const V2_NAV_LINKS = [
    { href: '/', label: 'Home', code: '01' },
    { href: '/producten', label: 'Producten', code: '02' },
    { href: '/over-ons', label: 'Over ons', code: '03' },
    { href: '/veiligheid', label: 'Veiligheid', code: '04' },
    { href: '/contact', label: 'Contact', code: '05' },
];

export function V2Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-v2-bg/95 backdrop-blur-md shadow-2xl py-0' : 'bg-transparent py-2'}`}>
            {/* Top Status Bar (Technical Accent) */}
            <div className="bg-v2-primary text-[10px] font-mono py-1 px-6 lg:px-8 text-white/40 flex justify-between items-center border-b border-white/5">
                <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5"><MdFiberManualRecord size={8} className="text-v2-accent animate-pulse" /> NETWORK_READY</span>
                    <span className="hidden sm:inline opacity-50">// ENCRYPTION_AES_256</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="hidden md:inline text-v2-accent/60 tracking-widest uppercase">FlowTIQ AI Operating System v2.4.0</span>
                    <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <VersionLink href="/" className="flex items-center gap-3 group relative">
                        <div className="absolute -inset-2 bg-v2-accent/5 scale-0 group-hover:scale-100 transition-transform rounded-sm"></div>
                        <Image
                            src="/img/logo_full.png"
                            alt="FlowTIQ Logo"
                            width={140}
                            height={36}
                            className="h-10 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-all"
                        />
                        <div className="h-6 w-[2px] bg-v2-accent/30 hidden sm:block"></div>
                        <span className="text-[10px] font-mono text-v2-accent font-bold tracking-tighter hidden sm:block">CORE_V2</span>
                    </VersionLink>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        {V2_NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <VersionLink
                                    key={link.href}
                                    href={link.href}
                                    className={`relative px-5 py-2 group transition-all`}
                                >
                                    <span className={`text-[10px] font-mono block mb-1 transition-colors ${isActive ? 'text-v2-accent' : 'text-v2-text-secondary group-hover:text-v2-accent/50'}`}>
                                        {link.code}
                                    </span>
                                    <span className={`text-sm font-black uppercase tracking-widest transition-all ${isActive ? 'text-v2-primary' : 'text-v2-text-secondary group-hover:text-v2-primary'}`}>
                                        {link.label}
                                    </span>
                                    {isActive && (
                                        <div className="absolute bottom-0 left-5 right-5 h-[2px] bg-v2-accent rounded-full"></div>
                                    )}
                                </VersionLink>
                            );
                        })}
                    </div>

                    {/* CTA + Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <VersionLink
                            href="/contact"
                            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 bg-v2-primary text-white font-black text-xs uppercase tracking-[0.2em] rounded-sm hover:bg-v2-accent hover:text-v2-bg transition-all border border-white/10 group shadow-xl"
                        >
                            Execute Scan <MdTerminal size={16} className="group-hover:translate-x-1 transition-transform" />
                        </VersionLink>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-v2-primary hover:text-v2-accent transition-colors p-2 bg-v2-surface rounded-lg border border-v2-border/50"
                            aria-label={isOpen ? 'Sluit menu' : 'Open menu'}
                        >
                            {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100 pb-12 pt-4' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col gap-2">
                        {V2_NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <VersionLink
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center justify-between px-6 py-4 rounded-xl border transition-all ${isActive
                                        ? 'bg-v2-primary text-white border-v2-primary shadow-xl scale-[1.02]'
                                        : 'bg-v2-surface text-v2-text-secondary border-v2-border/50 hover:border-v2-accent'
                                        }`}
                                >
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-mono opacity-50 mb-1">{link.code}</span>
                                        <span className="font-black uppercase tracking-widest text-sm">{link.label}</span>
                                    </div>
                                    {isActive && <MdFiberManualRecord className="text-v2-accent animate-pulse" />}
                                </VersionLink>
                            );
                        })}
                        <VersionLink
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="mt-4 px-6 py-5 bg-v2-accent text-v2-bg font-black text-sm uppercase tracking-widest rounded-xl text-center shadow-lg shadow-v2-accent/20"
                        >
                            Plan AI Scan
                        </VersionLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}
