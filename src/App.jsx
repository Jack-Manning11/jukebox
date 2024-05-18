import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './Landing';
import About from './About';
import Dashboard from './Dashboard';
import Login from './Login';
import { Container } from './styles/App.styles';

const App = () => {
    const code = new URLSearchParams(window.location.search).get('code');

    return (
        <Container>
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/about" component={About} />
                <Route path="/jukebox">
                    {code ? <Dashboard code={code} /> : <Login />}
                </Route>
            </Switch>
        </Container>
    );
};

export default App;
