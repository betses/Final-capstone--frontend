import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../redux/login/userAuth';

export default function Signup() {
  const user = useSelector((store) => store.user);
  const [updated, setUpdated] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (event) => {
    setUpdated({
      ...updated, [event.target.id]: event.target.value,
    });
  };
  const handleClick = (event) => {
    // 👇 "message" stores input field value
    event.preventDefault();
    dispatch(createUser(updated));
  };
  useEffect(() => {
    const exist = Object.keys(user).length;
    if (exist > 0) {
      navigate('/');
    }
  }, [navigate, user]);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full h-min max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900 text-center underline underline-offset-1">Sign Up</h5>
          <div>
            <input type="username" onChange={handleChange} name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Username" required />
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
  );
}
