import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa6";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const { userLogin, handelGoogleSignIn, setUser, show, setShow } =
    useContext(AuthContext);

  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length < 6) {
      toast.error("password should be 6 carecter ");
      return;
    }

    userLogin(email, password)
      .then(() => {
        toast.success("login success");
        navigate("/");
      })
      .catch((error) => {
        if (error.code === "auth/invalid-email") {
          toast.error("Invalid email address!");
        } else if (error.code === "auth/user-disabled") {
          toast.error("This account has been disabled.");
        } else if (error.code === "auth/user-not-found") {
          toast.error("No user found with this email.");
        } else if (error.code === "auth/invalid-credential") {
          toast.error("Incorrect password. Try again.");
        } else if (error.code === "auth/email-already-in-use") {
          toast.error("This email is already registered.");
        } else if (error.code === "auth/weak-password") {
          toast.error("Password should be at least 6 characters.");
        } else if (error.code === "auth/network-request-failed") {
          toast.error("Network error. Check your internet connection.");
        } else if (error.code === "permission-denied") {
          toast.error("You don’t have permission for this action.");
        } else if (error.code === "unavailable") {
          toast.error("Server unavailable. Try again later.");
        } else if (error.code === "storage/unauthorized") {
          toast.error("You are not authorized to upload this file.");
        } else if (error.code === "storage/canceled") {
          toast.error("Upload canceled.");
        } else {
          toast.error("Unknown error: " + error.message);
        }
      });
  };

  const SignInGoogle = () => {
    handelGoogleSignIn()
      .then((res) => {
        setUser(res.user);
        toast.success("sign in success");
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };

  const handelForgetPassword = () => {
    navigate("/forgetPass", { state: { email } });
  };

  return (
    <div className="card w-80 h-fit shadow-xl bg-white p-6 bg-linear-to-r from-blue-900 via-indigo-800 to-violet-700 text-white my-3">
      <h2 className="text-2xl font-bold text-center mb-3">Login</h2>

      <form onSubmit={handelLogin} className="flex flex-col gap-4">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="input input-bordered w-full text-black"
          required
        />

        <div className="relative">
          <input
            type={show ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="input input-bordered w-full text-black"
            required
          />
          <span
            onClick={() => setShow(!show)}
            className="absolute right-3 top-3 cursor-pointer text-black"
          >
            {show ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>

        <button type="submit" className="btn btn-primary w-full mt-2">
          Login
        </button>
      </form>

      <button
        onClick={SignInGoogle}
        className="btn btn-secondary w-full mt-2 flex items-center justify-center gap-2"
      >
        <FcGoogle />
        Google Sign In
      </button>

      <div className="text-center mt-4">
        <p className="text-sm">
          Dont have an Account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
        <p className="text-sm mt-2">
          <button
            onClick={handelForgetPassword}
            className="text-red-500 hover:underline"
          >
            Forgot Password?
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
