// import Home from "../../Pages/Home/home";
import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/footer";
import "./layout.css";

function Layout ({children}) {
  return (
    <div className="layout-container">
      <Header />
      <div className="layout-content">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
