import { NavLink } from 'react-router-dom';
import React from 'react';
import {
  InboxIcon,
  BookmarkIcon,
  ShoppingCartIcon,
  PlusCircleIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';
import {
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/solid';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../../redux/login/user';

const Sidenav = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const signMeOut = () => {
    localStorage.removeItem('user');
    dispatch(signOut());
  };

  const navItems = [
    {
      component: <InboxIcon className="h-5 w-5" />, label: 'Events', link: '/',
    },
    {
      component: <BookmarkIcon className="h-5 w-5" />, label: 'My Reservation', link: '/my-reservations',
    },
    {
      component: <ShoppingCartIcon className="h-5 w-5" />, label: 'Reserve Event', link: '/reserve',
    },
    {
      component: <PlusCircleIcon className="h-5 w-5" />, label: 'Create Event', link: '/create-event',
    },
    {
      component: <TrashIcon className="h-5 w-5" />, label: 'Delete Event', link: '/delete-event',
    },
  ];

  return (
    <aside className="flex flex-col items-center text-gray-700 bg-white border shrink-0 md:items-start md:overflow-hidden">
      {user.length > 0 ? (
        <div className="flex items-center justify-center px-2 py-5 space-x-4 shadow-md md:flex-col lg:flex-row md:w-full">
          <img
            src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
            alt=""
            className="w-10 h-10 rounded-full md:w-12 md:h-12"
          />
          <div className="hidden md:block">
            <h2 className="text-lg font-semibold">{user[0].username}</h2>
            <span className="flex items-center space-x-1 md:justify-center">
              <button
                type="button"
                onClick={signMeOut}
                className="text-xs hover:underline dark:text-gray-400"
              >
                Log Out
              </button>
            </span>
          </div>
        </div>
      ) : (
        <div
          className="flex items-center justify-center w-full md:py-5 border-b shadow-md"
        >
          <NavLink
            to="/login"
            className="hidden md:block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center "
          >
            Sign In

          </NavLink>
          <NavLink
            to="/login"
            className="md:hidden py-5 w-full flex justify-center bg-blue-700 text-white hover:bg-blue-800"
          >
            <ArrowRightOnRectangleIcon className="h-5 w-5" />
          </NavLink>
        </div>
      )}

      <ul className="w-full mt-4">
        {navItems.map((element) => (
          <NavLink
            key={element.label}
            to={element.link}
            className={({ isActive }) => (isActive ? 'flex bg-gray-200' : 'flex hover:bg-gray-100')}
          >
            <li className=" flex items-center justify-center h-16 px-4 text-gray-500 transition-transform duration-200 ease-in transform md:justify-start md:gap-5 md:hover:translate-x-2 hover:text-gray-800">
              {element.component}
              <span className="hidden mx-auto text-sm font-medium uppercase md:block md:mx-0 w-52">
                {element.label}
              </span>
            </li>
          </NavLink>
        ))}
      </ul>
      <div className="hidden md:flex items-center justify-center w-full h-16 mt-auto">
        <p className="text-xs">&copy; 2023 Eventify</p>
      </div>
    </aside>
  );
};

export default Sidenav;
