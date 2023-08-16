import { NavLink, Link } from 'react-router-dom';

import styled from '@emotion/styled';

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 72px;

  position: sticky;
  top: 0;
  z-index: 1;

  background: #101010;
  opacity: 0.9;
  backdrop-filter: blur(34px);
`;

export const NavBarIcon = styled.button``;

export const LogoWrap = styled.ul``;

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

export const Navigation = styled.ul`
  display: none;
  color: white;
  align-items: center;
  height: 100%;

  margin-left: 90px;
  gap: 40px;

  & li {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (min-width: 1024px) {
    margin-left: 220px;
  }
  @media screen and (min-width: 1200px) {
    margin-left: 330px;
  }
`;

export const Search = styled(NavLink)`
  display: none;

  margin-left: auto;

  svg {
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const BurgerMenu = styled.button`
  margin-left: auto;

  svg {
    width: 32px;
    height: 32px;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
