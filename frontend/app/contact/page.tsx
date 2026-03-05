'use client';

import React from 'react';
import { useVersion } from '@/lib/VersionContext';
import { V1ContactPage } from '@/components/v1/pages/V1ContactPage';
import { V2ContactPage } from '@/components/v2/pages/V2ContactPage';
import { V3ContactPage } from '@/components/v3/pages/V3ContactPage';
import { ContactForm } from '@/components/ui/ContactForm';
import { MdLocationOn, MdPhone, MdBusiness, MdCoffee } from '@/components/icons';
import { CONTACT_INFO } from '@/lib/constants';

export default function ContactPageSwitcher() {
    const { version } = useVersion();

    if (version === 3) {
        return <V3ContactPage />;
    }

    if (version === 2) {
        return <V2ContactPage />;
    }

    if (version === 1) {
        return <V1ContactPage />;
    }

    return <V0ContactPage />;
}

function V0ContactPage() {
    return (
        <main className="flex-grow pt-32 pb-24">
            {/* Hero Header */}
            <section className="lg:px-8 mb-20 px-6 text-center relative">
                <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-indigo font-montserrat mb-6">
                    Contact <span className="text-mint">FlowTIQ</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-500 font-sans leading-relaxed max-w-4xl mx-auto">
                    Vragen over onze AI-assistenten of een kop koffie drinken? Wij horen graag van u.
                </p>
            </section>

            {/* Contact Section */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-start">

                    {/* Contact Details */}
                    <div className="bg-white rounded-[2rem] p-12 border border-slate-200 shadow-sm transition-all hover:shadow-md">
                        <h2 className="text-2xl font-semibold text-indigo font-montserrat mb-8">Contactgegevens</h2>

                        <div className="space-y-8">
                            {/* Postadres */}
                            <div className="flex gap-5">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-50 text-indigo ring-1 ring-blue-100/50">
                                        <MdLocationOn size={20} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-slate-900 font-sans mb-1">Postadres</h3>
                                    <p className="text-slate-500 leading-relaxed font-sans text-sm lg:text-base">
                                        Gelderse Rooslaan 210<br />
                                        6841 BE Arnhem
                                    </p>
                                    <p className="text-xs text-slate-400 mt-2 italic">Wij werken hybride</p>
                                </div>
                            </div>

                            {/* Telefoon */}
                            <div className="flex gap-5">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-50 text-mint ring-1 ring-teal-100/50">
                                        <MdPhone size={20} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-slate-900 font-sans mb-1">Telefoonnummer</h3>
                                    <p className="text-slate-500 leading-relaxed font-sans text-sm lg:text-base">
                                        <a href={`tel:${CONTACT_INFO.phone.replace(/ /g, '')}`} className="hover:text-mint transition-colors">
                                            {CONTACT_INFO.phone}
                                        </a>
                                    </p>
                                </div>
                            </div>

                            {/* Zakelijk */}
                            <div className="flex gap-5">
                                <div className="flex-shrink-0 mt-1">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-50 text-slate-600 ring-1 ring-slate-100/50">
                                        <MdBusiness size={20} />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                                    <div>
                                        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-sans mb-1">KVK</h3>
                                        <p className="text-slate-600 text-sm font-sans">{CONTACT_INFO.kvk}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-sans mb-1">BTW Nummer</h3>
                                        <p className="text-slate-600 text-sm font-sans">—</p>
                                    </div>
                                    <div className="col-span-2 mt-2">
                                        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-sans mb-1">Bankrekening</h3>
                                        <p className="text-slate-600 text-sm font-sans font-mono">{CONTACT_INFO.bank}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action Card */}
                    <div className="bg-indigo-950 rounded-[2rem] p-12 text-white flex flex-col h-full justify-between relative overflow-hidden shadow-xl shadow-indigo-900/10">
                        <div className="absolute top-0 right-0 -z-0 w-64 h-64 bg-mint/10 blur-[80px] rounded-full -mr-20 -mt-20"></div>

                        <div className="relative z-10">
                            <div className="h-12 w-12 rounded-xl bg-mint flex items-center justify-center text-indigo mb-8">
                                <MdCoffee size={24} />
                            </div>
                            <h2 className="text-3xl font-semibold font-montserrat mb-6">Kop koffie?</h2>
                            <p className="text-indigo-200 text-lg leading-relaxed mb-8 font-sans">
                                Laat hieronder uw gegevens achter, dan nemen wij zo snel mogelijk contact met u op voor een vrijblijvend gesprek.
                            </p>

                            <ContactForm />
                        </div>


                    </div>
                </div>
            </section>
        </main>
    );
}
