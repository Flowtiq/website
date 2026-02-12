import { router, publicProcedure } from './trpc.js';
import { sendMail } from './mailer.js';
import { contactSchema } from '@flowtiq/shared';

export const appRouter = router({
    sendContact: publicProcedure
        .input(contactSchema)
        .mutation(async ({ input }) => {
            try {
                await sendMail({
                    name: input.name,
                    email: input.email,
                    message: input.message,
                    phone: input.phone,
                });
                return { success: true };
            } catch (error) {
                console.error('Failed to send email:', error);
                throw new Error('Kon bericht niet verzenden. Probeer het later opnieuw.');
            }
        }),
});

// Export type definition of API
export type AppRouter = typeof appRouter;
