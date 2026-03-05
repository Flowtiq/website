'use client';

import React from 'react';
import {
    MdSecurity,
    MdLocationOn,
    MdLock,
    MdShield,
    MdVerifiedUser,
    MdHistory,
    MdCheckCircle,
    MdLibraryAddCheck,
    MdArrowForward
} from '@/components/icons';

export function V1VeiligheidPage() {
    return (
        <div className="bg-v1-bg font-sans">
            {/* Page Header - Technical Authority */}
            <section className="pt-56 pb-32 bg-v1-primary text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/img/grid.svg')]"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-v1-accent to-transparent"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <span className="text-xs font-black uppercase tracking-[0.5em] text-v1-accent mb-8 block">Infrastructuur</span>
                        <h1 className="text-6xl md:text-9xl font-bold mb-10 tracking-tighter leading-[0.9]">
                            Veilig door <br /> <span className="text-v1-accent italic font-serif">Design.</span>
                        </h1>
                        <p className="text-2xl text-slate-300 max-w-2xl leading-relaxed font-medium">
                            Geen sluitpost, maar het fundament. Transparantie en controleerbaarheid staan bij ons altijd voorop.
                        </p>
                    </div>
                </div>
            </section>

            {/* Security Pillars - Clean Architectural Presentation */}
            <section className="py-48 bg-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="space-y-48">
                        {/* Data Soevereiniteit */}
                        <div className="grid lg:grid-cols-12 gap-24 items-start">
                            <div className="lg:col-span-5 sticky top-48">
                                <h2 className="text-4xl lg:text-6xl font-bold text-v1-primary leading-tight tracking-tighter">
                                    Eigen data, <br /> <span className="opacity-40 italic font-serif">eigen regels.</span>
                                </h2>
                                <p className="mt-8 text-xl text-v1-text-secondary leading-relaxed font-medium">
                                    Gevoelige informatie verdwijnt nooit in ondoorzichtige clouds van tech-reuzen.
                                </p>
                            </div>
                            <div className="lg:col-span-7 space-y-12">
                                <SecurityFeature
                                    icon={<MdLocationOn />}
                                    title="Data-soevereiniteit: Eigen data, eigen regels"
                                    desc="Verwerking vindt plaats in Nederlandse datacenters of volledig on-premise binnen de eigen muren. Gevoelige informatie verdwijnt nooit in ondoorzichtige clouds van tech-reuzen."
                                />
                                <SecurityFeature
                                    icon={<MdVerifiedUser />}
                                    title="Digitale assistenten: Veilig & 'Attended'"
                                    desc="De assistenten zijn géén 'black box'. Ze werken uitsluitend op vooraf geautoriseerde URL's en apps. Daarbuiten is de assistent 'blind'."
                                />
                                <SecurityFeature
                                    icon={<MdShield />}
                                    title="Volledige controleerbaarheid (Audit Trail)"
                                    desc="Elke actie, elke input en elke tegenereerde output wordt vastgelegd. Achteraf is altijd exact te reconstrueren welke keuzes de assistent heeft gemaakt."
                                />
                                <SecurityFeature
                                    icon={<MdLock />}
                                    title="Geen Data-mining"
                                    desc="Data wordt uitsluitend gebruikt voor de specifieke opdracht en nooit ingezet om publieke AI-modellen te trainen."
                                />
                                <SecurityFeature
                                    icon={<MdSecurity />}
                                    title="Technologie: Fundament"
                                    desc="Er wordt gebouwd op bewezen Open Source platformen en LLM-modellen. Door gebruik van open standaarden worden vendor lock-ins vermeden. Volledig uitlegbare software."
                                />
                            </div>
                        </div>

                        {/* Audit Trail - High Performance Card */}
                        <div className="bg-v1-primary rounded-[100px] p-20 lg:p-32 text-white shadow-3xl text-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-v1-accent/10 blur-[150px] rounded-full"></div>
                            <div className="relative z-10 max-w-4xl mx-auto">
                                <h3 className="text-4xl lg:text-7xl font-bold mb-12 tracking-tighter">Veiligheid is de standaard.</h3>
                                <p className="text-xl text-slate-400 mb-20 font-medium italic">
                                    Vragen van een CISO of FG worden proactief opgelost met transparante logging en reconstructie. Alle processen zijn ingericht conform ISO 27001 en NEN 7510.
                                </p>
                                <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-white/10">
                                    <div className="text-left">
                                        <h4 className="text-v1-accent font-black tracking-widest text-xs uppercase mb-4">Certificering</h4>
                                        <p className="text-xl font-bold">ISO 27001 & NEN 7510</p>
                                    </div>
                                    <div className="text-left">
                                        <h4 className="text-v1-accent font-black tracking-widest text-xs uppercase mb-4">Compliance</h4>
                                        <p className="text-xl font-bold">DPIA Ondersteuning</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function SecurityFeature({ icon, title, desc }: { icon: any, title: string, desc: string }) {
    return (
        <div className="group flex gap-10 items-start">
            <div className="h-20 w-20 rounded-[30px] bg-v1-bg text-v1-primary flex items-center justify-center flex-shrink-0 group-hover:bg-v1-accent group-hover:text-v1-primary transition-all duration-500">
                {React.cloneElement(icon, { size: 32 })}
            </div>
            <div className="pt-4">
                <h4 className="text-2xl font-bold text-v1-primary mb-2 tracking-tight">{title}</h4>
                <p className="text-lg text-v1-text-secondary leading-relaxed font-medium">{desc}</p>
            </div>
        </div>
    );
}
