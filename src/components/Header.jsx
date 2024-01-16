import React, { useState } from "react";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  // Function to open menu
  const openMenu = () => {
    setMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  // Function to close menu
  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "visible";
  };

  return (
    <>
      <header className="main-header">
        <nav className="main-header__navbar">
          <ul className="main-header__navbar--items">
            <li className="main-header__navbar--item">
              <a href="#" className="hamburger-menu" onClick={openMenu}>
                <span className="hamburger-menu-bar"></span>
                <span className="hamburger-menu-bar"></span>
                <span className="hamburger-menu-bar"></span>
              </a>
            </li>
            <li className="main-header__navbar--item">
              <h1 className="main-header__logo">
                <a href="/">humil.</a>
              </h1>
            </li>
            <li className="main-header__navbar--item">
              <img
                className="shopping-bag"
                src="../assets/icons/blk/shopping-bag.png"
                alt="shopping bag"
              />
            </li>
          </ul>
        </nav>
      </header>
      <section class={`hamburger-nav ${isMenuOpen ? "open" : ""}`}>
        <div class="hamburger-nav__bar">
          <img
            src="../assets/icons/wht/close-menu-wht.png"
            alt="close menu"
            class="close-menu"
            onClick={closeMenu}
          />
        </div>
        <nav class="hamburger-nav__menu">
          <ul class="hamburger-nav__items">
            <li class="hamburger-nav__item">
              <a href="/" onClick={closeMenu}>
                Home
              </a>
            </li>
            <li class="hamburger-nav__item">
              <a href="/shop" onClick={closeMenu}>
                Shop
              </a>
            </li>
            <li class="hamburger-nav__item">
              <a href="/contact" onClick={closeMenu}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
}
