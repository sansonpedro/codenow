export default function Home() {
  return (
    <div className="h-screen grid grid-cols-3">
      <div className="col-span-2 bg-[#1A1A1A] border-r border-[#262626]">
        editor
      </div>
      <div className="col-span-1 bg-[#1A1A1A]">
        <section className="h-full flex flex-col">
          <header>Chat part</header>
          <div className="flex-1">mensagem</div>
          <div>parte da pergunta do chat</div>
        </section>
      </div>
    </div>
  );
}
