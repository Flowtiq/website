'use client';

import React from 'react';
import {
    MdHandshake,
    MdGroups,
    MdTrendingUp,
    MdArrowForward,
    MdAutoFixHigh
} from '@/components/icons';
import { VersionLink } from '@/components/VersionLink';

export function V3OverOnsPage() {
    return (
        <main className="bg-white text-v3-text font-sans overflow-x-hidden pt-40 pb-24 dreelio-gradient">
            <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-32">
                <div className="text-center space-y-8">
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-v3-bg-alt border border-v3-border shadow-sm text-v3-text font-bold text-xs tracking-widest uppercase">
                        Our Mission
                    </div>
                    <h1 className="text-6xl md:text-9xl font-black tracking-tighter text-v3-primary leading-[0.9] mb-12">
                        Uw partner in <br />
                        <span className="text-v3-accent text-italic-accent">proces en techniek.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-v3-text-secondary max-w-3xl mx-auto font-medium leading-relaxed">
                        Meer dan softwareleverancier. De basis van elk succesvol IT-project is een effectief proces. Omdat wij onze wortels hebben in procesoptimalisatie, beginnen we altijd met luisteren.
                    </p>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-v3-bg-alt/30">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        <ValueCard
                            icon={<MdAutoFixHigh size={48} />}
                            title="Voordat we bouwen, willen we begrijpen"
                            desc="De basis van elk succesvol IT-project is een effectief proces. Omdat wij onze wortels hebben in procesoptimalisatie, beginnen we altijd met luisteren."
                        />
                        <ValueCard
                            icon={<MdGroups size={48} />}
                            title="Expert-team"
                            desc="Wij combineren de slagkracht van 'enterprise' technologie met de wendbaarheid van een specialistisch team."
                        />
                        <ValueCard
                            icon={<MdTrendingUp size={48} />}
                            title="Schaalbaar"
                            desc="Of uw organisatie nu 20 of 1000+ medewerkers telt; onze oplossingen groeien moeiteloos mee."
                        />
                        <ValueCard
                            icon={<MdAutoFixHigh size={48} />}
                            title="Iteratief & Effectief"
                            desc="Geen abstracte plannen. Wij werken in korte cycli en leveren stap voor stap concrete meerwaarde. Zo is vooruitgang direct merkbaar."
                        />
                        <ValueCard
                            icon={<MdTrendingUp size={48} />}
                            title="Kostenefficiënt"
                            desc="Door onze platte structuur en focus gaat de investering direct naar expertise en oplossingen, zonder onnodige overhead."
                        />
                        <ValueCard
                            icon={<MdHandshake size={48} />}
                            title="Echte betrokkenheid"
                            desc="Wij zijn een partner die er op gebrand is een bijdrage te leveren aan de missie van onze klanten. Transparant en nuchter."
                        />
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-32 px-6 lg:px-8 border-t border-v3-border/30">
                <div className="max-w-4xl mx-auto text-center space-y-12">
                    <h2 className="text-4xl md:text-5xl font-black text-v3-primary tracking-tighter leading-tight italic">
                        Bij FlowTIQ geloven we dat technologie pas waarde heeft als het een menselijk probleem oplost.
                    </h2>
                    <div className="space-y-8 text-xl text-v3-text-secondary font-medium leading-relaxed">
                        <p>
                            Wij zijn geen traditioneel softwarebedrijf dat uitsluitend functionaliteiten ontwikkelt, en ook geen klassiek consultancy bureau dat stopt bij het leveren van een adviesrapport.
                        </p>
                        <p>
                            Wij begeleiden het volledige traject: van de eerste processchets tot een succesvolle implementatie en adoptie op de werkvloer. Wij brengen complexe veranderingen terug tot overzichtelijke stappen.
                        </p>
                    </div>
                </div>
            </section>

            {/* experience and CTA follow... */}
            <section className="py-24 text-center max-w-4xl mx-auto">
                <h2 className="text-4xl font-black text-v3-primary mb-8 tracking-tighter italic">"Laten we samen de toekomst van werk herdefiniëren."</h2>
                <VersionLink
                    href="/contact"
                    className="inline-flex items-center gap-3 px-10 py-5 bg-v3-primary text-white font-black rounded-full hover:scale-105 transition-all shadow-xl shadow-v3-primary/20"
                >
                    Neem Contact Op <MdArrowForward />
                </VersionLink>
            </section>
        </main>
    );
}

function ValueCard({ icon, title, desc }: any) {
    return (
        <div className="bg-white p-16 rounded-[4rem] border border-v3-border shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:border-v3-primary/20 transition-all space-y-8 group">
            <div className="text-v3-primary transition-transform group-hover:scale-110 duration-500">
                {icon}
            </div>
            <div className="space-y-4">
                <h3 className="text-3xl font-black tracking-tight text-v3-primary uppercase">{title}</h3>
                <p className="text-lg text-v3-text-secondary font-medium leading-relaxed">{desc}</p>
            </div>
        </div>
    );
}
