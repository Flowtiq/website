'use client';

import React from 'react';
import { ContactForm } from '@/components/ui/ContactForm';
import {
    MdLocationOn,
    MdPhone,
    MdBusiness,
    MdEmail,
    MdArrowForward,
    MdCheckCircle
} from '@/components/icons';
import { CONTACT_INFO } from '@/lib/constants';

export function V3ContactPage() {
    return (
        <main className="bg-white text-v3-text font-sans overflow-x-hidden pt-40 pb-24">
            <section className="max-w-6xl mx-auto px-6 lg:px-8 mb-32">
                <div className="text-center space-y-8">
                    <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-v3-bg-alt border border-v3-border shadow-sm text-v3-text font-bold text-xs tracking-widest uppercase">
                        Get in Touch
                    </div>
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-v3-primary leading-[1] mb-12">
                        Start your <br />
                        <span className="text-v3-accent italic">Automation.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-v3-text-secondary max-w-2xl mx-auto font-medium leading-relaxed">
                        Vragen over onze AI-assistenten of een kop koffie drinken? We horen graag van u.
                    </p>
                </div>
            </section>

            <section className="max-w-6xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-24 items-start">
                    {/* Contact Details Column */}
                    <div className="space-y-16">
                        <div className="grid sm:grid-cols-1 gap-10">
                            <ContactInfoItem
                                icon={<MdLocationOn size={32} />}
                                title="Locatie"
                                value="Gelderse Rooslaan 210, 6841 BE Arnhem"
                                desc="Wij werken hybride"
                            />
                            <ContactInfoItem
                                icon={<MdPhone size={32} />}
                                title="Telefoon"
                                value={CONTACT_INFO.phone}
                                href={`tel:${CONTACT_INFO.phone.replace(/ /g, '')}`}
                            />
                            <ContactInfoItem
                                icon={<MdEmail size={32} />}
                                title="Email"
                                value={CONTACT_INFO.email}
                                href={`mailto:${CONTACT_INFO.email}`}
                            />
                        </div>

                        <div className="p-10 bg-v3-bg-alt rounded-[3rem] border border-v3-border space-y-8">
                            <div className="flex items-center gap-3">
                                <MdBusiness size={24} className="text-v3-primary" />
                                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-v3-primary">Registration</h3>
                            </div>
                            <div className="grid grid-cols-2 gap-8">
                                <div>
                                    <p className="text-[10px] font-bold text-v3-text-secondary/50 uppercase tracking-widest mb-1">KVK Nummer</p>
                                    <p className="text-sm font-black text-v3-primary italic">{CONTACT_INFO.kvk}</p>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-v3-text-secondary/50 uppercase tracking-widest mb-1">BTW Nummer</p>
                                    <p className="text-sm font-black text-v3-primary italic">—</p>
                                </div>
                                <div className="col-span-2">
                                    <p className="text-[10px] font-bold text-v3-text-secondary/50 uppercase tracking-widest mb-1">IBAN / Bankrekening</p>
                                    <p className="text-sm font-black text-v3-primary italic break-all">{CONTACT_INFO.bank}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Card */}
                    <div className="bg-white p-12 md:p-16 rounded-[4rem] border border-v3-border shadow-[0_32px_80px_rgba(10,46,47,0.08)] relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-v3-accent/10 blur-[60px] rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>

                        <div className="relative z-10 space-y-12">
                            <div className="space-y-4">
                                <h2 className="text-4xl font-black text-v3-primary tracking-tight">Kop koffie?</h2>
                                <p className="text-lg text-v3-text-secondary font-medium italic">Laat hieronder uw gegevens achter, dan nemen wij zo snel mogelijk contact met u op.</p>
                            </div>

                            <div className="v3-contact-form">
                                <ContactForm />
                            </div>

                            <div className="pt-6 border-t border-v3-border/50 flex flex-col gap-4">
                                <div className="flex items-center gap-3 text-xs font-bold text-v3-text-secondary/60">
                                    <MdCheckCircle className="text-v3-accent" size={16} /> Privacy-first communication
                                </div>
                                <div className="flex items-center gap-3 text-xs font-bold text-v3-text-secondary/60">
                                    <MdCheckCircle className="text-v3-accent" size={16} /> Response within 24 hours
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx global>{`
                .v3-contact-form input, .v3-contact-form textarea {
                    background: #F4F7F9 !important;
                    border: 1px solid #E2E8F0 !important;
                    color: #0B1116 !important;
                    border-radius: 1rem !important;
                    padding: 1.25rem !important;
                    font-family: inherit !important;
                    font-weight: 500 !important;
                }
                .v3-contact-form input::placeholder, .v3-contact-form textarea::placeholder {
                    color: rgba(57, 66, 78, 0.4) !important;
                }
                .v3-contact-form button {
                    background: #0A2E2F !important;
                    color: white !important;
                    font-weight: 900 !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.1em !important;
                    border-radius: 1rem !important;
                    padding-top: 1.25rem !important;
                    padding-bottom: 1.25rem !important;
                    font-size: 0.875rem !important;
                    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1) !important;
                }
                .v3-contact-form button:hover {
                    box-shadow: 0 20px 40px rgba(10, 46, 47, 0.2) !important;
                    transform: translateY(-2px) !important;
                }
                .v3-contact-form label {
                    color: #0A2E2F !important;
                    font-weight: 800 !important;
                    font-size: 0.75rem !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.05em !important;
                    margin-bottom: 0.75rem !important;
                    display: block !important;
                    opacity: 0.8 !important;
                }
            `}</style>
        </main>
    );
}

function ContactInfoItem({ icon, title, value, href, desc }: any) {
    const content = (
        <div className="group space-y-4">
            <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-2xl bg-v3-bg-alt flex items-center justify-center text-v3-primary border border-v3-border group-hover:bg-v3-primary group-hover:text-white group-hover:shadow-2xl transition-all duration-300">
                    {icon}
                </div>
                <div className="space-y-1">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-v3-text-secondary/50">{title}</p>
                    <p className={`text-2xl font-black tracking-tight text-v3-primary uppercase ${href ? 'group-hover:text-v3-accent' : ''} transition-colors`}>{value}</p>
                    {desc && <p className="text-xs font-bold text-v3-text-secondary/60 italic">{desc}</p>}
                </div>
            </div>
        </div>
    );

    if (href) {
        return <a href={href} className="block">{content}</a>;
    }
    return content;
}
