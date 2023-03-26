import React, { useState } from "react";
import CoinList from "./CoinList";

const CryptoSearch = ({ coins }) => {
  const [searchCrypto, setsearchCrypto] = useState("");

  return (
    <div className="rounded-div my-4" id="searchCoin">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <h1 className="text-2xl font-bold my-2">Search Crypto Coin</h1>
        <form>
          <input
            className="w-full text-primary bg-primary border border-input px-4 py-2 rounded-xl shadow-xl"
            onChange={(e) => setsearchCrypto(e.target.value)}
            type="text"
            placeholder="Search a coin..."
          />
        </form>
      </div>

      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="border-b">
            <th></th>
            <th className="px-4">#</th>
            <th className="text-left">Coin</th>
            <th></th>
            <th>Price</th>
            <th>24h</th>
            <th className="hidden md:table-cell" key={coins.id}>
              24h Volume
            </th>
            <th className="hidden sm:table-cell">Mkt</th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {coins
            .filter((value) => {
              if (searchCrypto === "") {
                return value;
              } else if (
                value.name
                  .toLowerCase()
                  .includes(searchCrypto.toLocaleLowerCase())
              ) {
                return value;
              }
              return null;
            })
            .map((coin) => {
              return <CoinList key={coin.id} coin={coin} />;
            })}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoSearch;
