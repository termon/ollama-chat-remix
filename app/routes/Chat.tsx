// app/routes/Chat.tsx
import { useState } from 'react';
import { useChat } from 'ai/react';
import {
    BotIcon,
    UserIcon,
} from "../components/icons";
import { Markdown } from '~/components/markdown';

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
        onError: () =>
            console.error("You've been rate limited, please try again later!"),
    });;

    return (
        <div className="flex flex-col justify-between gap-4">
            {messages.length > 0 ? (
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
            ) : null
            }

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

            <form onSubmit={handleSubmit} className="flex flex-col gap-2 relative items-center">
                <input className="w-1/2 border border-gray-100 rounded shadow-md
                     p-3 bg-transparent flex-grow outline-none text-zinc-800 dark:text-zinc-300 placeholder-zinc-400"
                    value={input}
                    placeholder='Ask a question...'
                    onChange={handleInputChange}
                />
            </form>

        </div>
    )
}

