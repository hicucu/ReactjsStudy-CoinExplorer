import React from "react";
import styled from "styled-components";
import Loader from "Components/Loader";
import PropTypes from "prop-types";

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 30vw);
  grid-gap: 25px;
`;

const Exchage = styled.section`
  margin: 10px;
  margin-bottom: 30px;
  display: block;
`;

const Name = styled.span`
  margin-bottom: 15px;
  display: block;
  font-weight: 600;
`;

const Desc = styled.p`
  margin-bottom: 15px;
  display: block;
`;

const Link = styled.a`
  margin-bottom: 15px;
  text-decoration: underline;
`;

const compare = (a, b) => {
  return a > b ? 1 : a < b ? -1 : 0;
};

const ExchangesPresenter = ({ exchanges, error, isLoading }) =>
  isLoading ? (
    <Loader />
  ) : (
    <Container>
      {exchanges
        .filter(
          exchange => exchange.reported_rank !== null && exchange.description
        )
        .sort((coinA, coinB) =>
          compare(coinA.reported_rank, coinB.reported_rank)
        )
        .map(exchange => (
          <Exchage key={exchange.id}>
            <Name>{exchange.name}</Name>
            <Desc>
              {exchange.description.length > 100
                ? //coin.description.length > 100
                  `${exchange.description.substring(0, 100)}...`
                : exchange.description}
            </Desc>
            <Link href={exchange.links.website}>{exchange.links.website}</Link>
          </Exchage>
        ))}
    </Container>
  );

ExchangesPresenter.prototype = {
  exchanges: PropTypes.array,
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired
};

export default ExchangesPresenter;
