'use client';

import React from 'react';
import { useVersion } from '@/lib/VersionContext';
import { V0HomePage } from '@/components/v0/pages/V0HomePage';
import { V1HomePage } from '@/components/v1/pages/V1HomePage';
import { V2HomePage } from '@/components/v2/pages/V2HomePage';
import { V3HomePage } from '@/components/v3/pages/V3HomePage';

export default function Home() {
  const { version } = useVersion();

  if (version === 3) {
    return <V3HomePage />;
  }

  if (version === 2) {
    return <V2HomePage />;
  }

  if (version === 1) {
    return <V1HomePage />;
  }

  return <V0HomePage />;
}

