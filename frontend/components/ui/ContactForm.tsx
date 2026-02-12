'use client';

import { useState } from 'react';
import { MdCoffee } from '@/components/icons';
import { contactSchema } from '@flowtiq/shared';

export function ContactForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');
        setErrorMessage('');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name') as string,
            email: formData.get('email') as string,
            phone: formData.get('phone') as string || undefined,
            message: formData.get('message') as string,
        };

        // Client-side validation using shared schema
        const validation = contactSchema.safeParse(data);
        if (!validation.success) {
            setStatus('error');
            setErrorMessage(validation.error.issues[0].message);
            return;
        }

        try {
            const { trpc } = await import('@/lib/trpc');
            const result = await trpc.sendContact.mutate(data);

            if (result.success) {
                setStatus('success');
            } else {
                throw new Error('Kon bericht niet verzenden.');
            }
        } catch (error: any) {
            console.error('Contact form error:', error);
            setStatus('error');
            setErrorMessage(error.message || 'Er is een onbekende fout opgetreden.');
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-teal-500/10 border border-teal-500/20 p-8 rounded-2xl text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Bedankt voor uw bericht!</h3>
                <p className="text-teal-100">Wij hebben uw gegevens ontvangen en nemen zo snel mogelijk contact met u op.</p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm text-teal-300 underline hover:text-white"
                >
                    Nog een bericht sturen
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {status === 'error' && (
                <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-red-400 text-sm">
                    {errorMessage}
                </div>
            )}
            <div>
                <label className="block text-sm font-medium text-white mb-1">Naam</label>
                <input
                    name="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-blue-900/50 border border-blue-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-slate-400 transition-all font-sans"
                    placeholder="Uw naam"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-white mb-1">E-mail</label>
                <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-blue-900/50 border border-blue-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-slate-400 transition-all font-sans"
                    placeholder="uw@email.nl"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-white mb-1">Telefoon (optioneel)</label>
                <input
                    name="phone"
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl bg-blue-900/50 border border-blue-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-slate-400 transition-all font-sans"
                    placeholder="+31 6 12345678"
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-white mb-1">Bericht</label>
                <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-blue-900/50 border border-blue-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder-slate-400 transition-all font-sans"
                    placeholder="Waar kunnen we u mee helpen?"
                ></textarea>
            </div>
            <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 bg-teal-500 text-blue-950 font-bold rounded-xl hover:bg-teal-400 transition-all font-sans flex items-center justify-center gap-2 shadow-lg shadow-teal-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {status === 'submitting' ? (
                    <>
                        <span className="w-5 h-5 border-2 border-blue-950 border-t-transparent rounded-full animate-spin"></span>
                        Verzenden...
                    </>
                ) : "Verzend gegevens"}
            </button>
        </form>
    );
}
