/**
 * Mock content for V2 pages to simulate CMS data.
 * This can be swapped for Directus in the future.
 */

export const V2_HOME_MOCK = {
    hero: {
        badge: "System Status: Operational // v2.4.0",
        title: "Maximale impact op uw processen, minimale impact op uw IT.",
        subtitle: "Tijdrovende registratieprocessen horen niet meer bij deze tijd. Met de slimme digitale assistenten van FlowTIQ worden registratie- en invoertaken gehalveerd.",
        cta_primary: "Plan kennismaking",
        cta_secondary: "Onze Producten",
        quote: "Laat medewerkers weer het verschil maken, simpelweg door ze slim te ondersteunen"
    },
    impact_block: {
        title: "Simpel en snel te implementeren.",
        subtitle: "Geen vervanging van applicaties. Het huidige softwarelandschap blijft intact.",
        quote: "Laat medewerkers weer het verschil maken, simpelweg door ze slim te ondersteunen"
    },
    timeline: {
        title: "In 30 dagen van kennismaking naar minder administratieve lasten",
        steps: [
            { label: "1 uur", title: "Kennismakings- en advies gesprek" },
            {
                label: "2 dagen",
                title: "Pick the Process",
                description: "In deze fase stellen we scherp waar we ons op gaan richten...",
                items: [
                    { label: "Focus", text: "Samen selecteren we één (deel)proces dat nu de meeste frustratie of tijdverlies oplevert." },
                    { label: "Analyse", text: "We kijken naar de input, de output en alle optimalisatiemogelijkheden daartussen." }
                ]
            },
            // ... more steps will be added in implementation
        ]
    },
    specialized_nodes: {
        title: "Gespecialiseerde Nodes.",
        subtitle: "Universele oplossingen zijn voor de massa. Wij bouwen specifieke AI-architecturen voor specifieke zakelijke problemen.",
        products: [
            { id: "voiceiq", title: "VoiceIQ", description: "Van audio naar actie in microseconden." },
            { id: "assistiq", title: "AssistIQ", description: "De enige assistent die écht weet hoe jouw bedrijf werkt." },
            { id: "meetiq", title: "MeetIQ", description: "Optimaliseer elke ontmoeting." },
            { id: "analyzeiq", title: "AnalyzeIQ", description: "Toekomstbestendige analyses." }
        ]
    }
};
