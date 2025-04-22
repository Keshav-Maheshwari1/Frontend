"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaComments, FaTimes } from "react-icons/fa";
import { useChat } from "@/costomeHooks/useChat"; // your custom hook using React Query

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const { mutate, isPending, isError, error } = useChat();

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };

    // Immediately add user message
    setMessages((prev) => [...prev, userMessage]);

    // Call API
    mutate(
      {
        input: input.trim(),
        messages: messages.map((msg) => ({
          sender: msg.sender,
          text: msg.text,
        })),
      },
      {
        onSuccess: (res) => {
          const botMessage = { sender: "bot", text: res?.answer || "No response" };
          setMessages((prev) => [...prev, botMessage]);
        },
        onError: (err) => {
          const botError = { sender: "bot", text: "Something went wrong!" };
          setMessages((prev) => [...prev, botError]);
        },
      }
    );

    setInput("");
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50"
      >
        {isOpen ? <FaTimes size={20} /> : <FaComments size={20} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 w-[400px] h-[650px] bg-white shadow-xl rounded-lg overflow-hidden flex flex-col z-40">
          <div className="bg-green-500 text-white p-4 font-bold">
            Chat with us
          </div>
          <div className="flex-1 p-3 space-y-2 overflow-y-auto">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg text-sm w-fit  max-w-[75%] ${
                  msg.sender === "user"
                    ? "bg-gray-200 self-end ml-auto"
                    : "bg-green-100 self-start mr-auto"
                }`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex border-t">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 p-2 outline-none"
              placeholder="Type your message..."
            />
            <button
              onClick={handleSend}
              disabled={isPending}
              className="bg-green-500 text-white px-4"
            >
              {isPending ? "..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
