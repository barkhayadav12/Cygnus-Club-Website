import React, { useEffect, useState } from 'react';
import img from '../Images/img.jpg';

export function UpcomingEvents() {
  const eventDate = new Date('2025-04-19T14:00:00');
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = eventDate.getTime() - now;

    const time = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };

    return difference > 0 ? time : null;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 max-w-md">
        <div className="bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden">
          <div className="w-full h-[300px] flex items-center justify-center bg-white">
            <img
              src={img}
              alt="Basic Electronics Workshop"
              className="h-full w-auto object-contain"
            />
          </div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-3 text-center">Workshop on Basic Electronics</h2>
            <p className="text-gray-700 text-md mb-4 text-center">
              Happening on April 19th, 2:00 PM. <br />
              Explore circuits, components & more!
            </p>

            {timeLeft ? (
              <div className="flex justify-center text-center text-white font-semibold text-sm gap-2">
                <TimeBox label="Days" value={timeLeft.days} />
                <Colon />
                <TimeBox label="Hours" value={timeLeft.hours} />
                <Colon />
                <TimeBox label="Min" value={timeLeft.minutes} />
                <Colon />
                <TimeBox label="Sec" value={timeLeft.seconds} />
              </div>
            ) : (
              <p className="text-red-600 text-center font-semibold mt-4 text-lg">Event is over!</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimeBox({ label, value }: { label: string; value: number }) {
  return (
    <div className="bg-blue-600 px-3 py-2 rounded-lg w-14">
      <div className="text-lg font-bold">{value.toString().padStart(2, '0')}</div>
      <div className="text-[10px] uppercase tracking-wide">{label}</div>
    </div>
  );
}

function Colon() {
  return (
    <div className="flex items-center justify-center text-blue-600 font-bold text-xl">:</div>
  );
}
