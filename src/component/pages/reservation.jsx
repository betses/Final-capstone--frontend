import React from 'react';
import EventCard from './my_reservation/ReservationCard';

export default function Reservation() {
  return (
    <div className="px-10">
      <h1 className="mt-4 mb-12 text-2xl font-extrabold text-gray-900 p md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#6ea9f0] from-[#5294e2]">
          My Events
        </span>
      </h1>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <EventCard />
      </div>
    </div>
  );
}
