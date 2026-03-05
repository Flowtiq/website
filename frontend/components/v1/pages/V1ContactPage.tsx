'use client';

import React from 'react';
import { MdPhone, MdEmail, MdLocationOn, MdCoffee, MdArrowForward } from '@/components/icons';
import { CONTACT_INFO } from '@/lib/constants';
import { ContactForm } from '@/components/ui/ContactForm';

export function V1ContactPage() {
    return (
        <div className="bg-v1-bg font-sans">
            {/* Simple Clean Header - Hero Column Style */}
            <section className="pt-56 pb-32 bg-v1-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/img/grid.svg')]"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <span className="text-xs font-black uppercase tracking-[0.6em] text-v1-accent mb-8 block">Heeft u een vraag?</span>
                    <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.9]">
                        Zeg <span className="text-v1-accent italic font-serif">Hallo.</span>
                    </h1>
                </div>
            </section>

            {/* Main Contact Presentation - Offset Grid */}
            <section className="py-48 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-24">
                        {/* Contact Info Column */}
                        <div className="lg:col-span-5 space-y-24">
                            <div>
                                <h3 className="text-xs font-black uppercase tracking-[0.4em] text-v1-accent mb-12">Direct</h3>
                                <div className="space-y-12">
                                    <div className="group">
                                        <p className="text-xs font-bold text-slate-400 mb-4">Telefoon</p>
                                        <a href={`tel:${CONTACT_INFO.phone}`} className="text-3xl font-bold text-v1-primary hover:text-v1-accent transition-all flex items-center gap-4 group-hover:pl-4">
                                            {CONTACT_INFO.phone} <MdArrowForward className="text-v1-accent opacity-0 group-hover:opacity-100 transition-all" />
                                        </a>
                                    </div>
                                    <div className="group">
                                        <p className="text-xs font-bold text-slate-400 mb-4">E-mail</p>
                                        <a href={`mailto:${CONTACT_INFO.email}`} className="text-3xl font-bold text-v1-primary hover:text-v1-accent transition-all flex items-center gap-4 group-hover:pl-4">
                                            {CONTACT_INFO.email} <MdArrowForward className="text-v1-accent opacity-0 group-hover:opacity-100 transition-all" />
                                        </a>
                                    </div>
                                    <div className="group">
                                        <p className="text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest">Zakelijke Gegevens</p>
                                        <div className="space-y-4 text-v1-primary font-bold">
                                            <p className="text-sm uppercase tracking-widest opacity-40">KVK: {CONTACT_INFO.kvk}</p>
                                            <p className="text-sm uppercase tracking-widest opacity-40">IBAN: {CONTACT_INFO.bank}</p>
                                            <p className="text-sm uppercase tracking-widest opacity-40 italic font-serif underline underline-offset-4 flex items-center gap-2">
                                                Gelderse Rooslaan 210, Arnhem <MdLocationOn size={14} />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-16 bg-v1-bg rounded-[80px] border border-slate-100 relative group overflow-hidden shadow-2xl">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16 blur-2xl"></div>
                                <MdCoffee size={64} className="text-v1-accent mb-8 group-hover:rotate-12 transition-transform duration-500" />
                                <h4 className="text-3xl font-bold text-v1-primary mb-6 leading-tight">Een kop koffie?</h4>
                                <p className="text-xl text-v1-text-secondary leading-relaxed font-medium">
                                    Wij komen graag bij u langs om de mogelijkheden van AI te bespreken. Altijd vrijblijvend, altijd concreet.
                                </p>
                            </div>
                        </div>

                        {/* Form Column - Professional Elevation */}
                        <div className="lg:col-span-7">
                            <div className="bg-white p-12 lg:p-24 rounded-[100px] shadow-3xl border border-slate-50 relative -mt-32 lg:-mt-64 z-20">
                                <h2 className="text-4xl lg:text-7xl font-bold text-v1-primary mb-8 tracking-tighter">Bericht versturen.</h2>
                                <p className="text-xl text-slate-500 font-medium italic mb-16">Uw digitale proces begint hier.</p>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
