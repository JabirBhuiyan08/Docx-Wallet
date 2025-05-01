import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ScrollToTop from "../Components/ScrollToTop";
import useAuth from "../hooks/useAuth";
import Loading from "../hooks/Loading";


const Main = () => {
  const { loading } = useAuth(); 

  return (
    <div>
      <ScrollToTop />
      <div className="">
        <Navbar /> 
      </div>
      
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="max-w-screen-xl mx-auto px-4 py-6 mt-32">
            <Outlet />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Main;