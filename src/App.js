// import logo from './logo.svg';
// import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import About from './pages/About';

import Footer from './Components/Footer';
import Header from './Components/Header';



function App() {
  return (
    <Router>
      <div>
        <Header />
          <div>
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/marketplace">
                <Marketplace />
              </Route>
            </Switch>
          </div>
        <Footer />
      </div>
    </Router>
  );
}

ReactDOM.render(App,document.getElementById("root"));

export default App;
