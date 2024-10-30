type ChatButtonsProps = {
    handleClick: (message: string) => void;
};

const ChatButtons = ({handleClick}: ChatButtonsProps) => {
    return (
        <form className="chat-buttons flex flex-col m-auto gap-6">
            <button className="border-2 rounded-full px-4 py-2 hover:bg-[rgba(255,255,255,0.3)]" 
                value="What languages does Gaspare know?" 
                onClick={(e) => { e.preventDefault(); handleClick(e.currentTarget.value); }}>
                What languages does Gaspare know?
            </button>
            <button className="border-2 rounded-full px-4 py-2 hover:bg-[rgba(255,255,255,0.3)]" 
                value="What are Gaspare&apos;s hobbies?" 
                onClick={(e) => { e.preventDefault(); handleClick(e.currentTarget.value); }}>
                What are Gaspare&apos;s hobbies?
            </button>
            <button className="border-2 rounded-full px-4 py-2 hover:bg-[rgba(255,255,255,0.3)]" 
                value="What is Gaspare&apos;s education?" 
                onClick={(e) => { e.preventDefault(); handleClick(e.currentTarget.value); }}>
                What is Gaspare&apos;s education?
            </button>
        </form>
    )
};

export default ChatButtons;