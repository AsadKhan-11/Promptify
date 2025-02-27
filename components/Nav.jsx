"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/Nav.css";
import { useState } from "react";

const Nav = () => {
  return (
    <div className="navbar">
      <Image
        src="/images/logo.svg"
        className="nav-img"
        height={30}
        width={30}
        alt="Logo"
      />
    </div>
  );
};

export default Nav;
