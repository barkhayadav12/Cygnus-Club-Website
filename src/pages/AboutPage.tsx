import React from 'react';
import { About } from '../components/About';
import { Vision } from '../components/Vision';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <About />
      <Vision />
    </div>
  );
}