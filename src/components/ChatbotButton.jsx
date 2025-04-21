"use client";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function ChatbotButton() {
  return (
    <Button
      variant="default"
      size="icon"
      className="fixed top-4 right-4 bg-gradient-to-br from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 rounded-full shadow-lg"
      onClick={() => alert("Chatbot opened!")}
    >
      <MessageCircle className="h-5 w-5" />
    </Button>
  );
}
