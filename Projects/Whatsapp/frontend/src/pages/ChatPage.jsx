// ChatPage.jsx
import { useEffect, useRef } from "react";

const ChatPage = () => {
  const bottomRef = useRef(null);

  // Scroll to bottom on new message (dummy for now)
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="flex flex-col h-[100dvh] bg-base-200">
      {/* Message Area */}
      <div className="flex-1 overflow-y-auto px-4 py-2">
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
       

       

        {/* Dummy spacing */}
        <div className="h-16" ref={bottomRef} />
      </div>

      {/* Input Bar */}
      <div className="w-full border-t bg-base-100 p-2">
        <form
          className="flex items-center gap-2"
          onSubmit={(e) => {
            e.preventDefault();
            // Handle send here
          }}
        >
          <input
            type="text"
            placeholder="Type a message…"
            className="input input-bordered flex-1"
          />
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatPage;
