import { useQuery } from '@tanstack/react-query';
import { V2_HOME_MOCK } from './mock-content';
import { CMSService } from './directus';
import { z } from 'zod';

// Example schema for validation
const HomeContentSchema = z.any(); // We can make this stricter later

/**
 * Enterprise Best Practice: Hook-based data fetching
 * Transparently switches between Mock and CMS.
 */
export function useContent<T>(collection: string, mockData: T) {
    return useQuery({
        queryKey: ['content', collection],
        queryFn: async () => {
            const cmsData = await CMSService.getCollection(collection, HomeContentSchema);
            return (cmsData as T) || mockData;
        },
        staleTime: 1000 * 60 * 5, // 5 minutes cache
    });
}

export function useHomeContent() {
    return useContent('home', V2_HOME_MOCK);
}
