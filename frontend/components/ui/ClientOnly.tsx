'use client';

import { useEffect, useState } from 'react';

/**
 * Renders children only on the client side (after mount).
 * Use this to wrap components that depend on browser APIs or
 * client-side context (e.g. useSearchParams, useVersion).
 */
export function ClientOnly({
    children,
    fallback = null,
}: {
    children: React.ReactNode;
    fallback?: React.ReactNode;
}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <>{fallback}</>;
    return <>{children}</>;
}
