import React from "react";
import { Link } from "react-router-dom";
import * as Scroll from "react-scroll";
import heroImage from "../assets/hero_image.png";

const Hero = () => {
  const scroller = Scroll.scroller;

  const scrollToAbout = () => {
    scroller.scrollTo("about", {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -10,
    });
  };

  const scrollToSearch = () => {
    scroller.scrollTo("searchCoin", {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -10,
    });
  };

  return (
    <div className="rounded-div mb-24">
      <div className="grid h-screen px-1 md:px-2 mb-6">
        <div className="mx-auto">
          <h1 className="mt-8 lg:mt-6 mb-2 text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] via-[#009eff] to-[#003dff]">
            find your perfect <br /> cryptocurrencies
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="md:my-6">
              <p className="font-thin text-md sm:text-xl md:text-2xl mb-6 md:mt-4 sm:mb-8 font-sans leading-7 md:leading-[38px] sm:leading-[34px] sm:pt-4">
                We aim to provide you with the latest currency stats,
                information, and insights into the world of cryptocurrencies.
              </p>
            </div>
            <div className="col-span-2">
              <img
                src={heroImage}
                alt="hero section"
                className="w-full h-full overflow-hidden max-w-[540px] max-h-[312px]"
              />
            </div>
          </div>

          <div className="flex justify-around max-w-[500px] py-8 lg:py-2">
            <Link
              className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group"
              onClick={scrollToSearch}
            >
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-buttonSecondary opacity-[3%]"></span>
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-buttonSecondary opacity-100 group-hover:-translate-x-8"></span>
              <span className="relative w-full text-left text-primary transition-colors duration-200 ease-in-out group-hover:text-btn">
                Search Coins
              </span>
              <span className="absolute inset-0 border-2 border-primary rounded-full"></span>
            </Link>
            <Link
              className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group"
              onClick={scrollToAbout}
            >
              <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-buttonSecondary opacity-[3%]"></span>
              <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-buttonSecondary opacity-100 group-hover:-translate-x-8"></span>
              <span className="relative w-full text-left text-primary transition-colors duration-200 ease-in-out group-hover:text-btn">
                Learn More
              </span>
              <span className="absolute inset-0 border-2 border-primary rounded-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
