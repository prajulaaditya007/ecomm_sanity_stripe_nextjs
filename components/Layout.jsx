import React from "react";
import Head from "next/head";
import { Footer, Navbar } from "./index";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="layout">
        <Head>
          <title>BroCode Store</title>
        </Head>
        <header>
          <Navbar />
        </header>
        <main className="main-container">{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </React.Fragment>
  );
};

export default Layout;
