import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getEvent } from '../../redux/event/event';
import EventCard from './delete_event/EventCard';

export default function DeleteEvent() {
  const events = useSelector((store) => store.event);
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const exist = Object.keys(user).length;
    if (exist === 0) {
      navigate('/login');
    } else {
      dispatch(getEvent());
    }
  }, [dispatch, navigate, user]);

  return (
    <div className="px-10 pb-10 xl:px-24">
      <h1 className="mt-4 mb-12 text-2xl font-extrabold text-gray-900 p md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#6ea9f0] from-[#5294e2]">
          Events
        </span>
      </h1>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
