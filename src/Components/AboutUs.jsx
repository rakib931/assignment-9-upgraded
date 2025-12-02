import React from "react";

const AboutUs = () => {
  return (
    <div className="w-full bg-[#F8FAFC] py-16 px-6 md:px-20 my-10 rounded-xl">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-6">
          About Us
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Welcome to{" "}
          <span className="font-semibold text-[#0F172A]">
            The Learning Point
          </span>
          , a modern educational platform dedicated to making learning simple,
          effective, and enjoyable. Our goal is to provide high-quality learning
          materials that help students understand concepts clearly and
          confidently.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          At The Learning Point, we focus on building strong foundations for
          every learner. Whether you're studying academics, preparing for exams,
          or exploring new subjects, our structured notes and easy explanations
          are designed to guide you every step of the way.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed">
          We believe education should be simple, modern, and accessible for
          everyone. That’s why we continue improving our content and tools so
          you can learn better, grow faster, and achieve your goals.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
