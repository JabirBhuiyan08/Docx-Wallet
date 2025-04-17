import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div>
      <div className="">

      <Navbar></Navbar>
      </div>
      <div className="max-w-screen-xl mx-auto px-4 py-6 mt-32">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
