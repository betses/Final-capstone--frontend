import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DateTime } from 'luxon';
import {
  TrashIcon,
  MapPinIcon,
  CalendarDaysIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';
import { getAReserve, deleteReserve } from '../../redux/reserve/reserve';

const Reservation=()=>{
  const user = useSelector((store) => store.user);
  const reservation = useSelector((store) => store.reserve);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const exist = user.length;
    if (exist === 0) {
      navigate('/login');
    } else {
      dispatch(getAReserve());
    }
  }, []);

  const submitHandler = (event) => {
    dispatch(deleteReserve(event.target.id));
  };
  return (
    <div className="px-10 pb-10 w-full xl:px-24">
      <h1 className="mt-4 mb-12 text-2xl font-extrabold text-gray-900 p md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#6ea9f0] from-[#5294e2]">
          My Events
        </span>
      </h1>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {reservation.map((reservation) => (
          <div key={reservation.id} className="flex flex-col bg-white border border-gray-200 rounded-lg shadow-md hover:scale-[102%] transition duration-200 ease-in-out">
            <div className="relative block shrink-0">
              <div className="relative w-full pt-[100%] hover:bg-slate-300">
                <img
                  className="absolute inset-0 h-full rounded-t-lg cursor-pointer hover:brightness-75"
                  src={
                    reservation.event.image || 'https://flowbite.com/docs/images/blog/image-1.jpg'
                  }
                  alt=""
                />
              </div>
              <p className="absolute px-3 py-1 text-xs font-semibold bg-white rounded-md left-4 top-4">
                $
                {reservation.event.price}
              </p>
              <button
                type="button"
                id={reservation.id}
                className="absolute p-2 text-red-500 bg-white rounded-full top-4 right-4"
                onClick={submitHandler}
              >
                <TrashIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col items-start flex-1 p-5">
              <div className="flex justify-between gap-2 w-full pb-3">
                <a href=".">
                  <h5 className="text-2xl font-bold tracking-tight  text-gray-900 ">
                    {reservation.event.name}
                  </h5>
                </a>
                <div className="flex items-center text-gray-700">
                  <ClockIcon className="w-4 h-4" />
                  <span className="pl-1 text-xs font-normal">
                    {DateTime.fromISO(reservation.event.time).toFormat('h:ma')}
                  </span>
                </div>
              </div>
              {/* min-h-[100px] to make the coponent fixed size */}
              <p className="flex-1 mb-3 leading-tight text-sm font-normal text-gray-700 ">
                {reservation.event.description}
              </p>
              <div className="flex justify-between w-full mb-3">
                <div className="flex items-center text-gray-400">
                  <MapPinIcon className="w-5 h-5" />
                  <span className="text-xs font-normal">
                    {reservation.event.location}
                  </span>
                </div>
                <div className="flex items-center text-gray-400">
                  <CalendarDaysIcon className="w-5 h-5" />
                  <span className="pl-1 text-xs font-normal">
                    {reservation.event.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reservation;
