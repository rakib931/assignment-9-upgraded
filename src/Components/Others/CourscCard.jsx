import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router";

const CourscCard = ({ singelData }) => {
  const navigate = useNavigate();
  const handelviewsDetels = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate("/carddetels");
    }
  };

  const { user } = use(AuthContext);
  const { skillId } = singelData;
  return (
    <div className="card w-60 h-[300px] bg-gray-200 shadow-xl rounded-md">
      <figure className="h-[125px]">
        <img
          src={singelData.image}
          alt={singelData.skillName}
          className="h-full w-full object-cover "
        />
      </figure>
      <div className="card-body text-center">
        <h2 className="card-title justify-center text-[15px]">
          {singelData.skillName}
        </h2>
        <div className="flex items-center">
          <p className="text-yellow-500 font-semibold">
            ⭐ {singelData.rating}
          </p>
          <p className="text-lg font-bold py-0">${singelData.price}</p>
        </div>
        <div className="card-actions justify-center mt-1">
          <Link
            to={`/carddetels/${skillId}`}
            onClick={handelviewsDetels}
            className="btn btn-primary btn-sm"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourscCard;
