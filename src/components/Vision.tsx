import React from 'react';

export function Vision() {
  return (
    <section className="py-20 mt-[-50px] bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 inline-block px-8 py-2 border-b-4 border-gray-700">
          Our Vision
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-white shadow-xl rounded-xl p-6 text-zinc-600 text-lg leading-relaxed">
              At <span className="font-semibold">Cygnus</span>, we envision a future where innovation is instinctive, and technology is a tool for meaningful and lasting impact. We aim to build a thriving ecosystem at <span className="font-semibold">NIT Manipur</span> where creativity, critical thinking, and technical excellence converge.
              <br /><br />
              Our vision is to create an environment where every student — regardless of background or experience — feels empowered to ask bold questions, challenge the status quo, and turn ideas into reality. We believe that true innovation happens when diverse minds come together with a shared passion to explore, experiment, and engineer solutions that matter.
              <br /><br />
              We strive to break down the barriers between disciplines, encouraging interdisciplinary collaboration and a culture of continuous learning. By nurturing curiosity and embracing experimentation, we hope to inspire a generation that doesn't just adapt to the future — but builds it.
              <br /><br />
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Team Photo"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
