import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  NavBar,
  StyledNavLink,
  Container,
  Header,
  Logo,
  LogoNameLink,
  LogoWrap,
  Search,
} from './Layout.styled';

const Layout = () => {
  return (
    <Container>
      <Header>
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
        <NavBar>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>

          <li>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </li>

          {/* <li>
            <StyledNavLink to="/movies">Selected</StyledNavLink>
          </li> */}
        </NavBar>
        <Search></Search>
      </Header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </Container>
  );
};

export default Layout;
