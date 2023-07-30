import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Films = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px 16px;
`;

export const FilmCard = styled.li`
  display: block;
  width: 180px;
  background-color: #3c6a7a;
  border-radius: 8px;
  overflow: hidden;
`;

export const StyledLink = styled(Link)`
  display: block;
`;

export const Image = styled.img`
  width: 180px;
  height: 256px;

  margin-bottom: 14px;
`;

export const FilmTitle = styled.h2`
  font-family: DM Sans;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.125;
  letter-spacing: -0.64px;
  text-transform: uppercase;
`;

export const Title = styled.h2`
  font-family: DM Sans;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.125;
  letter-spacing: -0.64px;
  text-transform: uppercase;

  margin-bottom: 24px;
`;
