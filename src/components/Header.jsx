import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";

export default function Header() {
  return (
    <div className="flex justify-between py-4">
      <Link to="/">
        <div className="flex items-center">
          <img src={Logo} alt="/" width={60} className='hover:animate-spin' />
          <h1 className="pt-2 text-2xl font-semibold">Bysness</h1>
        </div>
      </Link>
      <div className="flex gap-4 pt-3 text-md font-bold uppercase text-gray-800">
        <Link to="#" className="hover:text-gray-600">
          Home
        </Link>
        <Link to="#" className="hover:text-gray-600">
          About
        </Link>
        <Link to="#" className="hover:text-gray-600">
          Join
        </Link>
        <Link to="#" className="hover:text-gray-600">
          Contact
        </Link>
        <Link to="#" className="hover:text-gray-600">
          Archives
        </Link>
      </div>
    </div>
  );
}
