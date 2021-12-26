import { Link, useNavigate } from "react-router-dom";

import React from "react";
import { useSelector } from "react-redux";
import { defaultState } from "../../store/state/authSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const signout = () => {
    localStorage.removeItem("token");
    dispatch(defaultState());
    navigate("/signin", { replace: true });
  };

  const { token, username } = useSelector((state) => state.auth);

  return (
    <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6 bg-black'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <svg
          className='fill-current h-8 w-8 mr-2'
          width='54'
          height='54'
          viewBox='0 0 54 54'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path d='M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z' />
        </svg>

        {token ? (
          <>
            <Link to='/'>
              <span className='font-semibold text-xl tracking-tight'>
                Welcome {username}
              </span>
            </Link>
            <Link to='upload'>
              <span className='text-lg tracking-tight ml-3 '>Upload File</span>
            </Link>
          </>
        ) : (
          <span className='font-semibold text-xl tracking-tight'>
            IRR Calculator
          </span>
        )}
      </div>
      <ul className='text-white flex'>
        {token ? (
          <li className='mr-2'>
            <button onClick={signout}>SignOut</button>
          </li>
        ) : (
          <li className='mr-2'>
            <Link to='signin'>Signin</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
