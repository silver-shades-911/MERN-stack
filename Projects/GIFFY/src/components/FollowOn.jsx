import React from "react";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FollowOn = () => {
  return (
    <div className="faded-text pt-2">
      <div>Follow on:</div>
      <div className="flex gap-2 pt-3 items-center">
        <a href="">
          <FaYoutube size={20} />
        </a>
        <a href="">
          <FaInstagram size={20} />
        </a>
        <a href="">
          <FaXTwitter szie={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;
