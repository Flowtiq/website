'use client';

import React from 'react';
import {
    MdShield,
    MdGavel,
    MdStorage,
    MdFiberManualRecord,
    MdTerminal,
    MdCheckCircle,
    MdTimeline,
    MdSecurity,
    MdVerifiedUser
} from '@/components/icons';
import { Divider } from '@/components/ui/Divider';

export function V2VeiligheidPage() {
    return (
        <main className="flex-grow pt-40 pb-24 bg-v2-bg overflow-hidden relative">
            {/* Background Security Pulse */}
            <div className="absolute top-[10%] right-[10%] w-[50%] h-[50%] bg-v2-accent/5 blur-[150px] rounded-full pointer-events-none animate-pulse"></div>

            <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24 relative">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-[10px] font-mono text-v2-accent-alt font-black uppercase tracking-widest bg-v2-accent-alt/10 px-2 py-0.5 border border-v2-accent-alt/30 rounded-[var(--radius-v2)]">
                                Protocol_v2026.0
                            </span>
                            <div className="h-[1px] w-12 bg-v2-border/30"></div>
                            <span className="text-[10px] font-mono text-v2-text-secondary uppercase tracking-[0.2em]">
                                Encryption: AES-256-GCM
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-v2-primary font-mono tracking-tighter mb-8 uppercase leading-none">
                            Privacy & <br />
                            <span className="text-v2-accent-alt">Veiligheid</span>
                        </h1>
                        <p className="text-xl text-v2-text-secondary font-medium leading-relaxed max-w-2xl">
                            Onze foundation-layer. Wij bouwen geen AI zonder dat we de absolute controle over data kunnen garanderen. Jouw data blijft binnen jouw muren.
                        </p>
                    </div>

                    {/* Status Dashboard Component */}
                    <div className="p-6 bg-v2-surface border border-v2-border/50 rounded-[var(--radius-v2-lg)] shadow-2xl space-y-4 min-w-[280px]">
                        <div className="flex justify-between items-center border-b border-v2-border/30 pb-3">
                            <span className="text-[10px] font-mono text-v2-text-secondary uppercase">System_State</span>
                            <span className="flex items-center gap-1.5 text-[10px] font-mono text-v2-accent font-black">
                                <MdFiberManualRecord size={8} className="animate-pulse" /> PROTECTED
                            </span>
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between text-[10px] font-mono">
                                <span className="opacity-50">CYPHER_STRENGTH</span>
                                <span className="font-black">CORE_ENTERPRISE</span>
                            </div>
                            <div className="flex justify-between text-[10px] font-mono">
                                <span className="opacity-50">NODE_ISOLATION</span>
                                <span className="font-black text-v2-accent">ENFORCED</span>
                            </div>
                            <div className="flex justify-between text-[10px] font-mono">
                                <span className="opacity-50">AUDIT_LOGGING</span>
                                <span className="font-black">LIVE_STREAM</span>
                            </div>
                        </div>
                    </div>
                </div>

                <Divider variant="dot-both" className="mb-24" />

                {/* Main Security Grids */}
                <div className="grid md:grid-cols-2 gap-px bg-v2-border/30 border border-v2-border/30 rounded-[var(--radius-v2-lg)] overflow-hidden shadow-2xl">
                    {/* Data Sovereignty */}
                    <SecurityModule
                        title="Data-soevereiniteit"
                        subtitle="Eigen data, eigen regels"
                        description="Gevoelige informatie verdwijnt nooit in ondoorzichtige clouds. Wij garanderen absolute data-controle."
                        icon={<MdStorage size={32} />}
                        points={[
                            { label: 'LOCATIE', text: 'Verwerking vindt plaats in Nederlandse datacenters of volledig on-premise binnen uw eigen muren.' },
                            { label: 'MINING_OFF', text: 'Data wordt uitsluitend gebruikt voor de specifieke opdracht en nooit voor publieke training.' }
                        ]}
                    />

                    {/* Attended AI */}
                    <SecurityModule
                        title="Attended Assistenten"
                        subtitle="Veilig & Geautoriseerd"
                        description="Onze software is geen black box. De assistent werkt uitsluitend binnen vooraf gedefinieerde parameters."
                        icon={<MdShield size={32} />}
                        points={[
                            { label: 'SCOPE', text: 'Software werkt uitsluitend op geautoriseerde URL\'s. Daarbuiten is de assistent technisch blind.' },
                            { label: 'PERMISSIONS', text: 'Opereren onder rechten van de medewerker: kan nooit meer doen dan de gebruiker zelf mag.' }
                        ]}
                    />

                    {/* Audit Trail */}
                    <SecurityModule
                        title="Compliance Audit"
                        subtitle="Volledige Controleerbaarheid"
                        description="Cruciaal inzicht voor compliance officers en FG's in het wie, wat en waarom van elke AI-beslissing."
                        icon={<MdTimeline size={32} />}
                        points={[
                            { label: 'LOGGING', text: 'Elke actie, input en output wordt vastgelegd in een cryptografisch beveiligde audit trail.' },
                            { label: 'RECONSTRUCT', text: 'Exact te reconstrueren welke keuzes de assistent heeft gemaakt en op basis van welke data.' }
                        ]}
                    />

                    {/* Open Stack */}
                    <SecurityModule
                        title="Transparante Stack"
                        subtitle="Geen Black Box"
                        description="Gebouwd op bewezen Open Source platformen om vendor lock-ins te vermijden en volledige uitlegbaarheid te bieden."
                        icon={<MdTerminal size={32} />}
                        points={[
                            { label: 'OPEN_STD', text: 'Volledig uitlegbare software door gebruik van universele standaarden en frameworks.' },
                            { label: 'EXPLAINABLE', text: 'De logica achter elke AI-interactie is direct herleidbaar tot de broncode.' }
                        ]}
                    />
                </div>
            </section>

            {/* Certification Section */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-24">
                <div className="bg-v2-primary p-1 rounded-[var(--radius-v2-lg)] border border-white/5 overflow-hidden">
                    <div className="bg-v2-primary p-12 lg:p-16 relative overflow-hidden flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                                <MdCheckCircle size={14} className="text-v2-accent" />
                                <span className="text-[10px] font-black font-mono text-white tracking-widest uppercase">Certified Infrastructure</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-white font-mono tracking-tighter uppercase">
                                Enterprise <br />
                                <span className="text-v2-accent">Compliance</span>
                            </h2>
                            <p className="text-white/60 text-lg font-medium leading-relaxed max-w-xl">
                                Vragen van een CISO of Privacy Officer worden niet alleen beantwoord, maar proactief opgelost met benodigde documentatie.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4 w-full lg:w-auto">
                            <div className="bg-white/5 border border-white/10 p-8 rounded-[var(--radius-v2)] space-y-4 hover:bg-white/10 transition-colors">
                                <MdCheckCircle size={32} className="text-v2-accent" />
                                <h4 className="text-white font-black font-mono text-sm tracking-widest uppercase">Certificering</h4>
                                <p className="text-xs text-white/50 leading-relaxed font-bold">
                                    Conform ISO 27001 en NEN 7510. Onze infrastructuur voldoet aan de hoogste bancaire standaarden.
                                </p>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-8 rounded-[var(--radius-v2)] space-y-4 hover:bg-white/10 transition-colors">
                                <MdGavel size={32} className="text-v2-accent" />
                                <h4 className="text-white font-black font-mono text-sm tracking-widest uppercase">DPIA_READY</h4>
                                <p className="text-xs text-white/50 leading-relaxed font-bold">
                                    Proactieve input voor Data Protection Impact Assessments beschikbaar voor elke implementatie.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

function SecurityModule({ title, subtitle, description, icon, points }: any) {
    return (
        <div className="bg-v2-bg p-10 lg:p-12 hover:bg-v2-surface transition-colors group relative">
            <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-30 transition-opacity text-v2-accent-alt">
                {icon}
            </div>

            <div className="space-y-8 relative z-10">
                <div className="space-y-4">
                    <h3 className="text-[10px] font-mono font-black text-v2-accent-alt uppercase tracking-[0.3em]">{subtitle}</h3>
                    <h2 className="text-3xl font-black text-v2-primary font-mono tracking-tighter uppercase leading-none">{title}</h2>
                </div>

                <p className="text-base text-v2-text-secondary font-medium leading-relaxed">
                    {description}
                </p>

                <div className="space-y-6 pt-4">
                    {points.map((point: any, i: number) => (
                        <div key={i} className="flex gap-6">
                            <div className="text-[10px] font-mono text-v2-primary font-black opacity-40 mt-1 min-w-[80px]">
                                {point.label}
                            </div>
                            <div className="flex-1 text-sm font-bold text-v2-text-secondary leading-relaxed group-hover:text-v2-primary transition-colors">
                                {point.text}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Visual Grid Deco */}
            <div className="absolute bottom-4 right-4 flex gap-1 opacity-0 group-hover:opacity-40 transition-opacity">
                <MdFiberManualRecord size={6} className="text-v2-accent-alt" />
                <MdFiberManualRecord size={6} className="text-v2-accent-alt opacity-50" />
                <MdFiberManualRecord size={6} className="text-v2-accent-alt opacity-20" />
            </div>
        </div>
    );
}
