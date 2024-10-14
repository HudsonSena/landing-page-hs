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
      <Formation />
      <Experience />
      <Contact />
      <Footer />

    </div>


  );
}
