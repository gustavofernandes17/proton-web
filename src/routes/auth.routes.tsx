import React from 'react'; 
import { Route, Switch } from 'react-router-dom';
import Login from '../auth/Login';


const AuthRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" name="login" component={Login}/>
        </Switch>
    )
}

export default AuthRoutes;