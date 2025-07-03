import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const mainLayout = () => {
  return (
    <div className="container mx-auto flex">
      <div className="hidden lg:block">
        <Sidebar />
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default mainLayout;
