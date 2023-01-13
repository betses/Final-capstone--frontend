import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEvent, deleteEvent } from '../../redux/event/event';

export default function DeleteEvent() {
  const event = useSelector((store) => store.event);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvent());
  }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(deleteEvent(e.target.value));
  };
  return (
    <div className="w-full">
      <h1 className="mt-4 mb-12 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl text-center underline">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#6ea9f0] from-[#5294e2]">
          Events
        </span>
      </h1>
      <div className=" flex flex-wrap justify-center gap-10">
        {event.map((elements) => (
          <div
            key={elements.id}
            className="max-w-sm h-min bg-white border border-gray-200 rounded-lg shadow-md"
          >
            <a href=".">
              <img
                className="rounded-t-lg"
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href=".">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {elements.name}
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700">
                {elements.description}
              </p>
              <button
                onClick={submitHandler}
                type="button"
                value={elements.id}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Delete Event
                <svg
                  aria-hidden="true"
                  className="w-4 h-4 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
