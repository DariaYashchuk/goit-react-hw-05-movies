import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Section = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.section`
  max-width: 700px;
  background-color: #242424;
  padding: 20px;
  border-radius: 5px;
`;

export const Header = styled.h1`
  text-align: center;
`;

export const Text = styled.p`
  margin-top: 20px;
`;

export const Button = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 5px 24px;
  border-radius: 20px;
  background-color: #053ba3;
`;
