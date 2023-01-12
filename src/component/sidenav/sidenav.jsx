import { NavLink } from 'react-router-dom';
import React from 'react';
import home from '../../assets/icon1.svg';
import bookmark from '../../assets/icon2.svg';
import remove from '../../assets/icon3.svg';
import cart from '../../assets/icon4.svg';
import add from '../../assets/icon5.svg';

function Sidenav() {
  const navItems = [
    { icon: home, label: 'Events', link: '/' },
    { icon: bookmark, label: 'My Reservation', link: '/my-reservations' },
    { icon: cart, label: 'Reserve Event', link: '/reserve' },
    { icon: add, label: 'Create Event', link: '/create-event' },
    { icon: remove, label: 'Delete Event', link: '/delete-event' },
  ];

  return (
    <aside className="flex flex-col items-center bg-white text-gray-700 shadow-inner md:items-start ">
      <div className="flex md:flex-col lg:flex-row md:w-full justify-center items-center px-2 py-5 space-x-4 shadow-md">
        <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" className="w-10 h-10 md:w-12 md:h-12 rounded-full" />
        <div className="hidden md:block">
          <h2 className="text-lg font-semibold">Betse Sebe</h2>
          <span className="flex md:justify-center items-center space-x-1">
            <a href="." className="text-xs hover:underline dark:text-gray-400">View profile</a>
          </span>
        </div>
      </div>
      <ul className="w-full mt-2">
        {navItems.map((element) => (
          <li className="hover:bg-gray-100" key={element.icon}>
            <NavLink
              to={element.link}
              className="h-16 px-4 flex justify-center md:justify-start  items-center md:gap-5 transform md:hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
            >
              <img
                className="h-5 w-5 mx-auto md:mx-0 font-bold"
                src={element.icon}
                alt="svelte logo"
              />
              <span className="hidden md:block text-sm font-medium mx-auto md:mx-0 uppercase w-52">{element.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
      <div className="mt-auto h-16 flex items-center w-full focus:text-orange-500 hover:bg-red-200 ">
        <a
          href="."
          className="h-16 mx-auto w-full  focus:outline-none px-4 flex justify-center md:justify-start  items-center md:gap-5 transform md:hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
        >
          <svg
            className="h-5 w-5 text-red-700"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>

        </a>
      </div>

    </aside>
  );
}

export default Sidenav;
