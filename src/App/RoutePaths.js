import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from '../Components/Nav';
import Category from '../Pages/Category';
import About from '../Pages/About';
import Main from '../Pages/Main';
import Photo from '../Pages/Photo';

function RoutePaths() {
    return (
        <Router>
            <Nav />
            <main>
                <Switch>
                    <Route exact path="/" component={ Main }/>
                    <Route path="/category" exact component={ Category }>
                    </Route>
                    <Route path="/random">
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/endless-fluffiness">
                    </Route>
                    <Route path="/photo/:id">
                        <Photo />
                    </Route>
                </Switch>
                </main>
      </Router>
      
    );
}

export default RoutePaths;
