'use client';

import React from 'react';
import { MdMic, MdAutoFixHigh, MdTerminal, MdFiberManualRecord, MdLayers, MdArrowForward, MdSettingsInputComponent, MdAnalytics } from '@/components/icons';
import { VersionLink } from '@/components/VersionLink';
import { Divider } from '@/components/ui/Divider';

export function V2ProductenPage() {
    return (
        <main className="flex-grow pt-40 pb-24 bg-v2-bg overflow-hidden relative">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] bg-v2-accent/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[20%] right-[5%] w-[30%] h-[30%] bg-v2-primary/10 blur-[100px] rounded-full"></div>
            </div>

            {/* Header Section */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24 relative">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 bg-v2-primary/10 border border-v2-border/50 rounded-[var(--radius-v2)] text-[10px] font-mono text-v2-accent font-black uppercase tracking-widest">
                                Ecosystem_V2.0
                            </span>
                            <div className="h-[1px] w-12 bg-v2-accent/30"></div>
                            <span className="text-[10px] font-mono text-v2-text-secondary uppercase tracking-[0.2em] animate-pulse">
                                Status: Fully_Operational
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-v2-primary font-mono tracking-tighter mb-8 uppercase leading-none">
                            AI Operating <br />
                            <span className="text-v2-accent">Infrastructure</span>
                        </h1>
                        <p className="text-xl text-v2-text-secondary font-medium leading-relaxed max-w-2xl">
                            Onze assistenten werken samen met elke webapplicatie, van standaardpakket tot maatwerk. Een modulaire architectuur voor de autonome organisatie.
                        </p>
                    </div>
                    <div className="hidden lg:block">
                        <div className="p-10 bg-v2-surface border border-v2-border/50 rounded-[var(--radius-v2-lg)] shadow-2xl relative overflow-hidden group min-w-[300px]">
                            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                                <MdSettingsInputComponent size={64} />
                            </div>
                            <div className="flex items-center gap-6 mb-8">
                                <div className="p-3 bg-v2-accent rounded-sm text-v2-bg">
                                    <MdAnalytics size={28} />
                                </div>
                                <span className="text-sm font-mono font-black uppercase tracking-[0.2em]">System_Metrics</span>
                            </div>
                            <div className="space-y-4">
                                <div className="h-2 w-48 bg-v2-primary/10 rounded-full overflow-hidden">
                                    <div className="h-full w-[85%] bg-v2-accent animate-pulse"></div>
                                </div>
                                <div className="h-2 w-56 bg-v2-primary/10 rounded-full overflow-hidden">
                                    <div className="h-full w-[60%] bg-v2-accent-alt"></div>
                                </div>
                                <div className="pt-4 flex justify-between items-center text-[10px] font-mono text-v2-text-secondary uppercase tracking-widest">
                                    <span>Sync_Status</span>
                                    <span className="text-v2-accent">Active</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Technical Divider */}
                <Divider variant="dot-both" className="mb-12" />
            </section>

            {/* VoiceIQ Section */}
            <ProductSection
                id="voiceiq"
                label="01_VoiceIQ"
                title="Intelligent Voice Processing & Integration"
                icon={<MdMic size={32} />}
                accent="v2-accent"
                stats={[
                    { label: 'LATENCY', value: '<250ms' },
                    { label: 'ACCURACY', value: '99.8%' },
                    { label: 'SECURITY', value: 'E2E' }
                ]}
                situatie={[
                    "Een intake, klantgesprek of consult",
                    "Oogcontact maken, luisteren, je aandacht volledig bij het gesprek",
                    "Multitasken is noodzakelijk omdat je moet meeschrijven of typen",
                    "Toch niet alles uit het gesprek gehaald en naderhand nog nog notities uitwerken"
                ]}
                oplossing={[
                    "Informatie kan in elke webapplicatie worden opgeslagen",
                    "Activeer VoiceIQ aan het begin van het gesprek",
                    "De slimme assistent legt het gesprek woord voor woord realtime vast",
                    "Vat het gesprek direct voor u samen in de gewenste format"
                ]}
                resultaat="De samenvatting van het gesprek wordt direct opgeslagen in de daarvoor bedoelde velden in de applicatie."
            />

            {/* AssistIQ Section */}
            <ProductSection
                id="assistiq"
                label="02_AssistIQ"
                title="Automated Browser Tasks & Data Operations"
                icon={<MdAutoFixHigh size={32} />}
                accent="v2-accent-alt"
                reverse
                stats={[
                    { label: 'TPS', value: '45.2' },
                    { label: 'ERR_RATE', value: '0.001%' },
                    { label: 'UPTIME', value: '99.9%' }
                ]}
                situatie={[
                    "Het doorvoeren van aanpassingen in dossiers, orders, tickets of casussen",
                    "Veel herhalend en tijdrovend klik- en invoerwerk",
                    "Vaak wisselen tussen applicaties met kans op fouten",
                    "Hoge proces- en regeldruk zorgen voor hoge administratieve verantwoording"
                ]}
                oplossing={[
                    "Informatie kan in en tussen elke webapplicatie worden verwerkt",
                    "Ondersteun medewerkers direct in hun browsers met AssistIQ",
                    "De assistent vult elk benodigd veld, tabblad of scherm exact volgens werkinstructie",
                    "U behoudt de controle: na een korte check verwerkt de data definitief"
                ]}
                resultaat="Uniform, foutloos en binnen enkele seconden geregeld. De data wordt direct opgeslagen in de applicatie(s)."
            />

            {/* CTA Section */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-24">
                <div className="bg-v2-primary p-12 lg:p-20 rounded-[var(--radius-v2-lg)] relative overflow-hidden border border-white/10 group">
                    {/* Animated Lines */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-[20%] w-[1px] h-full bg-white [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"></div>
                        <div className="absolute top-0 right-[20%] w-[1px] h-full bg-white [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"></div>
                    </div>

                    <div className="relative z-10 text-center space-y-8">
                        <div className="flex justify-center mb-6">
                            <div className="p-4 bg-v2-accent rounded-full text-v2-bg animate-bounce">
                                <MdTerminal size={32} />
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-white font-mono tracking-tighter uppercase">
                            Ready to <span className="text-v2-accent">Deploy?</span>
                        </h2>
                        <p className="text-xl text-white/70 font-medium max-w-2xl mx-auto">
                            Zet de eerste stap naar een autonome organisatie. Plan een architectuur-sessie met een van onze engineers.
                        </p>
                        <div className="pt-8">
                            <VersionLink
                                href="/contact"
                                className="inline-flex items-center gap-3 px-10 py-5 bg-v2-accent text-v2-bg font-black text-base uppercase tracking-widest rounded-sm hover:translate-y-[-4px] transition-all shadow-2xl shadow-v2-accent/30"
                            >
                                Initiate Initial Scan <MdArrowForward size={20} />
                            </VersionLink>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

function ProductSection({ id, label, title, icon, accent, reverse, stats, situatie, oplossing, resultaat }: any) {
    const accentClass = accent === 'v2-accent' ? 'text-v2-accent' : 'text-v2-accent-alt';
    const bgAccentClass = accent === 'v2-accent' ? 'bg-v2-accent' : 'bg-v2-accent-alt';

    return (
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32 relative" id={id}>
            <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-start`}>
                {/* Info Card */}
                <div className="flex-1 space-y-12">
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <span className={`text-[10px] font-mono font-black uppercase tracking-[0.3em] ${accentClass}`}>{label}</span>
                            <div className="h-[1px] flex-grow bg-v2-border/30"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-v2-primary font-mono tracking-tighter uppercase leading-tight">
                            {title}
                        </h2>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-4 border-l-2 border-v2-border/50 pl-8">
                        {stats.map((stat: any, i: number) => (
                            <div key={i} className="space-y-1">
                                <div className="text-[10px] font-mono text-v2-text-secondary uppercase tracking-widest">{stat.label}</div>
                                <div className="text-xl font-black text-v2-primary font-mono">{stat.value}</div>
                            </div>
                        ))}
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xs font-mono font-black text-v2-text-secondary uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                <MdFiberManualRecord size={8} className="text-v2-error" /> PRE_PROCESS_STATE
                            </h3>
                            <ul className="space-y-3">
                                {situatie.map((item: string, i: number) => (
                                    <li key={i} className="flex gap-4 text-sm font-medium text-v2-text-secondary leading-relaxed">
                                        <span className="text-v2-primary opacity-30 mt-1">#</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className={`text-xs font-mono font-black uppercase tracking-[0.2em] mb-4 flex items-center gap-2 ${accentClass}`}>
                                <MdFiberManualRecord size={8} className="animate-pulse" /> CORE_OPTIMIZATION
                            </h3>
                            <ul className="space-y-3">
                                {oplossing.map((item: string, i: number) => (
                                    <li key={i} className="flex gap-4 text-sm font-bold text-v2-primary leading-relaxed">
                                        <MdArrowForward className={`mt-1 flex-shrink-0 ${accentClass}`} />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Visual Card (Bento-like) */}
                <div className="w-full lg:w-[450px] flex-shrink-0">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2 aspect-square bg-v2-surface border border-v2-border/50 rounded-[var(--radius-v2-lg)] flex flex-col items-center justify-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-v2-primary/5 to-transparent"></div>
                            <div className={`p-8 rounded-[var(--radius-v2)] ${bgAccentClass} text-v2-bg mb-6 shadow-2xl relative z-10 group-hover:scale-110 transition-transform duration-500`}>
                                {icon}
                            </div>
                            <div className="text-center relative z-10">
                                <span className="block text-xl font-black text-v2-primary font-mono tracking-tighter uppercase mb-2">IO_MODULE</span>
                                <span className="text-[10px] font-mono text-v2-text-secondary tracking-widest uppercase">Encryption: Enabled</span>
                            </div>

                            {/* Decorative Grid Lines */}
                            <div className="absolute top-0 left-0 w-full h-full p-4 pointer-events-none opacity-10">
                                <div className="w-full h-full border border-v2-primary/20 grid grid-cols-4 grid-rows-4">
                                    {Array.from({ length: 16 }).map((_, i) => (
                                        <div key={i} className="border border-v2-primary/10"></div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="aspect-video bg-v2-surface border border-v2-border/50 rounded-[var(--radius-v2)] p-6 flex flex-col justify-end group">
                            <MdLayers size={24} className={`${accentClass} mb-4 group-hover:translate-y-[-4px] transition-transform`} />
                            <span className="block text-[10px] font-mono font-black text-v2-text-secondary uppercase">Layer_Protocol</span>
                        </div>
                        <div className="aspect-video bg-v2-primary text-white border border-white/10 rounded-[var(--radius-v2)] p-6 flex flex-col justify-end group">
                            <MdTerminal size={24} className="text-v2-accent mb-4 group-hover:translate-y-[-4px] transition-transform" />
                            <span className="block text-[10px] font-mono font-black opacity-60 uppercase">Runtime_State</span>
                        </div>

                        <div className="col-span-2 bg-v2-bg p-8 border border-v2-accent/30 rounded-[var(--radius-v2)] relative group">
                            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-30 transition-opacity">
                                <MdAnalytics size={32} className={accentClass} />
                            </div>
                            <h4 className={`text-[10px] font-mono font-black uppercase tracking-widest mb-4 flex items-center gap-2 ${accentClass}`}>
                                <MdFiberManualRecord size={8} className="animate-pulse" /> OUTPUT_RESULT
                            </h4>
                            <p className="text-sm font-bold text-v2-primary leading-relaxed">
                                {resultaat}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

// Typo in ProductSection component usage: 'opplossing' should be 'oplossing'
