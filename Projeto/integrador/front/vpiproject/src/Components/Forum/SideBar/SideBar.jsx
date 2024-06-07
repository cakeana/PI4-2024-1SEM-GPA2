import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="SideBar flex flex-col items-center py-5 bg-white">
      <Link to="/" className="flex items-center">
        <h1 className="text-xl font-semibold ">Forum</h1>
      </Link>
    </div>
  );
}

export default SideBar;
