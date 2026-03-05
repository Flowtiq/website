'use client';

import React from 'react';
import { MdMic, MdAutoFixHigh, MdCheckCircle, MdArrowForward } from '@/components/icons';

export function V1ProductenPage() {
    return (
        <div className="bg-v1-bg font-sans">
            {/* Page Header - Boutique Editorial Style */}
            <section className="pt-56 pb-32 bg-v1-primary text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-2/3 h-full bg-v1-accent/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <span className="text-xs font-black uppercase tracking-[0.5em] text-v1-accent mb-8 block">Onze Diensten</span>
                        <h1 className="text-6xl md:text-9xl font-bold mb-10 tracking-tighter leading-[0.9]">
                            Kracht door <br /> <span className="text-v1-accent italic font-serif">Simpliciteit.</span>
                        </h1>
                        <p className="text-2xl text-slate-300 max-w-2xl leading-relaxed font-medium">
                            Onze intelligente assistenten werken naadloos samen met elke webapplicatie, van standaardpakket tot maatwerk.
                        </p>
                    </div>
                </div>
            </section>

            {/* VoiceIQ - Boutique Offset Presentation */}
            <section className="py-48 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-24 items-center">
                        <div className="lg:col-span-6 space-y-12">
                            <div className="w-24 h-24 rounded-[40px] bg-v1-primary text-v1-accent flex items-center justify-center shadow-3xl">
                                <MdMic size={48} />
                            </div>
                            <h2 className="text-5xl md:text-7xl font-bold text-v1-primary leading-tight tracking-tighter">
                                VoiceIQ: <br /> <span className="opacity-40 italic font-serif">Aandacht voor de mens.</span>
                            </h2>
                            <p className="text-xl text-v1-text-secondary leading-relaxed font-medium">
                                "Ga weer terug naar de kern van je vak: aandacht voor de mens."
                            </p>
                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <h4 className="text-xs font-black uppercase tracking-widest text-v1-accent">De Situatie</h4>
                                    <ul className="space-y-3 text-sm font-bold text-v1-primary/60">
                                        <li>• Intake of consult</li>
                                        <li>• Multitasken tijdens luisteren</li>
                                        <li>• Notities naderhand uitwerken</li>
                                    </ul>
                                </div>
                                <div className="space-y-6">
                                    <h4 className="text-xs font-black uppercase tracking-widest text-v1-primary">De Oplossing</h4>
                                    <ul className="space-y-3 text-sm font-bold text-v1-primary">
                                        <li>• Activeer VoiceIQ bij aanvang</li>
                                        <li>• Realtime vastlegging</li>
                                        <li>• Directe sync met uw CRM</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-6 relative">
                            <div className="aspect-square bg-white rounded-[100px] shadow-3xl border border-slate-100 p-16 flex flex-col justify-center">
                                <h3 className="text-3xl font-bold text-v1-primary mb-8 tracking-tighter">Het Resultaat</h3>
                                <p className="text-2xl font-bold text-v1-primary leading-tight mb-8">
                                    De samenvatting wordt direct opgeslagen in de juiste velden van uw applicatie.
                                </p>
                                <div className="p-8 bg-v1-bg rounded-3xl border border-slate-100 italic text-v1-primary font-bold">
                                    "U behoudt 100% focus op de mens, de techniek doet de rest."
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AssistIQ - Technical Elegance */}
            <section className="py-48 bg-v1-primary text-white relative">
                <div className="absolute inset-0 opacity-5 bg-[url('/img/grid.svg')]"></div>
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-24 items-center">
                        <div className="lg:col-span-6 order-2 lg:order-1 relative">
                            <div className="aspect-[4/3] bg-white text-v1-primary rounded-[100px] p-20 flex flex-col justify-center gap-12">
                                <h3 className="text-4xl font-bold tracking-tighter">Het Resultaat</h3>
                                <p className="text-2xl font-bold leading-tight">
                                    Uniform, foutloos en binnen enkele seconden geregeld.
                                </p>
                                <div className="p-8 bg-v1-bg rounded-3xl border border-slate-100 italic font-bold">
                                    "Geen herhalend klik- en invoerwerk meer."
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-6 order-1 lg:order-2 space-y-12">
                            <span className="text-xs font-black uppercase tracking-[0.5em] text-v1-accent block">Slimme Verwerking</span>
                            <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter">
                                AssistIQ: <br /> <span className="opacity-40 italic font-serif">Uw browser expert.</span>
                            </h2>
                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="space-y-6">
                                    <h4 className="text-xs font-black uppercase tracking-widest text-v1-accent">De Situatie</h4>
                                    <ul className="space-y-3 text-sm font-bold text-white/50">
                                        <li>• Dossiers/orders wijzigen</li>
                                        <li>• Tijdrovend klik- en invoerwerk</li>
                                        <li>• Hoge regeldruk</li>
                                    </ul>
                                </div>
                                <div className="space-y-6">
                                    <h4 className="text-xs font-black uppercase tracking-widest text-white">De Oplossing</h4>
                                    <ul className="space-y-3 text-sm font-bold text-white">
                                        <li>• Browser-ondersteuning</li>
                                        <li>• Assistent vult velden in</li>
                                        <li>• Controle na akkoord</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
