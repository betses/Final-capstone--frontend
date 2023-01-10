import React from 'react';

export default function Reservation() {
  return (
    <div className="w-full bg-white">

      <h1 className="mt-4 mb-12 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl text-center underline">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#6ea9f0] from-[#5294e2]">My</span>
        {' '}
        Reservation
      </h1>
      <div className="flex flex-col gap-10 items-center xl:grid xl:grid-cols-2 xl:px-5 xl:gap-5">
        <div className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-3xl hover:bg-gray-100 md:h-64 overflow-hidden">
          <img className="object-cover w-full rounded-t-lg h-48 md:h-full md:w-48 md:rounded-none md:rounded-l-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmHnbUApCzja4EcVY9_Z7CjzbSqpsOlu7o-Gy_rGc7xy9CX6wns0jYx1rTW1aI0z13xXI&usqp=CAU" alt="" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
            <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <div className="mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="font-normal text-gray-400">Gion Hotel, Addis Ababa</span>
            </div>
            <button
              type="button"
              className="w-40 px-4 py-2.5 bg-white-600 text-gray-400 hover:text-gray-500 text-sm rounded shadow-md border-2 border-gray-400 hover:shadow-lg transition duration-150 ease-in-out"
            >
              Cancel Reserve
            </button>
          </div>
        </div>
        <a href="." className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-3xl m hover:bg-gray-100 lg:h-64 overflow-hidden">
          <img className="object-cover w-full rounded-t-lg h-48 md:h-full md:w-48 md:rounded-none md:rounded-l-lg" src="https://scontent.fadd2-1.fna.fbcdn.net/v/t1.6435-9/89495936_2725639097485755_5230245816827904000_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=pUPqdM8j09kAX8tBK9q&_nc_ht=scontent.fadd2-1.fna&oh=00_AfDCERbMqrsbnCc9C-tYBkB05VyYtdWjoksXgmRJoILU8Q&oe=63E0C23E" alt="" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
            <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>
        </a>
        <a href="." className="flex flex-col items-center bg-white border rounded-lg shadow-md md:flex-row md:max-w-3xl m hover:bg-gray-100 lg:h-64 overflow-hidden">
          <img className="object-cover w-full rounded-t-lg h-48 md:h-full md:w-48 md:rounded-none md:rounded-l-lg" src="https://scontent.fadd2-1.fna.fbcdn.net/v/t1.6435-9/89495936_2725639097485755_5230245816827904000_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_ohc=pUPqdM8j09kAX8tBK9q&_nc_ht=scontent.fadd2-1.fna&oh=00_AfDCERbMqrsbnCc9C-tYBkB05VyYtdWjoksXgmRJoILU8Q&oe=63E0C23E" alt="" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
            <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          </div>
        </a>
      </div>
    </div>

  );
}
