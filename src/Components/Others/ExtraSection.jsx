import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ExtraCard from "../ExtraCard";
import Marquee from "react-fast-marquee";

const ExtraSection = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/extra.json")
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <div className="my-8">
      <h1 className="text-2xl font-semibold text-white text-center">Top Reted Provider</h1>
      <Marquee className="flex gap-5 my-9" pauseOnHover={true} speed={50}>
        <div className="flex gap-4">
          {data.map((a) => (
            <ExtraCard key={a.skillId} a={a} />
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default ExtraSection;
