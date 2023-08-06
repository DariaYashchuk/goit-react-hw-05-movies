import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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

export const FilmImage = styled.img`
  width: 267px;

  margin-top: 10px;
`;

export const FilmSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FilmInfoSection = styled.div``;

export const FilmTitle = styled.h1`
  font-family: Righteous;
  font-size: 25px;
  line-height: 1.24;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;

  margin-top: 10px;
`;

export const Title = styled.h2`
  font-family: Righteous;
  font-size: 24px;
  line-height: 1.24;
  letter-spacing: 2px;
  text-align: center;

  margin-top: 10px;
`;

export const Details = styled.p`
  line-height: 1.24;
  text-align: justify;
  display: inline-block;
  padding: 8px;
  border-radius: 6px;

  margin-top: 5px;

  background-color: #242424;
`;
