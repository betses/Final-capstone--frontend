import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getSingle } from '../../redux/event/event';


const EventsDetails = () => {
    const {id} = useParams(); 
    const events = useSelector((store) => store.event);
    const dispatch = useDispatch();
    console.log(id)
    useEffect((id) => {
        dispatch(getSingle(id));
    }, []);


  return (
    <div className="container flex flex-row w-full m-28">
      <div className="container flex justify-center py-2 items-center">
        <img src={events[0].image} className="w-full h-" alt="details" />
      </div>
      <div className="conatiner w-full h-auto flex flex-col items-end py-4 px-30">
        <h1 className="text-2xl font-bold py-4">{events[0].name}</h1>
        <div className="flex flex-row justify-between w-60 border bg-gray-100 px-2 py-2">
          <span>Price</span>
          <span>${events[0].price}</span>
        </div>
        <h1 className="text-2xl font-bold py-2 px-4">{events[0].description}</h1>
        <p className="text-2xl font-bold py-2 px-4">{events[0].category}</p>
        <Link to="/user/Reservation">
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
