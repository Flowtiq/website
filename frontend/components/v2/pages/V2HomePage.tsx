'use client';

import React, { useState } from 'react';
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
    MdStorage,
    MdFormatQuote,
    MdAdd,
    MdArrowDownward,
    MdHistory
} from '@/components/icons';
import { VersionLink } from '@/components/VersionLink';
import { useHomeContent } from '@/lib/cms-hooks';
import { Divider } from '@/components/ui/Divider';

/* ────────────────────────────────────────
   Timeline Step Component (Visual V0 Style)
   ──────────────────────────────────────── */
function VisualTimelineStep({ num, title, description, items, isLast }: any) {
    return (
        <div className="relative pl-12 pb-16 last:pb-0">
            {!isLast && (
                <div className="absolute left-[19px] top-10 bottom-0 w-px bg-v2-border/30"></div>
            )}
            <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-v2-surface border-2 border-v2-accent flex items-center justify-center z-10 shadow-sm">
                <span className="text-[10px] font-mono font-black text-v2-accent">{num}</span>
            </div>

            <div className="space-y-4">
                <h3 className="text-2xl font-black text-v2-primary font-mono tracking-tighter uppercase">{title}</h3>
                {description && <p className="text-v2-text-secondary font-medium leading-relaxed max-w-2xl">{description}</p>}

                {items && (
                    <div className="grid sm:grid-cols-2 gap-4 pt-2">
                        {items.map((item: any, i: number) => (
                            <div key={i} className="flex gap-3 text-sm">
                                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-v2-accent flex-shrink-0"></div>
                                <span><span className="font-bold text-v2-primary">{item.label}:</span> {item.text}</span>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

/* ────────────────────────────────────────
   V2 Home Page (Updated with CMS-ready Architecture)
   ──────────────────────────────────────── */
export function V2HomePage() {
    const { data: content, isLoading } = useHomeContent();

    if (isLoading || !content) {
        return <div className="min-h-screen bg-v2-bg animate-pulse"></div>;
    }

    return (
        <div className="bg-v2-bg text-v2-text font-sans selection:bg-v2-accent/30 selection:text-v2-text overflow-x-hidden">

            {/* ═══════════════════════════════════
                SECTION 1 — Technical Hero
               ═══════════════════════════════════ */}
            <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#00C85315_1px,transparent_1px),linear-gradient(to_bottom,#00C85315_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-b from-v2-bg via-transparent to-v2-bg"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 py-24 w-full">
                    <div className="grid lg:grid-cols-12 gap-16 items-center">
                        <div className="lg:col-span-12 space-y-12 text-center lg:text-left">
                            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-sm bg-v2-primary/5 border-l-2 border-v2-accent text-v2-accent text-xs font-mono uppercase tracking-widest mb-4">
                                <MdFiberManualRecord size={8} className="animate-pulse" />
                                {content.hero.badge}
                            </div>

                            <h1 className="text-5xl lg:text-8xl font-black leading-[1.05] tracking-tight text-v2-primary max-w-5xl mx-auto lg:mx-0">
                                {content.hero.title.split(',')[0]},<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-v2-accent to-v2-accent-alt">
                                    {content.hero.title.split(',')[1]}
                                </span>
                            </h1>

                            <p className="text-xl text-v2-text-secondary font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0 border-l border-v2-border/50 pl-6">
                                {content.hero.subtitle}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-6 pt-4 justify-center lg:justify-start">
                                <VersionLink
                                    href="/contact"
                                    className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-v2-accent text-v2-bg font-black rounded-[--radius-v2] overflow-hidden transition-all hover:scale-105"
                                >
                                    <span className="relative z-10 flex items-center gap-2">{content.hero.cta_primary} <MdArrowForward size={22} className="group-hover:translate-x-1 transition-transform" /></span>
                                </VersionLink>
                                <VersionLink
                                    href="/producten"
                                    className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-transparent text-v2-primary font-bold rounded-[--radius-v2] border-2 border-v2-primary hover:bg-v2-primary/5 transition-all text-center"
                                >
                                    {content.hero.cta_secondary}
                                </VersionLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <Divider />
            </div>

            {/* ═══════════════════════════════════
                SECTION 2 — Maximale Impact (Centered Quote)
               ═══════════════════════════════════ */}
            <section className="py-24 bg-v2-bg relative">
                <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center space-y-12">
                    <div className="flex justify-center text-v2-accent/20">
                        <MdFormatQuote size={120} />
                    </div>
                    <h2 className="text-4xl lg:text-6xl font-black text-v2-primary leading-[1.1] tracking-tighter">
                        {content.impact_block.quote}
                    </h2>
                    <div className="flex justify-center">
                        <div className="h-2 w-24 bg-v2-accent rounded-full"></div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <Divider />
            </div>

            {/* ═══════════════════════════════════
                SECTION 3 — Visual Timeline (V0 Style)
               ═══════════════════════════════════ */}
            <section className="py-32 bg-v2-bg relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-5 space-y-8">
                            <div className="text-v2-accent font-mono text-xs font-black uppercase tracking-[0.4em]">The Pipeline</div>
                            <h2 className="text-4xl lg:text-6xl font-black text-v2-primary leading-tight">
                                {content.timeline.title}
                            </h2>
                            <p className="text-v2-text-secondary text-xl font-medium"> Een helder proces zonder verrassingen. Wij nemen het voortouw, samen bepalen we het tempo.</p>

                            <div className="pt-8">
                                <VersionLink
                                    href="/contact"
                                    className="inline-flex items-center gap-4 px-8 py-4 bg-v2-primary text-white font-black rounded-[--radius-v2] hover:bg-v2-accent hover:text-v2-bg transition-all group"
                                >
                                    Koffie drinken <MdAdd className="group-hover:rotate-90 transition-transform" />
                                </VersionLink>
                            </div>
                        </div>

                        <div className="lg:col-span-7">
                            <div className="space-y-0">
                                <VisualTimelineStep
                                    num="01"
                                    title="Kennismakingsgesprek"
                                    description="Een vrijblijvend adviesgesprek waarin we de kansen binnen uw organisatie verkennen."
                                />
                                <VisualTimelineStep
                                    num="02"
                                    title="Pick the Process"
                                    description="Samen selecteren we één proces dat de meeste frustratie of tijdverlies oplevert."
                                    items={[
                                        { label: "Focus", text: "Eén geselecteerd (deel)proces." },
                                        { label: "Analyse", text: "Inzicht in potentiële tijdwinst." }
                                    ]}
                                />
                                <VisualTimelineStep
                                    num="03"
                                    title="Create the Concept"
                                    description="We bouwen een werkend prototype specifiek voor uw proces."
                                />
                                <VisualTimelineStep
                                    num="04"
                                    title="Prove the Potential"
                                    description="Een pilot met een selecte groep medewerkers om de businesscase te bewijzen."
                                    isLast={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <Divider />
            </div>

            {/* ═══════════════════════════════════
                SECTION 4 — Specialized Nodes (New Grid)
               ═══════════════════════════════════ */}
            <section className="py-32 bg-v2-primary text-white relative">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-24 space-y-6">
                        <div className="text-v2-accent font-mono text-xs uppercase tracking-[0.5em]">The Infrastructure</div>
                        <h2 className="text-4xl lg:text-7xl font-black">{content.specialized_nodes.title}</h2>
                        <p className="text-white/60 text-lg font-medium leading-relaxed">
                            {content.specialized_nodes.subtitle}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                        {/* Foundation Layer */}
                        <div className="lg:col-span-4 bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-v2-accent/20 rounded-xl text-v2-accent">
                                    <MdSecurity size={40} />
                                </div>
                                <div>
                                    <div className="text-v2-accent font-mono text-xs font-black uppercase tracking-widest">Foundation_Root</div>
                                    <div className="text-2xl font-black uppercase tracking-tighter">Privacy & Veiligheid</div>
                                </div>
                            </div>
                            <p className="text-white/40 text-sm font-medium max-w-md md:text-right">
                                De onwrikbare basis onder elk product. Elke node is 'Privacy by Design' en opereert binnen absolute veiligheidskaders.
                            </p>
                        </div>

                        {/* Product Cards */}
                        {content.specialized_nodes.products.map((node: any, i: number) => (
                            <div key={i} className="bg-white p-10 rounded-[--radius-v2] border border-white/10 hover:shadow-2xl hover:-translate-y-2 transition-all group flex flex-col justify-between min-h-[320px]">
                                <div className="space-y-6">
                                    <div className="w-16 h-16 rounded-2xl bg-v2-primary/5 flex items-center justify-center text-v2-primary border border-v2-primary/10 group-hover:bg-v2-accent group-hover:text-v2-bg transition-colors">
                                        {i === 0 ? <MdMic size={32} /> : i === 1 ? <MdChat size={32} /> : i === 2 ? <MdHistory size={32} /> : <MdAnalytics size={32} />}
                                    </div>
                                    <h3 className="text-3xl font-black text-v2-primary font-mono tracking-tighter uppercase">{node.title}</h3>
                                    <p className="text-v2-text-secondary font-medium text-sm leading-relaxed">
                                        {node.description}
                                    </p>
                                </div>
                                <VersionLink href="/producten" className="flex items-center gap-2 text-[10px] font-mono font-black text-v2-accent uppercase tracking-widest pt-8 group-hover:gap-4 transition-all">
                                    Explore Node <MdArrowForward />
                                </VersionLink>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════
                SECTION 5 — Final CTA (Footer Overlay)
               ═══════════════════════════════════ */}
            <section className="py-24 bg-v2-bg">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="relative rounded-[--radius-v2-lg] bg-v2-primary p-12 lg:p-24 overflow-hidden border border-white/10 shadow-3xl">
                        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-gradient-to-br from-v2-accent/10 to-transparent rounded-full -mr-48 -mt-48"></div>

                        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <h2 className="text-4xl lg:text-7xl font-black text-white leading-tight">
                                    Klaar voor de <span className="text-v2-accent">automatisering</span> van morgen?
                                </h2>
                                <p className="text-white/60 text-xl font-medium leading-relaxed">
                                    Plan een discovery call. We laten je binnen 30 minuten zien waar de grootste impact ligt voor jouw organisatie.
                                </p>
                                <VersionLink
                                    href="/contact"
                                    className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-v2-accent text-v2-bg font-black rounded-sm hover:scale-105 transition-all"
                                >
                                    Start Discovery Phase <MdRocketLaunch size={24} />
                                </VersionLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
