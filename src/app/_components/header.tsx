"use client";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div
      id="header"
      className="flex flex-row items-center justify-between p-5 xl:px-36"
    >
      {" "}
      <h1 className="font-bold text-3xl text-gray-900">Hudson Sena</h1>
      <nav>
        <section className="MOBILE-MENU flex sm:hidden">
          <LuMenu
            onClick={() => setIsNavOpen((prev) => !prev)}
            size={32}
            className="text-gray-950"
          />

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              {" "}
              <LuX size={32} className="text-gray-950" />
            </div>
            <div className="absolute top-32 left-10 flex flex-col gap-5 text-gray-950 text-xl">
              <a href="#formation" className='border-b-2' onClick={() => setIsNavOpen(false)}>Formação</a>
              <a href="#experience" className='border-b-2' onClick={() => setIsNavOpen(false)}>Experiência</a>
              <a href="#contact" className='border-b-2' onClick={() => setIsNavOpen(false)}>Contato</a>
            </div>
          </div>
        </section>
        <div className="DESKTOP-MENU hidden space-x-8 sm:flex text-gray-950 text-xl">
          <a href="#formation">Formação</a>
          <a href="#experience">Experiência</a>
          <a href="#contact">Contato</a>
        </div>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
