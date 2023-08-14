import { Button, Section, Header, Text, Content } from './NotFound.styled';

const NotFound = () => {
  return (
    <Section>
      <Content>
        <Header>Oops! This page cannot be found.</Header>
        <Text>
          Unfortunately, this page is unavailable. But don't worry, we can get
          you right back on track!
        </Text>
        <Button to="/">Go To Home</Button>
      </Content>
    </Section>
  );
};

export default NotFound;
