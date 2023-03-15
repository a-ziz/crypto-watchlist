import React from "react";
import CryptoSearch from "../components/CryptoSearch";
import Trending from "../components/Trending";
import Hero from "../components/Hero";
import About from "../components/About";

const Home = ({ coins }) => {
  return (
    <div>
      <Hero />
      <CryptoSearch coins={coins} />
      <Trending />
      <About />
    </div>
  );
};

export default Home;
