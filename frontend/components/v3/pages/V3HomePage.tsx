'use client';

import React from 'react';
import Image from 'next/image';
import {
    MdArrowForward,
    MdAutoFixHigh,
    MdOutlineCloudDownload,
    MdCheckCircle,
    MdTrendingUp,
    MdSecurity,
    MdGroups,
    MdMic,
    MdPlayCircle
} from '@/components/icons';
import { VersionLink } from '@/components/VersionLink';

export function V3HomePage() {
    return (
        <main className="bg-white text-v3-text font-sans overflow-x-hidden">
            {/* 1. Hero Section - Extreme White Space & Clarity */}
            <section className="relative pt-40 pb-32 md:pt-56 md:pb-48 px-6 lg:px-8 dreelio-gradient">
                {/* Background Accent */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 opacity-40">
                    <div className="absolute top-20 left-10 w-96 h-96 bg-v3-accent/10 blur-[120px] rounded-full animate-float"></div>
                    <div className="absolute top-40 right-10 w-80 h-80 bg-v3-primary/5 blur-[100px] rounded-full animate-float delay-1000"></div>
                </div>

                <div className="max-w-6xl mx-auto text-center space-y-12">
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-v3-bg-alt border border-v3-border shadow-sm text-v3-text font-bold text-xs tracking-widest uppercase animate-fade-in-up">
                        <span className="flex h-2 w-2 rounded-full bg-v3-accent animate-pulse"></span>
                        FlowTIQ OS 3.0 // Autonomous Era
                    </div>

                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-v3-primary leading-[0.9] max-w-5xl mx-auto">
                        Automate the <br />
                        <span className="text-v3-accent text-italic-accent">Un-transcribable.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-v3-text-secondary max-w-3xl mx-auto font-medium leading-relaxed">
                        De favoriete operating layer voor professionals die administratie willen verruilen voor hun échte vak. Gebouwd voor grip, snelheid en absolute precisie.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
                        <VersionLink
                            href="/contact"
                            className="w-full sm:w-auto px-12 py-5 bg-v3-primary text-white font-black text-lg rounded-full shadow-[0_20px_60px_rgba(10,46,47,0.2)] hover:scale-105 transition-all active:scale-95 flex items-center gap-3 group"
                        >
                            Get Started Free <MdArrowForward size={22} className="group-hover:translate-x-1 transition-transform" />
                        </VersionLink>
                        <VersionLink
                            href="/producten"
                            className="w-full sm:w-auto px-12 py-5 bg-white text-v3-text font-black text-lg rounded-full border-2 border-v3-border hover:bg-v3-bg-alt transition-all flex items-center justify-center gap-3"
                        >
                            <MdPlayCircle size={24} className="text-v3-primary" /> How it works
                        </VersionLink>
                    </div>

                    {/* Dashboard Preview Social Proof */}
                    <div className="pt-24 opacity-40">
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-v3-text-secondary mb-10">Trusted by Global Operations</p>
                        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 grayscale">
                            {['LOGO_A', 'LOGO_B', 'LOGO_C', 'LOGO_D', 'LOGO_E'].map((logo, i) => (
                                <span key={i} className="text-xl font-black font-mono tracking-tighter opacity-50">{logo}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Bento Feature Grid - Minimalism & Elevation */}
            <section className="py-32 px-6 lg:px-8 bg-v3-bg-alt/30">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* VoiceIQ Card */}
                        <div className="lg:col-span-2 bg-white p-12 rounded-[3.5rem] border border-v3-border shadow-2xl shadow-v3-primary/5 group hover:border-v3-primary/20 transition-all">
                            <div className="flex flex-col md:flex-row gap-12 items-center">
                                <div className="flex-1 space-y-8">
                                    <div className="w-16 h-16 bg-v3-primary/5 rounded-3xl flex items-center justify-center text-v3-primary">
                                        <MdMic size={40} />
                                    </div>
                                    <div className="space-y-4">
                                        <h3 className="text-4xl font-black tracking-tight text-v3-primary">VoiceIQ</h3>
                                        <p className="text-lg text-v3-text-secondary font-medium leading-relaxed">
                                            Nooit meer handmatig verslagen typen. VoiceIQ luistert mee en zet gesproken woorden realtime om in gestructureerde data.
                                        </p>
                                    </div>
                                    <button className="flex items-center gap-2 font-black text-v3-primary group">
                                        Explore Voice <MdArrowForward size={20} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                                <div className="w-full md:w-1/2 aspect-video bg-v3-bg-alt rounded-3xl border border-v3-border flex items-center justify-center overflow-hidden">
                                    <div className="w-full p-8 space-y-4">
                                        <div className="h-2 w-3/4 bg-v3-primary/10 rounded-full animate-pulse"></div>
                                        <div className="h-2 w-full bg-v3-primary/10 rounded-full animate-pulse delay-75"></div>
                                        <div className="h-2 w-1/2 bg-v3-primary/10 rounded-full animate-pulse delay-150"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* AssistIQ Card */}
                        <div className="bg-white p-12 rounded-[3.5rem] border border-v3-border shadow-2xl shadow-v3-primary/5 group hover:border-v3-primary/20 transition-all flex flex-col justify-between">
                            <div className="w-16 h-16 bg-v3-accent/10 rounded-3xl flex items-center justify-center text-v3-accent mb-12">
                                <MdAutoFixHigh size={40} />
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-4xl font-black tracking-tight text-v3-primary">AssistIQ</h3>
                                <p className="text-lg text-v3-text-secondary font-medium leading-relaxed">
                                    Elke actie binnen handbereik. Foutloos verwerken van data in elke applicatie.
                                </p>
                            </div>
                            <div className="mt-12 p-6 bg-v3-bg-alt rounded-2xl border border-v3-border text-center">
                                <span className="text-sm font-black text-v3-text-secondary italic">"Automating data entry..."</span>
                            </div>
                        </div>

                        {/* Three Bottom Cards */}
                        <FeatureCard
                            icon={<MdOutlineCloudDownload size={32} />}
                            title="Cloud Native"
                            desc="Overal inzetbaar in elke webapplicatie."
                        />
                        <FeatureCard
                            icon={<MdTrendingUp size={32} />}
                            title="Directe ROI"
                            desc="Bespaar direct op tijd en kosten."
                        />
                        <FeatureCard
                            icon={<MdSecurity size={32} />}
                            title="Security First"
                            desc="GDPR, ISO 27001 en lokaal gehost."
                        />
                    </div>
                </div>
            </section>

            {/* 3. Quote Section - High Contrast Impact */}
            <section className="py-48 bg-v3-primary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-white blur-[150px] rounded-full"></div>
                </div>

                <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center space-y-16 relative z-10">
                    <MdGroups size={64} className="mx-auto text-v3-accent opacity-50" />
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none italic">
                        "FlowTIQ is verreweg de beste AI-tool die we hebben getest"
                    </h2>
                    <div className="flex items-center justify-center gap-6">
                        <div className="h-16 w-16 rounded-full bg-white/20 border border-white/10"></div>
                        <div className="text-left">
                            <p className="text-2xl font-black text-white leading-none">Jan de Vries</p>
                            <p className="text-white/50 font-bold uppercase tracking-widest text-xs mt-2">Operationeel Manager</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Comparison Section - Minimalist Precision */}
            <section className="py-32 bg-white">
                <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center mb-24 space-y-6">
                    <h2 className="text-5xl md:text-6xl font-black tracking-tighter text-v3-primary">For serious work.</h2>
                    <p className="text-xl text-v3-text-secondary font-medium">Kies de architectuur die bij uw organisatie past.</p>
                </div>

                <div className="max-w-5xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12">
                    <PricingCard
                        title="Basic"
                        desc="Voor kleinschalige teams met focus op VoiceIQ."
                        features={['VoiceIQ Integratie', '24/7 Support', 'Privacy Dashboard']}
                        cta="Get Started"
                    />
                    <PricingCard
                        featured
                        title="Enterprise"
                        desc="Full-suite automatisering incl. AssistIQ op maat."
                        features={['Full Suite Access', 'On-premise opties', 'Dedicated Success Manager']}
                        cta="Schedule Demo"
                    />
                </div>
            </section>
        </main>
    );
}

