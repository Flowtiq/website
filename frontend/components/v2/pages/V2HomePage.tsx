'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
    MdRocketLaunch,
    MdAutoGraph,
    MdSecurity,
    MdMic,
    MdChat,
    MdCheckCircle,
    MdPlayCircle,
    MdExpandMore,
    MdExpandLess,
    MdWorkspaces,
    MdRadar,
    MdTerminal,
    MdVisibility,
    MdCloudDone,
    MdShield,
    MdVerifiedUser,
    MdArrowForward,
    MdSmartToy,
    MdFlashOn,
    MdFiberManualRecord,
    MdTrendingUp,
    MdAnalytics,
    MdSettingsInputComponent,
    MdStorage
} from '@/components/icons';
import { VersionLink } from '@/components/VersionLink';

/* ────────────────────────────────────────
   FAQ Accordion Item
   ──────────────────────────────────────── */
function FaqItem({ question, answer }: { question: string; answer: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border-b border-v2-border/30 last:border-b-0">
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between py-6 text-left group"
            >
                <span className="text-v2-text font-bold text-lg group-hover:text-v2-accent transition-colors pr-4">{question}</span>
                {open ? <MdExpandLess size={24} className="text-v2-accent flex-shrink-0" /> : <MdExpandMore size={24} className="text-v2-text-secondary flex-shrink-0" />}
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-96 pb-6' : 'max-h-0'}`}>
                <p className="text-v2-text-secondary leading-relaxed font-medium">{answer}</p>
            </div>
        </div>
    );
}

/* ────────────────────────────────────────
   V2 Home Page (AIFAIS Architecture)
   ──────────────────────────────────────── */
