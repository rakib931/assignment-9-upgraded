import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="text-white py-10 mt-10">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
            <p className="text-sm">📍 123 Learning Street, Dhaka, Bangladesh</p>
            <p className="text-sm">📧 info@learningpoint.com</p>
            <p className="text-sm">📞 +880 1234-567890</p>
          </div>

          {/* Social Links */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Follow Us</h2>
            <div className="flex gap-4 text-2xl">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook className="hover:text-blue-400 transition duration-200" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram className="hover:text-pink-400 transition duration-200" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitter className="hover:text-sky-400 transition duration-200" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin className="hover:text-blue-300 transition duration-200" />
              </a>
            </div>
          </div>

          {/* Policy Links */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Legal</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="" className="hover:underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-1 md:max-w-[1240px] mx-auto my-6">
          <img
            className="w-full"
            src="https://i.ibb.co.com/HDcGnDCC/payment-banner.webp"
            alt=""
          />
        </div>
        <hr className="border-gray-400 my-6" />

        <div className="text-center text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">The Learning Point</span>. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
