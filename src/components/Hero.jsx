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

  const scrollToTrending = () => {
    scroller.scrollTo("trending", {
      duration: 1000,
      delay: 100,
      smooth: true,
      offset: -10,
    });
  };

  return (
    <div className="rounded-div">
      <div className="grid h-screen px-4 md:px-8 mb-6">
        <div className="mx-auto">
          <h1 className="mt-3 lg:mt-6 mb-2 text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#00ffff] via-[#009eff] to-[#003dff]">
            find your perfect <br /> cryptocurrencies
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="md:my-6">
              <p className="font-thin text-xl sm:text-2xl mb-6 md:mt-8 sm:mb-8 font-sans leading-7 sm:leading-[38px]">
                We aim to provide you with the latest currency stats,
                information, and insights into the world of cryptocurrencies.
              </p>
            </div>
            <div className="row-span-2 mx-auto">
              <img
                src={heroImage}
                alt="hero section"
                className="max-w-[400px] lg:max-w-[600px] object-contain overflow-hidden"
              />
            </div>
          </div>

          <div className="flex justify-around max-w-[500px] my-8 lg:my-2">
            <Link
              class="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group"
              onClick={scrollToTrending}
            >
              <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-buttonSecondary opacity-[3%]"></span>
              <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-buttonSecondary opacity-100 group-hover:-translate-x-8"></span>
              <span class="relative w-full text-left text-primary transition-colors duration-200 ease-in-out group-hover:text-btn">
                Trending Coins
              </span>
              <span class="absolute inset-0 border-2 border-primary rounded-full"></span>
            </Link>
            <Link
              class="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group"
              onClick={scrollToAbout}
            >
              <span class="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-buttonSecondary opacity-[3%]"></span>
              <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-buttonSecondary opacity-100 group-hover:-translate-x-8"></span>
              <span class="relative w-full text-left text-primary transition-colors duration-200 ease-in-out group-hover:text-btn">
                Learn More
              </span>
              <span class="absolute inset-0 border-2 border-primary rounded-full"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
