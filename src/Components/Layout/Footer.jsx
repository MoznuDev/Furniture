import React from "react";
import { Link } from "react-router-dom"; // ✅ router-dom use করতে হবে, শুধুমাত্র "react-router" নয়
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#FAFAFA] text-black dark:text-white px-6 py-10">
      {/* Main Footer Grid */}
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid md:grid-cols-5 gap-8 px-4">
        {/* Company Info */}
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mb-4">
            <Link to="/">Panto</Link>
          </h2>
          <p>
            The advantage of hiring a workspace with us is that it gives you
            comfortable service and all-around facilities.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-3">Services</h3>
          <ul className="space-y-2">
            <li className="hover:text-primary">
              <Link to="/">Email Marketing</Link>
            </li>
            <li className="hover:text-primary">
              <Link to="/">Campaigns</Link>
            </li>
            <li className="hover:text-primary">
              <Link to="/">Branding</Link>
            </li>
          </ul>
        </div>

        {/* Furniture */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-3">Furniture</h3>
          <ul className="space-y-2">
            <li className="hover:text-primary">
              <Link to="/">Beds</Link>
            </li>
            <li className="hover:text-primary">
              <Link to="/">Chair</Link>
            </li>
            <li className="hover:text-primary">
              <Link to="/">All</Link>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold text-primary mb-3">Follow Us</h3>
          <ul className="space-y-2">
            <li className="hover:text-primary">
              <Link to="/" className="flex items-center space-x-1">
                <FaFacebook /> <span>Facebook</span>
              </Link>
            </li>
            <li className="hover:text-primary">
              <Link to="/" className="flex items-center space-x-1">
                <FaTwitter /> <span>Twitter</span>
              </Link>
            </li>
            <li className="hover:text-primary">
              <Link to="/" className="flex items-center space-x-1">
                <FaInstagram /> <span>Instagram</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="max-w-screen-xl mx-auto px-6 text-center mt-12 border-t pt-6 dark:bg-gray-800 text-black dark:text-white flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Panto. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link to="/">Terms & Conditions</Link>
          <Link to="/">Privacy & Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
