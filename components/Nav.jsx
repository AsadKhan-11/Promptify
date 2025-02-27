"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/Nav.css";
import { useState } from "react";

const Nav = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  return (
    <nav className="navbar">
      <Link href="/">
        <Image
          src="/images/logo.svg"
          className="nav-img"
          height={30}
          width={30}
          alt="Logo"
        />
      </Link>
      <div className="nav-sec">
        {loggedIn ? (
          <div className="nav-btns">
            <button className="nav-btn nav-btn1">Signup</button>
            <button className="nav-btn nav-btn2">Login</button>

            <button
              className="menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>

            {/* Mobile Dropdown Menu */}
            <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
              <li>
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" onClick={() => setMenuOpen(false)}>
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        ) : (
          <>{/* Mobile Menu Button */}</>
        )}
      </div>
    </nav>
  );
};

export default Nav;
