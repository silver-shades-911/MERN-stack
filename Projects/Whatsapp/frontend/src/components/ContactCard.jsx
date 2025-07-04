import React from "react";

const ContactCard = ({ user }) => {




  
  return (
    <div className="w-full flex gap-x-3 p-2 rounded-xl bg-gray-50">
      {/* img section  */}
      <div className="flex justify-center items-center">
        <img
          src={`${user.profileUrl}`}
          alt={`${user.fullName}`}
          className="w-15"
        />
      </div>

      {/* text section  */}
      <div className="flex flex-col w-full">
        {/* upper name and time part  */}
        <div className="flex justify-between pr-2">
          <div className="text-md font-medium">{user.fullName}</div>
          <div className="text-xs text-gray-900 flex items-center">11:00</div>
        </div>

        {/* last message part  */}
        <div className="text-sm text-gray-500 ">Lorem ipsum dolor sit ame.</div>
      </div>
    </div>
  );
};

export default ContactCard;
