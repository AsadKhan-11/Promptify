import React from "react";
import "./layout.css";
import Provider from "../components/Provider";
import Nav from "../components/Nav";

export const metadata = {
  title: "Promptify",
  description: "Discover and share Ai prompts",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main-container">
            <main className="main">
              <Nav />

              {children}
            </main>
          </div>
        </Provider>
      </body>
    </html>
  );
};

export default Layout;
