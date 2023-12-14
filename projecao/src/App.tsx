import { useState } from "react";

import "swiper/css";

import "./App.css";

import Logo from "./assets/logo-proj.png";
import Back from "./assets/predio1.jpg";

function App() {
  const [isMobileMenuOpenned, setIsMobileMenuOpenned] =
    useState<boolean>(false);

  return (
    <>
      <header>
        <nav>
          <a className="logo">
            <img src={Logo} alt="Logo da empresa" title="Logo da empresa"></img>
          </a>
          <div
            className={`mobile-menu ${isMobileMenuOpenned ? "active" : ""}`}
            onClick={() => setIsMobileMenuOpenned(!isMobileMenuOpenned)}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
          <ul className={`nav-list ${isMobileMenuOpenned ? "active" : ""}`}>
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="/">Quem somos</a>
            </li>
            <li>
              <a href="/">Empreendimentos</a>
            </li>
            <li>
              <a href="/">Contato</a>
            </li>
            <li>
              <a href="/">Localização</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
      <img className="mainImg" src={Back} alt="Imagem background" title="Imagem background"></img>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
