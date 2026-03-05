'use client';

import React from 'react';
import {
    MdSecurity,
    MdLock,
    MdVisibility,
    MdGavel,
    MdCheckCircle,
    MdShield,
    MdArrowForward,
    MdStorage
} from '@/components/icons';
import { VersionLink } from '@/components/VersionLink';

export function V3VeiligheidPage() {
    return (
        <main className="bg-white text-v3-text font-sans overflow-x-hidden pt-40 pb-24 dreelio-gradient">
            <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-32">
                <div className="text-center space-y-8">
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-v3-bg-alt border border-v3-border shadow-sm text-v3-text font-bold text-xs tracking-widest uppercase">
                        Privacy & Security
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-v3-primary leading-[0.9] mb-12">
                        Geen sluitpost, <br />
                        <span className="text-v3-accent text-italic-accent">het fundament.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-v3-text-secondary max-w-3xl mx-auto font-medium leading-relaxed">
                        Innovatie mag nooit ten koste gaan van databeveiliging. Daarom hanteren wij een strikt 'Privacy by Design' beleid, waarbij transparantie en controleerbaarheid voorop staan.
                    </p>
                </div>
            </section>

            {/* Security Pillars */}
            <section className="pb-32 px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
                    <SecurityCard
                        icon={<MdStorage size={32} />}
                        title="Data-soevereiniteit: Eigen data, eigen regels"
                        desc="Verwerking vindt plaats in Nederlandse datacenters of volledig on-premise binnen de eigen muren. Gevoelige informatie verdwijnt nooit in ondoorzichtige clouds van tech-reuzen."
                    />
                    <SecurityCard
                        icon={<MdShield size={32} />}
                        title="Digitale assistenten: Veilig & 'Attended'"
                        desc="De assistenten zijn géén 'black box'. Ze werken uitsluitend op vooraf geautoriseerde URL's en apps. Daarbuiten is de assistent 'blind'."
                    />
                    <SecurityCard
                        icon={<MdVisibility size={32} />}
                        title="Volledige controleerbaarheid (Audit Trail)"
                        desc="Elke actie, elke input en elke tegenereerde output wordt vastgelegd. Achteraf is altijd exact te reconstrueren welke keuzes de assistent heeft gemaakt."
                    />
                    <SecurityCard
                        icon={<MdLock size={32} />}
                        title="Geen Data-mining"
                        desc="Data wordt uitsluitend gebruikt voor de specifieke opdracht en nooit ingezet om publieke AI-modellen te trainen."
                    />
                </div>
            </section>

            {/* In-depth Security: Technology & Compliance */}
            <section className="py-24 bg-v3-bg-alt/30">
                <div className="max-w-6xl mx-auto px-6 lg:px-8 space-y-24">
                    <div className="grid lg:grid-cols-2 gap-16">
                        <div className="space-y-8 p-12 bg-white rounded-[3rem] border border-v3-border shadow-2xl">
                            <h2 className="text-3xl font-black text-v3-primary tracking-tight uppercase">Technologie: Fundament</h2>
                            <p className="text-lg text-v3-text-secondary font-medium leading-relaxed">
                                Er wordt gebouwd op bewezen Open Source platformen en LLM-modellen. Door gebruik van open standaarden worden vendor lock-ins vermeden.
                            </p>
                            <ul className="space-y-4 text-sm font-bold text-v3-text-secondary/80">
                                <li>• Transparantie: Uitlegbare software</li>
                                <li>• Snelheid: Wekelijkse security updates</li>
                                <li>• Eigen regie: Stabiele procesborging</li>
                            </ul>
                        </div>
                        <div className="space-y-8 p-12 bg-v3-primary text-white rounded-[3rem] shadow-2xl">
                            <h2 className="text-3xl font-black tracking-tight uppercase">Compliance & Samenwerking</h2>
                            <p className="text-lg text-white/70 font-medium leading-relaxed">
                                Alle processen zijn ingericht conform ISO 27001 en NEN 7510. Wij leveren proactief input voor uw DPIA's.
                            </p>
                            <button className="px-8 py-4 bg-v3-accent text-v3-primary font-black rounded-full hover:scale-105 transition-all">
                                Download Whitepaper
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 text-center bg-white px-6">
                <div className="max-w-3xl mx-auto p-16 rounded-[4rem] border-2 border-v3-primary/10 shadow-2xl shadow-v3-primary/5 space-y-10">
                    <MdSecurity size={64} className="mx-auto text-v3-primary opacity-20" />
                    <h2 className="text-4xl font-black text-v3-primary tracking-tighter italic">"Veiligheid is geen optie, maar de standaard."</h2>
                    <p className="text-lg text-v3-text-secondary font-medium">Vragen voor onze CISO? Wij beantwoorden ze proactief.</p>
                    <VersionLink
                        href="/contact"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-v3-primary text-white font-black rounded-full hover:scale-105 transition-all shadow-xl shadow-v3-primary/20"
                    >
                        Contact Security Team <MdArrowForward />
                    </VersionLink>
                </div>
            </section>
        </main>
    );
}

function SecurityCard({ icon, title, desc }: any) {
    return (
        <div className="bg-white p-10 rounded-[3rem] border border-v3-border shadow-[0_12px_40px_rgba(0,0,0,0.02)] hover:shadow-xl hover:translate-y-[-4px] transition-all space-y-6 group">
            <div className="p-4 bg-v3-primary/5 text-v3-primary rounded-2xl w-fit group-hover:bg-v3-primary group-hover:text-white transition-all">
                {icon}
            </div>
            <div className="space-y-2">
                <h3 className="text-xl font-black tracking-tight text-v3-primary uppercase">{title}</h3>
                <p className="text-xs font-bold text-v3-text-secondary/60 leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}
