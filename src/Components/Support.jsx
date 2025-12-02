import React from "react";

const Support = () => {
  return (
    <div className="w-full bg-gray-100 py-14 px-5 my-5 rounded-xl">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-3">Support Center</h1>
        <p className="text-gray-600 mb-10">
          Our team is here to help you at any time. Contact us through any
          option below.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Email */}
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2">Email Support</h2>
            <p className="text-gray-600">rakibhossain455673@gmail.com</p>
          </div>

          {/* Phone */}
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2">Call Us</h2>
            <p className="text-gray-600">+880 187-644-0250</p>
          </div>

          {/* Live Chat */}
          <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2">Live Chat</h2>
            <p className="text-gray-600">Chat with our team anytime</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
