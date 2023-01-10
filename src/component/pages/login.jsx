import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getUser from '../../redux/login/userAuth';

export default function Login() {
  const user = useSelector((store) => store.user);
  const [updated, setUpdated] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (event) => {
    setUpdated(event.target.value);
  };
  const handleSubmit = (event) => {
    // 👇 "message" stores input field value
    event.preventDefault();
    dispatch(getUser(updated));
  };

  useEffect(() => {
    const exist = user.length;
    // console.log(exist);
    // console.log(user);
    if (user != null && exist > 0) {
      navigate('/');
    }
  }, [navigate, user]);

  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-full h-min max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8">
        <form className="space-y-6" action="#" onSubmit={handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 text-center underline underline-offset-1">Sign in</h5>
          <div>
            <input onChange={handleChange} type="username" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Username" required />
          </div>
          <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login to your account</button>
          <div className="text-sm font-medium text-gray-500">
            Not registered?
            {' '}
            <Link to="/signup" className="text-blue-700 hover:underline">Create account</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
