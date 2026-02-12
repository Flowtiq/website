import fastify from 'fastify';
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify';
import cors from '@fastify/cors';
import { appRouter } from './router.js';

const server = fastify({
    logger: true,
});

await server.register(cors, {
    origin: true, // In production, limit this to the frontend domain
});

server.register(fastifyTRPCPlugin, {
    prefix: '/trpc',
    trpcOptions: { router: appRouter },
});

const start = async () => {
    try {
        const port = Number(process.env.PORT) || 3001;
        await server.listen({
            port,
            host: '0.0.0.0' // Required for Docker/K8s
        });
        console.log(`Server listening on port ${port}`);
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

start();
