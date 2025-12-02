import React from "react";

const WhyChose = () => {
  return (
    <div className="bg-[#F8FAFC] py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-12">
          Why Choose The Learning Point?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Easy-to-Follow Notes</h3>
            <p className="text-gray-700">
              Simplified explanations for every topic to help you understand
              easily.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Interactive Learning</h3>
            <p className="text-gray-700">
              Engage with quizzes, exercises, and tutorials to strengthen your
              knowledge.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Flexible Learning</h3>
            <p className="text-gray-700">
              Learn anytime, anywhere, at your own pace with our resources.
            </p>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
            <p className="text-gray-700">
              Tips and insights from experienced educators to help you succeed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChose;
