import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Head = styled.h1`
  font-size: 32px;
  margin: 10px;
`;

const Nav = styled.nav``;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  margin: 10px;
`;

const ItemLink = styled(Link)``;

function Header() {
  return (
    <>
      <Head>Coin Explorer</Head>
      <Nav>
        <List>
          <Item>
            <ItemLink to="/">Coins</ItemLink>
          </Item>
          <Item>
            <ItemLink to="prices">Prices</ItemLink>
          </Item>
          <Item>
            <ItemLink to="exchanges">Exchanges</ItemLink>
          </Item>
        </List>
      </Nav>
    </>
  );
}

export default Header;
