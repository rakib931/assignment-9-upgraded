import React from "react";
import CourscCardPage from "../Components/Others/CourscCardPage";
import ExtraSection from "../Components/Others/ExtraSection";
import HowitWork from "../Components/HowitWork";
import Reviews from "../Components/Reviews";
import WhyChose from "../Components/WhyChose";
const Home = () => {
  return (
    <div>
      <section className="my-4 md:max-w-[1240px] max-w-[350px] mx-auto">
        <CourscCardPage />
      </section>
      <section className="md:max-w-[1240px] max-w-[350px] mx-auto my-4">
        <ExtraSection />
      </section>
      <section className="md:max-w-[1240px] max-w-[350px] mx-auto my-4">
        <h1 className="text-2xl  font-semibold text-center text-white py-5">
          How it Work section{" "}
        </h1>
        <HowitWork />
      </section>
      <section className="w-full mx-auto bg-st bg-slate-900">
        <Reviews />
      </section>
      <section>
        <WhyChose />
      </section>
    </div>
  );
};

export default Home;
