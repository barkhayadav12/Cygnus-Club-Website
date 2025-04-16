import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Vision } from '../components/Vision';
import { Stats } from '../components/Stats';
import { Domains } from '../components/Domains';
import { Events } from '../components/Events';
import { Projects } from '../components/Projects';

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Vision />
      <Stats />
      <Domains />
      <Events />
      {/* <Projects />  */}
    </div>
  );
}