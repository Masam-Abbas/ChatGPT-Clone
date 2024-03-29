"use client";
import { PaperAirplaneIcon } from "@heroicons/react/16/solid";
import { useSession } from "next-auth/react";
import { useState } from "react";

type Props = {
  chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
  const { data: session } = useSession();
  const [prompt, setPrompt] = useState("");
  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm ">
      <form action="" className="p-5 space-x-5 flex">
        <input
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          disabled={!session}
          placeholder="Type your message..."
          className="bg-transparent flex-1 disabled:cursor-not-allowed disabled:text-gray-300 focus:outline-none"
        />
        <button
          type="submit"
          disabled={!prompt || !session}
          className="bg-[#11a37f] hover:opacity-50 text-white font-bold py-2 px-4 rounded cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <PaperAirplaneIcon className="h-4 w-4 -rotate-45" />
        </button>
      </form>
      <div>{/* Model selection */}</div>
    </div>
  );
};

export default ChatInput;
