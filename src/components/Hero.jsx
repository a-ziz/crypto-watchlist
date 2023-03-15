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
      <div className="grid h-screen px-4 md:px-8">
        <div className="mx-auto">
          <h1 className="my-8 lg:my-2 text-2xl sm:text-4xl font-bold uppercase">
            find your perfect <br /> cryptocurrencies
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3">
            <div className="md:my-8">
              <p className="font-thin text-xl sm:text-2xl mb-6 sm:mb-8 font-sans leading-7 sm:leading-[38px]">
                We aim to provide you with the latest currency stats,
                information, and insights into the world of cryptocurrencies.
              </p>
            </div>
            <div className="row-span-2 mx-auto">
              <img
                src={heroImage}
                alt="hero image"
                className="max-w-[400px] lg:max-w-[600px] object-contain"
              />
            </div>
          </div>
          <div className="flex justify-around max-w-[500px] my-8">
            <Link
              className="rounded-md py-1 px-3 text-xl sm:py-3 sm:px-6 font-semibold bg-gradient-to-tr border-2 border-primary hover:from-[#199aea] hover:via-[#c9d9ee] hover:to-[#a5c0ed] hover:text-black"
              onClick={scrollToTrending}
            >
              Trending Coins
            </Link>
            <Link
              className="rounded-md py-1 px-3 text-xl sm:py-3 sm:px-6 font-semibold bg-gradient-to-tr from-[#76c1f0] via-[#97bdf2] to-[#b7cdf4] text-[#2d2827] hover:from-[#199aea] hover:via-[#c9d9ee] hover:to-[#a5c0ed]"
              onClick={scrollToAbout}
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
