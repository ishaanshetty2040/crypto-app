import React, { useState, useEffect } from "react";
import {makeStyles} from '@material-ui/core/styles';
import axios from "axios";
import "./App.css";
import Coin from "./Coin";
import Header from './Header.js'


function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "white",
      minHeight: "100vh"
    }
  }));
  const classes= useStyles();
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        /* concept of promises used here */
        setCoins(res.data);
      })
      .catch((error) => alert("yoo error"));
  }, []); /* we put in an empy array so that we render it only once */

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  ); /* This is basically used to get the coin we search for */

  return (
    <div className={classes.App}>
    <Header />
    
    <div className="coin-app">
      {" "}
      {/* creating our JSX */}
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <form>
          <input
            type="text"
            placeholder="Search"
            className="coin-input"
            onChange={handleChange}
          />
        </form>
      </div>
      {filteredCoins.map((coin) => {
        return (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            volume={coin.total_volume}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            marketcap={coin.market_cap}
          />
        );
      })}
    </div>
    </div>
  );
}

export default App;
