import axios from "axios";
import { useEffect, useRef, useState } from "react";

type Message = {
    role: "user" | "assistant";
    content: string;
    conversation_id: string;
};

export const ChatBot = () => {
    const [message, setMessage] = useState<Message[]>([
        {
            role: "assistant",
            content: "Hi, I'm Medibot. How can I help you today?",
            conversation_id: "1"
        }
    ]);
    const [input, setInput] = useState<string>("");
    const chatEndRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    const getResponse = async () => {
        if (!input.trim()) return;
        const userMessage = {
            role: "user" as "user",
            content: input,
            conversation_id: "1",
        };
        setMessage((prev) => [...prev, userMessage]);
        const request = {
            message: input,
            conversation_id: "1",
            role: "user"
        };

        try {
            const res = await axios.post("http://localhost:8000/chat/", request);
            
            // Properly update the state with new messages
            setMessage((prev) => [...prev, res.data]);
            setInput("");
        } catch (error) {
            console.error("Error fetching response:", error);
            alert("Failed to get response");
        }
    };

    return (
        <div className="bg-blue-500 max-w-96 p-4 flex flex-col">
            <div className="h-96 overflow-y-auto p-2 border rounded bg-white">
                {message.map((chat) => (
                    <Chat chat={chat} key={chat.conversation_id} />
                ))}
                <div ref={chatEndRef} />
            </div>
            <div className="flex mt-2 gap-2">
                <input
                    placeholder="Enter the message"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border p-2 w-full my-2"
                />
                <button type="button" onClick={getResponse} className="bg-white text-blue-500 p-2 rounded">
                    Send
                </button>
            </div>
        </div>
    );
};

const Chat = ({ chat }: { chat: Message }) => {
    return (
        <div className={`max-w-80 p-2 my-1 rounded ${chat.role === "user" ? "bg-green-400 text-right" : "bg-cyan-400"}`}>
            <p>{chat.content}</p>
        </div>
    );
};
