// app/routes/Chat.tsx
import { useChat } from 'ai/react';
import {
    BotIcon,
    UserIcon,
} from "../components/icons";
import { Markdown } from '~/components/markdown';
import { useEffect, useRef } from 'react';
import AutoResizeInput from '~/components/AutoResizeInput';

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
        onError: () => console.error("An error occured!")
    });

    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      };

    return (
        <div className="flex flex-col justify-between gap-4">

            {/* Output the messages */}
            <div className="flex flex-col gap-2 h-full w-dvw items-center overflow-y-scroll">
                {messages.map((m) => (
                    <div key={m.id} className="flex flex-row gap-2 px-4 w-full md:w-[500px] md:px-0">
                        <div className="size-[24px] flex flex-col justify-center items-center flex-shrink-0 text-zinc-400">
                            {m.role === "assistant" ? <BotIcon /> : <UserIcon />}
                        </div>

                        <div className="flex flex-col gap-1">
                            <div className="text-zinc-800 dark:text-zinc-300 flex flex-col gap-4">
                                <Markdown>{m.content}</Markdown>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* // marker used as a scroll position */}
            <div ref={messagesEndRef} />

            {/* Output a waiting message */}
            {isLoading && messages[messages.length - 1].role !== "assistant" && (
                <div className="flex flex-row gap-2 px-4 w-full md:w-[500px] md:px-0">
                    <div className="size-[24px] flex flex-col justify-center items-center flex-shrink-0 text-zinc-400">
                        <BotIcon />
                    </div>
                    <div className="flex flex-col gap-1 text-zinc-400">
                        <div>hmm...</div>
                    </div>
                </div>
            )}

            {/* Display the chat message input form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-2 relative items-center">
                <AutoResizeInput 
                    value={input}
                    placeholder='Ask a question...'
                    onChange={handleInputChange}
                    className="min-w-[500px]"/>
            </form>

        </div>
    )
}

