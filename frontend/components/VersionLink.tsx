'use client';

import Link, { LinkProps } from 'next/link';
import { useVersion } from '@/lib/VersionContext';
import React from 'react';

interface VersionLinkProps extends Omit<LinkProps, 'href'> {
    href: string | any;
    children: React.ReactNode;
    className?: string;
}

export function VersionLink({ href, children, ...props }: VersionLinkProps) {
    const { version } = useVersion();

    // Only append version if it's not the default or if we want to be explicit
    // For now, let's always append it if it's not 0 or even if it is 0 for robustness
    const hrefString = typeof href === 'string' ? href : href.href || '';
    const separator = hrefString.includes('?') ? '&' : '?';

    // Don't append to external links
    const isInternal = hrefString.startsWith('/') || hrefString.startsWith('.');

    const finalHref = isInternal
        ? `${hrefString}${separator}version=${version}`
        : href;

    return (
        <Link href={finalHref} {...props}>
            {children}
        </Link>
    );
}
