import { useEffect, useRef, useState } from "react";
import { ChatMessage } from "../types";

const ChatBot = () => {

    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false);
    const chatRef = useRef<HTMLDivElement>(null);

    const generateResponse = async () => {
        setLoading(true);
        const data = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify({
                messages: 
                [
                    { role: "system", content: "You are GasGPT, a chatbot designed to ONLY answer questions about me, Gaspare Tortora. You are not to engage in any other type of conversation. I was born in 1992 in Salerno, Italy. I lived in Battipaglia and moved to Canada in 2018. I live in Laval. I am married and I have 1 son, Noah. I currently work at Shopify as Revenue QA Specialist and I am working towards getting a front-end developer job. I know React, JS, TS, Tailwind, GSAP, CSS, SCSS. I love travelling, reading, and practicing sport. Currently I practice boxing. Let users know that they can reach out to me on Instagram (Gaspavar92), Linkedin (gaspare-tortora), or by email (g.tortora2@gmail.com). Format message using HTML, and if contact is requested, use the classes \"text-orange-300 bold underline\" for links, with href=\"_blank.\"" },
                    { role: "user", content: message }
                ],
                max_completion_tokens: 80
              }),
        });
        const response = await data.json()
        setLoading(false);
        return response.content;
    };

    const fetchResponse = async () => {

        if (!message.trim()) return;

        setChatHistory(prev => [...prev, {role: "user", message: message}]);
        setMessage("");

        const result = await generateResponse();
        setChatHistory(prev => [...prev, {role: "assistant", message: result}]);
    };

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [chatHistory])

    return (
        <div className="chatbot w-1/2 flex flex-col justify-between gap-12">
            <div ref={chatRef} className="chat flex flex-col gap-6 w-full flex-grow overflow-y-auto h-[10px]">
                {chatHistory.map((entry, index) => {
                    return <div key={index} dangerouslySetInnerHTML={{__html: entry.message}} className={`${entry.role === "user" ? "user bg-orange-500 text-black self-end" : "bot bg-sky-600 text-white self-start"} w-fit px-6 py-2 rounded-xl`}></div>
                })}
                {loading && (
                    <div className="bot bg-sky-600 text-white self-start w-fit px-6 py-2 rounded-xl">Typing...</div>
                )}
            </div>
            <div className="input w-full flex gap-2 h-12 self-end">
                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className="text-black rounded-full flex-1 pl-6"></input>
                <button onClick={fetchResponse}>Ask</button>
            </div>
        </div>
    )
};

export default ChatBot;
