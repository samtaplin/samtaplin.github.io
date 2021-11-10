import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from "react-router-dom";
import './index.css';
import Home from "./home";
import Blog from "./blog";
import Projects from "./projects";
import Contact from "./contact";

ReactDOM.render(
  <HashRouter>
       <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </HashRouter>
  ,
  document.getElementById('root')
);
