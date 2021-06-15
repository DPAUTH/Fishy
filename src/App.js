import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Home from './components/pages/Home';
import Causes from './components/pages/Causes';
import Effects from './components/pages/Effects';
import Solutions from './components/pages/Solutions';
import FishIndexSlider from './components/pages/FishIndexSlider';
import ContactForm from "./components/pages/ContactForm";
import Feed from "./components/pages/Feed";
import Login from './components/pages/Login';
import Register from './components/pages/Register';




function App() {
  return (
    <div className="App">
      <>

        <Router>
          <ScrollToTop>
          <Navbar />
          <Switch>
            <Route path="/" exact component= {Home} />
            <Route path="/causes" exact component= {Causes} />
            <Route path="/effects" exact component= {Effects} />
            <Route path="/solutions" exact component= {Solutions} />
            <Route path="/fish-index" exact component= {FishIndexSlider} />
            <Route path="/contact-form" exact component= {ContactForm} />
            <Route path="/feed" exact component= {Feed} />
            <Route path="/login" exact component= {Login} />
            <Route path="/register" exact component= {Register} />
          </Switch>
          </ScrollToTop>
        </Router>
      
      </>
    </div>
  );
}

export default App;
