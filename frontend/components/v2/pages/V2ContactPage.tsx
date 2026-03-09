'use client';

import React from 'react';
import { ContactForm } from '@/components/ui/ContactForm';
import {
    MdLocationOn,
    MdPhone,
    MdBusiness,
    MdEmail,
    MdTerminal,
    MdFiberManualRecord,
    MdHandshake,
    MdArrowForward
} from '@/components/icons';
import { CONTACT_INFO } from '@/lib/constants';

export function V2ContactPage() {
    return (
        <main className="flex-grow pt-40 pb-24 bg-v2-bg overflow-hidden relative">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-b from-v2-primary/5 to-transparent pointer-events-none"></div>

            <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24 relative">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-[10px] font-mono text-v2-accent font-black uppercase tracking-widest bg-v2-accent/10 px-2 py-0.5 border border-v2-accent/30 rounded-[var(--radius-v2)]">
                                Communication_Module
                            </span>
                            <div className="h-[1px] w-12 bg-v2-border/30"></div>
                            <span className="text-[10px] font-mono text-v2-text-secondary uppercase tracking-[0.2em]">
                                Status: Listening_For_Input
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-v2-primary font-mono tracking-tighter mb-8 uppercase leading-none">
                            System <br />
                            <span className="text-v2-accent">Interface</span>
                        </h1>
                        <p className="text-xl text-v2-text-secondary font-medium leading-relaxed max-w-2xl">
                            Vragen over onze AI-assistenten of een kop koffie drinken? Initieer een verbinding via onderstaand portaal.
                        </p>
                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                    {/* Contact Details Grid */}
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ContactDetailCard
                                icon={<MdLocationOn size={24} />}
                                label="POSTADRES"
                                title="Locatie Sync"
                                value="Gelderse Rooslaan 210, 6841 BE Arnhem"
                                meta="Wij werken hybride"
                            />
                            <ContactDetailCard
                                icon={<MdPhone size={24} />}
                                label="CONNECTION"
                                title="Voice Line"
                                value={CONTACT_INFO.phone}
                                href={`tel:${CONTACT_INFO.phone.replace(/ /g, '')}`}
                            />
                            <ContactDetailCard
                                icon={<MdEmail size={24} />}
                                label="ENCRYPTED"
                                title="Email Gateway"
                                value={CONTACT_INFO.email}
                                href={`mailto:${CONTACT_INFO.email}`}
                                fullWidth
                            />
                        </div>

                        {/* Business Registry */}
                        <div className="bg-v2-surface p-8 border border-v2-border/50 rounded-[var(--radius-v2-lg)]">
                            <div className="flex items-center gap-3 mb-6">
                                <MdBusiness size={20} className="text-v2-text-secondary" />
                                <span className="text-[10px] font-mono font-black text-v2-text-secondary uppercase tracking-widest">Registry_Data</span>
                            </div>
                            <div className="grid grid-cols-3 gap-8">
                                <div>
                                    <div className="text-[10px] font-mono opacity-50 uppercase mb-1">KVK_ID</div>
                                    <div className="text-sm font-black text-v2-primary font-mono">{CONTACT_INFO.kvk}</div>
                                </div>
                                <div>
                                    <div className="text-[10px] font-mono opacity-50 uppercase mb-1">VAT_ID</div>
                                    <div className="text-sm font-black text-v2-primary font-mono">—</div>
                                </div>
                                <div>
                                    <div className="text-[10px] font-mono opacity-50 uppercase mb-1">IBAN</div>
                                    <div className="text-xs font-black text-v2-primary font-mono break-all">{CONTACT_INFO.bank}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Terminal */}
                    <div className="bg-v2-primary rounded-[var(--radius-v2-lg)] shadow-2xl overflow-hidden border border-white/10 flex flex-col group">
                        {/* Terminal Header */}
                        <div className="bg-white/10 px-6 py-3 flex items-center justify-between border-b border-white/5">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-v2-accent"></div>
                            </div>
                            <div className="text-[10px] font-mono text-white/40 tracking-widest uppercase flex items-center gap-2">
                                <MdTerminal size={12} /> Contact_Form.sh
                            </div>
                        </div>

                        <div className="p-8 lg:p-12 flex-grow relative">
                            {/* Decorative Grid */}
                            <div className="absolute inset-0 opacity-5 pointer-events-none">
                                <div className="h-full w-full bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]"></div>
                            </div>

                            <div className="relative z-10 space-y-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-v2-accent">
                                        <MdHandshake size={24} />
                                        <h2 className="text-2xl font-black font-mono tracking-tighter uppercase text-white">Initiate Connection</h2>
                                    </div>
                                    <p className="text-white/60 font-medium text-sm leading-relaxed max-w-md">
                                        Laat uw gegevens achter. Onze systemen zullen binnen 24 uur een verbinding tot stand brengen.
                                    </p>
                                </div>

                                <div className="v2-contact-form">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>

                        {/* Terminal Footer */}
                        <div className="bg-white/5 px-6 py-3 flex items-center justify-between text-[8px] font-mono text-white/30 tracking-[0.2em] uppercase">
                            <span>Input_Field: Ready</span>
                            <div className="flex items-center gap-2">
                                <MdFiberManualRecord size={6} className="text-v2-accent animate-pulse" />
                                <span>SSL_Active</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx global>{`
                .v2-contact-form input, .v2-contact-form textarea {
                    background: rgba(255, 255, 255, 0.05) !important;
                    border: 1px solid rgba(255, 255, 255, 0.1) !important;
                    color: white !important;
                    border-radius: var(--radius-v2) !important;
                    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
                    font-size: 0.875rem !important;
                }
                .v2-contact-form input::placeholder, .v2-contact-form textarea::placeholder {
                    color: rgba(255, 255, 255, 0.3) !important;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    font-size: 10px;
                }
                .v2-contact-form button {
                    background: #00C853 !important;
                    color: #0A2E2F !important;
                    font-weight: 900 !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.2em !important;
                    font-size: 12px !important;
                    border-radius: var(--radius-v2) !important;
                    padding-top: 1rem !important;
                    padding-bottom: 1rem !important;
                    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
                }
                .v2-contact-form label {
                    color: rgba(255, 255, 255, 0.5) !important;
                    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
                    font-size: 10px !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.1em !important;
                    margin-bottom: 0.5rem !important;
                    display: block !important;
                }
            `}</style>
        </main>
    );
}