export function V2HomePage() {
    return (
        <div className="bg-v2-bg text-v2-text font-sans selection:bg-v2-accent/30 selection:text-v2-text overflow-x-hidden">

            {/* ═══════════════════════════════════
                SECTION 1 — Technical Hero
               ═══════════════════════════════════ */}
            <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
                {/* Background Grid & Scanlines */}
                <div
                    className="absolute inset-0 bg-[linear-gradient(to_right,#00C85315_1px,transparent_1px),linear-gradient(to_bottom,#00C85315_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-40"
                    style={{ maskImage: 'radial-gradient(circle at center, black, transparent 80%)' }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-b from-v2-bg via-transparent to-v2-bg"></div>

                {/* Decorative Technical Elements */}
                <div className="absolute top-1/4 left-10 w-32 h-32 border border-v2-accent/20 rounded-full animate-ping opacity-20 hidden lg:block"></div>
                <div className="absolute bottom-1/4 right-10 w-48 h-48 border border-v2-accent-alt/20 rounded-full animate-pulse opacity-20 hidden lg:block"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-24">
                    <div className="grid lg:grid-cols-12 gap-12 items-center">
                        <div className="lg:col-span-7 space-y-8">
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-sm bg-v2-primary/5 border-l-2 border-v2-accent text-v2-accent text-xs font-mono uppercase tracking-widest mb-4">
                                <MdFiberManualRecord size={8} className="animate-pulse" />
                                System Status: Operational // v2.4.0
                            </div>

                            <h1 className="text-5xl lg:text-7xl font-black leading-[1.05] tracking-tight text-v2-primary">
                                Maximale impact op uw processen, <span className="text-transparent bg-clip-text bg-gradient-to-r from-v2-accent to-v2-accent-alt">minimale impact op uw IT.</span>
                            </h1>

                            <p className="text-xl text-v2-text-secondary font-medium leading-relaxed max-w-2xl border-l border-v2-border/50 pl-6">
                                Tijdrovende registratieprocessen horen niet meer bij deze tijd. Met de slimme digitale assistenten van FlowTIQ worden registratie- en invoertaken gehalveerd.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <VersionLink
                                    href="/contact"
                                    className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-v2-accent text-v2-bg font-black rounded-sm overflow-hidden transition-all hover:pr-12"
                                >
                                    <span className="relative z-10 flex items-center gap-2">Plan kennismaking <MdArrowForward size={22} className="group-hover:translate-x-1 transition-transform" /></span>
                                    <div className="absolute inset-0 bg-v2-primary translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                                </VersionLink>
                                <VersionLink
                                    href="/producten"
                                    className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent text-v2-primary font-bold rounded-sm border-2 border-v2-primary hover:bg-v2-primary/5 transition-all text-center"
                                >
                                    Onze Producten
                                </VersionLink>
                            </div>

                            <div className="flex items-center gap-6 pt-8 border-t border-v2-border/30">
                                <div className="text-sm font-bold text-v2-text-secondary">
                                    <span className="text-v2-primary italic font-serif">"Laat medewerkers weer het verschil maken, simpelweg door ze slim te ondersteunen"</span>
                                </div>
                            </div>
                        </div>

                        {/* Hero Visual — Bento-style side panel */}
                        <div className="lg:col-span-5 hidden lg:grid grid-cols-2 gap-4">
                            <div className="aspect-square bg-v2-primary rounded-2xl p-6 flex flex-col justify-between border border-white/10 shadow-2xl">
                                <MdSmartToy size={40} className="text-v2-accent" />
                                <div>
                                    <div className="text-white font-bold text-3xl">50%</div>
                                    <div className="text-v2-accent/80 text-xs font-mono uppercase tracking-tighter">Admin Reduction</div>
                                </div>
                            </div>
                            <div className="aspect-square bg-v2-surface rounded-2xl p-6 flex flex-col justify-between border border-v2-border/30 shadow-xl mt-8">
                                <MdSecurity size={40} className="text-v2-accent-alt" />
                                <div>
                                    <div className="text-v2-primary font-bold text-3xl">100%</div>
                                    <div className="text-v2-text-secondary text-xs font-mono uppercase tracking-tighter">Compliant Storage</div>
                                </div>
                            </div>
                            <div className="col-span-2 bg-v2-accent rounded-2xl p-6 flex items-center justify-between border border-v2-accent/20 shadow-xl">
                                <div className="space-y-1">
                                    <div className="text-v2-bg font-black text-2xl uppercase tracking-tighter">De winst op de werkvloer</div>
                                    <div className="text-v2-bg/80 text-sm font-medium">Binnen 30 dagen uw medewerkers ondersteunen.</div>
                                </div>
                                <MdShield size={48} className="text-v2-bg/20" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════
                SECTION 2 — Bento Grid Features
               ═══════════════════════════════════ */}
            <section className="py-32 bg-v2-bg relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-l-4 border-v2-accent pl-8">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl lg:text-6xl font-black text-v2-primary mb-6">Simpel en snel <span className="text-transparent bg-clip-text bg-gradient-to-r from-v2-accent to-v2-accent-alt">te implementeren.</span></h2>
                            <p className="text-v2-text-secondary text-xl font-medium">
                                Geen vervanging van applicaties. Het huidige softwarelandschap blijft intact.
                            </p>
                        </div>
                        <div className="hidden lg:block">
                            <VersionLink href="/producten" className="flex items-center gap-2 text-v2-primary font-bold hover:gap-4 transition-all">
                                Bekijk Implementatie <MdArrowForward />
                            </VersionLink>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-[auto] min-h-[600px]">
                        {/* Large Bento Card */}
                        <div className="md:col-span-2 md:row-span-2 bg-v2-primary rounded-[2.5rem] p-10 relative overflow-hidden group shadow-2xl">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <MdRadar size={200} className="animate-spin-slow" />
                            </div>
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className="space-y-6">
                                    <div className="w-16 h-16 rounded-2xl bg-v2-accent/20 flex items-center justify-center text-v2-accent border border-v2-accent/30">
                                        <MdAutoGraph size={32} />
                                    </div>
                                    <h3 className="text-3xl lg:text-4xl font-black text-white leading-tight">Contextuele Intelligentie & Autonome Uitvoering</h3>
                                    <p className="text-white/70 text-lg max-w-xl font-medium leading-relaxed">
                                        Onze assistenten begrijpen de nuance van jouw bedrijfsvoering. Ze voeren volledige processen uit van start tot finish — of het nu gaat om complexe planningen of intelligente dossieropbouw.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/10 mt-10">
                                    <div>
                                        <div className="text-v2-accent font-black text-3xl">4.2u</div>
                                        <div className="text-white/50 text-xs font-mono uppercase tracking-widest">Bespaard per dag</div>
                                    </div>
                                    <div>
                                        <div className="text-v2-accent-alt font-black text-3xl">0%</div>
                                        <div className="text-white/50 text-xs font-mono uppercase tracking-widest">Handmatige input</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Medium Bento Card 1 */}
                        <div className="bg-v2-surface rounded-[2.5rem] p-8 border border-v2-border/30 hover:shadow-xl transition-all group flex flex-col justify-between shadow-lg">
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-xl bg-v2-accent/10 flex items-center justify-center text-v2-accent">
                                    <MdCheckCircle size={28} />
                                </div>
                                <h3 className="text-xl font-black text-v2-primary">Gegarandeerd Resultaat</h3>
                                <p className="text-v2-text-secondary text-sm font-medium leading-relaxed">
                                    Niet goed, geld terug. We fixeren ons op meetbare ROI binnen 90 dagen.
                                </p>
                            </div>
                            <div className="pt-4 text-v2-accent font-mono text-xs font-bold uppercase tracking-tighter">Verification Active // ROI Valid</div>
                        </div>

                        {/* Medium Bento Card 2 */}
                        <div className="bg-v2-accent rounded-[2.5rem] p-8 border border-v2-accent/20 hover:scale-[1.02] transition-all group flex flex-col justify-between shadow-lg active:scale-95">
                            <div className="space-y-4">
                                <div className="w-12 h-12 rounded-xl bg-v2-bg flex items-center justify-center text-v2-accent shadow-inner">
                                    <MdShield size={28} />
                                </div>
                                <h3 className="text-xl font-black text-v2-bg">Privacy First</h3>
                                <p className="text-v2-bg/80 text-sm font-medium leading-relaxed">
                                    Jouw data verlaat nooit de EU. Geen publieke modellen training.
                                </p>
                            </div>
                            <MdArrowForward size={32} className="text-v2-bg self-end group-hover:translate-x-2 transition-transform" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════
                SECTION 3 — Technical Workflow Visualization
               ═══════════════════════════════════ */}
            <section className="py-32 bg-v2-primary text-white overflow-hidden relative">
                {/* Visual noise background */}
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <div className="inline-block px-3 py-1 rounded-sm bg-v2-accent/20 border border-v2-accent/30 text-v2-accent text-[10px] font-mono uppercase tracking-[0.3em]">
                                Workflow Architecture
                            </div>
                            <h2 className="text-4xl lg:text-6xl font-black leading-tight">
                                Van unstructured data naar <span className="text-v2-accent">Actionable Output.</span>
                            </h2>
                            <p className="text-white/70 text-xl leading-relaxed font-medium max-w-xl">
                                Onze AI pipeline is gebouwd op een multi-agent architectuur. Één agent voert uit, een tweede agent verifieert, en een derde agent integreert in jouw systemen.
                            </p>

                            <div className="space-y-4 pt-4">
                                {[
                                    { title: 'Inbound Ingestion', desc: 'Audio, PDF, E-mail of Excel input via API of web.', status: 'Active' },
                                    { title: 'Agentic Processing', desc: 'Contextuele extractie via gespecialiseerde LLM-nodes.', status: 'Processing' },
                                    { title: 'Verification Layer', desc: 'Cross-reference checks tegen bedrijfsregels.', status: 'Verified' },
                                    { title: 'System Dispatch', desc: 'Directe injectie in CRM, ERP of Planningstools.', status: 'Ready' }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-6 p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group">
                                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-v2-accent/10 border border-v2-accent/30 text-v2-accent font-mono text-xs">
                                            {idx + 1}
                                        </div>
                                        <div className="flex-1">
                                            <div className="font-bold text-lg group-hover:text-v2-accent transition-colors">{item.title}</div>
                                            <div className="text-white/50 text-sm font-medium">{item.desc}</div>
                                        </div>
                                        <div className="text-[10px] font-mono text-v2-accent uppercase tracking-widest hidden sm:block">
                                            [{item.status}]
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Interactive-looking terminal visualization */}
                        <div className="relative">
                            <div className="absolute -inset-4 bg-v2-accent/20 blur-[100px] rounded-full"></div>
                            <div className="relative rounded-2xl bg-[#0B1116] border border-white/20 shadow-2xl overflow-hidden font-mono text-sm leading-relaxed">
                                <div className="bg-[#1E293B] px-4 py-3 flex items-center justify-between border-b border-white/10">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                    </div>
                                    <div className="text-white/40 text-[10px] uppercase tracking-widest">flowtiq-core-v2.service</div>
                                    <div className="w-12"></div>
                                </div>
                                <div className="p-8 space-y-4 max-h-[500px] overflow-hidden">
                                    <div className="flex gap-4">
                                        <span className="text-v2-accent">λ</span>
                                        <span className="text-white/80">initializing_agent_swarm...</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-v2-accent-alt">→</span>
                                        <span className="text-white/40">loading_context_from_dossier_7721.pdf</span>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <span className="text-v2-accent">✓</span>
                                        <div className="text-v2-accent/80">
                                            entities_extracted:<br />
                                            <span className="text-white/50 pl-4">{'{ "client": "FlowTIQ", "action": "Refactor V2" }'}</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-v2-accent-alt">→</span>
                                        <span className="text-white/40">calculating_roi_projections...</span>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="text-v2-success">✓</span>
                                        <span className="text-white/80">dispatching_to_erp_module [success]</span>
                                    </div>
                                    <div className="pt-6 border-t border-white/5 mt-6">
                                        <div className="text-v2-accent font-black text-xl mb-1">94.2% Efficiency</div>
                                        <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-v2-accent h-full w-[94%]" ></div>
                                        </div>
                                    </div>
                                    <div className="animate-pulse flex gap-2 pt-2">
                                        <div className="w-2 h-4 bg-v2-accent"></div>
                                        <span className="text-[10px] text-white/30 uppercase tracking-widest italic">Awaiting Next Sequence...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════
                SECTION 4 — Product Ecosystem (VoiceIQ / AssistIQ)
               ═══════════════════════════════════ */}
            <section className="py-32 bg-v2-bg">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                        <div className="text-v2-accent font-mono text-xs uppercase tracking-[0.5em]">The Ecosystem</div>
                        <h2 className="text-4xl lg:text-6xl font-black text-v2-primary">Gespecialiseerde <span className="text-transparent bg-clip-text bg-gradient-to-r from-v2-accent to-v2-accent-alt">Nodes.</span></h2>
                        <p className="text-v2-text-secondary text-lg font-medium leading-relaxed">
                            Universele oplossingen zijn voor de massa. Wij bouwen specifieke AI-architecturen voor specifieke zakelijke problemen.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* VoiceIQ Card */}
                        <div className="relative group rounded-[2.5rem] bg-v2-surface border-2 border-v2-border/30 p-12 hover:border-v2-accent transition-all hover:shadow-2xl overflow-hidden active:scale-95 cursor-pointer">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-v2-accent/5 rounded-full -mr-20 -mt-20 group-hover:bg-v2-accent/10 transition-all"></div>
                            <div className="relative z-10 space-y-8">
                                <div className="w-16 h-16 rounded-2xl bg-v2-accent/10 flex items-center justify-center text-v2-accent border border-v2-accent/20">
                                    <MdMic size={36} />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-3xl font-black text-v2-primary">VoiceIQ</h3>
                                    <p className="text-v2-text-secondary font-medium leading-relaxed">
                                        Van audio naar actie in microseconden. Geen simpele transcriptie, maar diepe extractie van actiepunten, emotie en context uit elk zakelijk gesprek.
                                    </p>
                                </div>
                                <ul className="space-y-3 font-medium text-v2-text-secondary">
                                    {['Conversational Context Mapping', 'Automated CRM Updates', 'Multi-Language Synthesis'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <MdCheckCircle size={18} className="text-v2-accent" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <VersionLink href="/producten" className="inline-flex items-center gap-2 font-black text-v2-accent uppercase text-xs tracking-widest pt-4 group-hover:gap-4 transition-all">
                                    Explore VoiceIQ <MdArrowForward size={16} />
                                </VersionLink>
                            </div>
                        </div>

                        {/* AssistIQ Card */}
                        <div className="relative group rounded-[2.5rem] bg-v2-primary border-2 border-v2-primary p-12 hover:border-v2-accent-alt transition-all hover:shadow-2xl overflow-hidden active:scale-95 cursor-pointer">
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-v2-accent-alt/10 rounded-full -ml-20 -mb-20 group-hover:bg-v2-accent-alt/20 transition-all"></div>
                            <div className="relative z-10 space-y-8">
                                <div className="w-16 h-16 rounded-2xl bg-v2-accent-alt/10 flex items-center justify-center text-v2-accent-alt border border-v2-accent-alt/20">
                                    <MdChat size={36} />
                                </div>
                                <div className="space-y-3">
                                    <h3 className="text-3xl font-black text-white">AssistIQ</h3>
                                    <p className="text-white/70 font-medium leading-relaxed">
                                        De enige assistent die écht weet hoe jouw bedrijf werkt. Direct getraind op jouw interne documentatie, handleidingen en klantinformatie.
                                    </p>
                                </div>
                                <ul className="space-y-3 font-medium text-white/70">
                                    {['Internal RAG Knowledge Base', 'Self-Optimizing Query Engine', 'Zero-Hallucination Protocol'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3">
                                            <MdCheckCircle size={18} className="text-v2-accent-alt" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <VersionLink href="/producten" className="inline-flex items-center gap-2 font-black text-v2-accent-alt uppercase text-xs tracking-widest pt-4 group-hover:gap-4 transition-all">
                                    Explore AssistIQ <MdArrowForward size={16} />
                                </VersionLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════
                SECTION 5 — FAQ Control Center
               ═══════════════════════════════════ */}
            <section className="py-32 bg-v2-surface border-y border-v2-border/30 relative">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-20 space-y-4">
                        <div className="text-v2-primary/40 font-mono text-[10px] uppercase tracking-[0.4em]">Query Terminal</div>
                        <h2 className="text-4xl lg:text-5xl font-black text-v2-primary">Veelgestelde vragen</h2>
                        <div className="w-20 h-1 bg-v2-accent mx-auto"></div>
                    </div>

                    <div className="space-y-2">
                        <FaqItem
                            question="Wat maakt FlowTIQ anders dan ChatGPT?"
                            answer="ChatGPT is een generalist; FlowTIQ is een specialist. Wij bouwen gesloten pipelines die alleen getraind zijn op jouw data, voorzien zijn van een verificatie-layer om fouten te voorkomen, en direct gekoppeld zijn aan jouw bedrijfssystemen voor actie in plaats van alleen tekst."
                        />
                        <FaqItem
                            question="Hoe waarborgen jullie de privacy van onze data?"
                            answer="Privacy is onze core. Alle data wordt gehost op EU-servers, we zijn volledig GDPR compliant en we gebruiken 'zero-training' policies op publieke modellen. Jouw data blijft van jou, Altijd."
                        />
                        <FaqItem
                            question="Kunnen we klein beginnen?"
                            answer="Ja, absoluut. Onze architectuur is modulair. Veel organisaties starten met één specifieke workflow (bijv. VoiceIQ voor wekelijkse rapportages) en schalen vandaaruit verder naar een volledig autonoom ecosysteem."
                        />
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════
                SECTION 6 — Final Conversion Pipeline
               ═══════════════════════════════════ */}
            <section className="py-24 bg-v2-bg">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="relative rounded-[3rem] bg-v2-primary p-12 lg:p-24 overflow-hidden border border-white/10 shadow-2xl group">
                        {/* Dynamic background element */}
                        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-br from-v2-accent/20 to-transparent rounded-full -mr-48 -mt-48 animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-gradient-to-tr from-v2-accent-alt/10 to-transparent rounded-full -ml-32 -mb-32"></div>

                        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <h2 className="text-4xl lg:text-6xl font-black text-white leading-[1.1]">
                                    Klaar voor de <span className="text-v2-accent">automatisering</span> van morgen?
                                </h2>
                                <p className="text-white/70 text-xl font-medium leading-relaxed max-w-xl">
                                    Plan een discovery call. We brengen je processen in kaart en laten je binnen 30 minuten zien waar de grootste impact ligt.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <VersionLink
                                        href="/contact"
                                        className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-v2-accent text-v2-bg font-black rounded-sm hover:scale-105 transition-all shadow-xl shadow-v2-accent/20 active:scale-95"
                                    >
                                        Start Discovery Phase <MdRocketLaunch size={22} />
                                    </VersionLink>
                                    <VersionLink
                                        href="/producten"
                                        className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-white/10 text-white font-bold rounded-sm border border-white/20 hover:bg-white/20 transition-all uppercase text-sm tracking-widest"
                                    >
                                        Architecture Overview
                                    </VersionLink>
                                </div>
                            </div>
                            <div className="hidden lg:block">
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { label: 'Latency', value: '180ms', sub: 'Peak processing speed' },
                                        { label: 'Uptime', value: '99.99%', sub: 'SLA Guaranteed' },
                                        { label: 'Accuracy', value: '98.2%', sub: 'Verified by Agent Swarm' },
                                        { label: 'Privacy', value: 'ISO', sub: '27001 Certified' }
                                    ].map((stat, i) => (
                                        <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md">
                                            <div className="text-v2-accent font-black text-3xl mb-1">{stat.value}</div>
                                            <div className="text-white font-bold text-sm mb-1">{stat.label}</div>
                                            <div className="text-white/40 text-[10px] font-mono tracking-tighter uppercase">{stat.sub}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
