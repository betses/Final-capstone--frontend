import { NavLink } from 'react-router-dom';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import home from '../../assets/icon1.svg';
import bookmark from '../../assets/icon2.svg';
import remove from '../../assets/icon3.svg';
import cart from '../../assets/icon4.svg';
import add from '../../assets/icon5.svg';
import { signOut } from '../../redux/login/user';

function Sidenav() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const signMeOut = () => {
    localStorage.removeItem('user');
    dispatch(signOut());
  };

  const navItems = [
    { icon: home, label: 'Events', link: '/' },
    { icon: bookmark, label: 'My Reservation', link: '/my-reservations' },
    { icon: cart, label: 'Reserve Event', link: '/reserve' },
    { icon: add, label: 'Create Event', link: '/create-event' },
    { icon: remove, label: 'Delete Event', link: '/delete-event' },
  ];

  return (
    <aside className="flex flex-col items-center text-gray-700 bg-white shadow-inner shrink-0 md:items-start md:overflow-hidden">
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
              <a
                href="."
                className="text-xs hover:underline dark:text-gray-400"
              >
                View profile
              </a>
            </span>
          </div>
        </div>
      ) : (
        <NavLink
          to="/login"
          className="flex items-center justify-center w-full px-2 py-5 space-x-4 shadow-md"
        >
          <button
            type="button"
            className="p-2 px-10 text-white rounded-lg bg-slate-700 hover:bg-slate-500"
          >
            Sign In
          </button>
        </NavLink>
      )}

      <ul className="w-full mt-2">
        {navItems.map((element) => (
          <NavLink
            key={element.icon}
            to={element.link}
            className={({ isActive }) => (isActive ? 'flex bg-gray-200' : 'flex hover:bg-gray-100')}
          >
            <li className=" flex items-center justify-center h-16 px-4 text-gray-500 transition-transform duration-200 ease-in transform md:justify-start md:gap-5 md:hover:translate-x-2 hover:text-gray-800">
              <img
                className="w-5 h-5 mx-auto font-bold md:mx-0"
                src={element.icon}
                alt="svelte logo"
              />
              <span className="hidden mx-auto text-sm font-medium uppercase md:block md:mx-0 w-52">
                {element.label}
              </span>
            </li>
          </NavLink>
        ))}
      </ul>
      {
        user.length > 0 ? (
          <div className="flex items-center w-full h-16 mt-auto focus:text-orange-500 hover:bg-red-200 ">
            <button
              type="button"
              onClick={signMeOut}
              className="flex items-center justify-center w-full h-16 px-4 mx-auto text-gray-500 transition-transform duration-200 ease-in transform focus:outline-none md:justify-start md:gap-5 md:hover:translate-x-2 hover:text-gray-800"
            >
              <svg
                className="w-5 h-5 text-red-700"
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
              Sign Out
            </button>
          </div>
        ) : (
          <div />
        )
      }
    </aside>
  );
}

export default Sidenav;