function ContactDetailCard({ icon, label, title, value, href, meta, fullWidth }: any) {
    const Content = (
        <div className={`bg-v2-surface p-8 border border-v2-border/50 rounded-[var(--radius-v2-lg)] group transition-all hover:border-v2-accent hover:shadow-xl ${fullWidth ? 'md:col-span-2' : ''}`}>
            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-v2-primary/5 rounded-[var(--radius-v2)] text-v2-accent group-hover:bg-v2-accent group-hover:text-v2-bg transition-all">
                    {icon}
                </div>
                <span className="text-[10px] font-mono font-black text-v2-text-secondary uppercase tracking-widest">{label}</span>
            </div>
            <div className="space-y-2">
                <h3 className="text-sm font-black text-v2-primary font-mono tracking-tighter uppercase">{title}</h3>
                <p className={`text-xl font-black text-v2-primary font-mono tracking-tighter ${href ? 'group-hover:text-v2-accent' : ''} transition-colors`}>{value}</p>
                {meta && <p className="text-[10px] font-mono text-v2-text-secondary opacity-60 uppercase">{meta}</p>}
            </div>
            {href && (
                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-[10px] font-mono text-v2-accent font-black">ESTABLISH_LINK</span>
                    <MdArrowForward size={14} className="text-v2-accent" />
                </div>
            )}
        </div>
    );

    if (href) {
        return <a href={href} className="block h-full">{Content}</a>;
    }

    return Content;
}
