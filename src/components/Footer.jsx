import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { IoLogoReddit } from "react-icons/io";
import { RiFacebookCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="w-full h-36 pt-8 flex flex-col gap-2">
      <h3 className="text-center text-gray-600">&copy;Copyright all rights reserved</h3>
      <div className="flex justify-center gap-8">
        <Link to="/">
          <BsInstagram size={25} />
        </Link>
        <Link to="/">
          <FiTwitter size={25} />
        </Link>
        <Link to="/">
          <IoLogoReddit size={30} />
        </Link>
        <Link to="/">
          <RiFacebookCircleLine size={30} />
        </Link>
      </div>
    </div>
  );
}
