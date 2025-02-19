import {
  FaMailBulk,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

export function Contact() {
  return (
    <div
      id="contact"
      className="p-5 flex flex-col gap-5 xl:flex-row lg:py-20 lg:px-36 bg-gray-900 text-gray-100 max-sm:text-sm"
    >
      <div className="lg:w-[65%] flex flex-col gap-2">
        <h1 className="text-4xl whitespace-break-spaces font-bold lg:hidden max-sm:text-xl">
          CONTATO
        </h1>
        <h1 className="hidden lg:block text-9xl whitespace-break-spaces font-bold">
          <span className="text-primary">C</span>ONTATO
        </h1>
        <p className="xl:w-[620px] max-sm:font-light">
          Estou disponível para projetos freelancer e propostas de emprego para
          dev junior, para desenvolvimento de projetos FullStack em React e
          Node, e UX/UI Design.
        </p>
      </div>
      <div className="xl:w-[35%]">
        <ul className="flex flex-col sm:flex-row xl:flex-col gap-3">
          <li className="flex gap-2">
            {" "}
            <FaMailBulk size={20} />
            <a>hudsonsena93@gmail.com</a>
          </li>
          <li className="flex gap-2">
            {" "}
            <FaLinkedin size={20} />
            <a
              href="https://www.linkedin.com/in/hudson-sena-890a72173/"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li className="flex gap-2">
            {" "}
            <FaGithub size={20} />
            <a href="https://github.com/HudsonSena" target="_blank">
              GitHub
            </a>
          </li>
          <li className="flex gap-2">
            {" "}
            <FaInstagram size={20} />
            <a
              href="https://www.instagram.com/hudsonsena/?locale=en"
              target="_blank"
            >
              Instagram
            </a>
          </li>
          <li className="flex gap-2">
            {" "}
            <FaWhatsapp size={20} />
            <a>+55 84 999083247</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
