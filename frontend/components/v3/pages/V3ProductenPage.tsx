'use client';

import React from 'react';
import {
    MdMic,
    MdAutoFixHigh,
    MdArrowForward,
    MdCheckCircle,
    MdOutlineCloudDownload,
    MdTrendingUp
} from '@/components/icons';
import { VersionLink } from '@/components/VersionLink';

export function V3ProductenPage() {
    return (
        <main className="bg-white text-v3-text font-sans overflow-x-hidden pt-40 pb-24 dreelio-gradient">
            <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-32">
                <div className="text-center space-y-8">
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-v3-bg-alt border border-v3-border shadow-sm text-v3-text font-bold text-xs tracking-widest uppercase">
                        FlowTIQ Producten
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-v3-primary leading-[0.9] mb-12">
                        Minder kliks, <br />
                        <span className="text-v3-accent text-italic-accent">meer aandacht.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-v3-text-secondary max-w-3xl mx-auto font-medium leading-relaxed">
                        Onze assistenten werken samen met elke webapplicatie, van standaardpakket tot maatwerk. Snel aan de slag zonder complexe configuraties.
                    </p>
                </div>
            </section>

            {/* Product Section 1: VoiceIQ */}
            <section className="py-24 bg-v3-bg-alt/30" id="voiceiq">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-24 items-start">
                        <div className="space-y-12">
                            <div className="w-20 h-20 bg-v3-primary/5 rounded-3xl flex items-center justify-center text-v3-primary">
                                <MdMic size={48} />
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-5xl font-black tracking-tight text-v3-primary">VoiceIQ</h2>
                                <p className="text-xl text-v3-text-secondary font-medium leading-relaxed italic">
                                    "Ga weer terug naar de kern van je vak: aandacht voor de mens."
                                </p>
                            </div>
                            <div className="grid gap-10">
                                <div className="space-y-4">
                                    <h4 className="text-xs font-black uppercase tracking-widest text-v3-text-secondary opacity-40">De Situatie</h4>
                                    <ul className="space-y-3 text-sm font-bold text-v3-primary/70">
                                        <li>• Intake, klantgesprek of consult</li>
                                        <li>• Multitasken: meeschrijven tijdens luisteren</li>
                                        <li>• Notities naderhand nog moeten uitwerken</li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-xs font-black uppercase tracking-widest text-v3-accent">De Oplossing</h4>
                                    <ul className="space-y-3 text-sm font-bold text-v3-primary">
                                        <li>• Activeer VoiceIQ aan het begin van het gesprek</li>
                                        <li>• Realtime woord-voor-woord vastlegging</li>
                                        <li>• Directe samenvatting en CRM synchronisatie</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="p-12 bg-white rounded-[4rem] border border-v3-border shadow-2xl relative group h-full">
                            <h4 className="text-xs font-black uppercase tracking-widest text-v3-primary mb-8">Het Resultaat</h4>
                            <p className="text-2xl font-black text-v3-primary leading-tight mb-8">
                                De samenvatting wordt direct opgeslagen in de juiste velden van uw applicatie.
                            </p>
                            <div className="p-8 bg-v3-bg-alt rounded-3xl border border-v3-border">
                                <MdCheckCircle className="text-v3-accent mb-4" size={32} />
                                <p className="text-sm font-bold text-v3-text-secondary">U behoudt 100% focus op de mens, de techniek doet de rest.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Section 2: AssistIQ */}
            <section className="py-24" id="assistiq">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-24 items-start">
                        <div className="order-2 lg:order-1 p-12 bg-v3-primary text-white rounded-[4rem] shadow-2xl relative group h-full">
                            <h4 className="text-xs font-black uppercase tracking-widest text-v3-accent mb-8">Het Resultaat</h4>
                            <p className="text-2xl font-black leading-tight mb-8">
                                Uniform, foutloos en binnen enkele seconden geregeld. Direct opgeslagen in uw applicatie(s).
                            </p>
                            <div className="p-8 bg-white/5 rounded-3xl border border-white/10 italic text-white/60">
                                "Geen herhalend klik- en invoerwerk meer."
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 space-y-12">
                            <div className="w-20 h-20 bg-v3-accent/10 rounded-3xl flex items-center justify-center text-v3-accent">
                                <MdAutoFixHigh size={48} />
                            </div>
                            <div className="space-y-6">
                                <h2 className="text-5xl font-black tracking-tight text-v3-primary">AssistIQ</h2>
                                <p className="text-xl text-v3-text-secondary font-medium leading-relaxed">
                                    De digitale copiloot die repetitieve taken overneemt. Navigeert door elke webapplicatie.
                                </p>
                            </div>
                            <div className="grid gap-10">
                                <div className="space-y-4">
                                    <h4 className="text-xs font-black uppercase tracking-widest text-v3-text-secondary opacity-40">De Situatie</h4>
                                    <ul className="space-y-3 text-sm font-bold text-v3-primary/70">
                                        <li>• Dossiers, orders of tickets wijzigen</li>
                                        <li>• Tijdrovend klik- en invoerwerk in tabbladen</li>
                                        <li>• Hoge proces- en regeldruk</li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-xs font-black uppercase tracking-widest text-v3-accent">De Oplossing</h4>
                                    <ul className="space-y-3 text-sm font-bold text-v3-primary">
                                        <li>• Ondersteuning direct in de browser</li>
                                        <li>• Assistent doet voorstellen en vult velden in</li>
                                        <li>• U behoudt de controle: definitief na akkoord</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Platform Benefits */}
            <section className="py-24 bg-v3-primary text-white">
                <div className="max-w-6xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-3 gap-16">
                        <div className="space-y-6">
                            <MdOutlineCloudDownload size={40} className="text-v3-accent" />
                            <h3 className="text-2xl font-black">Zero IT-Load</h3>
                            <p className="text-white/60 font-medium leading-relaxed">Geen API-koppelingen of backend-integraties nodig. Werkt op de browser-laag.</p>
                        </div>
                        <div className="space-y-6">
                            <MdTrendingUp size={40} className="text-v3-accent" />
                            <h3 className="text-2xl font-black">Velocity</h3>
                            <p className="text-white/60 font-medium leading-relaxed">Implementatie binnen dagen, niet maanden. Directe adoptie door medewerkers.</p>
                        </div>
                        <div className="space-y-6">
                            <MdAutoFixHigh size={40} className="text-v3-accent" />
                            <h3 className="text-2xl font-black">Precision</h3>
                            <p className="text-white/60 font-medium leading-relaxed">Vermindert administratieve fouten met 99% door menselijke overdracht te elimineren.</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

function FeatureItem({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-4 text-lg font-bold text-v3-primary">
            <MdCheckCircle className="text-v3-accent" size={24} />
            {text}
        </li>
    );
}
