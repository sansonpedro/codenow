import Chat from "@/components/chat"
import CodeEditor from "@/components/code-editor";

export default function Home() {
  return (
    <div className="h-screen grid grid-cols-3">
      <div className="col-span-2 bg-[#1A1A1A] border-r border-[#262626]">
        <CodeEditor/>
      </div>
      <div className="col-span-1 bg-[#1A1A1A]">
        <Chat/>
      </div>
    </div>
  );
}
