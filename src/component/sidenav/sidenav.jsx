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
      <div className="flex md:flex-col lg:flex-row md:w-full justify-center items-center p-2 space-x-4 shadow-md">
        <img src="https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png" alt="" className="w-12 h-12 rounded-full" />
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
              <span className="hidden md:block text-sm font-medium mx-auto md:mx-0 uppercase ">{element.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>

    </aside>
  );
}

export default Sidenav;
