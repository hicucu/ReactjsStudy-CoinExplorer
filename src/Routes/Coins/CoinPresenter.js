import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";

const Container = styled.section`
  margin: 10px;
`;

const Coin = styled.div`
  margin: 10px;
`;

const Rank = styled.h1`
  display: inline-block;
  font-weight: 600;
  margin-right: 10px;
`;

const Name = styled.span``;

const Symb = styled.span``;

const compare = (a, b) => {
  return a > b ? 1 : a < b ? -1 : 0;
};

const CoinPresenter = ({ coins, error, isLoading }) =>
  isLoading ? (
    <Loader />
  ) : (
    <Container>
      {coins
        .filter(coin => coin.rank < 1001 && coin.rank > 0)
        .sort((coinA, coinB) => compare(coinA.rank, coinB.rank))
        .map(coin => (
          <Coin key={coin.id}>
            <Rank>#{coin.rank} </Rank>
            <Symb>{coin.symbol}</Symb> / <Name>{coin.name}</Name>
          </Coin>
        ))}
    </Container>
  );

CoinPresenter.prototype = {
  coins: PropTypes.array,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired
};

export default CoinPresenter;
