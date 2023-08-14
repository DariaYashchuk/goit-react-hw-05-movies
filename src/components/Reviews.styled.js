import styled from '@emotion/styled';

export const NoReviews = styled.li`
  text-align: center;
  svg {
    width: 50px;
    height: 50px;
  }

  p {
    margin-top: 10px;
    font-size: 20px;
  }
`;

export const Reviews = styled.ul`
  margin-top: 20px;
`;

export const OneReview = styled.li`
  margin-bottom: 10px;
`;

export const Author = styled.h3`
  display: inline-block;
  padding: 5px 24px;
  border-radius: 5px;
  background-color: #242424;

  margin-bottom: 10px;
  svg {
    margin-right: 10px;
  }
`;

export const Content = styled.p`
  text-align: justify;
  color: #e2e2e2;
  color: #c6c6c6;

  padding: 10px;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
`;
