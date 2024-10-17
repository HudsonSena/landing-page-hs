"use client";
import { useState } from "react";

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div
      id="header"
      className="flex items-center justify-between p-5 border-b border-gray-400"
    >
      {" "}
      <h1 className="font-bold text-xl text-gray-900">Hudson Sena</h1>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div className="flex flex-col gap-2 justify-between lg:gap-6 text-2xl">
              <a href="#formation">Formação</a>
              <a href="#experience">Experiência</a>
              <a href="#contact">Contato</a>
            </div>
          </div>
        </section>
        <div className="DESKTOP-MENU hidden space-x-8 lg:flex">
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
