import Chat from "./_components/Chat";
import ChatBox from "./_components/ChatBox";

export default function Home() {
  return (
    <main className="h-screen flex flex-col items-center justify-center container mx-auto px-6">
      <section className="w-full max-w-[772px] flex flex-col gap-4 mx-3">
        <Chat />
        <ChatBox />
      </section>
    </main>
  );
}
