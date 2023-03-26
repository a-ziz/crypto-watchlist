import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="rounded-div flex items-center justify-between h-20">
      <Link to="/">
        <h1 className="text-xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#7e87cc] via-[#27a6fb] to-[#5a77d8]">
          Legecoin
        </h1>
      </Link>
      <div className="hidden md:block">
        <ThemeToggle />
      </div>
      {user?.email ? (
        <div>
          <Link to="/account" className="p-4">
            Account
          </Link>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div className="hidden md:block text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] via-[#009eff] to-[#003dff]">
          <Link to="/signin" className="p-4 hover:text-accent">
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-button text-black px-5 py-2 ml-2 rounded-2xl bg-gradient-to-r from-[#00ffff] via-[#009eff] to-[#4666cf] hover:from-[#199aea] hover:via-[#74a1dd] hover:to-[#a5c0ed]"
          >
            Sign Up
          </Link>
        </div>
      )}

      {/* {menu icon} */}
      <div onClick={handleMenu} className="block md:hidden cursor-pointer z-10">
        {menu ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>
      {/* mobile menu */}
      <div
        className={
          menu
            ? "md:hidden fixed left-0 top-20 flex flex-col items-center justify-between w-full h-[90%] bg-primary ease-in duration-500 z-10"
            : "fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in duration-300"
        }
      >
        <ul className="w-full p-4">
          <li onClick={handleMenu} className="border-b py-6 hover:text-accent">
            <Link to="/">Home</Link>
          </li>
          <li onClick={handleMenu} className="border-b py-6  hover:text-accent">
            <Link to="/account">Account</Link>
          </li>
          <li className="py-6  hover:text-accent">
            <ThemeToggle />
          </li>
        </ul>
        <div className="flex flex-col w-full p-4">
          <Link to="/signin">
            <button
              onClick={handleMenu}
              className="w-full my-2 p-3 bg-primary text-primary border-secondary rounded-2xl shadow-xl"
            >
              Sign In
            </button>
          </Link>
          <Link onClick={handleMenu} to="/signup">
            <button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
