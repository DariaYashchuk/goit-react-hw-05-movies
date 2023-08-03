import { NavLink, Link } from 'react-router-dom';

import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0 74px;
`;

export const Search = styled(Link)`
  width: 20px;
  height: 20px;
  background-color: #fff;

  margin-left: auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 72px;
`;

export const LogoWrap = styled.ul`
  /* display: flex;
  align-items: center; */
`;

export const Logo = styled(Link)`
  svg {
    display: block;
    width: 54px;
    height: 41px;
    fill: #053ba3;

    position: absolute;
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  color: #fff;
  font-family: 'Open Sans', sans-serif;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.35;
  padding: 5px 25px;
  border-radius: 20px;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    background-color: #053ba3;
  }

  &:hover {
    background-color: #053ba3;
  }
`;

export const LogoNameLink = styled(Link)`
  color: #fff;
  font-family: Righteous;
  line-height: 1.23;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;

  margin-left: 38px;
`;

export const NavBar = styled.ul`
  display: flex;
  color: white;
  align-items: center;
  height: 100%;

  margin-left: 330px;
  gap: 40px;

  & li {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
  }
  /* & li:hover:after {
    opacity: 1;
  }
  & li:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: #053ba3;
    opacity: 0;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  } */
`;
