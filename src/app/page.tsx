import { LuArrowUp } from "react-icons/lu";
import { Contact } from "./_components/contact";
import { Experience } from "./_components/experience";
import { Footer } from "./_components/footer";
import { Formation } from "./_components/formation";
import { Header } from "./_components/header";
import { Introduction } from "./_components/introdution";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <Introduction />
      <Footer />

      <a href="#header" className="fixed right-3 bottom-1">
        <LuArrowUp
          className="text-primary w-10 h-10 animate-bounce ..."
          size={30}
        />
      </a>
    </div>
  );
}
