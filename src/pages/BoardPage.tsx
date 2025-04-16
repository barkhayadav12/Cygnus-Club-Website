import React from 'react';

export function BoardPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 border-2 border-black inline-block px-8 py-2">
            Board Members
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img
                src="https://cdn-icons-png.freepik.com/512/6538/6538675.png"
                alt="President"
                className="w-full h-48 object-contain mx-auto"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Person1</h3>
                <p className="text-gray-600">President</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img
                src="https://cdn-icons-png.freepik.com/512/6538/6538675.png"
                alt="Vice President"
                className="w-full h-48 object-contain mx-auto"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Person2</h3>
                <p className="text-gray-600">Vice President</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img
                src="https://cdn-icons-png.freepik.com/512/6538/6538675.png"
                alt="Technical Head"
                className="w-full h-48 object-contain mx-auto"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Person3</h3>
                <p className="text-gray-600">Technical Head</p>
              </div>
            </div>

            {/* <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img
                src="https://cdn-icons-png.freepik.com/512/6538/6538675.png"
                alt="Faculty Adviser"
                className="w-full h-48 object-contain mx-auto"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Person4</h3>
                <p className="text-gray-600">Faculty Adviser</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img
                src="https://cdn-icons-png.freepik.com/512/6538/6538675.png"
                alt="Secretary 1"
                className="w-full h-48 object-contain mx-auto"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Person5</h3>
                <p className="text-gray-600">Secretary 1</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img
                src="https://cdn-icons-png.freepik.com/512/6538/6538675.png"
                alt="Secretary 2"
                className="w-full h-48 object-contain mx-auto"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Person6</h3>
                <p className="text-gray-600">Secretary 2</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <img
                src="https://cdn-icons-png.freepik.com/512/6538/6538675.png"
                alt="Secretary 3"
                className="w-full h-48 object-contain mx-auto"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Person7</h3>
                <p className="text-gray-600">Secretary 3</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
