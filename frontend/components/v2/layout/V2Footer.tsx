'use client';

import React from 'react';
import Image from 'next/image';
import { MdEmail, MdPhone, MdFiberManualRecord, MdTerminal, MdStorage, MdShield, MdAutoGraph } from '@/components/icons';
import { CONTACT_INFO } from '@/lib/constants';
import { VersionLink } from '@/components/VersionLink';

export function V2Footer() {
    return (
        <footer className="bg-v2-bg border-t border-v2-border/30 pt-24 pb-12 overflow-hidden relative">
            {/* Background Accent */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-v2-accent/5 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Tech Stats Header (Visual Accent) */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20 border-y border-v2-border/30 py-8 bg-v2-surface/50 backdrop-blur-sm">
                    {[
                        { icon: <MdTerminal size={16} />, label: 'UPTIME', value: '99.99%', color: 'text-v2-accent' },
                        { icon: <MdStorage size={16} />, label: 'DATA_LOC', value: 'EU_WEST_1', color: 'text-v2-text-secondary' },
                        { icon: <MdShield size={16} />, label: 'PRIVACY', value: 'ISO_27001', color: 'text-v2-accent-alt' },
                        { icon: <MdAutoGraph size={16} />, label: 'THROUGHPUT', value: '8.4Gbps', color: 'text-v2-text-secondary' }
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center justify-center border-r border-v2-border/30 last:border-r-0 px-4">
                            <div className={`flex items-center gap-2 text-[10px] font-mono tracking-widest ${stat.color} mb-1 opacity-60 uppercase`}>
                                {stat.icon} {stat.label}
                            </div>
                            <div className="text-xl font-black text-v2-primary font-mono tracking-tighter">{stat.value}</div>
                        </div>
                    ))}
                </div>

                {/* Footer Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
                    {/* Brand */}
                    <div className="col-span-2 lg:col-span-2 space-y-6">
                        <VersionLink href="/" className="block relative group w-fit">
                            <Image
                                src="/img/logo_full.png"
                                alt="FlowTIQ Logo"
                                width={160}
                                height={42}
                                className="h-10 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-all"
                            />
                            <div className="absolute -top-4 -right-8 text-[8px] font-mono bg-v2-accent text-v2-bg px-1.5 py-0.5 rounded-sm uppercase tracking-tighter">System_V2</div>
                        </VersionLink>
                        <p className="text-v2-text-secondary font-medium leading-relaxed max-w-sm">
                            De operating layer voor de AI-driven organisatie. Wij engineeren autonome pipelines die administratie en communicatie verwerken met absolute precisie.
                        </p>
                        <div className="flex gap-4 items-center pt-4 opacity-50">
                            <div className="w-8 h-8 rounded-sm bg-v2-primary/10 border border-v2-border/50 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-crosshair">ISO</div>
                            <div className="w-8 h-8 rounded-sm bg-v2-primary/10 border border-v2-border/50 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-crosshair">GDPR</div>
                            <div className="w-8 h-8 rounded-sm bg-v2-primary/10 border border-v2-border/50 flex items-center justify-center grayscale hover:grayscale-0 transition-all cursor-crosshair">EU</div>
                        </div>
                    </div>

                    {/* Oplossingen */}
                    <div>
                        <h4 className="text-[10px] font-mono text-v2-accent font-black uppercase tracking-[.3em] mb-6">Nodes</h4>
                        <ul className="space-y-4 text-sm font-bold text-v2-text-secondary">
                            <li><VersionLink href="/producten" className="hover:text-v2-primary transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-v2-accent transition-all group-hover:w-3"></span> VoiceIQ</VersionLink></li>
                            <li><VersionLink href="/producten" className="hover:text-v2-primary transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-v2-accent transition-all group-hover:w-3"></span> AssistIQ</VersionLink></li>
                            <li><VersionLink href="/producten" className="hover:text-v2-primary transition-colors flex items-center gap-2 group"><span className="w-1 h-1 bg-v2-accent transition-all group-hover:w-3"></span> Architecture</VersionLink></li>
                        </ul>
                    </div>

                    {/* Sectoren */}
                    <div>
                        <h4 className="text-[10px] font-mono text-v2-accent font-black uppercase tracking-[.3em] mb-6">Sectoren</h4>
                        <ul className="space-y-4 text-sm font-bold text-v2-text-secondary">
                            <li><VersionLink href="/producten" className="hover:text-v2-primary transition-colors">Care & Cure</VersionLink></li>
                            <li><VersionLink href="/producten" className="hover:text-v2-primary transition-colors">Financieel</VersionLink></li>
                            <li><VersionLink href="/producten" className="hover:text-v2-primary transition-colors">Juridisch</VersionLink></li>
                            <li><VersionLink href="/producten" className="hover:text-v2-primary transition-colors">Logistiek</VersionLink></li>
                        </ul>
                    </div>

                    {/* Navigatie */}
                    <div>
                        <h4 className="text-[10px] font-mono text-v2-accent font-black uppercase tracking-[.3em] mb-6">Directory</h4>
                        <ul className="space-y-4 text-sm font-bold text-v2-text-secondary">
                            <li><VersionLink href="/" className="hover:text-v2-primary transition-colors">/root</VersionLink></li>
                            <li><VersionLink href="/over-ons" className="hover:text-v2-primary transition-colors">/architecture</VersionLink></li>
                            <li><VersionLink href="/veiligheid" className="hover:text-v2-primary transition-colors">/protocol</VersionLink></li>
                            <li><VersionLink href="/contact" className="hover:text-v2-primary transition-colors">/interface</VersionLink></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-[10px] font-mono text-v2-accent font-black uppercase tracking-[.3em] mb-6">Connection</h4>
                        <ul className="space-y-4 text-sm font-bold text-v2-text-secondary">
                            <li className="flex items-center gap-3 group">
                                <div className="p-2 rounded-sm bg-v2-surface border border-v2-border/50 group-hover:bg-v2-accent group-hover:text-v2-bg transition-all">
                                    <MdEmail size={16} />
                                </div>
                                <span className="text-xs break-all">{CONTACT_INFO.email}</span>
                            </li>
                            <li className="flex items-center gap-3 group">
                                <div className="p-2 rounded-sm bg-v2-surface border border-v2-border/50 group-hover:bg-v2-accent group-hover:text-v2-bg transition-all">
                                    <MdPhone size={16} />
                                </div>
                                <span className="text-xs">{CONTACT_INFO.phone}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-v2-border/30 pt-10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-mono text-v2-text-secondary/60">
                    <div className="flex items-center gap-4">
                        <span className="text-v2-primary font-black opacity-100">&copy; {new Date().getFullYear()} FLOWTIQ_OS_V2</span>
                        <div className="h-3 w-[1px] bg-v2-border/50"></div>
                        <span className="uppercase tracking-widest leading-none">All_Rights_Reserved // Local_Time: {new Date().toLocaleTimeString()}</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-v2-accent/80 font-black uppercase tracking-widest">
                            <MdFiberManualRecord size={8} className="animate-pulse" />
                            System_Stable // Nodes_Online
                        </div>
                        <div className="flex items-center gap-4 border-l border-v2-border/30 pl-6">
                            <VersionLink href="#" className="hover:text-v2-primary transition-colors uppercase tracking-widest">Privacy</VersionLink>
                            <VersionLink href="#" className="hover:text-v2-primary transition-colors uppercase tracking-widest">T&C</VersionLink>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
