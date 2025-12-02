import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import toast from "react-hot-toast";

const MyProfile = () => {
  const { user, setUser } = use(AuthContext);
  const updateProfileFunc = (e) => {
    e.preventDefault();
    const displayName = e.target.name.value;
    const photoURL = e.target.photoURL.value;
    updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
    setUser({
      ...user,
      displayName,
      photoURL,
    });
    toast.success("Profile Updated");
  };

  return (
    <div className="max-w-[1100px] border mx-auto md:flex  bg-linear-to-r from-green-400 to-cyan-500 rounded-md py-5 px-5 my-3">
      <div className="bg-linear-to-r from-gray-800 via-slate-700 to-blue-900  md:w-[400px] rounded-md py-3 px-3 text-center md:mr-50">
        <img
          className="w-[100px] h-[100px] rounded-full mx-auto mb-5"
          src={user?.photoURL}
          alt=""
        />
        <h1 className="text-2xl text-white">{user?.displayName} </h1>
        <p className="text-white text-xl">{user?.email}</p>
      </div>
      <div className="dropdown md:dropdown-end md:ml-40 ">
        <div
          tabIndex={0}
          role="button"
          className=" w-30 mt-5  cursor-pointer bg-linear-to-r  from-purple-600 to-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
        >
          Edit Profile
        </div>
        <div
          tabIndex="-1"
          className="dropdown-content menu bg-base-100 rounded-box z-1 w- p-2 shadow-sm"
        >
          <div className="w-[300px] md:w-[400px]">
            <h1 className="text-2xl font-semibold text-center ">
              Update Profile
            </h1>
            <form onSubmit={updateProfileFunc} className="space-y-3">
              {/* Name */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                  required
                />
              </div>

              {/* Email */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                />
              </div>

              {/* Photo URL */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Photo URL</span>
                </label>
                <input
                  type="url"
                  name="photoURL"
                  placeholder="Enter your photo URL"
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control mt-4">
                <button type="submit" className="btn btn-primary w-full">
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
