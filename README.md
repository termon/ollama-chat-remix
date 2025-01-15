# Remix Ollama Chat Client

This Remix application uses the following stack

1. [Remix](https://remix.run)
2. [Ollama](https://ollama.com/) 
3. [Vercel AI SDK](https://sdk.vercel.ai/)
4. [Ollama NPM Module](https://www.npmjs.com/package/ollama)
5. [Ollama AI provider](https://sdk.vercel.ai/providers/community-providers/ollama)
6. [Tailwind](https://tailwindcss.com/)


## Description

By using `Ollama` we can install and run free LLMs locally. In this project we are using the `phi4` LLM which is a `14b` parameter `9.1Gb` model.

In the project

- The `/api/chat` route calls the LLM. 

- The `/chat` route component provides the basic chat UI.


> If you wish to use a different LLM within Ollama, then install the LLM and update the `streamText` function in the `api/chat` route action, setting the `model:` parameter to use the updated ollama model.


## Running the Application

1. Install Ollama and a selected LLM  
2. Clone the repository 
3. Install by running `npm install`
4. Run the application: `npm run dev`

Go to a browser `http://localhost:5173/` and enter messages.
