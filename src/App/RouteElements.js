import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from '../Components/Nav';
import Category from '../Pages/Category';
import About from '../Pages/About';
import Main from '../Pages/Main';
import Photo from '../Pages/Photo';
import Endless from '../Pages/Endless';
import Results from '../Pages/Results';

function RouteElements() {
    return (
        <Router>
            <Nav />
            <main>
                <Switch>
                    <Route path="/category/:name&:query">
                        <Category />
                    </Route>
                    <Route path="/results/:userQuery">
                        <Results />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/endless-fluffiness">
                        <Endless />
                    </Route>
                    <Route path="/photo/:id">
                        <Photo />
                    </Route>
                    <Route path="/">
                        <Main />
                    </Route>
                </Switch>
                </main>
      </Router>
    );
}

export default RouteElements;
