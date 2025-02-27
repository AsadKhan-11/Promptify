import React from "react";
import "./layout.css";

import Nav from "../components/Nav";

export const metadata = {
  title: "Promptify",
  description: "Discover and share Ai prompts",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main-container">
          <main className="main">
            <Nav />

            {children}
          </main>
        </div>
      </body>
    </html>
  );
};

export default Layout;
