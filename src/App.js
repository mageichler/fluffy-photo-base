//import styled from 'styled-components';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Category from './Components/Category';
import About from './Components/About';
import Main from './Components/Main';


function App() {
  return (
    <div id="app">
      <Router>
        <Nav />
        <main>
            <Switch>
              <Route path="/category">
                <Category />
              </Route>
              <Route path="/random">
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <Main />
              </Route>
            </Switch>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
