import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Error from './components/Error/Error';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>

          {/* home route */}
          <Route exact path="/">
            <Home />
          </Route>

          {/* home route */}
          <Route exact path="/home">
            <Home />
          </Route>

          {/* courses route */}
          <Route exact path="/courses">
            <Courses />
          </Route>

          {/* services route */}
          <Route exact path="/services">
            <Services></Services>
          </Route>

          {/* about route */}
          <Route exact path="/about">
            <About />
          </Route>

          {/* contact route */}
          <Route exact path="/contact">
            <Contact />
          </Route>

          {/* 404 error route */}
          <Route exact path="*">
            <Error />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
