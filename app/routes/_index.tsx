// app/routes/index.tsx
import Chat from './Chat';

export default function Index() {
  return (
    <div className="mx-auto">
      <h1 className="text-center text-3xl text-green-800 my-10">Chat with Ollama Phi4</h1>
      <Chat />
    </div>
  );
}