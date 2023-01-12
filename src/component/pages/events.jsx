import React, { useRef, useState } from 'react';
import './events.css';

export default function Events() {
 
  const elementRef = useRef(null);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(null);

  const handleMouseDown = (e) => {
    setStartX(e.pageX - elementRef.current.offsetLeft);
    setScrollLeft(elementRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setStartX(null);
  };

  const handleMouseUp = () => {
    setStartX(null);
  };

  const handleMouseMove = (e) => {
    if (startX === null) return;
    e.preventDefault();
    const x = e.pageX - elementRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    elementRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      
      <div
        className='overflow-x-scroll flex m-auto p-auto hide-scroll-bar '
        ref={elementRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <div className='flex flex-nowrap lg:ml-40 md:ml-20 ml-10 gap-4'>
          <div className='w-64 h-min bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
            <a href='.'>
              <img
                className='rounded-t-lg'
                src='https://flowbite.com/docs/images/blog/image-1.jpg'
                alt=''
              />
            </a>
            <div className='p-5'>
              <a href='.'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className='mb-3 font-normal text-gray-700'>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href='.'
                className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
              >
                Read more
                <svg
                  aria-hidden='true'
                  className='w-4 h-4 ml-2 -mr-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className='w-64 h-min bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
            <a href='.'>
              <img
                className='rounded-t-lg'
                src='https://flowbite.com/docs/images/blog/image-1.jpg'
                alt=''
              />
            </a>
            <div className='p-5'>
              <a href='.'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className='mb-3 font-normal text-gray-700'>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href='.'
                className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
              >
                Read more
                <svg
                  aria-hidden='true'
                  className='w-4 h-4 ml-2 -mr-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className='w-64 h-min bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
            <a href='.'>
              <img
                className='rounded-t-lg'
                src='https://flowbite.com/docs/images/blog/image-1.jpg'
                alt=''
              />
            </a>
            <div className='p-5'>
              <a href='.'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className='mb-3 font-normal text-gray-700'>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href='.'
                className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
              >
                Read more
                <svg
                  aria-hidden='true'
                  className='w-4 h-4 ml-2 -mr-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className='w-64 h-min bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
            <a href='.'>
              <img
                className='rounded-t-lg'
                src='https://flowbite.com/docs/images/blog/image-1.jpg'
                alt=''
              />
            </a>
            <div className='p-5'>
              <a href='.'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className='mb-3 font-normal text-gray-700'>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href='.'
                className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
              >
                Read more
                <svg
                  aria-hidden='true'
                  className='w-4 h-4 ml-2 -mr-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className='w-64 h-min bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
            <a href='.'>
              <img
                className='rounded-t-lg'
                src='https://flowbite.com/docs/images/blog/image-1.jpg'
                alt=''
              />
            </a>
            <div className='p-5'>
              <a href='.'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className='mb-3 font-normal text-gray-700'>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href='.'
                className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
              >
                Read more
                <svg
                  aria-hidden='true'
                  className='w-4 h-4 ml-2 -mr-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className='w-64 h-min bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
            <a href='.'>
              <img
                className='rounded-t-lg'
                src='https://flowbite.com/docs/images/blog/image-1.jpg'
                alt=''
              />
            </a>
            <div className='p-5'>
              <a href='.'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className='mb-3 font-normal text-gray-700'>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href='.'
                className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
              >
                Read more
                <svg
                  aria-hidden='true'
                  className='w-4 h-4 ml-2 -mr-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className='w-64 h-min bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
            <a href='.'>
              <img
                className='rounded-t-lg'
                src='https://flowbite.com/docs/images/blog/image-1.jpg'
                alt=''
              />
            </a>
            <div className='p-5'>
              <a href='.'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className='mb-3 font-normal text-gray-700'>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href='.'
                className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
              >
                Read more
                <svg
                  aria-hidden='true'
                  className='w-4 h-4 ml-2 -mr-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className='w-64 h-min bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
            <a href='.'>
              <img
                className='rounded-t-lg'
                src='https://flowbite.com/docs/images/blog/image-1.jpg'
                alt=''
              />
            </a>
            <div className='p-5'>
              <a href='.'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className='mb-3 font-normal text-gray-700'>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href='.'
                className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
              >
                Read more
                <svg
                  aria-hidden='true'
                  className='w-4 h-4 ml-2 -mr-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </div>
          </div>
          <div className='w-64 h-min bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out'>
            <a href='.'>
              <img
                className='rounded-t-lg'
                src='https://flowbite.com/docs/images/blog/image-1.jpg'
                alt=''
              />
            </a>
            <div className='p-5'>
              <a href='.'>
                <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className='mb-3 font-normal text-gray-700'>
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                href='.'
                className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300'
              >
                Read more
                <svg
                  aria-hidden='true'
                  className='w-4 h-4 ml-2 -mr-1'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
