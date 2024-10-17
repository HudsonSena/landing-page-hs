import { FaCode, FaGithub, FaLinkedin } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";

export function Introduction() {
  return (
    <div className="flex flex-col p-5 text-gray-900 antialiased">
      <div className="flex flex-col justify-between items-center">
        <img
          className="w-[240px] h-[240px] object-contain rounded-[50%] shadow-lg"
          src="https://avatars.githubusercontent.com/u/107481318?v=4"
          alt="Imagem Diego"
        />

        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-7xl w-[510px]">
            Desenvolvedor Front End & UX/UI Designer
          </h1>
          <p>Localizado no Rio Grande do Norte</p>
        </div>
        <svg
          width="135"
          height="139"
          viewBox="0 0 135 139"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="md:hidden lg:visible"
        >
          <rect
            x="110.613"
            y="0.257751"
            width="30"
            height="150"
            transform="rotate(36.6125 110.613 0.257751)"
            fill="url(#paint0_linear_1_2)"
          />
          <rect
            x="89.4601"
            width="30"
            height="150"
            transform="rotate(36.6125 89.4601 0)"
            fill="#EBA556"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1_2"
              x1="125.613"
              y1="0.257751"
              x2="125.613"
              y2="150.258"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E17E0D" />
              <stop offset="1" stop-color="#E39439" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <nav className="flex flex-row items-center justify-around w-full">
        <a
          href="https://github.com/HudsonSena"
          target="_blank"
          className="text-xl font-sans flex justify-center items-center gap-2 text-gray-950 cursor-pointer active:scale-110"
        >
          <FaGithub size={20} />
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/hudson-sena-890a72173/"
          target="_blank"
          className="text-xl font-sans flex justify-center items-center gap-2 text-gray-950 cursor-pointer active:scale-110"
        >
          <FaLinkedin size={20} /> LinkedIn
        </a>
        <a
          href="https://jasper-creator-6b9.notion.site/b8fe19a7e4f94754ab9b109fc5089882?v=f0b15c8ca74f4fc49c235d8377e358f1&pvs=4"
          target="_blank"
          className="text-xl font-sans flex justify-center items-center gap-2 text-gray-950 cursor-pointer active:scale-110"
        >
          <FaCode size={20} />
          Projetos Dev
        </a>
        <a
          href="https://jasper-creator-6b9.notion.site/b8fe19a7e4f94754ab9b109fc5089882?v=f0b15c8ca74f4fc49c235d8377e358f1&pvs=4"
          target="_blank"
          className="text-xl font-sans flex justify-center items-center gap-2 text-gray-950 cursor-pointer active:scale-110"
        >
          <LuLayoutDashboard size={20} /> Projetos UI/UX
        </a>
      </nav>
    </div>
  );
}
