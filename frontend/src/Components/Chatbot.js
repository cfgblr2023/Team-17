import "./ChatBot.css";
import React from "react";
import bgImg from "../Images/bg_image_chatbot.jpg";

const ChatBot = () => {
  return (
    <div class="chat-container">
      <input
        type="text"
        id="input"
        placeholder="What do you want to learn about?"
      />
      <button id="button">Generate</button>
      <div id="output">Response:</div>
    </div>
  );
};

export default ChatBot;
