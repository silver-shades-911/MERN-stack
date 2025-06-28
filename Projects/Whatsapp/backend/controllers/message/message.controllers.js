// packages import
import jwt from "jsonwebtoken";

// modules import
import Conversation from "../../models/conversation/conversation.model.js";
import Message from "../../models/message/message.model.js";

export const sendMessageController = async (req, res) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req?.user?._id;
    const message = req.body.message;

    // find conversation exists between these users or not
    let conversation = await Conversation.find({     // return => conversation => []
      participants: { $all: [senderId, receiverId] },
    });

    console.log("conversation =>", conversation); 

    // if conversation not exist , they are talking first time
    if (conversation.length  == 0) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    // create newMessage
    const newMessage = await Message.create({
        senderId,
        receiverId,
        message,
    });

    // if newMessage is not creats
    if(newMessage){
      await conversation.messages.push(newMessage._id);
    };

    //TODO: Socket.io functunality come here
     


    // * this is lower way , means not run parellaly
    // await newMessage.save(); // if it take 2s
    // await conversation.save();// then this have to wait for 2s

    //* parellal executing way
    await Promise.all[ newMessage.save(), conversation.save() ];

    res.status(200).json({
        message: newMessage?.message,
    })
  } catch (error) {
    console.log("Error in sendMessageController", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
