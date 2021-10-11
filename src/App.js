
import './App.css';
import Navigation from './components/Navbar/Navigation';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';




function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>

        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/courses">
            <Courses></Courses>
          </Route>
          <Route exact path="/services">
            <Services></Services>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>

          <Route exact path="*">
            <Error></Error>
          </Route>

        </Switch>

        <Footer></Footer>

      </Router>

    </div>
  );
}

export default App;
