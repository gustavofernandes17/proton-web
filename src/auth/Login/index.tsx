import React, { useContext } from "react";

import {
  Container,
  Title,
  ButtonPrimary,
  Form,
  Caption,
  Subtitle,
  Wrapper,
  Header,
} from "./styles";

import Logo from "../../static/logo.svg";

import { useAuth } from "../../contexts/auth.context";
import { useGoogleLogin } from "react-google-login";

const Login: React.FC = () => {
  const { handleLogin } = useAuth();

  const { signIn } = useGoogleLogin({
    clientId:
      "758889454514-b0t9tq2mp36rm73lbq4kmcold96hnkde.apps.googleusercontent.com",
    onSuccess,
    onFailure,
  });

  async function onSuccess(res: any) {
    await handleLogin(res);
  }

  function onFailure(res: any) {
    console.log(res);
  }

  return (
    <>
      <Header>
        <img src={Logo} alt="logo" height={40} width={40} />
      </Header>
      <Container>
        <Form>
          <Wrapper>
            <Title>Proton</Title>
            <Subtitle>
              Remember that this isn't the stable version yet. proton is still
              under test phases.
            </Subtitle>
          </Wrapper>
          <Wrapper>
            <ButtonPrimary onClick={signIn}>Login with Google</ButtonPrimary>
            <Caption>
              In making login you agree in participating of the beta program
            </Caption>
          </Wrapper>
        </Form>
      </Container>
    </>
  );
};

export default Login;
