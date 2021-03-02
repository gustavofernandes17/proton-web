import React from "react";

import {
  Card as CardP,
  NameTitle,
  NameWrapper,
  Caption,
  CardHeader,
  InfoContainer,
  InfoTitle,
  Paragraph,
} from "./styles";

import Avatar from "../Avatar";

const Card: React.FC = () => {
  return (
    <CardP>
      <CardHeader>
        <Avatar />
        <NameWrapper>
          <NameTitle>User Full name</NameTitle>
          <Caption>username@email.com</Caption>
        </NameWrapper>
      </CardHeader>
      <InfoContainer>
        <InfoTitle>Title</InfoTitle>
        <Caption>Topic</Caption>
      </InfoContainer>
      <Paragraph>
        Conjunto é o agrupamento de elementos que partilham de mesmas
        características. Quando esses elementos são números. Conjunto é o
        agrupamento de elementos que partilham de mesmas características. Quando
        esses elementos são números. Conjunto é o agrupamento de elementos que
        partilham de mesmas características. Quando esses elementos são números.
        Conjunto é o agrupamento de elementos que partilham de mesmas
        características. Quando esses elementos são números. Conjunto é o
        agrupamento de elementos que partilham de mesmas características. Quando
        esses elementos são números. Conjunto é o agrupamento de elementos que
        partilham de mesmas características. Quando esses elementos são números.
      </Paragraph>
    </CardP>
  );
};

export default Card;
