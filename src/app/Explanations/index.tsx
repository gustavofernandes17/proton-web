import { IconButton } from '@material-ui/core';
import React from 'react';
import Header from '../../components/Header';

import { Container, CardContainer, InformationContainer, Title, Subtitle} from './styles';
import {MdAdd, MdPoll} from 'react-icons/md'

import Card from '../../components/Card';

const Explanations: React.FC = () => {
  return (
      <Container>
          <Header>
              <IconButton>
                  <MdAdd />
              </IconButton>
              <IconButton>
                  <MdPoll />
              </IconButton>
          </Header>

          <InformationContainer>
              <Title>Explanations</Title>
              <Subtitle>your explanations</Subtitle>
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
  )
}

export default Explanations;