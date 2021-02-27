import React from 'react';
import {Switch, Route} from 'react-router-dom'; 

import Explanations from '../app/Explanations';
import Explorer from '../app/Explorer';
import Viewer from '../app/Viewer';
import Editor from '../app/Editor';
import Flashcards from '../app/Flashcards';

const AppRoutes: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" name="explanations" component={Explanations}/>
            <Route path="/explorer" name="explorer" component={Explorer}/>
            <Route path="/flashcards" name="flashcards" component={Flashcards}/>
            <Route path="viewer" name="viewer" component={Viewer}/>
            <Route path="/editor" name="editor" component={Editor} />
        </Switch>

    )
}

export default AppRoutes; 