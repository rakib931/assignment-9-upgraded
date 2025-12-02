import React from "react";
import cardlogo from "../assets/W7uMv9jfpxXX0W35hHoSJ4Afw.avif";
const ReviewCard = ({ singelReview }) => {
  const { rating, review, name, role, method, avatar } = singelReview;
  return (
    <div className="max-w-[360px] h-[200px] bg-slate-700 rounded-md  my-3 px-5 py-3 mx-auto hover:bg-slate-800 hover:-translate-y-2 transition-all duration-300">
      <div className="flex justify-between items-center">
        <div className="flex">
          <p>⭐⭐⭐⭐⭐</p>
          <p className="text-gray-400">( {rating} )</p>
        </div>
        <img className="w-10 h-10" src={cardlogo} alt="" />
      </div>
      <p className="text-white text-wrap">"{review}"</p>
      <div className="flex items-center mt-3">
        <img className="w-10 h-10 rounded-full mr-3" src={avatar} alt="" />
        <div className="items-center">
          <h1 className="text-white">{name}</h1>
          <p className="text-gray-400">
            {role} &bull; <span>{method}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
