import Image from 'next/image';
import { MdEmail, MdPhone, MdLocationOn, MdArrowForward } from '@/components/icons';
import { CONTACT_INFO, NAV_LINKS } from '@/lib/constants';
import { VersionLink } from '@/components/VersionLink';

export function V1Footer() {
    return (
        <footer id="contact" className="pt-32 pb-12 bg-v1-primary text-white overflow-hidden relative border-t border-white/5">
            {/* Subtle decorative elements */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-v1-accent/5 blur-[150px] rounded-full translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 mb-32">
                    {/* Brand Column */}
                    <div className="lg:col-span-5 space-y-12">
                        <VersionLink href="/" className="inline-block hover:opacity-80 transition-all hover:scale-105">
                            <Image
                                src="/img/logo_full.png"
                                alt="FlowTIQ Logo"
                                width={180}
                                height={48}
                                className="h-10 w-auto brightness-0 invert"
                            />
                        </VersionLink>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
                            Verlos medewerkers van <br />
                            <span className="text-v1-accent italic font-serif opacity-80">administratieve lasten.</span>
                        </h2>
                        <div className="flex gap-4">
                            <a href={`tel:${CONTACT_INFO.phone}`} className="h-14 w-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-v1-accent hover:text-v1-primary transition-all">
                                <MdPhone size={20} />
                            </a>
                            <a href={`mailto:${CONTACT_INFO.email}`} className="h-14 w-14 rounded-full border border-white/10 flex items-center justify-center hover:bg-v1-accent hover:text-v1-primary transition-all">
                                <MdEmail size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links Grid */}
                    <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-v1-accent mb-10">Producten</h4>
                            <ul className="space-y-6">
                                {NAV_LINKS.map(link => (
                                    <li key={link.href}>
                                        <VersionLink href={link.href} className="text-sm font-bold text-slate-400 hover:text-white transition-all flex items-center gap-2 group">
                                            {link.label} <MdArrowForward className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-v1-accent" />
                                        </VersionLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-v1-accent mb-10">Contact</h4>
                            <ul className="space-y-8 text-sm font-medium text-slate-400">
                                <li className="leading-relaxed">
                                    Gelderse Rooslaan 210<br />
                                    6841 BE Arnhem
                                </li>
                                <li className="text-v1-accent font-black tracking-widest text-[9px] uppercase">
                                    KVK {CONTACT_INFO.kvk}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar - Elegant Minimalist */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                        &copy; {new Date().getFullYear()} FlowTIQ. AI Implementation Specialists.
                    </div>
                    <div className="flex gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
                        <VersionLink href="#" className="text-slate-500 hover:text-white transition-colors">Privacy</VersionLink>
                        <VersionLink href="#" className="text-slate-500 hover:text-white transition-colors">Voorwaarden</VersionLink>
                        <VersionLink href="#" className="text-slate-500 hover:text-white transition-colors">Cookies</VersionLink>
                    </div>
                </div>
            </div>
        </footer>
    );
}
