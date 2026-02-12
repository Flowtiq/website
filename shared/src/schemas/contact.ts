import { z } from 'zod';

export const contactSchema = z.object({
    name: z.string().min(2, 'Naam is te kort'),
    email: z.string().email('Ongeldig emailadres'),
    phone: z.string().optional(),
    message: z.string().min(10, 'Bericht is te kort'),
});

export type ContactInput = z.infer<typeof contactSchema>;
