import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section className="py-16 bg-black text-white" ref={ref}>
      <div className="container mx-auto px-4 max-w-screen-lg">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl md:text-6xl font-bold mb-2">
              {inView && <CountUp end={100} duration={2} />}+
            </div>
            <div className="text-xl">members</div>
          </div>
          <div>
            <div className="text-4xl md:text-6xl font-bold mb-2">
              {inView && <CountUp end={8} duration={2} />}+
            </div>
            <div className="text-xl">domains</div>
          </div>
          <div>
            <div className="text-4xl md:text-6xl font-bold mb-2">
              {inView && <CountUp end={0} duration={2} />}
            </div>
            <div className="text-xl">workshops</div>
          </div>
          <div>
            <div className="text-4xl md:text-6xl font-bold mb-2">
              {inView && <CountUp end={0} duration={2} />}
            </div>
            <div className="text-xl">events</div>
          </div>
        </div>
      </div>
    </section>
  );
}
