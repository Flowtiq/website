'use client';

import React, { createContext, useContext, useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

type Version = 0 | 1 | 2 | 3;

interface VersionContextType {
    version: Version;
    setVersion: (v: Version) => void;
}

const VersionContext = createContext<VersionContextType | undefined>(undefined);

function VersionProviderInner({ children }: { children: React.ReactNode }) {
    const searchParams = useSearchParams();
    const [version, setVersionState] = useState<Version>(0);

    useEffect(() => {
        const v = searchParams.get('version');
        if (v === '3') {
            setVersionState(3);
        } else if (v === '2') {
            setVersionState(2);
        } else if (v === '1') {
            setVersionState(1);
        } else {
            setVersionState(0);
        }
    }, [searchParams]);

    const setVersion = (v: Version) => {
        setVersionState(v);
        // This won't automatically update the URL here, 
        // navigation is usually handled by VersionLink or router.push
    };

    return (
        <VersionContext.Provider value={{ version, setVersion }}>
            {children}
        </VersionContext.Provider>
    );
}

export function VersionProvider({ children }: { children: React.ReactNode }) {
    return (
        <Suspense fallback={<>{children}</>}>
            <VersionProviderInner>
                {children}
            </VersionProviderInner>
        </Suspense>
    );
}

export function useVersion() {
    const context = useContext(VersionContext);
    if (context === undefined) {
        throw new Error('useVersion must be used within a VersionProvider');
    }
    return context;
}
