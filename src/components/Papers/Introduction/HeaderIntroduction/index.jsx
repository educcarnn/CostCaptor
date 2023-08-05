import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import "./style.css";

export default function HeaderIntroduction() {
  const isMobile = useMediaQuery({ maxWidth: 800 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="header">
      <h1 className="name">Cost Captor</h1>
    </header>
  );
}

{
  /*
  {isMobile ? (
        <>
          <div className="menu-toggle" onClick={toggleMenu}>
            <h2 className="name">Cost Captor</h2>
            {isMenuOpen ? <RiCloseLine /> : <RiMenuLine />}
          </div>
          {isMenuOpen && (
            <div className="menu-mobile">
              <h2 className="menu-item">Dicas</h2>
              <h2 className="menu-item">Perfil</h2>
              <h2 className="menu-item">Avaliações</h2>
            </div>
          )}
        </>
  */
}
