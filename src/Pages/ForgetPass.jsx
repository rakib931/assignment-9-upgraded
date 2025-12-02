import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";

const ForgetPass = () => {
  const location = useLocation();
  const [email, setEmail] = useState("");
  const { forgetPassword } = useContext(AuthContext);

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handelForgetpass = (e) => {
    e.preventDefault();
    forgetPassword(email)
      .then(() => toast.success("check your email"))
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className=" bg-linear-to-r from-blue-700 via-indigo-800 to-violet-700 rounded-md px-5 py-5 h-fit my-3">
      <form onSubmit={handelForgetpass} className="flex flex-col gap-4">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="input input-bordered w-full"
          required
        />
        <button type="submit" className="bg-linear-to-r from-purple-600 to-blue-600 text-white  w-full mt-2 btn">
          Forget Password
        </button>
      </form>
    </div>
  );
};

export default ForgetPass;
