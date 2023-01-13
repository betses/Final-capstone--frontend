import React from 'react';
// import { DateTime } from 'luxon';
import { useDispatch } from 'react-redux';
import { deleteEvent } from '../../../redux/event/event';
import {
  TrashIcon,
  MapPinIcon,
  CalendarDaysIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

export default function EventCard({ event }) {
  const dispatch = useDispatch();
  const submitHandler = (id) => dispatch(deleteEvent(id));
  return (
    <div className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md ">
      <div className="relative block shrink-0">
        <div className="relative w-full pt-[100%]">
          <img
            className="absolute inset-0 rounded-t-lg"
            src={
              event.image || 'https://flowbite.com/docs/images/blog/image-1.jpg'
            }
            alt=""
          />
        </div>
        <p className="absolute px-3 py-1 text-xs font-semibold bg-white rounded-md left-4 top-4">
          ${event.price}
        </p>
        <button
          type="button"
          className="absolute p-2 text-red-500 bg-white rounded-full top-4 right-4"
          onClick={() => submitHandler(event.id)}
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>
      <div className="flex flex-col items-start flex-1 p-5">
        <a href=".">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
            {event.name}
          </h5>
        </a>
        <p className="flex-1 mb-3 leading-tight text-sm font-normal text-gray-700 min-h-[100px]">
          {event.description}
        </p>
        <div className="flex justify-between w-full mb-3">
          <div className="flex items-center text-gray-400">
            <MapPinIcon className="w-5 h-5" />
            <span className="text-xs font-normal">{event.location}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <CalendarDaysIcon className="w-5 h-5" />
            <span className="pl-1 text-xs font-normal">{event.date}</span>
          </div>
          {/* <div className="flex items-center text-gray-400">
            <ClockIcon className="w-5 h-5" />

            <span className="pl-1 text-xs font-normal">
              {DateTime.fromISO(event.time).toFormat('h:ma')}
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
}
