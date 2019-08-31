import axios from "axios";

const url = axios.create({
  baseURL: "https://api.coinpaprika.com/v1/"
});

export const apis = {
  coins: () => url.get("coins"),
  exchanges: () => url.get("exchanges"),
  tickers: () => url.get("tickers")
};
