import React from 'react';

export function Events() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-16 border-2 border-black inline-block px-8 py-2">Events</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img src="https://img.freepik.com/free-photo/web-page-webinar-html-browser-concept_53876-13743.jpg" 
                 alt="Glitch" 
                 className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Workshop</h3>
              <p>Workshop by startups working on related technologies.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img src="https://cdn.pixabay.com/photo/2017/03/31/22/51/quiz-2192590_960_720.jpg" 
                 alt="Business Ideas" 
                 className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Quizes</h3>
              <p>Quizzes to brush up discussed concepts.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl overflow-hidden">
            <img src="https://img.freepik.com/premium-vector/hackathon-d...d-drawn-chalk-icons-set-blackboard_341076-474.jpg" 
                 alt="Sensored" 
                 className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Ideathon/Hackathon</h3>
              <p>Hackathons & ideathons to ignite innovation.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}