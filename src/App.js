import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Services from './components/Courses/Courses';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Error from './components/Error/Error';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

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

          {/* service route */}
          <Route exact path="/courses">
            <Services />
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
