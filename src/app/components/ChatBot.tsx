import { useEffect, useRef, useState } from "react";
import { ChatMessage } from "../types";
import ChatButtons from "./ChatButtons";

const ChatBot = () => {

    const [chatHistory, setChatHistory] = useState<ChatMessage[]>([]);
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false);
    const chatRef = useRef<HTMLDivElement>(null);

    const handleClick = async (message: string) => {
        setMessage(message)
        setChatHistory(prev => [...prev, {role: "user", message}]);
        setMessage("");
        const result = await generateResponse(message);
        setChatHistory(prev => [...prev, {role: "assistant", message: result}]);
    };

    const generateResponse = async (message: string) => {
        setLoading(true);
        const data = await fetch("/api/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
              },
            body: JSON.stringify({
                messages: 
                [
                    { role: "system", content: "You are GasGPT, a chatbot designed to ONLY answer questions about your creator, Gaspare Tortora (Gas), with concise information. You are not to engage in any other type of conversation unless related to this topic. I was born in 1992 in Salerno, Italy. I lived in Battipaglia and moved to Canada in 2018. I live in Laval. I am married and I have 1 son, Noah. I currently work at Shopify as Revenue QA Specialist and I am working towards getting a front-end developer job. I know React, JS, TS, Tailwind, GSAP, CSS, SCSS. I love travelling, reading, and practicing sport. Currently I practice boxing. Let users know that they can reach out to me on Instagram (Gaspavar92), Linkedin (gaspare-tortora), or by email (g.tortora2@gmail.com). Format message using ONLY HTML markdowns and nothing else (no ```html```), and if contact is requested, use the classes \"text-orange-300 bold underline\" for links, with href=\"_blank.\"" },
                    { role: "user", content: message }
                ],
                max_completion_tokens: 80
              }),
        });
        const response = await data.json()
        setLoading(false);
        return response.content;
    };

    const fetchResponse = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!message.trim()) return;

        setChatHistory(prev => [...prev, {role: "user", message: message}]);
        setMessage("");

        const result = await generateResponse(message);
        setChatHistory(prev => [...prev, {role: "assistant", message: result}]);
    };

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [chatHistory])

    return (
<div className="chatbot h-1/2 w-full md:w-1/3 flex flex-col justify-between gap-12 bg-gradient-to-t from-blue-700 to-blue-500 p-6 rounded-xl relative">
    <div ref={chatRef} className="chat flex flex-col gap-6 w-full flex-grow overflow-y-auto h-[450px] pt-16">
        <div className="chat-title text-center bg-blue-800 text-sky-200 w-full absolute left-0 top-0 py-6 rounded-t-xl text-lg">GaspaBOT 🤖</div>
        {chatHistory.length === 0 ?
        <ChatButtons handleClick={handleClick}/> :
        chatHistory.map((entry, index) => {
            return (
                <div
                    key={index}
                    dangerouslySetInnerHTML={{ __html: entry.message }}
                    className={`${entry.role === "user" ? "user bg-orange-400 self-end" : "bot bg-blue-400  self-start"} w-fit px-4 py-2 rounded-xl shadow-lg text-black`}
                ></div>
            );
        })}
        {loading && (
            <div className="bot bg-blue-500 text-white self-start w-fit px-6 py-2 rounded-xl">Typing...</div>
        )}
    </div>
    <form onSubmit={(e) => fetchResponse(e)} className="input w-full flex gap-2 h-12 self-end">
        <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className="text-black rounded-full flex-1 px-6" placeholder="Ask anything about Gaspare..."></input>
        <button className="w-fit h-fit bg-blue-800 hover:bg-blue-500 text-white border-2 p-2 rounded-full duration-200 shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
        </button>


    </form>
</div>

    )
};

export default ChatBot;
