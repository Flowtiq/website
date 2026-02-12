FROM node:22-alpine AS base

# Stage 1: Install dependencies
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
COPY frontend/package.json ./frontend/
COPY backend/package.json ./backend/
COPY shared/package.json ./shared/
RUN npm ci

# Stage 2: Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY shared ./shared
COPY backend ./backend
COPY package.json package-lock.json ./

WORKDIR /app/backend
RUN npm run build

# Stage 3: Production server
FROM base AS runner
WORKDIR /app
ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 fastify

# Copy built backend
COPY --from=builder --chown=fastify:nodejs /app/backend/dist ./dist
COPY --from=builder --chown=fastify:nodejs /app/backend/package.json ./
COPY --from=builder --chown=fastify:nodejs /app/shared ./shared

# Copy node_modules (we need prod deps)
# In a monorepo, deps might be at root. For simplicity in this env, we'll copy the full node_modules from builder
# Optimization: In a strict prod env we would prune devDeps, but for now resolving shared references is safer this way.
COPY --from=builder --chown=fastify:nodejs /app/node_modules ./node_modules

USER fastify

EXPOSE 3001
ENV PORT 3001
ENV HOSTNAME "0.0.0.0"

CMD ["node", "dist/index.js"]
