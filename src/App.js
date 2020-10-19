import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import About from "./components/pages/About";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./components/Contact";


function App() {
  return (
    <>
        <Router>
            <ScrollToTop />
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="#projects" component={Projects} />
                <Route path="/about" component={About} />
                <Route path="/project_pages/:name/:id" component={Projects} />
                <Route path="/contact" exact component={Contact} />
            </Switch>
            <Footer />
        </Router>
    </>
  );
}

export default App;
