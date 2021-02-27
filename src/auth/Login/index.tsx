import React, { useContext } from 'react';

import { useGoogleLogin, GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

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

import { useAuthContext, authContext } from '../../contexts/auth.context';

const Login: React.FC = () => {
    const clientId = '758889454514-vk0q314l5i152j0vfke1pii872qt9dde.apps.googleusercontent.com'

    const { login } = useContext(authContext);
   
    function onFailure(res: any) {
        console.log(res); 
    }

    async function onSuccess(res: any) {
     
    }

    const {signIn} = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId: clientId,
        isSignedIn: true,
        accessType: 'offline',
     })
 
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
            <ButtonPrimary onClick={signIn}>
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