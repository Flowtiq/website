import React from 'react';

interface DividerProps {
    variant?: 'dot-both' | 'simple';
    className?: string;
}

export function Divider({ variant = 'dot-both', className = '' }: DividerProps) {
    return (
        <div className={`relative flex items-center w-full py-8 ${className}`}>
            <div className="flex-grow h-px bg-v2-border/30"></div>

            {variant === 'dot-both' && (
                <>
                    <div className="absolute left-0 w-2.5 h-2.5 rounded-full bg-v2-accent -translate-y-1/2 top-1/2"></div>
                    <div className="absolute right-0 w-2.5 h-2.5 rounded-full bg-v2-accent-alt -translate-y-1/2 top-1/2"></div>
                </>
            )}
        </div>
    );
}
