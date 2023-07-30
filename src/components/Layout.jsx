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
} from './Layout.styled';
import { BsFilm } from 'react-icons/bs';

const Layout = () => {
  return (
    <div>
      <Header>
        <Container>
          <LogoWrap>
            <li>
              <Logo to="/">
                <BsFilm />
              </Logo>
            </li>
            <li>
              <LogoNameLink to="/">Filmoteka</LogoNameLink>
            </li>
          </LogoWrap>
          <NavBar>
            <li>
              <StyledNavLink to="/">Home</StyledNavLink>
            </li>

            <li>
              <StyledNavLink to="/movies">Movies</StyledNavLink>
            </li>
          </NavBar>
        </Container>
      </Header>
      <main>
        <Container>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </div>
  );
};

export default Layout;
