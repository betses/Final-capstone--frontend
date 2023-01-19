import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { getAnEvent, removeAnEvent } from '../../redux/event/event';

const EventsDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { event } = useSelector((store) => store.event);
  const {
    name, description, image, category, date, organizer, location, price,
  } = event;

  useEffect(() => {
    dispatch(getAnEvent(id));
  }, [dispatch, id]);

  const handleClick = () => {
    dispatch(removeAnEvent());
  };

  return (
    <div className="container flex md:flex-row flex-col m-10 justify-evenly w-full gap-5">
      <Link to="/" className="place-self-end">
        <button type="button" onClick={handleClick} className="bg-green-500 mt-40 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r-full">
          Back
        </button>
      </Link>
      <div className="container flex justify-center py-2  bg-cover">
        <img src={image} className="w-full rounded-xl" alt="details" />
      </div>
      <div className="container w-full h-auto flex flex-col items-end py-4 px-30 justify-end mr-5">
        <h1 className="text-2xl font-bold py-4">{name}</h1>
        <div className="flex flex-row justify-between w-full border bg-gray-100 px-2 py-2">
          <span>Price</span>
          <span>
            $
            {price}
          </span>
        </div>
        <div className="flex flex-row justify-between w-full border px-2 py-2 gap-3">
          <span>Description</span>
          <span>{description}</span>
        </div>
        <div className="flex flex-row justify-between w-full border bg-gray-100 px-2 py-2">
          <span>Category</span>
          <span>{category}</span>
        </div>
        <div className="flex flex-row justify-between w-full border px-2 py-2">
          <span>Date</span>
          <span>{date}</span>
        </div>
        <div className="flex flex-row justify-between w-full border bg-gray-100 px-2 py-2">
          <span>Location</span>
          <span>{location}</span>
        </div>
        <div className="flex flex-row justify-between w-full border px-2 py-2">
          <span>Organizer</span>
          <span>{organizer}</span>
        </div>
        <Link to="/reserve">
          <button
            type="button"
            className="bg-green-500 mt-40 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
          >
            Reserve
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventsDetails;
