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
      <h1 className="font-bold text-xl text-gray-900">Hudson Sena</h1>
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
            <div className="flex flex-col justify-between text-xl text-gray-950">
              <a href="#formation">Formação</a>
              <a href="#experience">Experiência</a>
              <a href="#contact">Contato</a>
            </div>
          </div>
        </section>
        <div className="DESKTOP-MENU hidden space-x-8 sm:flex text-gray-950">
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
