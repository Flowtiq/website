'use client';

import React from 'react';
import Image from 'next/image';
import {
    MdRocketLaunch,
    MdAutoGraph,
    MdSecurity,
    MdKeyboardArrowRight,
    MdMic,
    MdChat,
    MdCheckCircle,
    MdPeople,
    MdTrendingUp,
    MdCloudDone
} from '@/components/icons';
import { VersionLink } from '@/components/VersionLink';

export function V1HomePage() {
    return (
        <div className="bg-v1-bg text-v1-text font-sans">
            {/* Hero Section - Boutique Elegant Style */}
            <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-v1-primary text-white">
                <div className="absolute inset-0 opacity-10 bg-[url('/img/grid.svg')] bg-center bg-fixed"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-v1-accent/5 to-transparent"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-10 animate-fade-in-up">
                            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/5 border border-white/10 text-v1-accent text-sm font-bold tracking-widest uppercase">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-v1-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-v1-accent"></span>
                                </span>
                                Future-proof met AI
                            </div>
                            <h1 className="text-6xl lg:text-8xl font-bold leading-[0.9] tracking-tighter">
                                Verlos medewerkers <br />
                                <span className="text-v1-accent italic font-serif">van administratieve lasten.</span>
                            </h1>
                            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl font-medium">
                                Wij maken AI veilig en betrouwbaar voor jouw organisatie. Zonder complexe implementaties, maar met directe impact op de werkvloer.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 pt-6">
                                <VersionLink
                                    href="/contact"
                                    className="px-10 py-5 bg-v1-accent text-v1-primary font-black rounded-full hover:scale-105 transition-all text-center uppercase tracking-widest text-sm shadow-2xl shadow-v1-accent/20"
                                >
                                    Plan een demo
                                </VersionLink>
                                <VersionLink
                                    href="/producten"
                                    className="px-10 py-5 bg-white/5 text-white font-bold rounded-full border border-white/20 hover:bg-white/10 transition-all text-center uppercase tracking-widest text-sm backdrop-blur-sm"
                                >
                                    Bekijk oplossingen
                                </VersionLink>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Side Element (DonnaJames Style) */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 hidden lg:block border-l border-white/10 bg-white/5 backdrop-blur-3xl rounded-l-[100px] p-1">
                    <div className="h-full w-full rounded-l-[99px] overflow-hidden relative">
                        <Image
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2070"
                            alt="FlowTIQ AI"
                            fill
                            className="object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-v1-primary via-transparent to-transparent"></div>
                    </div>
                </div>
            </section>

            {/* Strategy / Overview Section (DonnaJames Offset Layout) */}
            <section className="py-32 relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-5">
                            <h2 className="text-4xl lg:text-6xl font-bold text-v1-primary leading-tight mb-8">
                                AI die met je <br /> <span className="text-v1-accent underline decoration-4 underline-offset-8">meegroeit.</span>
                            </h2>
                            <p className="text-xl text-v1-text-secondary leading-relaxed font-medium">
                                Wij bieden oplossingen voor elke fase van jouw AI-reis. Van kleinschalig experiment tot volledige integratie.
                            </p>
                        </div>
                        <div className="lg:col-span-7 grid md:grid-cols-2 gap-8 lg:translate-y-24">
                            <div className="group p-12 rounded-[60px] bg-white border border-slate-100 shadow-2xl hover:shadow-v1-accent/10 transition-all">
                                <div className="text-v1-primary mb-8"><MdPeople size={48} /></div>
                                <h3 className="text-2xl font-bold mb-4 text-v1-primary">Kantoren en grotere teams</h3>
                                <p className="text-v1-text-secondary leading-relaxed mb-8 font-medium">
                                    Voor organisaties die AI willen integreren in hun volledige workflow met maatwerk beheeropties.
                                </p>
                                <VersionLink href="/producten" className="text-v1-secondary font-black uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-4 transition-all">
                                    Ontdek meer <MdKeyboardArrowRight size={20} />
                                </VersionLink>
                            </div>
                            <div className="group p-12 rounded-[60px] bg-v1-primary text-white shadow-2xl hover:shadow-v1-accent/10 transition-all mt-8 md:mt-16">
                                <div className="text-v1-accent mb-8"><MdTrendingUp size={48} /></div>
                                <h3 className="text-2xl font-bold mb-4">Individuen en kleine teams</h3>
                                <p className="text-slate-300 leading-relaxed mb-8 font-medium">
                                    Start slim en eenvoudig met AI. Directe productiviteitsverhoging voor professionals.
                                </p>
                                <VersionLink href="/contact" className="text-v1-accent font-black uppercase tracking-widest text-xs flex items-center gap-2 group-hover:gap-4 transition-all">
                                    Direct starten <MdKeyboardArrowRight size={20} />
                                </VersionLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services / Use Cases (Boutique Presentation) */}
            <section className="py-48 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
                        <div className="max-w-2xl">
                            <span className="text-xs font-black uppercase tracking-[0.4em] text-v1-accent mb-4 block">Onze Expertise</span>
                            <h2 className="text-4xl lg:text-7xl font-bold text-v1-primary leading-[1.1]">
                                Praktische AI met <br />directe impact.
                            </h2>
                        </div>
                        <p className="text-xl text-v1-text-secondary max-w-sm font-medium">
                            Geen vage beloftes, maar concrete tijdsbesparing in uw dagelijkse proces.
                        </p>
                    </div>

                    <div className="space-y-32">
                        {/* VoiceIQ Showcase */}
                        <div className="grid lg:grid-cols-2 gap-24 items-center">
                            <div className="relative aspect-[4/3] rounded-[80px] overflow-hidden group shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1000"
                                    alt="VoiceIQ"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-v1-primary/80 to-transparent"></div>
                                <div className="absolute bottom-12 left-12 flex items-center gap-4 text-white">
                                    <div className="w-16 h-16 rounded-3xl bg-v1-accent flex items-center justify-center text-v1-primary">
                                        <MdMic size={32} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black tracking-widest uppercase mb-1">Impact</p>
                                        <p className="text-2xl font-bold">10+ uur tijdsbesparing</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-8">
                                <h3 className="text-4xl font-bold text-v1-primary">VoiceIQ</h3>
                                <p className="text-xl text-v1-text-secondary leading-relaxed font-medium">
                                    Converteer gesprekken direct naar gestructureerde verslagen en actiepunten. Volledige focus op de cliënt, terwijl AI de administratie regelt.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-4 text-v1-primary font-bold">
                                        <div className="h-2 w-8 bg-v1-accent"></div> Real-time verslaglegging
                                    </li>
                                    <li className="flex items-center gap-4 text-v1-primary font-bold">
                                        <div className="h-2 w-8 bg-v1-accent"></div> Slimme samenvattingen
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* AssistIQ Showcase */}
                        <div className="grid lg:grid-cols-2 gap-24 items-center">
                            <div className="order-2 lg:order-1 space-y-8">
                                <h3 className="text-4xl font-bold text-v1-primary">AssistIQ</h3>
                                <p className="text-xl text-v1-text-secondary leading-relaxed font-medium">
                                    Een intelligente chat-assistent die getraind is op jouw specifieke bedrijfsdata. Haal direct antwoorden uit complexe documentatie en processen.
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-4 text-v1-primary font-bold">
                                        <div className="h-2 w-8 bg-v1-secondary"></div> Contextueel bewust
                                    </li>
                                    <li className="flex items-center gap-4 text-v1-primary font-bold">
                                        <div className="h-2 w-8 bg-v1-secondary"></div> Veilig binnen de eigen kaders
                                    </li>
                                </ul>
                            </div>
                            <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-[80px] overflow-hidden group shadow-2xl">
                                <Image
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=1000"
                                    alt="AssistIQ"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-[2s]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-v1-primary/80 to-transparent"></div>
                                <div className="absolute bottom-12 left-12 flex items-center gap-4 text-white">
                                    <div className="w-16 h-16 rounded-3xl bg-v1-secondary flex items-center justify-center text-white">
                                        <MdChat size={32} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black tracking-widest uppercase mb-1">Betrouwbaarheid</p>
                                        <p className="text-2xl font-bold">99.9% Nauwkeurigheid</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Security Section (Clean/Thin Authority) */}
            <section className="py-32 bg-v1-bg">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="bg-v1-primary rounded-[100px] p-16 md:p-32 text-white relative overflow-hidden text-center shadow-2xl">
                        <div className="absolute inset-0 opacity-10 bg-[url('/img/grid.svg')]"></div>
                        <div className="relative z-10 max-w-4xl mx-auto">
                            <div className="w-24 h-24 rounded-full bg-v1-accent text-v1-primary flex items-center justify-center mx-auto mb-10">
                                <MdSecurity size={48} />
                            </div>
                            <h2 className="text-4xl lg:text-7xl font-bold mb-10 leading-tight">
                                Veiligheid en Privacy <span className="text-v1-accent font-serif italic">is ons fundament.</span>
                            </h2>
                            <p className="text-xl text-slate-300 mb-20 font-medium">
                                Wij begrijpen dat data-integriteit cruciaal is voor jouw kantoor. Daarom bouwen wij onze software met de hoogste standaarden voor beveiliging en privacy.
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pt-12 border-t border-white/10">
                                <div className="space-y-2">
                                    <p className="text-v1-accent font-black tracking-widest text-xs uppercase">Compliance</p>
                                    <p className="text-xl font-bold">GDPR Ready</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-v1-accent font-black tracking-widest text-xs uppercase">Hosting</p>
                                    <p className="text-xl font-bold">NL Datacenters</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-v1-accent font-black tracking-widest text-xs uppercase">Security</p>
                                    <p className="text-xl font-bold">Encrypted</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-v1-accent font-black tracking-widest text-xs uppercase">Privacy</p>
                                    <p className="text-xl font-bold">ISO 27001</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Detailed Timeline (Visualized) */}
            <section className="py-32">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-24 items-start">
                        <div className="lg:col-span-5 sticky top-32">
                            <span className="text-xs font-black uppercase tracking-[0.4em] text-v1-accent mb-4 block">De Routekaart</span>
                            <h2 className="text-4xl lg:text-6xl font-bold text-v1-primary leading-tight">
                                Van start naar <br /> <span className="text-v1-accent italic font-serif">blijvend resultaat.</span>
                            </h2>
                        </div>
                        <div className="lg:col-span-7 space-y-12">
                            {[
                                { step: "01", title: "Kennismaking", desc: "Vrijblijvend adviesgesprek over de kansen binnen jouw kantoor." },
                                { step: "02", title: "Configuratie", desc: "Wij richten het platform in volgens jouw specifieke behoeften." },
                                { step: "03", title: "Training", desc: "Gerichte workshops om medewerkers vertrouwd te maken met AI." },
                                { step: "04", title: "Livegang", desc: "Directe start met de AI-assistenten op de werkvloer." },
                                { step: "05", title: "Optimalisatie", desc: "Continue monitoring en verfijning voor maximaal resultaat." }
                            ].map((item, idx) => (
                                <div key={idx} className="group relative pl-24 pb-12 last:pb-0 border-l border-slate-100 last:border-0">
                                    <div className="absolute left-0 top-0 w-16 h-16 rounded-3xl bg-white border border-slate-100 shadow-xl flex items-center justify-center text-v1-primary text-xl font-black group-hover:bg-v1-accent group-hover:text-v1-primary transition-all -translate-x-1/2">
                                        {item.step}
                                    </div>
                                    <h4 className="text-2xl font-bold text-v1-primary mb-4">{item.title}</h4>
                                    <p className="text-lg text-v1-text-secondary leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA (Elegant Overlap) */}
            <section className="py-32 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="bg-v1-accent rounded-[100px] p-20 lg:p-32 text-v1-primary flex flex-col items-center text-center relative shadow-3xl">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                        <div className="relative z-10 max-w-3xl">
                            <h2 className="text-5xl lg:text-8xl font-black leading-tight mb-12 tracking-tighter">
                                Klaar voor de <br /> <span className="opacity-60 italic font-serif">volgende stap?</span>
                            </h2>
                            <VersionLink
                                href="/contact"
                                className="inline-flex items-center gap-4 px-12 py-6 bg-v1-primary text-white font-black rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all text-sm tracking-[0.2em] uppercase"
                            >
                                Plan een adviesgesprek <MdRocketLaunch size={20} />
                            </VersionLink>
                            <p className="mt-12 text-sm font-black uppercase tracking-widest opacity-60">Focus op resultaat, altijd.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
