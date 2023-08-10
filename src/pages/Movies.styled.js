import styled from '@emotion/styled';

export const Section = styled.section`
  margin-top: 30px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Films = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;

  margin-top: 20px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
`;

export const FilmCard = styled.li`
  display: block;
  width: 200px;

  height: 283px;

  border-radius: 8px;
  /* overflow: hidden; */
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    scale: 1.1;
  }
`;

export const FilmDescWrap = styled.section`
  padding: 5px;

  background: rgba(16, 16, 16, 0.29);
  backdrop-filter: blur(2px);

  transform: translateY(-100%);
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

export const FilmTitle = styled.h2`
  font-family: Righteous;
  font-size: 25px;
  line-height: 1.24;
  font-weight: 400;
  text-transform: uppercase;
`;
