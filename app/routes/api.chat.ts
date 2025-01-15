import { ActionFunctionArgs, LoaderFunction, LoaderFunctionArgs } from "@remix-run/node";
import { createOllama } from "ollama-ai-provider";
import {StreamTextResult, convertToCoreMessages, streamText } from "ai";

const ollama = createOllama();

export async function action({ request }: ActionFunctionArgs ) {

    const { messages } = await request.json();

    const result = await streamText({
        model: ollama("phi4"),
        messages: convertToCoreMessages(messages),
    });

   
    return result.toDataStreamResponse();

}