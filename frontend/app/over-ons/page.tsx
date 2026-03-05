'use client';

import React from 'react';
import { useVersion } from '@/lib/VersionContext';
import { V1OverOnsPage } from '@/components/v1/pages/V1OverOnsPage';
import { V2OverOnsPage } from '@/components/v2/pages/V2OverOnsPage';
import { V3OverOnsPage } from '@/components/v3/pages/V3OverOnsPage';

export default function OverOnsPageSwitcher() {
    const { version } = useVersion();

    if (version === 3) {
        return <V3OverOnsPage />;
    }

    if (version === 2) {
        return <V2OverOnsPage />;
    }

    if (version === 1) {
        return <V1OverOnsPage />;
    }

    return <V0OverOnsPage />;
}

function V0OverOnsPage() {
    return (
        <main className="flex-grow pt-32 pb-24">
            {/* Mission */}
            <section className="lg:px-8 mb-20 px-6 text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-indigo font-montserrat mb-8">
                    Meer dan softwareleverancier: <br className="hidden md:block" />
                    <span className="text-mint">Uw partner in proces en techniek</span>
                </h1>
            </section>

            {/* Values Grid */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ValueCard
                        title="Voordat we bouwen, willen we begrijpen"
                        description="De basis van elk succesvol IT-project is een effectief proces. Omdat wij onze wortels hebben in procesoptimalisatie, beginnen we altijd met luisteren. Waar lopen uw medewerkers vast? Wat is de échte vraag achter de vraag?"
                    />
                    <ValueCard
                        title="Enterprise technologie & een wendbaar expert-team"
                        description="Wij combineren de slagkracht van 'enterprise' technologie met de wendbaarheid van een specialistisch team."
                    />
                    <ValueCard
                        title="Schaalbaar"
                        description="Of uw organisatie nu 20 of 1000+ medewerkers telt; onze oplossingen groeien moeiteloos mee."
                    />
                    <ValueCard
                        title="Iteratief & Effectief"
                        description="Geen abstracte plannen die pas over een langere periode resultaat opleveren. Wij werken in korte cycli en leveren stap voor stap concrete meerwaarde. Zo is vooruitgang, naast doorontwikkeling, direct merkbaar."
                    />
                    <ValueCard
                        title="Kostenefficiënt"
                        description="Door onze platte structuur en focus gaat de investering direct naar expertise en oplossingen, zonder onnodige overhead."
                    />
                    <ValueCard
                        title="Echte betrokkenheid (Partnership)"
                        description="Wij zijn geen leverancier maar een partner die er op gebrand is een bijdrage te leveren aan de missie van onze klanten. Onze stijl is transparant en nuchter: we doen wat we zeggen en we zeggen wat we doen. FlowTIQ gaat voor langdurige relaties gebaseerd op transparantie, vertrouwen en meetbaar resultaat."
                    />
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="max-w-4xl mx-auto px-6 lg:px-8 py-24 text-center border-t border-slate-200">
                <h2 className="text-2xl font-bold text-indigo font-montserrat mb-12">
                    Bij FlowTIQ geloven we dat technologie pas waarde heeft als het een menselijk probleem oplost.
                </h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                    <p>
                        Wij zijn geen traditioneel softwarebedrijf dat uitsluitend functionaliteiten ontwikkelt, en ook geen klassiek consultancy bureau dat stopt bij het leveren van een adviesrapport.
                    </p>
                    <p>
                        Wij begeleiden het volledige traject: van de eerste processchets tot een succesvolle implementatie en adoptie op de werkvloer. Wij brengen complexe veranderingen terug tot overzichtelijke stappen. Zie ons als de collega's die u altijd al wilde hebben: een team dat verrassend veel impact maakt in beperkte tijd.
                    </p>
                </div>
            </section>
        </main>
    );
}

function ValueCard({ title, description }: { title: string, description: string }) {
    return (
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
            <h3 className="text-xl font-bold text-indigo mb-4">{title}</h3>
            <p className="text-sm leading-relaxed text-slate-600">{description}</p>
        </div>
    );
}
