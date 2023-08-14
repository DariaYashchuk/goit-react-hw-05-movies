import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const Section = styled.section`
  margin-top: 30px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
`;

export const GoBackButton = styled(Link)`
  display: inline-block;
  padding: 5px 24px;
  border-radius: 20px;
  background-color: #053ba3;
`;

export const Button = styled(NavLink)`
  display: inline-block;
  padding: 5px 24px;
  border-radius: 5px;
  background-color: #242424;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: #053ba3;
  }
  &.active {
    background-color: #053ba3;
  }
`;

export const InfoButtons = styled.ul`
  display: flex;
  gap: 15px;
  justify-content: center;

  margin-top: 20px;
  
`;

export const FilmImage = styled.img`
  width: 267px;

  margin-top: 20px;
`;

export const FilmSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FilmInfoSection = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 30px;
  }
`;

export const FilmTitle = styled.h1`
  font-family: Righteous;
  font-size: 25px;
  line-height: 1.24;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;

  margin-top: 10px;
  @media screen and (min-width: 768px) {
    margin-top: 0px;
  }
`;

export const Title = styled.h2`
  font-family: Righteous;
  font-size: 24px;
  line-height: 1.24;
  letter-spacing: 2px;
  text-align: center;

  @media screen and (min-width: 1024px) {
  }
`;

export const Details = styled.div`
  line-height: 1.24;
  text-align: justify;
  display: inline-block;
  padding: 8px;
  border-radius: 6px;

  background-color: #242424;
`;

export const Genres = styled.ul`
  display: flex;
  gap: 10px;
`;

export const ForFlex = styled.div`
  margin-top: 20px;
  @media screen and (min-width: 1024px) {
    display: flex;
    div {
      width: 450px;
    }
    h2 {
      width: 200px;
      text-align: start;
    }
  }
`;
