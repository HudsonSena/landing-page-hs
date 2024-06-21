import { ModeToggle } from "./_components/mode-toggle";
import { FaGithub, FaLinkedin, FaCode } from "react-icons/fa";
import { LuLayoutDashboard, LuLayout } from "react-icons/lu";

export default function Home() {
  return (
    <div id="intro" className="flex flex-col items-center gap-5 px-2 py-14">
      <div className="border-2 rounded-full border-primary">
        <img
          className="w-[200px] rounded-[50%] m-1"
          src="https://avatars.githubusercontent.com/u/107481318?v=4"
          alt="Imagem Diego"
        />
      </div>
      <div className="flex flex-col items-center gap-2">
        <h1 className="rounded-2xl bg-muted px-4 py-1.5 text-sm font medium flex items-center gap-1 shadow">
          Oi, sou
          <span className="text-primary flex items-center justify-center">
            Hudson Diego
            <ModeToggle />
          </span>
        </h1>
        <p className="text-center">
          Dev FrontEnd e UI/UX Design. <br />
          Acesse um desses links e aproveite a experiência!
        </p>
      </div>
      <div className="flex flex-col gap-3 w-[20rem] mx-auto md:w-[30rem]">
        <a className="w-full rounded-2xl bg-muted py-2 text-sm font medium flex justify-center items-center gap-2 shadow active:scale-110">
          <FaGithub size={20} />
          Github
        </a>
        <a className="rounded-2xl bg-muted py-2 text-sm font medium flex justify-center items-center gap-2 shadow active:scale-110">
          <FaLinkedin size={20} /> LinkedIn
        </a>
        <a className="rounded-2xl bg-muted py-2 text-sm font medium flex justify-center items-center gap-2 shadow active:scale-110">
          <FaCode size={20} />
          Projetos Dev
        </a>
        <a className="rounded-2xl bg-muted py-2 text-sm font medium flex justify-center items-center gap-2 shadow active:scale-110">
          <LuLayoutDashboard size={20} /> Proejtos UI/UX
        </a>
        <a className="rounded-2xl bg-muted py-2 text-sm font medium flex justify-center items-center gap-2 shadow active:scale-110">
          <LuLayout size={20} /> Site Profissional
        </a>
      </div>

      <div id="create" className="flex items-center justify-center">
        <p className="text-xs">
          Criado por <span className="text-primary">Hudson Sena</span>, com
          NextJs 14 e TailwindCss
        </p>
      </div>
    </div>
  );
}
