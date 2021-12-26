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
    <nav class='flex items-center justify-between flex-wrap bg-gray-900 p-6'>
      <div class='flex items-center flex-shrink-0 text-white mr-6'>
        <span class='font-semibold text-xl tracking-tight'>
          <Link to='/'>{token ? `Welcome ${username}` : "IRR Calculator"}</Link>
        </span>
      </div>
      <div class='w-full block flex-grow lg:flex lg:items-center lg:w-auto'>
        <div class='text-sm lg:flex-grow'>
          {token && (
            <Link
              className=" class='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-blue-300'"
              to='upload'
            >
              Upload File
            </Link>
          )}
        </div>
        <ul>
          {token ? (
            <li className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 lg:mt-0'>
              <button onClick={signout}>SignOut</button>
            </li>
          ) : (
            <li className='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent  hover:text-gray-900 hover:bg-white mt-4 lg:mt-0'>
              <Link to='signin'>Signin</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
