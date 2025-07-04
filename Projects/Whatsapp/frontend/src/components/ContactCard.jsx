import { useSelector, useDispatch } from "react-redux";
import {
  selectConversation,
  cleanUp,
} from "../features/conversation/conversationSlice.js";
import { useEffect } from "react";

const ContactCard = ({ user }) => {
  // console.log("user at contact card => ", user);

  // dispatch
  const dispatch = useDispatch();

  // selector
  const { selectedConversation, messages } = useSelector(
    (state) => state.conversation
  );

  // console.log("selectedConversation =>", selectedConversation);

  // isSelected switch
  const isSelected = user?._id === selectedConversation?._id;

  // console.log("isSelected =>", isSelected);

  // handle Select Conversation
  const handleSelectConversation = () => {
    console.log("i am click");
    dispatch(selectConversation(user));
  };

  // clean up
  useEffect(() => {
    dispatch(cleanUp());
  }, []);

  return (
    <div
      className={`w-full flex gap-x-3 p-2 rounded-xl hover:bg-[#7161ef]  ${
        isSelected ? "bg-[#7161ef]" : "bg-gray-50"
      }`}
      onClick={handleSelectConversation}
    >
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
