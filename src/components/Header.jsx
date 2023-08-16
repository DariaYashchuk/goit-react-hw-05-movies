import {
  Navigation,
  StyledNavLink,
  Logo,
  LogoNameLink,
  LogoWrap,
  Search,
  BurgerMenu,
  NavBar,
  NavigationBurger,
} from './Header.styled';

import { BiMenu, BiX } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';

export const Header = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const updateMenu = () => {
    setIsMenuClicked(!isMenuClicked);
    console.log(isMenuClicked);
  };
  return (
    <NavBar>
      <LogoWrap>
        <li>
          <Logo to="/">
            <svg
              width="54"
              height="41"
              viewBox="0 0 54 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0H26.4255L54 41L0 31.4333V0Z" />
            </svg>
            {/* <svg>
                  <use href="./images/headers.svg"></use>
                </svg> */}
          </Logo>
        </li>
        <li>
          <LogoNameLink to="/">FilmsLand</LogoNameLink>
        </li>
      </LogoWrap>

      <Navigation>
        <li>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </li>
      </Navigation>

      <BurgerMenu onClick={updateMenu}>
        {isMenuClicked ? <BiX /> : <BiMenu />}
      </BurgerMenu>

      {isMenuClicked && (
        <NavigationBurger>
          <li>
            <StyledNavLink to="/" onClick={isMenuClicked}>
              Home
            </StyledNavLink>
          </li>

          <li>
            <StyledNavLink to="/movies" onClick={isMenuClicked}>
              Movies
            </StyledNavLink>
          </li>
        </NavigationBurger>
      )}
      <Search to="/movies">
        <AiOutlineSearch />
      </Search>
    </NavBar>
  );
};
