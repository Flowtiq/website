'use client';

import React from 'react';
import { MdCheckCircle, MdRocketLaunch, MdArrowForward } from '@/components/icons';
import { VersionLink } from '@/components/VersionLink';

export function V1OverOnsPage() {
    return (
        <div className="bg-v1-bg font-sans">
            {/* Page Header - Editorial Intro */}
            <section className="pt-56 pb-32 bg-v1-primary text-white relative overflow-hidden text-center">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:60px_60px]"></div>
                <div className="max-w-5xl mx-auto px-6 relative z-10">
                    <span className="text-xs font-black uppercase tracking-[0.5em] text-v1-accent mb-8 block">Onze Filosofie</span>
                    <h1 className="text-6xl md:text-9xl font-bold mb-12 tracking-tighter leading-[0.85]">
                        Kwaliteit boven <br /> <span className="text-v1-accent italic font-serif">Functionaliteit.</span>
                    </h1>
                    <p className="text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-medium">
                        Meer dan softwareleverancier: Uw partner in proces en techniek.
                    </p>
                </div>
            </section>

            {/* Values - High Contrast Boutique Grid */}
            <section className="py-48 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-12 gap-24 items-start mb-48">
                        <div className="lg:col-span-5">
                            <h2 className="text-4xl lg:text-6xl font-bold text-v1-primary leading-tight tracking-tighter">
                                Waarom klanten <br /> voor <span className="text-v1-accent italic font-serif underline decoration-2 underline-offset-8">ons kiezen.</span>
                            </h2>
                        </div>
                        <div className="lg:col-span-7 grid md:grid-cols-2 gap-12">
                            <ValueBox
                                title="Voordat we bouwen, willen we begrijpen"
                                desc="De basis van elk succesvol IT-project is een effectief proces. Omdat wij onze wortels hebben in procesoptimalisatie, beginnen we altijd met luisteren."
                            />
                            <ValueBox
                                title="Expert-team"
                                desc="Wij combineren de slagkracht van 'enterprise' technologie met de wendbaarheid van een specialistisch team."
                            />
                            <ValueBox
                                title="Schaalbaar"
                                desc="Of uw organisatie nu 20 of 1000+ medewerkers telt; onze oplossingen groeien moeiteloos mee."
                            />
                            <ValueBox
                                title="Iteratief & Effectief"
                                desc="Geen abstracte plannen. Wij werken in korte cycli en leveren stap voor stap concrete meerwaarde. Zo is vooruitgang direct merkbaar."
                            />
                            <ValueBox
                                title="Kostenefficiënt"
                                desc="Door onze platte structuur en focus gaat de investering direct naar expertise en oplossingen, zonder onnodige overhead."
                            />
                            <ValueBox
                                title="Echte betrokkenheid"
                                desc="Wij zijn een partner die er op gebrand is een bijdrage te leveren aan de missie van onze klanten. Transparant en nuchter."
                            />
                        </div>
                    </div>

                    {/* Philosophy Section */}
                    <div className="max-w-4xl mx-auto text-center space-y-16 mb-48">
                        <h2 className="text-3xl lg:text-5xl font-bold text-v1-primary leading-tight tracking-tighter italic font-serif">
                            Bij FlowTIQ geloven we dat technologie pas waarde heeft als het een menselijk probleem oplost.
                        </h2>
                        <div className="space-y-8 text-xl text-v1-text-secondary font-medium leading-relaxed">
                            <p>
                                Wij zijn geen traditioneel softwarebedrijf dat uitsluitend functionaliteiten ontwikkelt, en ook geen klassiek consultancy bureau dat stopt bij het leveren van een adviesrapport.
                            </p>
                            <p>
                                Wij begeleiden het volledige traject: van de eerste processchets tot een succesvolle implementatie en adoptie op de werkvloer. Wij brengen complexe veranderingen terug tot overzichtelijke stappen.
                            </p>
                        </div>
                    </div>

                    {/* Full Width Impact Block */}
                    <div className="relative rounded-[100px] bg-v1-bg p-20 lg:p-32 border border-slate-100 shadow-3xl overflow-hidden group">
                        <div className="absolute right-0 top-0 w-1/2 h-full bg-white transition-transform duration-1000 translate-x-3/4 group-hover:translate-x-1/2 skew-x-12"></div>
                        <div className="relative z-10 max-w-3xl">
                            <h3 className="text-4xl lg:text-7xl font-bold text-v1-primary mb-12 leading-tight tracking-tighter">
                                Technologie moet <br /> een menselijk <br /> <span className="text-v1-accent italic font-serif">probleem oplossen.</span>
                            </h3>
                            <p className="text-xl text-v1-text-secondary font-medium leading-relaxed mb-12">
                                Wij zijn de collega's die u altijd al wilde hebben: een team dat verrassend veel impact maakt in beperkte tijd, van processchets tot adoptie.
                            </p>
                            <VersionLink
                                href="/contact"
                                className="inline-flex items-center gap-4 px-12 py-6 bg-v1-primary text-white font-black rounded-full hover:scale-105 transition-all text-xs tracking-widest uppercase shadow-2xl shadow-v1-primary/20"
                            >
                                Werk met ons <MdRocketLaunch size={18} />
                            </VersionLink>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

function ValueBox({ title, desc }: { title: string, desc: string }) {
    return (
        <div className="group space-y-6">
            <div className="h-1 w-12 bg-v1-accent group-hover:w-24 transition-all duration-500"></div>
            <h4 className="text-2xl font-bold text-v1-primary tracking-tight">{title}</h4>
            <p className="text-lg text-v1-text-secondary leading-relaxed font-medium">{desc}</p>
        </div>
    );
}
