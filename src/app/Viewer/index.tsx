import React from 'react';

import {
    Container,
    Cover,
    Content,
    Title,
    Topic,
    Information, 
    Comment,
    CommentHeader,
    CommentSection,
    NameWrapper,
    Caption,
    NameTitle,
    ButtonSecondary,
    CommentContent
} from './styles';

import Header from '../../components/Header';
import Avatar from '../../components/Avatar';

const Viewer: React.FC = () => {
  return (
      <Container>
          <Header></Header>
          <Cover
            src="https://images.unsplash.com/photo-1553470861-71372491e886?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
          />
        <Information>
            <Title>
                Hello World asd adsads 
            </Title>
            <Topic>
                Basics of programming asddasadsdas asdads
            </Topic>
        </Information>
        <Content>
            <p>
                Python is an interpreted, high-level and general-purpose 
                programming language. Python's design philosophy emphasizes 
                code readability with its notable use of significant indentation. 
                Its language constructs and object-oriented approach aim to help 
                programmers write clear, logical code for small and large-scale 
                projects.
              </p>
        </Content>
        <CommentSection>
            <ButtonSecondary> Comentar </ButtonSecondary>
            <Comment>
                <CommentHeader>
                    <Avatar />
                    <NameWrapper>
                        <NameTitle>User Full name</NameTitle>
                        <Caption>username@email.com</Caption>
                    </NameWrapper>
                </CommentHeader>
                <CommentContent>Muito bom mesmo</CommentContent>
            </Comment>
        </CommentSection>
      </Container>
  );
}

export default Viewer;