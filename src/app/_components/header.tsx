import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";
import { ModeToggle } from "./mode-toggle";
import { LuLayout, LuLayoutDashboard } from "react-icons/lu";

export function Header() {
    return (
        <header className="flex flex-col gap-14">
            <div className="flex flex-row justify-between">
                <h1 className="text-xl font-semibold">Hudson Diego</h1>
                <nav className="flex flex-row gap-6">
                    <a href="#formation">Formação</a>
                    <a href="#expe">Experiência</a>
                    <a href="#contact">Contato</a>
                    <ModeToggle />
                </nav>
            </div>
            <div className="flex flex-row justify-between items-center">
                <img
                    className="w-[360px] h-[360px] object-contain rounded-[50%] shadow-lg active:scale-110"
                    src="https://avatars.githubusercontent.com/u/107481318?v=4"
                    alt="Imagem Diego"
                />

                <div className="flex flex-col gap-2 w-[640px]">
                    <h1 className="font-semibold text-7xl">
                        Desenvolvedor
                        Front End &
                        UX/UI Designer
                    </h1>
                    <p>Localizado no Rio Grande do Norte</p>

                </div>
            </div>
            <nav className="flex flex-row items-center justify-around w-full">
                <a className="rounded-2xl bg-muted px-3 py-2 text-sm font-sans flex justify-center items-center gap-2 shadow active:scale-110 cursor-pointer">
                    <FaGithub size={20} />
                    Github
                </a>
                <a className="rounded-2xl bg-muted px-3 py-2 text-sm font-sans flex justify-center items-center gap-2 shadow active:scale-110 cursor-pointer">
                    <FaLinkedin size={20} /> LinkedIn
                </a>
                <a className="rounded-2xl bg-muted px-3 py-2 text-sm font-sans flex justify-center items-center gap-2 shadow active:scale-110 cursor-pointer">
                    <FaCode size={20} />
                    Projetos Dev
                </a>
                <a className="rounded-2xl bg-muted px-3 py-2 text-sm font-sans flex justify-center items-center gap-2 shadow active:scale-110 cursor-pointer">
                    <LuLayoutDashboard size={20} /> Proejtos UI/UX
                </a>
            </nav>
        </header>
    )
}