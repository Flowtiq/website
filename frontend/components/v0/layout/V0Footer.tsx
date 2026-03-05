import Link from 'next/link';
import Image from 'next/image';
import { MdEmail, MdPhone, MdLocationOn } from '@/components/icons';
import { CONTACT_INFO, NAV_LINKS } from '@/lib/constants';

export function V0Footer() {
    return (
        <footer id="contact" className="pt-20 pb-10 border-t border-slate-200 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="mb-6 block hover:opacity-80 transition-opacity">
                            <Image
                                src="/img/logo_full.png"
                                alt="FlowTIQ Logo"
                                width={120}
                                height={32}
                                className="h-8 w-auto"
                            />
                        </Link>

                    </div>

                    <div>
                        <h4 className="mb-4 text-sm text-indigo font-sans font-semibold">Product</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li><Link href="/producten" className="transition-colors hover:text-indigo font-sans">Producten</Link></li>
                            <li><Link href="/veiligheid" className="transition-colors hover:text-indigo font-sans">Veiligheid</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm text-indigo font-sans font-semibold">Bedrijf</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li><Link href="/over-ons" className="transition-colors hover:text-indigo font-sans">Over ons</Link></li>
                            <li><Link href="/contact" className="transition-colors hover:text-indigo font-sans">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-4 text-sm text-indigo font-sans font-semibold">Contact</h4>
                        <ul className="space-y-3 text-sm text-slate-500">
                            <li className="flex items-center gap-2 font-sans">
                                <MdEmail size={14} className="text-mint" />
                                {CONTACT_INFO.email}
                            </li>
                            <li className="flex items-center gap-2 font-sans">
                                <MdPhone size={14} className="text-mint" />
                                {CONTACT_INFO.phone}
                            </li>
                            <li className="flex items-center gap-3 font-sans">
                                <MdLocationOn size={16} className="flex-shrink-0 text-mint" />
                                <span dangerouslySetInnerHTML={{ __html: CONTACT_INFO.address.replace(', ', ', <br>') }} />
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-slate-200">
                    <p className="text-xs text-slate-400 font-sans">&copy; {new Date().getFullYear()} FlowTIQ. Alle rechten voorbehouden.</p>
                    <div className="flex gap-6 text-xs text-slate-400">
                        <Link href="#" className="hover:text-slate-600 font-sans">Privacy Policy</Link>
                        <Link href="#" className="hover:text-slate-600 font-sans">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
