import React, { useEffect } from 'react';
import { DateTime } from 'luxon';
import {
  MapPinIcon,
  CalendarDaysIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from '@itseasy21/react-elastic-carousel';
import { Link } from 'react-router-dom';
import { getEvents } from '../../redux/event/event';

export default function Events() {
  const { events } = useSelector((store) => store.event);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 560, itemsToShow: 2 },
    { width: 750, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <div className='flex flex-col w-full justify-center content-center m-5'>
      <Carousel
        breakPoints={breakPoints}
        className='flex flex-col gap-5 justify-between'
      >
        {events.map((event) => (
          <Link
            to={`/details/${event.id}`}
            key={event.id}
            className='w-full h-full m-2'
          >
            <div className='flex flex-col w-full bg-white border border-gray-200 rounded-lg shadow-md hover:scale-[102%] transition duration-200 ease-in-out'>
              <div className='relative block shrink-0'>
                <div className='relative w-full pt-[100%] hover:bg-slate-300'>
                  <img
                    className='absolute inset-0 rounded-t-lg cursor-pointer hover:brightness-75 h-full w-full object-cover'
                    src={
                      event.image ||
                      'https://flowbite.com/docs/images/blog/image-1.jpg'
                    }
                    alt=''
                  />
                </div>
                <p className='absolute px-3 py-1 text-xs font-semibold bg-white rounded-md left-4 top-4'>
                  ${event.price}
                </p>
              </div>
              <div className='flex flex-col items-start flex-1 p-5'>
                <div className='flex justify-between w-full'>
                  <h5 className='text-xl font-bold tracking-tight text-gray-900 h-14 truncate w-32 '>
                    {event.name}
                  </h5>
                  <div className='flex items-center text-gray-700'>
                    <ClockIcon className='w-4 h-4' />
                    <span className='pl-1 text-xs font-normal'>
                      {DateTime.fromISO(event.time).toFormat('h:ma')}
                    </span>
                  </div>
                </div>
                <p className='flex-1 mb-3 leading-tight text-sm font-normal text-gray-700 min-h-[100px]'>
                  {event.description}
                </p>
                <div className='flex justify-between w-full mb-3'>
                  <div className='flex items-center text-gray-400'>
                    <MapPinIcon className='w-5 h-5' />
                    <span className='text-xs font-normal'>
                      {event.location}
                    </span>
                  </div>
                  <div className='flex items-center text-gray-400'>
                    <CalendarDaysIcon className='w-5 h-5' />
                    <span className='pl-1 text-xs font-normal'>
                      {event.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </div>
  );
}
