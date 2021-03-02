import React from "react";

import Header from "../../components/Header";

import {
  Container,
  InformationContainer,
  Title,
  Subtitle,
  CardContainer,
} from "./styles";

import Card from "../../components/Card";

const Explorer: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <InformationContainer>
          <Title>Explore</Title>
          <Subtitle>
            comment on others explanations and learn by teaching
          </Subtitle>
        </InformationContainer>
        <CardContainer>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </CardContainer>
      </Container>
    </>
  );
};

export default Explorer;
