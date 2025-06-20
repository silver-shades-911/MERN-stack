import React from "react";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div className="flex flex-col faded-text pt-2 ">
      <div className="text-[1rem] text-gray-300">Follow on:</div>
      <div className="flex gap-x-2 items-center pt-3">
        <a href="">
          <FaYoutube size={20} />
        </a>
        <a href="">
          <FaInstagram size={20} />
        </a>
        <a href="">
          <FaXTwitter size={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;