function FeatureCard({ icon, title, desc }: any) {
    return (
        <div className="bg-white p-12 rounded-[3.5rem] border border-v3-border shadow-2xl shadow-v3-primary/5 hover:border-v3-primary/30 transition-all flex flex-col justify-between group">
            <div className="w-14 h-14 bg-v3-primary/5 rounded-2xl flex items-center justify-center text-v3-primary mb-10 transition-transform group-hover:scale-110">
                {icon}
            </div>
            <div className="space-y-4">
                <h4 className="text-2xl font-black tracking-tight text-v3-primary">{title}</h4>
                <p className="text-base text-v3-text-secondary font-medium leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}

function PricingCard({ featured, title, desc, features, cta }: any) {
    return (
        <div className={`p-16 rounded-[4rem] border transition-all duration-500 ${featured
            ? 'bg-v3-primary text-white border-v3-primary shadow-2xl shadow-v3-primary/20 scale-105 relative overflow-hidden'
            : 'bg-v3-bg-alt border-v3-border hover:bg-white hover:shadow-xl'}`}>

            {featured && <div className="absolute top-0 right-0 px-8 py-3 bg-v3-accent text-v3-primary text-[10px] font-black uppercase tracking-widest rounded-bl-3xl">Standard</div>}

            <div className="space-y-12 h-full flex flex-col">
                <div className="space-y-4">
                    <h3 className="text-4xl font-black tracking-tight uppercase">{title}</h3>
                    <p className={`text-base font-medium ${featured ? 'text-white/60' : 'text-v3-text-secondary'}`}>{desc}</p>
                </div>

                <ul className="space-y-4 flex-grow">
                    {features.map((f: string, i: number) => (
                        <li key={i} className="flex items-center gap-4 text-base font-bold">
                            <MdCheckCircle className={featured ? 'text-v3-accent' : 'text-v3-accent'} size={24} /> {f}
                        </li>
                    ))}
                </ul>

                <VersionLink
                    href="/contact"
                    className={`w-full py-5 rounded-full font-black text-center transition-all ${featured
                        ? 'bg-white text-v3-primary hover:bg-v3-accent'
                        : 'bg-v3-primary text-white hover:shadow-xl'}`}
                >
                    {cta}
                </VersionLink>
            </div>
        </div>
    );
}
