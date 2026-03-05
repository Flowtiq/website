import Link from 'next/link';
import Image from 'next/image';
import {
  MdGroups,
  MdVerifiedUser,
  MdTimeline,
  MdLayers,
  MdSpeed,
  MdLock,
  MdStorage,
  MdAutoFixHigh,
  MdZap,
  MdClockLoader3,
  MdHandshake,
  MdLibraryAddCheck,
  MdShield,
  MdTrendingUp,
  MdCheckCircle
} from '@/components/icons';

export function V0HomePage() {
  return (
    <>
      {/* Hero Header */}
      <section className="lg:pt-48 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40"></div>
        <div className="absolute top-0 right-0 -z-10 w-1/3 h-1/3 bg-teal-400/10 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-blue-600/5 blur-[100px] rounded-full"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs mb-8 bg-white border-slate-200 text-slate-600 font-sans shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-teal-400"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
                </span>
                Let Your Work Flow
              </div>
              <h1 className="lg:text-5xl leading-[1.1] text-4xl font-semibold text-indigo tracking-tight font-montserrat mb-6">
                Verlos medewerkers van onnodige <span className="text-mint font-montserrat">administratieve lasten</span>
              </h1>
              <p className="lg:text-xl leading-relaxed text-lg text-slate-500 font-sans max-w-lg mb-10">
                Tijdrovende registratieprocessen horen niet meer bij deze tijd. Met de slimme digitale assistenten van FlowTIQ worden registratie- en invoertaken gehalveerd.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="inline-flex transition-all hover:bg-[#1a2036] shadow-indigo/25 text-base font-medium text-white font-sans bg-mint rounded-full pt-3.5 pr-8 pb-3.5 pl-8 shadow-lg items-center justify-center text-center">
                  Binnen 30 dagen uw medewerkers ondersteunen? Plan nu een vrijblijvend adviesgesprek in
                </Link>
              </div>
              <div className="flex gap-4 text-sm text-slate-400 mt-10 items-center">
                <p className="font-sans italic">Laat medewerkers weer het verschil maken, simpelweg door ze slim te ondersteunen</p>
              </div>
            </div>

            {/* Visual */}
            <div className="relative lg:h-[600px] w-full flex items-center justify-center">
              <div className="relative w-full aspect-square lg:aspect-auto h-full rounded-3xl border overflow-hidden shadow-2xl bg-white border-slate-200">
                <Image
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                  alt="Office overlay"
                  fill
                  className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-white/90"></div>
                <div className="absolute top-1/4 right-10 p-5 rounded-2xl shadow-xl border w-64 animate-bounce-slow border-slate-100 bg-white">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-teal-50">
                      <Image src="/img/logo_icon.png" alt="FlowTIQ Icon" width={24} height={24} className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-900 font-sans font-medium">Automatische invoer</div>
                      <div className="text-[10px] text-slate-400 font-sans">CRM Update voltooid</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-indigo font-montserrat">
              Maximale impact op uw processen, minimale impact op uw IT
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Column 1: Workforce Benefits */}
            <div>
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-100">
                <div className="h-12 w-12 rounded-xl bg-teal-50 flex items-center justify-center text-mint ring-1 ring-teal-100">
                  <MdGroups size={24} />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-indigo font-montserrat">De winst op de werkvloer</h3>
              </div>

              <div className="space-y-10">
                <ImpactItem
                  icon={<MdZap size={20} />}
                  title="Automatiseren van repeterende taken"
                  description="Dagelijks terugkerende handelingen kosten onnodig veel tijd. Slimme assistenten nemen dit over en reduceren handmatige invoer en kliks aanzienlijk."
                />
                <ImpactItem
                  icon={<MdLibraryAddCheck size={20} />}
                  title="Altijd werken volgens ‘het boekje’"
                  description="Werkinstructies of protocollen worden 1-op-1 in de assistent geïntegreerd. Dit borgt het proces, minimaliseert invoerfouten en zorgt dat registratie altijd uniform is."
                />
                <ImpactItem
                  icon={<MdHandshake size={20} />}
                  title="Digitale ondersteuning voor iedereen"
                  description="Waar digitale vaardigheden tekortschieten, springt de assistent bij. Handelingen worden vereenvoudigd en verminderd, waarbij de medewerker altijd de regie houdt."
                />
              </div>
            </div>

            {/* Column 2: Implementation & IT */}
            <div>
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-100">
                <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-indigo ring-1 ring-blue-100">
                  <MdLayers size={24} />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-indigo font-montserrat">Simpel en snel te implementeren</h3>
              </div>

              <div className="space-y-10">
                <ImpactItem
                  icon={<MdStorage size={20} />}
                  title="Geen vervanging van applicaties"
                  description="Het huidige softwarelandschap blijft intact. FlowTIQ legt een slimme schil over bestaande webapplicatie(s) die naadloos aansluit op de huidige gebruikerservaring."
                />
                <ImpactItem
                  icon={<MdAutoFixHigh size={20} />}
                  title="Universeel toepasbaar"
                  description="Leveranciersonafhankelijk en toekomstbestendig: onze slimme assistenten werken samen met elke webapplicatie, van standaardpakket tot maatwerk."
                />
                <ImpactItem
                  icon={<MdSpeed size={20} />}
                  title="Snel aan de slag"
                  description="Eenvoudige, centrale uitrol direct naar browser(s) waarmee al wordt gewerkt. Geen complexe server of cloud configuraties nodig."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proces Timeline */}
      <section className="border-y bg-white border-slate-100 pt-24 pb-24" id="process">
        <div className="lg:px-8 max-w-7xl mx-auto px-6">
          <div className="mb-20 max-w-3xl mx-auto text-center">
            <h2 className="lg:text-4xl leading-tight text-3xl font-semibold text-indigo tracking-tight font-montserrat mb-4">
              In 30 dagen van kennismaking naar minder administratieve lasten
            </h2>
            <p className="text-lg text-slate-500 font-sans leading-relaxed">
              Een helder proces zonder verrassingen. Wij nemen het voortouw, samen bepalen we het tempo.
            </p>
          </div>

          <div className="max-w-5xl mx-auto relative">
            <div className="absolute left-8 lg:left-1/2 top-4 bottom-4 w-px bg-slate-200 lg:-ml-px"></div>

            <TimelineStep
              num="1 uur"
              title="Kennismakings- en advies gesprek"
              align="left"
              color="teal"
            />

            <TimelineStep
              num="2 dagen"
              title="Pick the Process"
              align="right"
              color="blue"
              description="In deze fase stellen we scherp waar we ons op gaan richten en waken we ervoor dat we verzanden in ‘te veel tegelijk’."
              items={[
                { label: "Focus", text: "Samen selecteren we één (deel)proces dat nu de meeste frustratie of tijdverlies oplevert." },
                { label: "Analyse", text: "We kijken naar de input, de output en alle optimalisatiemogelijkheden daartussen (onnodige kliks, copy-paste werk)." },
                { label: "Doel", text: "Een heldere scope en direct inzicht in de potentiële tijdwinst." }
              ]}
            />

            <TimelineStep
              num="3 weken"
              title="Create the Concept"
              align="left"
              color="teal"
              description="Geen dikke plannen maar snel zien wat het het doet."
              items={[
                { label: "Bouwen", text: "We configureren de eerste assistent specifiek voor het geselecteerde proces en applicatie(s)." },
                { label: "Ervaren", text: "In korte feedbackrondes demonstreren we de FlowTIQ assistent als slimme laag over bestaande webapplicaties." },
                { label: "Resultaat", text: "Een werkend prototype dat klaar is voor de praktijktest." }
              ]}
            />

            <TimelineStep
              num="4 weken"
              title="Prove the Potential"
              align="right"
              color="blue"
              description="De Proof of Value in de praktijk. We bewijzen de businesscase."
              items={[
                { label: "Pilot", text: "Een selecte groep medewerkers gaat aan de slag met de assistent in hun dagelijkse werk." },
                { label: "Meten", text: "Halen we de beoogde tijdwinst? Nemen fouten af? Is er uniforme registratie?" },
                { label: "Finetuning", text: "Op basis van echte gebruikerservaringen scherpen we de assistent direct aan." }
              ]}
            />

            <TimelineStep
              num="Go!"
              title="Go with the Flow!"
              align="left"
              color="teal"
              description="Na een succesvolle pilot rollen we breed uit."
              items={[
                { label: "Schaalvergroting", text: "De assistent wordt beschikbaar gesteld voor de hele doelgroep." },
                { label: "Adoptie", text: "Korte, krachtige introductie. De assistent wijst zichzelf." },
                { label: "Resultaat", text: "Structurele verlaging van administratieve lasten." }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-indigo font-montserrat mb-4">Secure & Support (Continu)</h2>
            <p className="text-slate-500 max-w-2xl">Wij blijven aan boord om processen continu te ondersteunen.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <SupportCard
              title="Proactief beheer"
              description="Via dagelijkse end-to-end tests vindt er automatische controle plaats om processen continue te blijven ondersteunen, ook bij updates van applicaties."
            />
            <SupportCard
              title="Support & vragen"
              description="Vragen of meldingen? Onze fysieke én digitale collega's staan altijd voor u klaar."
            />
            <SupportCard
              title="Updates"
              description="Wij zorgen dat de assistent veilig, snel en qua technologie steeds up-to-date blijft."
            />
          </div>
        </div>
      </section>

      {/* Client Requirements Section */}
      <section className="bg-white border-slate-100 border-b pt-24 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-20 max-w-3xl text-left">
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-indigo font-montserrat mb-4">
              Samen succesvol de start maken om administratieve lasten te verminderen!
            </h2>
            <p className="text-lg text-slate-500 font-sans leading-relaxed">
              Eerst begrijpen en leren, daarna automatiseren
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            <div>
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-100">
                <div className="h-12 w-12 rounded-xl bg-teal-50 flex items-center justify-center text-mint ring-1 ring-teal-100">
                  <MdGroups size={24} />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-indigo font-montserrat">Wat vragen wij van klanten</h3>
              </div>

              <div className="space-y-10">
                <RequirementItem
                  icon={<MdCheckCircle size={16} />}
                  title="Doel & Draagvlak"
                  description="Er is de ambitie om processen en onderliggende stappen te optimaliseren."
                />
                <RequirementItem
                  icon={<MdTimeline size={16} />}
                  title="Inhoudelijke expertise"
                  description="Beschikbare medewerkers die het huidige proces kennen en de applicatie(s) gebruiken."
                />
                <RequirementItem
                  icon={<MdShield size={16} />}
                  title="Ondersteuning"
                  description="Korte lijnen met uw experts op het gebied van Privacy, Security en Applicatiebeheer om de kaders te toetsen."
                />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-10 pb-6 border-b border-slate-100">
                <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center text-indigo ring-1 ring-blue-100">
                  <MdClockLoader3 size={24} />
                </div>
                <h3 className="text-2xl font-semibold tracking-tight text-indigo font-montserrat">Beperkte tijd voor inventarisatie & analyse?</h3>
              </div>

              <div className="space-y-10">
                <RequirementItem
                  icon={<MdAutoFixHigh size={16} />}
                  title="Oplossing"
                  description="Koppel ons aan inhoudsdeskundigen en wij brengen de processen en handelingen volledig in kaart."
                  color="blue"
                />
                <RequirementItem
                  icon={<MdVerifiedUser size={16} />}
                  title="Resultaat"
                  description="De blauwdruk voor de volgende fase verdient alleen nog een gezamenlijke afstemming en akkoord."
                  color="blue"
                />

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ImpactItem({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex gap-5">
      <div className="flex-shrink-0 mt-1">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-teal-50 text-mint ring-1 ring-teal-100/50">
          {icon}
        </div>
      </div>
      <div>
        <h4 className="text-base font-semibold text-slate-900 font-sans mb-2">{title}</h4>
        <p className="text-slate-500 leading-relaxed font-sans text-sm lg:text-base">{description}</p>
      </div>
    </div>
  );
}

interface TimelineItem {
  label: string;
  text: string;
}

interface TimelineStepProps {
  num: string;
  title: string;
  description?: string;
  align: 'left' | 'right';
  color: 'teal' | 'blue';
  items?: TimelineItem[];
}

function TimelineStep({ num, title, description, align, color, items }: TimelineStepProps) {
  const isLeft = align === 'left';
  const bgColor = color === 'teal' ? 'bg-teal-50' : 'bg-blue-50';
  const textColor = color === 'teal' ? 'text-teal-700' : 'text-blue-700';
  const ringColor = color === 'teal' ? 'ring-teal-600/20' : 'ring-blue-700/10';
  const dotColor = color === 'teal' ? 'bg-teal-500' : 'bg-blue-300';
  const borderColor = color === 'teal' ? 'border-teal-500' : 'border-blue-200';
  const hoverColor = color === 'teal' ? 'group-hover:text-teal-600' : 'group-hover:text-blue-600';

  return (
    <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-24">
      <div className={`pl-20 lg:pl-0 ${isLeft ? 'lg:pr-16 lg:text-right' : 'hidden lg:block'}`}>
        {isLeft && (
          <div className="group">
            <span className={`inline-flex items-center rounded-full ${bgColor} px-3 py-1 text-xs font-medium ${textColor} ring-1 ring-inset ${ringColor} mb-4 font-sans`}>{num}</span>
            <h3 className={`text-xl tracking-tight font-montserrat font-semibold text-indigo mb-3 ${hoverColor} transition-colors`}>{title}</h3>
            {description && <p className="text-slate-500 leading-relaxed font-sans text-sm mb-6">{description}</p>}
            {items && (
              <ul className={`text-sm text-slate-600 space-y-4 font-sans ${isLeft ? 'text-left lg:text-right w-full inline-block' : 'text-left'}`}>
                {items.map((item: any, i: number) => (
                  <li key={i} className={`flex gap-3 ${isLeft ? 'lg:flex-row-reverse lg:text-right' : ''}`}>
                    <div className={`mt-1.5 h-1.5 w-1.5 rounded-full ${dotColor} flex-shrink-0`}></div>
                    <span><span className="font-semibold text-indigo">{item.label}:</span> {item.text}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      <div className={`absolute left-8 lg:left-1/2 -translate-x-1/2 top-0 w-8 h-8 rounded-full bg-white border-[3px] ${borderColor} z-10 flex items-center justify-center shadow-sm`}>
        <div className={`w-2.5 h-2.5 rounded-full ${dotColor}`}></div>
      </div>

      <div className={`pl-20 lg:pl-16 text-left ${!isLeft ? 'block' : 'hidden lg:block'}`}>
        {!isLeft && (
          <div className="group">
            <span className={`inline-flex items-center rounded-full ${bgColor} px-3 py-1 text-xs font-medium ${textColor} ring-1 ring-inset ${ringColor} mb-4 font-sans`}>{num}</span>
            <h3 className={`text-xl tracking-tight font-montserrat font-semibold text-indigo mb-3 ${hoverColor} transition-colors`}>{title}</h3>
            {description && <p className="text-slate-500 leading-relaxed font-sans text-sm mb-6">{description}</p>}
            {items && (
              <ul className="space-y-4 text-sm lg:text-base text-slate-600 font-sans">
                {items.map((item: any, i: number) => (
                  <li key={i} className="flex gap-3">
                    <div className={`mt-1.5 h-1.5 w-1.5 rounded-full ${dotColor} flex-shrink-0`}></div>
                    <span><span className="font-semibold text-indigo">{item.label}:</span> {item.text}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function SupportCard({ title, description }: { title: string, description: string }) {
  return (
    <div className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md">
      <h4 className="font-bold text-indigo mb-4 group-hover:text-mint transition-colors">{title}</h4>
      <p className="text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function RequirementItem({ icon, title, description, color = 'teal' }: any) {
  const bgColor = color === 'teal' ? 'bg-teal-50' : 'bg-blue-50';
  const textColor = color === 'teal' ? 'text-mint' : 'text-indigo';
  const ringColor = color === 'teal' ? 'ring-teal-100/50' : 'ring-blue-100/50';

  return (
    <div className="flex gap-5">
      <div className="flex-shrink-0 mt-1">
        <div className={`flex items-center justify-center w-8 h-8 rounded-full ${bgColor} ${textColor} ring-1 ${ringColor}`}>
          {icon}
        </div>
      </div>
      <div>
        <h4 className="text-base font-semibold text-indigo font-montserrat mb-2">{title}</h4>
        <p className="text-slate-500 leading-relaxed font-sans text-sm lg:text-base">{description}</p>
      </div>
    </div>
  );
}
