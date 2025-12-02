import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <div className="text-center text-white md:w-7xl">
        <p className="text-xl font-semibold text-sky-400">User Reviews</p>
        <h1 className="text-4xl font-bold py-2">What Our Users Say</h1>
        <p className="text-gray-100 text-ms">
          Feedbacks from users who have transformed their learning journey
          with <br /> The Learning Point
        </p>
      </div>
      <div className="grid md:grid-cols-3 w-full ">
        {data.map((singelReview) => (
          <ReviewCard key={singelReview.id} singelReview={singelReview} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
