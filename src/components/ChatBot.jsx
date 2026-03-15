"use client";

import { useState } from "react";
import { FaRobot } from "react-icons/fa";
export default function ChatBot(props) {

  const {
    goalCost,
    years,
    inflation,
    returnRate,
    sip,
    healthScore,
    healthStatus
  } = props;

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([
    { sender: "bot", text: "Hi! I'm FinVision AI. Ask about your financial plan." }
  ]);

  const sendMessage = async () => {

    if (!message.trim()) return;

    const userMsg = { sender: "user", text: message };

    setChat(prev => [...prev, userMsg]);

    const payload = {
      message,
      goalCost,
      years,
      inflation,
      returnRate,
      sip,
      healthScore,
      healthStatus
    };

    setMessage("");

    try {

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      setChat(prev => [...prev, { sender: "bot", text: data.reply }]);

    } catch {

      setChat(prev => [...prev, { sender: "bot", text: "Chatbot unavailable." }]);

    }

  };

  return (
    <>
      {!open && (

        <button
  onClick={() => setOpen(true)}
  className="fixed bottom-6 right-6 w-14 h-14 bg-[#224c87] text-white rounded-full shadow-lg flex items-center justify-center"
>
  <FaRobot size={24} />
</button>

      )}

      {open && (

        <div className="fixed bottom-6 right-6 w-[350px] h-[450px] bg-white border rounded-xl shadow-xl flex flex-col">

          <div className="flex justify-between items-center bg-[#224c87] text-white p-3 rounded-t-xl">
            FinVision AI
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2">

            {chat.map((msg, i) => (

              <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>

                <div className={`px-3 py-2 rounded-lg text-sm max-w-[70%] ${
                  msg.sender === "user"
                    ? "bg-[#224c87] text-white"
                    : "bg-gray-100"
                }`}>

                  {msg.text}

                </div>

              </div>

            ))}

          </div>

          <div className="border-t p-3 flex gap-2">

            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask about your plan..."
              className="flex-1 border rounded px-3 py-2 text-sm"
            />

            <button
              onClick={sendMessage}
              className="bg-[#224c87] text-white px-3 py-2 rounded"
            >
              Send
            </button>

          </div>

        </div>

      )}
    </>
  );
}