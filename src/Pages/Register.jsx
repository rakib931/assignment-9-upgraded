import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, setUser, show, user, setShow, updateUser } =
    use(AuthContext);
  const creatUserWithEmailandPass = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters, include uppercase, lowercase, and a special character"
      );
      return;
    }
    createUser(email, password)
      .then((res) => {
        setUser(res.user);
        toast.success("signUp susses");
        updateUser({ displayName: name, photoURL: photo });
        setUser({
          ...user,
          displayName: name,
          photoURL: photo,
        });
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.code);
      });
  };
  return (
    <div className="card w-80 h-fit shadow-xl bg-white p-6 bg-linear-to-r from-blue-900 via-indigo-800 to-violet-700 text-white my-3">
      <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

      <form
        onSubmit={creatUserWithEmailandPass}
        className="flex flex-col gap-4"
      >
        {/* Name Input */}
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="input input-bordered w-full text-black "
          required
        />

        {/* Photo Input */}
        <input
          type="text"
          name="photo"
          placeholder="PhotoURL"
          className="input input-bordered w-full text-black"
          required
        />

        {/* Password Input */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full text-black"
          required
        />

        {/* Password Input */}
        <div>
          <input
            type={show ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="input input-bordered w-full relative text-black"
            required
          />
          <span
            onClick={() => setShow(!show)}
            className="absolute -ml-6 mt-3 text-black"
          >
            {show ? <FaEye /> : <FaEyeSlash />}
          </span>
        </div>

        {/* Register Button */}
        <button type="submit" className="btn btn-primary w-full mt-2">
          Register
        </button>
      </form>

      {/* Optional Links */}
      <div className="text-center mt-4">
        <p className="text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
