import React from 'react';

import {
  Container,
  Title,
  ButtonPrimary,
  Form,
  Caption,
  Subtitle,
  Wrapper,
  Header
} from './styles';

import Logo from '../../static/logo.svg';

const Login: React.FC = () => {
  return (
      <>
      <Header>
        <img src={Logo} alt="logo" height={40} width={40}/>
      </Header>
      <Container>
        <Form>
          <Wrapper>
            <Title>
              Welcome
            </Title>
            <Subtitle>
              Remember that this isn't the stable version yet. proton is still 
              under test phases.
            </Subtitle>
          </Wrapper>
          <Wrapper>
            <ButtonPrimary>
              Login with Google
            </ButtonPrimary>
            <Caption>In making login you agree in participating of the beta program</Caption>
          </Wrapper>
        </Form>
      </Container>
      </>
      )
}

export default Login;