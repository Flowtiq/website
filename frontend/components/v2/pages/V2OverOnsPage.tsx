'use client';

import React from 'react';
import { MdGroups, MdHandshake, MdTrendingUp, MdRadar, MdWorkspaces, MdFiberManualRecord, MdTerminal } from '@/components/icons';
import { Divider } from '@/components/ui/Divider';

export function V2OverOnsPage() {
    return (
        <main className="flex-grow pt-40 pb-24 bg-v2-bg overflow-hidden relative">
            {/* Background Architecture Grid */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
                <div className="absolute inset-0 bg-[url('/img/grid.svg')] bg-repeat"></div>
            </div>

            {/* Hero Section: The Vision */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32 relative">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <span className="text-[10px] font-mono text-v2-accent font-black uppercase tracking-widest bg-v2-accent/10 px-2 py-0.5 border border-v2-accent/30 rounded-[var(--radius-v2)]">
                                Core_Philosophy
                            </span>
                            <div className="h-[1px] w-12 bg-v2-border/30"></div>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-v2-primary font-mono tracking-tighter mb-8 uppercase leading-none">
                            Human Intelligence <br />
                            <span className="text-v2-accent">Scalable Tech</span>
                        </h1>
                        <p className="text-xl text-v2-text-secondary font-medium leading-relaxed max-w-xl">
                            Wij zijn geen traditioneel softwarebedrijf. Wij zijn de architecten van procesoptimalisatie die de grens tussen menselijke creativiteit en machine-efficiëntie vervagen.
                        </p>
                    </div>
                    <div className="relative">
                        <div className="aspect-square bg-v2-surface border border-v2-border/50 rounded-[var(--radius-v2-lg)] p-12 relative group shadow-2xl">
                            <div className="absolute top-0 right-0 p-4 font-mono text-[8px] opacity-20 group-hover:opacity-40 transition-opacity">
                                REF: 41.9022° N, 12.4539° E
                            </div>
                            <div className="h-full w-full border border-v2-accent/10 flex flex-col items-center justify-center space-y-8">
                                <MdWorkspaces size={80} className="text-v2-accent/50 animate-pulse" />
                                <div className="text-center">
                                    <span className="block text-2xl font-black text-v2-primary font-mono tracking-widest uppercase">NODE_COLLAB</span>
                                    <span className="text-[10px] font-mono text-v2-text-secondary uppercase tracking-[0.2em]">Active_Sync_Mode</span>
                                </div>
                            </div>

                            {/* Floating Tech Annotations */}
                            <div className="absolute -bottom-8 -left-8 bg-v2-primary text-white p-6 rounded-[var(--radius-v2)] shadow-xl hidden md:block border border-white/10">
                                <div className="flex items-center gap-4 mb-3">
                                    <MdGroups size={24} className="text-v2-accent" />
                                    <span className="text-xs font-mono font-black uppercase tracking-widest">Expert_Nodes</span>
                                </div>
                                <div className="text-[10px] font-mono opacity-60 uppercase leading-relaxed">
                                    Multidisciplinary Teams <br />
                                    Rapid Iteration Cycles <br />
                                    No Legacy Overhead
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Grid: System Specifications */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
                <div className="flex items-center gap-4 mb-16">
                    <h2 className="text-[10px] font-mono text-v2-text-secondary font-black uppercase tracking-[0.4em]">System_Specs</h2>
                    <Divider variant="simple" className="flex-grow !py-0" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
                    <ValueCard
                        code="01"
                        title="Proces_First"
                        subtitle="Voordat we bouwen, willen we begrijpen"
                        description="De basis van elk succesvol IT-project is een effectief proces. Omdat wij onze wortels hebben in procesoptimalisatie, beginnen we altijd met luisteren."
                        icon={<MdRadar size={20} />}
                    />
                    <ValueCard
                        code="02"
                        title="Specialist_Team"
                        subtitle="Enterprise technologie & wendbaar expert-team"
                        description="Wij combineren de slagkracht van 'enterprise' technologie met de wendbaarheid van een specialistisch team."
                        icon={<MdGroups size={20} />}
                    />
                    <ValueCard
                        code="03"
                        title="Scale_Module"
                        subtitle="Schaalbaar Architectuur"
                        description="Of uw organisatie nu 20 of 1000+ medewerkers telt; onze oplossingen groeien moeiteloos mee met uw requirements."
                        icon={<MdTrendingUp size={20} />}
                    />
                    <ValueCard
                        code="04"
                        title="Iteratie_Cycle"
                        subtitle="Iteratief & Effectief"
                        description="Geen abstracte plannen: wij werken in korte cycli en leveren stap voor stap concrete meerwaarde."
                        icon={<MdTerminal size={20} />}
                    />
                    <ValueCard
                        code="05"
                        title="Cost_Control"
                        subtitle="Kostenefficiënt"
                        description="Door onze platte structuur gaat de investering direct naar expertise en oplossingen, zonder onnodige overhead."
                        icon={<MdHandshake size={20} />}
                    />
                    <ValueCard
                        code="06"
                        title="Partner_Sync"
                        subtitle="Echte betrokkenheid (Partnership)"
                        description="Wij zijn geen leverancier maar een partner die er op gebrand is een bijdrage te leveren aan uw missie."
                        icon={<MdWorkspaces size={20} />}
                    />
                </div>
            </section>

            {/* Final Philosophy: Protocol Definition */}
            <section className="max-w-4xl mx-auto px-6 lg:px-8 py-32 relative">
                <Divider variant="dot-both" className="mb-16" />

                <div className="bg-v2-surface p-12 lg:p-16 rounded-[var(--radius-v2-lg)] border border-v2-border/50 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-6 opacity-[0.03] scale-150 rotate-12">
                        <MdHandshake size={200} />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-black text-v2-primary font-mono tracking-tighter uppercase mb-12 relative z-10 leading-tight">
                        Bij FlowTIQ geloven we dat technologie pas waarde heeft als het een <span className="text-v2-accent">menselijk probleem</span> oplost.
                    </h2>

                    <div className="space-y-8 text-lg text-v2-text-secondary font-medium leading-relaxed relative z-10">
                        <p>
                            Wij zijn geen traditioneel softwarebedrijf dat uitsluitend functionaliteiten ontwikkelt, en ook geen klassiek consultancy bureau dat stopt bij het leveren van een adviesrapport.
                        </p>
                        <p>
                            Wij begeleiden het volledige traject: van de eerste processchets tot een succesvolle implementatie en adoptie op de werkvloer. Wij brengen complexe veranderingen terug tot overzichtelijke stappen.
                        </p>
                        <div className="pt-8 flex justify-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-v2-accent animate-pulse"></span>
                            <span className="w-2 h-2 rounded-full bg-v2-accent/50"></span>
                            <span className="w-2 h-2 rounded-full bg-v2-accent/20"></span>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

function ValueCard({ code, title, subtitle, description, icon }: any) {
    return (
        <div className="bg-v2-surface p-10 border border-v2-border/20 group hover:bg-v2-primary hover:text-white transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 font-mono text-[40px] opacity-5 group-hover:opacity-10 transition-opacity font-black">
                {code}
            </div>

            <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-v2-accent/10 rounded-[var(--radius-v2)] text-v2-accent group-hover:bg-white group-hover:text-v2-primary transition-colors">
                    {icon}
                </div>
                <h3 className="text-2xl font-black font-mono tracking-tighter uppercase">{title}</h3>
            </div>

            <div className="space-y-4">
                <h4 className="text-sm font-black uppercase tracking-widest text-v2-accent group-hover:text-v2-accent-alt transition-colors">
                    {subtitle}
                </h4>
                <p className="text-sm font-medium opacity-70 leading-relaxed group-hover:opacity-90">
                    {description}
                </p>
            </div>

            <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-40 transition-opacity">
                <MdFiberManualRecord size={6} className="text-v2-accent animate-pulse" />
                <span className="text-[8px] font-mono tracking-widest uppercase">System_Active // Node_{code}</span>
            </div>
        </div>
    );
}
