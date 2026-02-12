import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '../../backend/src/router';

// In production, this should be an environment variable
const getBaseUrl = () => {
    if (typeof window !== 'undefined') return ''; // browser should use relative url
    if (process.env.BACKEND_URL) return process.env.BACKEND_URL;
    return 'http://localhost:3001'; // dev default
};

export const trpc = createTRPCClient<AppRouter>({
    links: [
        httpBatchLink({
            url: `${getBaseUrl()}/trpc`,
        }),
    ],
});
