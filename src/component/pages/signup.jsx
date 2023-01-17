/* eslint-disable jsx-a11y/label-has-associated-control */
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../redux/login/userAuth';
import logInBackgroundIMG from '../../assets/signup.jpg';

export default function Signup() {
  const user = useSelector((store) => store.user);
  const [updated, setUpdated] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState('');
  // const [taken, setTaken] = useState('');
  const handleChange = (event) => {
    setUpdated({
      ...updated, [event.target.id]: event.target.value,
    });
  };
  const handleClick = (event) => {
    event.preventDefault();
    dispatch(createUser(updated))
      .then((payload) => {
        setError(payload);
        document.querySelector('#create_form').reset();
      });
  };
  useEffect(() => {
    const exist = Object.keys(user).length;
    if (exist > 0) {
      navigate('/');
    }
  }, [navigate, user]);
  return (
    <div className="w-full flex">
      <div className="flex justify-center items-center w-full lg:w-3/5 bg-white">
        <div className="w-full h-min max-w-sm p-4">
          <form className="space-y-6" id="create_form" action="#">
            <h5 className="text-3xl text-gray-900 text-center font-bold">Sign Up</h5>
            <div className="flex flex-col gap-3 mt-5">
              <label className="uppercase text-xs tracking-wider font-medium">Create Your username</label>
              <p>
                Username
                {' '}
                {error}
              </p>
              <input onChange={handleChange} type="username" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Username" required />
            </div>
            <button type="submit" onClick={handleClick} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Register your account</button>
            <div className="text-sm font-medium text-gray-500">
              Have an account?
              {' '}
              <Link to="/login" className="text-blue-700 hover:underline">Login</Link>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden w-2/5 bg-cover bg-center text-white md:block" style={{ backgroundImage: `url(${logInBackgroundIMG})` }}>
        <div className="flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-50">
          <p className="text-5xl font-bold">Hello, Friend!</p>
          <p>Enter your personal detail and start journy with us</p>
        </div>
      </div>
    </div>
  );
}
