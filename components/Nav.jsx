"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/Nav.css";
import { useState } from "react";
import {
  signUp,
  signIn,
  getProviders,
  signOut,
  useSession,
} from "next-auth/react";

const Nav = () => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const settingProviders = async () => {
      const response = await getProviders();

      setProviders(response);
    };
    settingProviders();
  }, []);
  const { data: session } = useSession();

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
        <div className="desktop-container">
          {session?.user ? (
            <div className="nav-btns">
              <button className="nav-btn nav-btn1">
                <Link href="/create-post">Create Post</Link>
              </button>
              <button className="nav-btn nav-btn2">Signout</button>
              <Link href="/my-profile">
                <Image
                  src={session.user.image}
                  className="profile-img"
                  height={37}
                  width={37}
                  alt="Logo"
                />
              </Link>
            </div>
          ) : (
            <div>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    className="nav-btn nav-btn1"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                  >
                    Sign in
                  </button>
                ))}
            </div>
          )}
        </div>

        <div className="dropdown">
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            ☰
          </button>

          {/* Mobile Dropdown Menu */}
          {session?.user ? (
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
                className="nav-btn nav-btn1"
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
            <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    className="nav-btn1 nav-btn"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                  >
                    Sign in
                  </button>
                ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
