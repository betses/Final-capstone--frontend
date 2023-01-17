import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';
import { DateTime } from 'luxon';
import { getEvents } from '../../redux/event/event';
import { createReserve } from '../../redux/reserve/reserve';
import background from '../../assets/danny-howe-bn-D2bCvpik-unsplash.jpg';

export default function Reserve() {
  const user = useSelector((store) => store.user);
  const events = useSelector((store) => store.event);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const [value, setValue] = useState({
    name: '',
    city: '',
    event_id: '',
  });

  const updateValue = (e) => {
    setValue({
      ...value,
      [e.target.id]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const dateNow = DateTime.now().toFormat('yyyy-MM-dd');
    const exist = user.length;
    if (exist === 0) {
      navigate('/login');
    } else {
      const userID = user[0].id;
      const currentValue = {
        ...value,
        date: dateNow,
        user_id: userID,
      };
      dispatch(createReserve(currentValue))
        .then((payload) => {
          if (payload.status) {
            document.querySelector('#create_form').reset();
            setSuccess(payload.message);
          } else {
            setError(payload.message);
          }
        });
    }
  };
  useEffect(() => {
    // const exist = user.length;
    dispatch(getEvents());
  }, [dispatch]);

  return (
    <div className="flex justify-end w-full bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
      <div className="w-full max-w-sm lg:max-w-lg backdrop-blur-sm bg-white/40 h-screen ">
        <div className="flex flex-col px-14 lg:px-20 items-center justify-center h-full text-white">
          <p className="text-4xl font-semibold">Reserve</p>
          <form id="create_form" onSubmit={submitHandler}>
            <p>{success}</p>
            <p>{error}</p>
            <div className="relative w-full mt-8">
              <select defaultValue="" onChange={updateValue} id="event_id" className="bg-gray-300 w-full appearance-none p-4 border border-gray-300 text-gray-900 text-sm rounded-full focus:outline-none focus:bg-white focus:border-purple-500" required>
                <option disabled value="" hidden>Choose Events</option>
                {events.map((event) => (
                  <option key={event.id} value={event.id}>{event.name}</option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <ChevronDownIcon className="text-slate-700 h-4 w-4" />
              </div>
            </div>

            <input onChange={updateValue} className="bg-gray-300 mt-3 appearance-none border-2 border-gray-300 rounded-full w-full p-4 text-sm text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" id="name" placeholder="Name" required />
            <input onChange={updateValue} className="bg-gray-300 mt-3 appearance-none border-2 border-gray-300 rounded-full w-full p-4 text-sm text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text" id="city" placeholder="City" required />
            <p className="bg-gray-300 p-4 mt-3 rounded-full w-full text-sm  text-gray-700 hover:bg-white border-2 border-gray-300 cursor-pointer hover:border-purple-500">{DateTime.now().toFormat('MMMM / dd / yyyy')}</p>
            <button type="submit" className="bg-indigo-500 hover:bg-indigo-600 p-4 mt-14 rounded-full w-full">Reserve</button>
          </form>
        </div>
      </div>
    </div>
  );
}
