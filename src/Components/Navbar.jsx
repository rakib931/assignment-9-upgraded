import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/The learning point.png";
import { AuthContext } from "../Context/AuthContext";

import { useNavigate } from "react-router";
import { ClockLoader } from "react-spinners";
import toast from "react-hot-toast";
const Navbar = () => {
  const { user, logOut, loading } = use(AuthContext);

  const navigate = useNavigate();

  const handelLogOut = () => {
    logOut()
      .then(() => {
        toast.success("sign Out secces");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  const links = (
    <>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "text-gray-400 font-semibold underline md:mr-2"
            : "text-white hover:text-purple-500 md:mr-2"
        }
      >
        Home
      </NavLink>
      
      <NavLink
        to={"/about-us"}
        className={({ isActive }) =>
          isActive
            ? "text-gray-400 font-semibold underline md:mr-2"
            : "text-white hover:text-purple-500 md:mr-2"
        }
      >
        About us
      </NavLink>
      <NavLink
        to={"/support"}
        className={({ isActive }) =>
          isActive
            ? "text-gray-400 font-semibold underline md:mr-2"
            : "text-white hover:text-purple-500 md:mr-2"
        }
      >
        Support
      </NavLink>
      {user ? (
        <NavLink
          to={"/my-profile"}
          className={({ isActive }) =>
            isActive
              ? "text-gray-400 font-semibold underline"
              : "text-white hover:text-purple-500 md:mr-2"
          }
        >
          MyProfile
        </NavLink>
      ) : (
        ""
      )}
    </>
  );
  return (
    <div className="navbar shadow-sm bg-[#0F172A] text-white px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <div
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-[#0F172A] rounded-box z-1 mt-3 w-52 p-2 shadow z-50"
          >
            {links}
          </div>
        </div>
        <img className="w-[50px] h-[50px]" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">{links}</div>

      {loading ? (
        <div className="navbar-end">
          <ClockLoader />
        </div>
      ) : user ? (
        <div className="navbar-end flex gap-5">
          <div>
            <div className="dropdown dropdown-hover">
              <div tabIndex={0} role="button" className=" m-1">
                <img
                  className="h-10 w-10 rounded-full mx-auto"
                  src={user?.photoURL || "https// photh asufkfjl"}
                  alt=""
                />
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-purple-400 text-white rounded-box z-1 w-30 p-2 shadow-sm"
              >
                {user.displayName}
              </ul>
            </div>
          </div>
          <button
            onClick={handelLogOut}
            className="btn cursor-pointer bg-linear-to-r  from-purple-600 to-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
          >
            LogOut
          </button>
        </div>
      ) : (
        <div className="navbar-end ">
          <Link
            className="btn cursor-pointer bg-linear-to-r  from-purple-600 to-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
            to={"/login"}
          >
            Login
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
