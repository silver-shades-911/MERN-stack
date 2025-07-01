import React from "react";

const ContactCard = () => {
  return (
    <div className="w-full flex gap-x-3 p-2 rounded-xl bg-gray-50">
      {/* img section  */}
      <div className="flex justify-center items-center">
        <img
          src="https://avatar.iran.liara.run/public"
          alt=""
          className="w-15"
        />
      </div>

      {/* text section  */}
      <div className="flex flex-col w-full">
        {/* upper name and time part  */}
        <div className="flex justify-between pr-2">
          <div className="text-md font-medium"> Zoya Lawrences</div>
          <div className="text-xs text-gray-900 flex items-center"> 11:30 </div>
        </div>

        {/* last message part  */}
        <div className="text-sm text-gray-500 ">Lorem ipsum dolor sit ame.</div>
      </div>
    </div>
  );
};

export default ContactCard;
