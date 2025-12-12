'use client';

import React from 'react';
import CapabilityLayoutMapper from './CapabilityLayoutMapper';

export default function Home() {
  // Hardcoded for now, this will eventually come from the Agent File or Backend
  const activeCapabilities = ['trip-guardian'];

  return (
    <CapabilityLayoutMapper capabilities={activeCapabilities} />
  );
}
