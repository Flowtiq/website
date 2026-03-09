import { createDirectus, rest, readItems } from '@directus/sdk';
import { z } from 'zod';

// Enterprise Best Practice: Environment-based configuration
const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL || 'http://localhost:8055';

export const directus = createDirectus(DIRECTUS_URL).with(rest());

/**
 * Service Layer for CMS Interaction
 * Follows the repository pattern to abstract the data source.
 */
export class CMSService {
    private static isDirectusActive = !!process.env.NEXT_PUBLIC_DIRECTUS_URL;

    static async getCollection<T>(collection: string, schema: z.ZodSchema<T>): Promise<T | null> {
        if (this.isDirectusActive) {
            try {
                const data = await directus.request(readItems(collection as any));
                return schema.parse(data);
            } catch (error) {
                console.error(`[CMSService] Error fetching ${collection}:`, error);
                return null;
            }
        }

        // In "future-ready" mode, if Directus isn't configured, we might return null 
        // and let the frontend handle the fallback/mock.
        return null;
    }
}
