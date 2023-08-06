import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  margin-top: 30px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
`;

export const Films = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px 16px;

  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const FilmCard = styled.li`
  display: block;
  width: 267px;
  height: 379px;

  border-radius: 8px;
  overflow: hidden;

  position: relative;

  &:hover section {
    transform: translateY(-100%);
  }

  @media screen and (min-width: 1024px) and (max-width: 1199px) {
    width: 236px;
    height: 335px;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 5px 24px;
  border-radius: 20px;
  background-color: #053ba3;

  position: relative;
  left: 130px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const FilmDescWrap = styled.section`
  width: 100%;
  padding: 5px;

  background: rgba(16, 16, 16, 0.29);
  backdrop-filter: blur(2px);

  transform: translateY(-100%);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media screen and (min-width: 769px) {
    transform: translateY(0);
  }

  svg {
    position: absolute;
    left: 225px;
    display: block;
    width: 27px;
    height: 27px;
  }
`;

export const FilmTitle = styled.h2`
  font-family: Righteous;
  font-size: 25px;
  line-height: 1.24;
  font-weight: 400;
  text-transform: uppercase;

  width: 220px;
`;

export const Date = styled.p`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.389;
`;

export const Title = styled.h2`
  font-family: Nunito;
  font-size: 30px;
  font-weight: 500;

  svg {
    position: relative;
    top: -8px;
    left: -6px;

    display: none;

    @media screen and (min-width: 400px) {
      display: inline-block;
    }
  }
`;
