import { MdMic, MdAutoFixHigh } from '@/components/icons';

export const metadata = {
    title: "Producten",
    description: "Onze assistenten werken samen met elke webapplicatie, van standaardpakket tot maatwerk.",
};

export function V0ProductenPage() {
    return (
        <main className="flex-grow pt-32 pb-24">
            {/* Header */}
            <section className="lg:px-8 mb-20 px-6 text-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-indigo font-montserrat mb-6">
                    Producten
                </h1>
                <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                    Onze assistenten werken samen met elke webapplicatie, van standaardpakket tot maatwerk.
                </p>
            </section>

            {/* VoiceIQ */}
            <UseCase
                id="voiceiq"
                icon={<MdMic size={32} />}
                title="VoiceIQ"
                theme="indigo"
                situatie={[
                    "Een intake, klantgesprek of consult",
                    "Oogcontact maken, luisteren, je aandacht volledig bij het gesprek",
                    "Multitasken is noodzakelijk omdat je moet meeschrijven of typen",
                    "Toch niet alles uit het gesprek gehaald en naderhand nog nog notities uitwerken terwijl de volgende taak alweer staat te wachten"
                ]}
                oplossing={[
                    "Informatie kan in elke webapplicatie worden opgeslagen",
                    "Activeer VoiceIQ aan het begin van het gesprek",
                    "De slimme assistent legt het gesprek woord voor woord realtime vast",
                    "Na afronding van het gesprek vat de assistent het direct voor u samen",
                    "Maak zelf nog laatste aanpassingen en geef akkoord"
                ]}
                resultaatText="De samenvatting van het gesprek wordt direct opgeslagen in de daarvoor bedoelde velden in de applicatie."
                quote="Ga weer terug naar de kern van je vak: aandacht voor de mens, terwijl de verslaglegging voor je wordt geregeld"
            />

            {/* AssistIQ */}
            <UseCase
                id="assistiq"
                icon={<MdAutoFixHigh size={32} />}
                title="AssistIQ"
                theme="mint"
                situatie={[
                    "Medewerkers, klanten of cliënten aanmaken of wijzigen",
                    "Het doorvoeren van aanpassingen in dossiers, orders, tickets of casussen",
                    "Veel herhalend en tijdrovend klik- en invoerwerk",
                    "Vaak wisselen tussen applicaties, schermen en tabbladen met kans op fouten",
                    "Applicaties helpen ons om data gestructureerd vast te leggen en weer inzichtelijk te maken",
                    "De hoge proces- en regeldruk zorgen helaas ook voor hoge administratieve verantwoording"
                ]}
                oplossing={[
                    "Informatie kan in en tussen elke webapplicatie worden verwerkt",
                    "Ondersteun medewerkers of teams direct in hun browsers met AssistIQ",
                    "De slimme assistent legt enkele vragen en keuzes voor en vult vervolgens namens de medewerker elk benodigd veld, tabblad of scherm exact volgens proces en werkinstructie.",
                    "U behoudt de controle: na een korte check verwerkt de data definitief."
                ]}
                resultaatText="Uniform, foutloos en binnen enkele seconden geregeld. De data wordt direct opgeslagen in de daarvoor bedoelde velden in de applicatie(s)."
                quote="Ga weer terug naar de kern van je vak: aandacht voor de mens, terwijl de verslaglegging voor je wordt geregeld"
            />
        </main>
    );
}

function UseCase({ id, icon, title, theme, situatie, oplossing, resultaatText, quote }: any) {
    const isIndigo = theme === 'indigo';
    const iconBg = isIndigo ? 'bg-indigo' : 'bg-mint';
    const bulletColor = isIndigo ? 'text-indigo' : 'text-mint';
    const headerText = isIndigo ? 'text-slate-400' : 'text-mint';

    return (
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-32" id={id}>
            <div className="bg-white rounded-[40px] border border-slate-200 overflow-hidden shadow-sm">
                <div className="p-10 md:p-16">
                    <div className="flex items-center gap-4 mb-8">
                        <div className={`h-14 w-14 flex-shrink-0 aspect-square rounded-2xl ${iconBg} text-white flex items-center justify-center shadow-lg`}>
                            {icon}
                        </div>
                        <h2 className="text-3xl font-bold text-indigo font-montserrat">Use Case FlowTIQ {title}</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">De Situatie</h3>
                            <ul className="space-y-4 text-sm leading-relaxed text-slate-600">
                                {situatie.map((item: string, i: number) => (
                                    <li key={i} className="flex gap-3">
                                        <span className="text-indigo">•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className={`text-xs font-bold uppercase tracking-widest ${headerText} mb-6`}>De Oplossing</h3>
                            <ul className="space-y-4 text-sm leading-relaxed text-slate-600">
                                {oplossing.map((item: string, i: number) => (
                                    <li key={i} className="flex gap-3">
                                        <span className={bulletColor}>•</span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-widest text-indigo mb-6">Het resultaat</h3>
                            <p className="text-sm leading-relaxed text-slate-600 mb-8">{resultaatText}</p>
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                                <p className="text-sm italic text-indigo font-medium">”{quote}"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
