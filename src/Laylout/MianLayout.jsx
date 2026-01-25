import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const MianLayout = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
        <Navbar />
        <main className="pt-20">
          <Outlet />
        </main>
        <Footer></Footer>
      </div>
    </>
  );
};

export default MianLayout;
