import React from 'react';
import {
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import background from '../../assets/danny-howe-bn-D2bCvpik-unsplash.jpg';

export default function Reserve() {
  return (
    <div className="flex justify-end w-full bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
      <div className="w-full max-w-sm lg:max-w-lg backdrop-blur-sm bg-white/40 h-screen ">
        <div className="flex flex-col px-14 lg:px-20 items-center justify-center h-full text-white">
          <p className="text-4xl font-semibold">Reserve</p>
          <div className="relative w-full mt-8">
            <select id="countries" className="bg-gray-300 w-full appearance-none px-4 py-5 border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none focus:bg-white focus:border-purple-500">
              <option selected disabled value="">Choose Events</option>
              <option value="US">Event 1</option>
              <option value="CA">Event 2</option>
              <option value="FR">Event 3</option>
              <option value="DE">Event 4</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <ChevronDownIcon className="text-slate-700 h-4 w-4" />
            </div>
          </div>

          <input className="bg-gray-300 mt-3 appearance-none border-2 border-gray-300 rounded-full w-full p-4 text-sm text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="Name" />
          <input className="bg-gray-300 mt-3 appearance-none border-2 border-gray-300 rounded-full w-full p-4 text-sm text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="date" />
          <input className="bg-gray-300 mt-3 appearance-none border-2 border-gray-300 rounded-full w-full p-4 text-sm text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" placeholder="City" />
          <button type="button" className="bg-indigo-500 hover:bg-indigo-600 p-4 mt-14 rounded-full w-full">Reserve</button>
        </div>
      </div>
    </div>
  );
}
