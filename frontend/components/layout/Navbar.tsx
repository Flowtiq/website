'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MdMenu, MdClose } from '@/components/icons';
import { NAV_LINKS } from '@/lib/constants';

export function Navbar() {
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
        <nav className="fixed w-full z-50 transition-all duration-300 glass-panel border-b border-slate-200/60 py-3">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group cursor-pointer">
                        <Image
                            src="/img/logo_full.png"
                            alt="FlowTIQ Logo"
                            width={180}
                            height={48}
                            className="h-12 w-auto transition-opacity group-hover:opacity-80"
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`transition-colors font-sans ${isActive ? 'text-teal-600 font-semibold' : 'hover:text-indigo'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-slate-600 hover:text-indigo transition-colors"
                            aria-label={isOpen ? "Sluit menu" : "Open menu"}
                        >
                            {isOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
                        </button>
                        <Link
                            href="/contact"
                            className="hidden md:inline-flex items-center justify-center transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo hover:bg-[#1a2036] hover:shadow-indigo/20 text-sm font-medium text-white bg-mint rounded-full px-5 py-2.5"
                        >
                            Kop koffie drinken?
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 py-6' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="flex flex-col space-y-4 text-sm font-medium text-slate-600 border-t border-slate-100 mt-4 pt-4">
                        {NAV_LINKS.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`transition-colors font-sans ${isActive ? 'text-teal-600 font-semibold' : 'hover:text-indigo'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            );
                        })}
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="inline-flex items-center justify-center text-sm font-medium text-white bg-mint rounded-full px-5 py-2.5 mt-2"
                        >
                            Kop koffie drinken?
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
