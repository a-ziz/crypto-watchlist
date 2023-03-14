import React from "react";
import CryptoSearch from "../components/CryptoSearch";
import Trending from "../components/Trending";

const Home = ({ coins }) => {
  return (
    <div>
      <CryptoSearch coins={coins} />
      <Trending />
    </div>
  );
};

export default Home;
