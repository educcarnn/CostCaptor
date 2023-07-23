import React, { useState } from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri";
import "./style.css";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="menu">
      <div className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <RiCloseLine /> : <RiMenuLine />}
      </div>
    </nav>
  );
}
