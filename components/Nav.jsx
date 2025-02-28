"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/Nav.css";
import { useState } from "react";
import { signUp, signIn, getProviders, signOut } from "next-auth/react";

const Nav = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const settingProviders = async () => {
      const response = await getProviders();
      alert(response);
      setProviders(response);
    };
    settingProviders();
  }, []);

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
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button key={provider.name} onClick={() => signIn(provider.id)}>
                  Sign in with {provider.name}
                </button>
              ))}
          </>
        )}

        <div className="dropdown">
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            ☰
          </button>

          {/* Mobile Dropdown Menu */}
          {menuOpen ? (
            <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
              <li>
                <Link href="/profile" onClick={() => setMenuOpen(false)}>
                  My Profile{" "}
                </Link>
              </li>
              <li>
                <Link href="/create-post" onClick={() => setMenuOpen(false)}>
                  Create Post
                </Link>
              </li>

              <button
                className="signout"
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  signOut();
                }}
              >
                Signout
              </button>
            </ul>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                  >
                    Sign in with {provider.name}
                  </button>
                ))}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
