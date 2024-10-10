import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";

export function Introduction() {
    return (
        <div className="flex flex-col gap-10 pb-10 py-20 px-36 text-gray-950">
            <div className="flex flex-row justify-between items-center">
                <img
                    className="w-[360px] h-[360px] object-contain rounded-[50%] shadow-lg"
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
                <a href="https://github.com/HudsonSena" target="_blank" className="rounded-2xl bg-muted px-3 py-2 text-sm font-sans flex justify-center items-center gap-2 shadow bg-gray-300 cursor-pointer active:scale-110">
                    <FaGithub size={20} />
                    Github
                </a>
                <a href="https://www.linkedin.com/in/hudson-sena-890a72173/" target="_blank" className="rounded-2xl bg-muted px-3 py-2 text-sm font-sans flex justify-center items-center gap-2 shadow bg-gray-300 cursor-pointer active:scale-110">
                    <FaLinkedin size={20} /> LinkedIn
                </a>
                <a className="rounded-2xl bg-muted px-3 py-2 text-sm font-sans flex justify-center items-center gap-2 shadow bg-gray-300 cursor-pointer active:scale-110">
                    <FaCode size={20} />
                    Projetos Dev
                </a>
                <a className="rounded-2xl bg-muted px-3 py-2 text-sm font-sans flex justify-center items-center gap-2 shadow bg-gray-300 cursor-pointer active:scale-110">
                    <LuLayoutDashboard size={20} /> Proejtos UI/UX
                </a>
            </nav>
        </div>
    )
}