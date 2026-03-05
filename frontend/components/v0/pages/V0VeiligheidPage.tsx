import {
    MdLocationOn,
    MdShield,
    MdHistory,
    MdTimeline,
    MdAutoFixHigh,
    MdVerifiedUser,
    MdLock,
    MdLayers,
    MdSpeed,
    MdCheckCircle,
    MdTrendingUp,
    MdStorage,
    MdLibraryAddCheck
} from '@/components/icons';

export const metadata = {
    title: "Veiligheid & Privacy",
    description: "Innovatie mag nooit ten koste gaan van databeveiliging. Daarom hanteren wij een strikt 'Privacy by Design' beleid.",
};

export function V0VeiligheidPage() {
    return (
        <main className="flex-grow pt-32 pb-24">
            {/* Header */}
            <section className="lg:px-8 mb-20 px-6 text-center relative">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-indigo font-montserrat mb-6">
                    Veiligheid en privacy: <br className="hidden md:block" />
                    <span className="text-mint">Geen sluitpost, maar het fundament</span>
                </h1>
                <p className="text-lg md:text-xl text-slate-500 font-sans leading-relaxed max-w-4xl mx-auto">
                    Innovatie mag nooit ten koste gaan van databeveiliging. Daarom hanteren wij een strikt 'Privacy by Design' beleid, waarbij transparantie en controleerbaarheid voorop staan.
                </p>
            </section>

            {/* Content Grid */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 space-y-12">
                {/* Data-soevereiniteit */}
                <SecurityCard
                    title="Data-soevereiniteit: Eigen data, eigen regels"
                    description="Gevoelige informatie verdwijnt nooit in ondoorzichtige clouds van tech-reuzen."
                    items={[
                        {
                            icon: <MdLocationOn size={24} className="text-mint flex-shrink-0" />,
                            text: <><span className="font-bold">Locatie:</span> Verwerking vindt plaats in Nederlandse datacenters (vaak reeds in gebruik door de organisatie) of, indien gewenst en gefaciliteerd, volledig on-premise binnen de eigen muren.</>
                        },
                        {
                            icon: <MdLock size={24} className="text-mint flex-shrink-0" />,
                            text: <><span className="font-bold">Geen Data-mining:</span> Data wordt uitsluitend gebruikt voor de specifieke opdracht en nooit ingezet om publieke AI-modellen te trainen.</>
                        }
                    ]}
                />

                {/* Digitale assistenten */}
                <SecurityCard
                    title="Digitale assistenten: Veilig & 'Attended'"
                    description="De browser-extensies van FlowTIQ zijn géén 'black box' die alles meelezen, maar 'Attended Assistenten' die enkel handelen in opdracht."
                    items={[
                        {
                            icon: <MdShield size={24} className="text-mint flex-shrink-0" />,
                            text: <><span className="font-bold">Scope-beperking:</span> Technisch werkt de software uitsluitend op vooraf geautoriseerde URL's en applicaties. Daarbuiten is the assistent 'blind'.</>
                        },
                        {
                            icon: <MdVerifiedUser size={24} className="text-mint flex-shrink-0" />,
                            text: <><span className="font-bold">Rechten:</span> Een assistent opereert altijd onder de rechten van de ingelogde medewerker en kan nooit meer zien of doen dan de gebruiker zelf mag.</>
                        }
                    ]}
                />

                {/* Audit Trail */}
                <SecurityCard
                    title="Volledige controleerbaarheid (Audit Trail)"
                    description="Voor compliance officers en FG's is inzicht in het wie, wat en waarom cruciaal."
                    items={[
                        {
                            icon: <MdTimeline size={24} className="text-mint flex-shrink-0" />,
                            text: <><span className="font-bold">Logging:</span> Elke actie, elke input en elke gegenereerde output wordt vastgelegd in een uitgebreide audit trail.</>
                        },
                        {
                            icon: <MdHistory size={24} className="text-mint flex-shrink-0" />,
                            text: <><span className="font-bold">Reconstructie:</span> Achteraf is altijd exact te reconstrueren welke keuzes de assistent heeft gemaakt en op basis van welke data dit is gebeurd.</>
                        }
                    ]}
                />

                {/* Technologie */}
                <div className="bg-white rounded-[40px] p-8 md:p-12 border border-slate-200 shadow-sm transition-all hover:shadow-md">
                    <h3 className="text-2xl font-bold text-indigo font-montserrat mb-6">Technologie: Fundament van Open Source & Expertise</h3>
                    <p className="text-slate-600 mb-8">Er wordt gebouwd op bewezen Open Source platformen en LLM-modellen (o.a. Kubernetes & Nvidia frameworks).</p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex gap-4">
                            <MdLayers size={24} className="text-mint flex-shrink-0" />
                            <p className="text-sm font-sans text-slate-600">
                                <span className="font-bold">Transparantie:</span> Door gebruik van open standaarden worden vendor lock-ins vermeden en is de werking van de software volledig uitlegbaar.
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <MdSpeed size={24} className="text-mint flex-shrink-0" />
                            <p className="text-sm font-sans text-slate-600">
                                <span className="font-bold">Snelheid & Expertise:</span> Dankzij de enorme community en onze eigen expertise in deze technologieën, wordt wekelijks geprofiteerd van updates in performance en veiligheid.
                            </p>
                        </div>
                        <div className="flex gap-4 md:col-span-2 pt-4 border-t border-slate-50">
                            <MdAutoFixHigh size={24} className="text-mint flex-shrink-0" />
                            <p className="text-sm font-sans text-slate-600">
                                <span className="font-bold">Eigen regie:</span> Bovenop deze open basis ligt de eigen ontwikkelde technologie die zorgt voor stabiele integratie en procesborging.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Compliance */}
                <div className="bg-indigo-950 rounded-[40px] p-8 md:p-12 text-white shadow-xl shadow-indigo-900/10">
                    <h3 className="text-2xl font-bold font-montserrat mb-6 underline decoration-mint/40 underline-offset-8">Compliance & Samenwerking</h3>
                    <p className="text-indigo-200 mb-10">Vragen van een CISO of Privacy Officer worden niet alleen beantwoord, maar ook proactief opgelost.</p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                            <MdCheckCircle size={24} className="text-mint flex-shrink-0" />
                            <p className="text-sm font-sans text-indigo-100">
                                <span className="font-bold text-white">Certificering:</span> Alle processen zijn ingericht conform ISO 27001 en NEN 7510 (het formele certificeringstraject loopt).
                            </p>
                        </div>
                        <div className="flex gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
                            <MdLibraryAddCheck size={24} className="text-mint flex-shrink-0" />
                            <p className="text-sm font-sans text-indigo-100">
                                <span className="font-bold text-white">DPIA Ondersteuning:</span> Benodigde input voor de Data Protection Impact Assessment (DPIA) wordt proactief aangeleverd om risico's gezamenlijk te borgen.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

function SecurityCard({ title, description, items }: { title: string, description: string, items: any[] }) {
    return (
        <div className="bg-white rounded-[40px] p-8 md:p-12 border border-slate-200 shadow-sm transition-all hover:shadow-md">
            <h3 className="text-2xl font-bold text-indigo font-montserrat mb-6">{title}</h3>
            <p className="text-slate-600 mb-8">{description}</p>
            <div className="grid md:grid-cols-2 gap-8">
                {items.map((item, i) => (
                    <div key={i} className="flex gap-4">
                        {item.icon}
                        <p className="text-sm font-sans text-slate-600">{item.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
