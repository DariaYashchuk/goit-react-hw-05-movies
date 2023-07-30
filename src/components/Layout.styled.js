import { NavLink, Link } from 'react-router-dom';

import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0 24px;
`;

export const NavBar = styled.ul`
  display: flex;
  color: white;
  align-items: center;
  height: 100%;

  margin-left: auto;

  & li:last-child {
    margin-left: 20px;
  }
  & li {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
  }
  & li:hover:after {
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
    background-color: white;
    opacity: 0;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  color: #faffff;
  font-size: 24px;
  font-weight: normal;
  line-height: 1.125;
  text-transform: uppercase;
  &.active {
    color: rgb(122, 220, 180);
  }
`;

export const LogoWrap = styled.ul`
  display: flex;
  align-items: center;
`;

export const Logo = styled(Link)`
  display: flex;

  svg {
    display: block;
    width: 32px;
    height: 32px;
    fill: #ddffff;
  }
`;

export const LogoNameLink = styled(Link)`
  color: #c1f1ff;
  font-family: 'Tektur';
  font-size: 24px;
  font-weight: 700;
  line-height: 1.125;
  letter-spacing: 1px;
  text-transform: uppercase;

  margin-left: 10px;
`;

export const Header = styled.header`
  div {
    display: flex;
    align-items: center;
    height: 72px;
  }
`;
