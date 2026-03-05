'use client';

import React from 'react';
import Image from 'next/image';
import { MdOutlineMail, MdOutlinePhone, MdFiberManualRecord, MdArrowForward } from '@/components/icons';
import { CONTACT_INFO } from '@/lib/constants';
import { VersionLink } from '@/components/VersionLink';

export function V3Footer() {
    return (
        <footer className="bg-white border-t border-v3-border/50 pt-32 pb-16 font-sans overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 lg:px-8">
                {/* Floating CTA Card */}
                <div className="mb-32 p-12 md:p-20 bg-v3-primary rounded-[3rem] text-center relative overflow-hidden shadow-[0_24px_80px_rgba(10,46,47,0.15)] group">
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[80px] rounded-full -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-v3-accent/10 blur-[60px] rounded-full -ml-10 -mb-10"></div>

                    <div className="relative z-10 max-w-2xl mx-auto space-y-10">
                        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[1] mb-4">
                            Ready to automate <br />
                            your <span className="text-v3-accent text-italic-accent">workflow?</span>
                        </h2>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <VersionLink
                                href="/contact"
                                className="w-full sm:w-auto px-10 py-5 bg-white text-v3-primary font-black text-lg rounded-full shadow-2xl hover:scale-105 transition-all active:scale-95 flex items-center justify-center gap-2"
                            >
                                Get Started Free <MdArrowForward size={20} />
                            </VersionLink>
                            <VersionLink
                                href="/producten"
                                className="w-full sm:w-auto px-10 py-5 bg-white/10 text-white font-bold text-lg rounded-full backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
                            >
                                Features
                            </VersionLink>
                        </div>
                        <p className="text-white/60 text-sm font-medium">
                            Geen creditcard nodig • 14 dagen trial • Volledige support
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
                    {/* Brand Column */}
                    <div className="col-span-2 lg:col-span-5 space-y-8">
                        <VersionLink href="/" className="inline-block transition-transform hover:scale-105">
                            <Image
                                src="/img/logo_full.png"
                                alt="FlowTIQ Logo"
                                width={140}
                                height={38}
                                className="h-8 w-auto"
                            />
                        </VersionLink>
                        <p className="text-v3-text-secondary text-lg font-medium leading-relaxed max-w-sm">
                            De favoriete operating layer voor professionals die administratie willen verruilen voor hun échte vak.
                        </p>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2 group cursor-crosshair">
                                <div className="w-8 h-8 rounded-full bg-v3-bg-alt flex items-center justify-center group-hover:bg-v3-primary group-hover:text-white transition-all">L</div>
                                <span className="text-xs font-bold text-v3-text-secondary opacity-0 group-hover:opacity-100 transition-opacity">LinkedIn</span>
                            </div>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="col-span-1 lg:col-span-2 space-y-6">
                        <h4 className="text-sm font-black text-v3-primary uppercase tracking-[0.2em]">Product</h4>
                        <ul className="space-y-4 text-v3-text-secondary text-base font-bold">
                            <li><VersionLink href="/producten" className="hover:text-v3-primary transition-colors">Ecosystem</VersionLink></li>
                            <li><VersionLink href="/producten" className="hover:text-v3-primary transition-colors">Features</VersionLink></li>
                            <li><VersionLink href="/veiligheid" className="hover:text-v3-primary transition-colors">Security</VersionLink></li>
                        </ul>
                    </div>

                    <div className="col-span-1 lg:col-span-2 space-y-6">
                        <h4 className="text-sm font-black text-v3-primary uppercase tracking-[0.2em]">Company</h4>
                        <ul className="space-y-4 text-v3-text-secondary text-base font-bold">
                            <li><VersionLink href="/over-ons" className="hover:text-v3-primary transition-colors">Our Story</VersionLink></li>
                            <li><VersionLink href="/contact" className="hover:text-v3-primary transition-colors">Contact</VersionLink></li>
                            <li><VersionLink href="#" className="hover:text-v3-primary transition-colors">Legal</VersionLink></li>
                        </ul>
                    </div>

                    <div className="col-span-2 lg:col-span-3 space-y-6">
                        <h4 className="text-sm font-black text-v3-primary uppercase tracking-[0.2em]">Direct</h4>
                        <ul className="space-y-4">
                            <li className="flex flex-col gap-1">
                                <span className="text-[10px] font-bold text-v3-text-secondary/50 uppercase tracking-widest">Email</span>
                                <a href={`mailto:${CONTACT_INFO.email}`} className="text-v3-text font-black hover:text-v3-primary transition-colors">{CONTACT_INFO.email}</a>
                            </li>
                            <li className="flex flex-col gap-1">
                                <span className="text-[10px] font-bold text-v3-text-secondary/50 uppercase tracking-widest">Support</span>
                                <a href={`tel:${CONTACT_INFO.phone.replace(/ /g, '')}`} className="text-v3-text font-black hover:text-v3-primary transition-colors">{CONTACT_INFO.phone}</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Status Bar */}
                <div className="pt-12 border-t border-v3-border/30 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-6">
                        <p className="text-sm text-v3-text-secondary font-bold opacity-40">
                            &copy; {new Date().getFullYear()} FlowTIQ_OS_V3
                        </p>
                        <div className="h-4 w-[1px] bg-v3-border/50 hidden md:block"></div>
                        <div className="flex items-center gap-2 px-4 py-1.5 bg-v3-accent/10 text-v3-accent rounded-full text-xs font-black tracking-tight border border-v3-accent/20 transition-all hover:bg-v3-accent hover:text-white cursor-default">
                            <MdFiberManualRecord size={8} className="animate-pulse" />
                            Systems_Operational
                        </div>
                    </div>
                    <div className="text-[10px] font-mono font-bold text-v3-text-secondary/40 tracking-[0.3em] uppercase">
                        Built for the Autonomous Era
                    </div>
                </div>
            </div>
        </footer>
    );
}
