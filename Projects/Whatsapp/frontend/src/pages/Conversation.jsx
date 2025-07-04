import { MdOutlineArrowBackIos } from "react-icons/md";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsFillSendFill } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import Home from "./Home";
import { useSelector, useDispatch } from "react-redux";
import { sendMessage } from "../features/conversation/conversationAPI.js";

const Conversation = () => {
  // dispatch
  const dispatch = useDispatch();

  // use selector
  const { messages } = useSelector((state) => state.conversation);
  console.log(" messages at conversation.jsx =>", messages);

  // local
  const [newMessage, setNewMessage] = useState("");

  // handle new message form local
  const handleNewMessageLocal = (e) => {
    e.preventDefault();
    setNewMessage(e.target.value);
  };

  const bottomBlankSpace = useRef(null);

  // when new messsage arrive , page shoud scroll to bottom to new message (move to bottomBlankSpace component)
  useEffect(() => {
    bottomBlankSpace.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // handleSendMessageGlobal

  const handleSendMessageGlobal = (e) => {
    e.preventDefault();
    dispatch(sendMessage(newMessage));
  };

  return (
    <div className="flex-none lg:flex w-full gap-x-5">
      <div className="hidden lg:block w-4/12">
        <Home />
      </div>
      <div className="overflow-hidden flex flex-col h-[100dvh] w-full lg:w-8/12">
        {/* navbar  */}
        <nav className="h-13 bg-[#957fef] flex justify-between items-center px-3">
          <div>
            <MdOutlineArrowBackIos size={22} />
          </div>
          <div>
            <BiDotsVerticalRounded size={25} />
          </div>
        </nav>

        {/* middle chat section , fixed outer layer */}
        <div className="flex-1 overflow-y-auto container mx-auto">
          {/* inner longer container which overflow scroll   */}
          <div className="h-auto flex flex-col">
            {/* upper profile picture and name of other user  */}
            <div className="flex flex-col justify-center items-center gap-y-2 mt-5">
              <img
                className="mask mask-circle w-20"
                src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
              />
              <p className="font-medium">Zoya Lorenwz</p>
            </div>

            {/* chat bubles containing container  */}
            <div className="flex-1 mt-15 flex flex-col">
              {/* Dummy Messages */}
              <div className="chat chat-end">
                <div className="chat-header">
                  <time className="text-xs opacity-50">2 hours ago</time>
                </div>
                <div className="chat-bubble bg-[#dec0f1]">
                  You were the Chosen One! what are fui sd s i am moig hhowk k k
                </div>

                <div className="chat-footer opacity-50">Seen</div>
              </div>
              <div className="chat chat-start">
                <div className="chat-header">
                  Obi-Wan Kenobi
                  <time className="text-xs opacity-50">2 hour ago</time>
                </div>
                <div className="chat-bubble">I loved you.</div>
                <div className="chat-footer opacity-50">Delivered</div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble">Hello! How are you?</div>
              </div>
              {/* Dummy Messages */}
              <div className="chat chat-start">
                <div className="chat-bubble">Hey there!</div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble">Hello! How are you?</div>
              </div>

              {/* Dummy Messages */}
              <div className="chat chat-start">
                <div className="chat-bubble">Hey there!</div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble">Hello! How are you?</div>
              </div>

              {/* Dummy Messages */}
              <div className="chat chat-start">
                <div className="chat-bubble">Hey there!</div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble">Hello! How are you?</div>
              </div>
              {/* Dummy Messages */}
              <div className="chat chat-start">
                <div className="chat-bubble">Hey there!</div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble">Hello! How are you?</div>
              </div>

              {/* Dummy Messages */}
              <div className="chat chat-start">
                <div className="chat-bubble">Hey there!</div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble">Hello! How are you?</div>
              </div>

              {/* Dummy Messages */}
              <div className="chat chat-start">
                <div className="chat-bubble">Hey there!</div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble">Hello! How are you?</div>
              </div>

              {/* Dummy Messages */}
              <div className="chat chat-start">
                <div className="chat-bubble">Hey there!</div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble">Hello! How are you?</div>
              </div>
              {/* Dummy Messages */}
              <div className="chat chat-start">
                <div className="chat-bubble">Hey there!</div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble">Hello! How are you?</div>
              </div>

              {/* Dummy Messages */}
              <div className="chat chat-start">
                <div className="chat-bubble">Hey there!</div>
              </div>
              <div className="chat chat-end">
                <div className="chat-bubble">Hello! How are you?</div>
              </div>

              {/* Dummy Message  */}
              <div className="h-15" ref={bottomBlankSpace}></div>
            </div>
          </div>
        </div>

        {/* typing section / input bar  */}
        <form
          onSubmit={handleSendMessageGlobal}
          className="h-20 flex justify-center items-center px-3 "
        >
          <input
            type="text"
            placeholder="Enter Message"
            className="w-full rounded-s-full text-lg h-13 px-5 outline-0 text-black border-0 bg-gray-100"
            name="message"
            onChange={handleNewMessageLocal}
            value={newMessage}
          />
          <button
            type="submit"
            className="btn rounded-e-full rounded-s-none h-13 bg-gray-100 border-0 outline-0 "
          >
            <BsFillSendFill size={23} color={"#7161ef"} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Conversation;
