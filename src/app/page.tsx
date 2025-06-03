import Chat from "./_components/Chat";
import ChatBox from "./_components/ChatBox";

export default async function Home() {

  const message: string = "Oh no! Sad to hear that, but of course we can give a refund. Can you please provide your order number if you have one? Or email that you’ve used to make this purchase."


  return (
    <main className="h-screen flex flex-col items-center justify-center container mx-auto px-6">
      <section className="w-full max-w-[772px] flex flex-col gap-4 mx-3">
        <Chat
          message={message}
        />
        <ChatBox />
      </section>
    </main>
  );
}
