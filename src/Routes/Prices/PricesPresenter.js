import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";

const Container = styled.section`
  margin: 10px;
`;

const Price = styled.section`
  margin: 10px;
`;

const Name = styled.span`
  display: inline-block;
  font-weight: 600;
`;

const Symb = styled.span`
  display: inline-block;
  font-weight: 600;
  margin-right: 10px;
`;

const Dollar = styled.span`
  &::before {
    content: "$";
  }
`;

const compare = (a, b) => {
  return a > b ? 1 : a < b ? -1 : 0;
};

const PricePresenter = ({ prices, error, isLoading }) =>
  isLoading ? (
    <Loader />
  ) : (
    <Container>
      {prices.map(price => (
        <Price key={price.id}>
          <Name>{price.name}</Name> / <Symb>{price.symbol}</Symb>
          {" : "}
          <Dollar>{price.quotes.USD.price}</Dollar>
        </Price>
      ))}
    </Container>
  );

PricePresenter.prototype = {
  prices: PropTypes.array,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired
};

export default PricePresenter;
