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
    <aside className="flex flex-col items-center bg-white text-gray-700 shadow h-full md:w-50 lg:w-56 md:items-start md:overflow-hidden">
      <div className="h-16 flex items-center w-full shadow-md md:rounded-b-3xl">
        <a className="h-6 w-6 mx-auto" href=".">
          <img
            className="h-6 w-6 mx-auto"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/512px-Svelte_Logo.svg.png"
            alt="logo"
          />
        </a>
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
              <span className="hidden md:block text-sm font-medium mx-auto md:mx-0 uppercase ">{element.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>

    </aside>
  );
}

export default Sidenav;
