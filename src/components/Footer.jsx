import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook, FaGithub, FaTiktok, FaTwitter } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  return (
    <div className="rounded-div mt-8 pt-8 text-primary">
      <div className="grid md:grid-cols-2">
        <div className="flex justify-evenly w-full md:max-w-[300px] uppercase">
          <div>
            <h2 className="font-bold">Support</h2>
            <ul>
              <li className="text-sm py-2">
                <a href="/#">Help Center</a>
              </li>
              <li className="text-sm py-2">
                <a href="/#">Contact Us</a>
              </li>
              <li className="text-sm py-2">
                <a href="/#">API Status</a>
              </li>
              <li className="text-sm py-2">
                <a href="/#">Documentation</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Info</h2>
            <ul>
              <li className="text-sm py-2">
                <a href="/#">About Us</a>
              </li>
              <li className="text-sm py-2">
                <a href="/#">Careers</a>
              </li>
              <li className="text-sm py-2">
                <a href="/#">Invest</a>
              </li>
              <li className="text-sm py-2">
                <a href="/#">Legal</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-right mx-8">
          <div className="w-full flex justify-end">
            <div className="w-full md:w-[300px] py-4 relative">
              <div className="flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]">
                <ThemeToggle />
              </div>
              <p className="text-center md:text-right">
                Sign Up For Crypto News
              </p>
              <div className="py-4">
                <form>
                  <input
                    className="bg-primary border border-input p-2 mr-2 w-full shadow-lg rounded-2xl md:w-auto "
                    type="email"
                    placeholder="Enter your email"
                  />
                  <button className="bg-button text-btnText px-4 p-2 w-full rounded-2xl shadow-lg hover:shadow-xl md:w-auto my-2">
                    Sign Up
                  </button>
                </form>
              </div>
              <div className="flex py-4 justify-between text-accent">
                <a
                  href="https://www.instagram.com"
                  className="cursor-pointer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineInstagram />
                </a>

                <a
                  href="https://www.facebook.com"
                  className="cursor-pointer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://www.tiktok.com"
                  className="cursor-pointer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTiktok />
                </a>
                <a
                  href="https://www.github.com"
                  className="cursor-pointer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.twitter.com"
                  className="cursor-pointer"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center py-4">
        Learn before buying and lower your risks.
      </p>
    </div>
  );
};

export default Footer;
