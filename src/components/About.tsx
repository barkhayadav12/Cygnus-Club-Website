import React from 'react';

export function About() {
  return (
    <section className="py-20 mt-[-50px]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 inline-block px-8 py-2 border-b-4 border-gray-700">
          About Us
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
              alt="Electronics Projects"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <div className="bg-white shadow-xl rounded-xl p-6 text-zinc-600 text-lg leading-relaxed">
              Welcome to <span className="font-semibold">Cygnus</span>, a community of dreamers, tinkerers, coders, builders, and change makers.
              <br /><br />
              <span className="font-semibold">Cygnus Club</span> is the innovation and tech hub of <span className="font-semibold">NIT Manipur</span>, created to nurture curiosity, foster creativity, and empower students to explore beyond the boundaries of textbooks. From electronics and embedded systems to AI/ML, robotics, IoT, and web development — <span className="font-semibold">Cygnus</span> is where ideas are born and built.
              <br /><br />
              We believe that learning is best when it’s hands-on. That’s why we bring together passionate minds to collaborate on real-world projects, participate in competitions, and build solutions that matter. Whether you're a beginner or a seasoned developer, <span className="font-semibold">Cygnus</span> is your launchpad to experiment, fail fast, learn faster, and grow.
              <br /><br />
              Join us at <span className="font-semibold">Cygnus</span> — where passion meets purpose, and technology meets imagination.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


