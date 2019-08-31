import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Header = styled.header`
  position: fixed;
  top: 0;
`;
const Title = styled.h1`
  font-size: 32px;
  margin: 20px;
  display: inline-block;
  font-weight: 600;
`;

const Nav = styled.nav`
  display: inline-block;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  display: flex;
  justify-content: center;
  padding-bottom:10px
  width: 100px;
  border-bottom: 3px solid
    ${props => (props.current ? "#f71735" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
  color:${props => (props.current ? "inherit" : "#41ead4")};
  font-weight: 600;
`;

const ItemLink = styled(Link)``;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Title>Coin Explorer</Title>
    <Nav>
      <List>
        <Item current={pathname === "/"}>
          <ItemLink to="/">Coins</ItemLink>
        </Item>
        <Item current={pathname === "/prices"}>
          <ItemLink to="prices">Prices</ItemLink>
        </Item>
        <Item current={pathname === "/exchanges"}>
          <ItemLink to="exchanges">Exchanges</ItemLink>
        </Item>
      </List>
    </Nav>
  </Header>
));
