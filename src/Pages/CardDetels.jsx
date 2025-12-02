import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useLoaderData, useNavigate, useParams } from "react-router";

import { SyncLoader } from "react-spinners";
import toast from "react-hot-toast";

const CardDetels = () => {
  const navigate = useNavigate();
  const { user, loading } = use(AuthContext);
  const data = useLoaderData();
  const { id } = useParams();
  const [card, setCard] = useState({});
  useEffect(() => {
    const cardDetels = data.find((a) => a.skillId == id);
    setCard(cardDetels);
  }, [data, id]);
  const bookNow = (e) => {
    e.preventDefault();
    toast.success("book succes");
    e.target.reset();
  };
  const {
    skillName,
    providerName,
    providerEmail,
    price,
    rating,
    slotsAvailable,
    description,
    image,
    category,
  } = card;

  return (
    <>
      {loading ? (
        <div>
          <SyncLoader />
        </div>
      ) : user ? (
        <div className="max-w-3/4 mx-auto md:flex md:gap-5 ">
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-base-200">
            <figure className="px-5 pt-5">
              <img
                src={image}
                alt={skillName}
                className="rounded-xl h-44 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title text-lg font-bold text-primary">
                {skillName}
              </h2>

              <p className="text-sm text-gray-500">{description}</p>

              <div className="mt-2">
                <p className="text-sm">
                  <span className="font-semibold">Category:</span> {category}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Instructor:</span>{" "}
                  {providerName}
                </p>
                <p className="text-sm">
                  <span className="font-semibold">Email:</span> {providerEmail}
                </p>
              </div>

              <div className="flex justify-between items-center mt-3">
                <div className="badge badge-primary badge-outline">
                  ⭐ {rating}
                </div>
                <div className="badge badge-secondary badge-outline">
                  💲{price}
                </div>
              </div>

              <div className="mt-2">
                <p className="text-sm">
                  <span className="font-semibold">Slots:</span> {slotsAvailable}
                </p>
              </div>
            </div>
          </div>
          <div className="my-4 md:w-100">
            <form onSubmit={bookNow} className="flex flex-col gap-4">
              {/* Name Input  */}
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered w-full"
              />
              {/* Email Input */}
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered w-full"
              />

              {/* Login Button */}
              <button type="submit" className="btn btn-primary w-full mt-2">
                book now
              </button>
            </form>
          </div>
        </div>
      ) : (
        navigate("/login")
      )}
    </>
  );
};

export default CardDetels;
